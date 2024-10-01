import ephem
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import LandsatImage
from .serializers import *
import ee
from rest_framework.pagination import PageNumberPagination
from datetime import datetime, timedelta

class LandsatImagePagination(PageNumberPagination):
    page_size = 10  # Número de resultados por página
    page_size_query_param = 'page_size'
    max_page_size = 100  # Máximo de imágenes por página

class LandsatImageListView(generics.ListAPIView):
    serializer_class = LandsatImageSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = LandsatImagePagination

    def get_queryset(self):
        # Obtener los parámetros de consulta
        start_date = self.request.query_params.get('start_date')
        end_date = self.request.query_params.get('end_date')
        bbox = self.request.query_params.get('bbox')  # Espera una cadena JSON

        # Verificar si los parámetros necesarios están presentes
        if not all([start_date, end_date, bbox]):
            return LandsatImage.objects.none()

        try:
            # Convertir la cadena bbox en un objeto Geometry
            bbox = ee.Geometry.BBox(*map(float, bbox.strip('[]').split(',')))
        except Exception:
            return LandsatImage.objects.none()

        # Filtrar la colección de imágenes Landsat con los parámetros proporcionados
        collection = ee.ImageCollection('LANDSAT/LC09/C02/T1') \
            .filterDate(start_date, end_date) \
            .filterBounds(bbox) \
            .filterMetadata('CLOUD_COVER', 'less_than', 15) \
            .sort('CLOUD_COVER')

        # Obtener el número de la página actual
        page = int(self.request.query_params.get('page', 1))
        page_size = self.pagination_class().get_page_size(self.request)

        # Limitar la colección a la página actual
        images = collection.toList(page * page_size).getInfo()  # Traer solo las imágenes de la página

        # Crear una lista para almacenar las imágenes que se van a procesar
        landsat_images = []

        # Procesar los datos de cada imagen
        for img in images[(page - 1) * page_size: page * page_size]:
            landsat_images.append({
                'image_id': img['id'],
                'fecha_captura': img['properties']['DATE_ACQUIRED'],
                'path': img['bands'][0]['id'],  # Ajusta según la estructura de tus datos
                'bbox': bbox.coordinates().getInfo(),
                'bandas': img['bands'],  # Ajusta según la estructura de las bandas
                'procesado': False,
                'url_renderizada': '',
            })

        # Guardar las imágenes en la base de datos si no existen
        for img_data in landsat_images:
            LandsatImage.objects.get_or_create(
                image_id=img_data['image_id'],
                defaults=img_data
            )

        # Retornar el queryset paginado
        queryset = LandsatImage.objects.all()
        return queryset

class LandsatImageFilterView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        data = request.data
        start_date = data.get('start_date')
        end_date = data.get('end_date')
        bbox = data.get('bbox')
        filters = data.get('filters', {})

        cloud_coverage = filters.get('cloud_coverage', '<10')
        bands = filters.get('bands', [])
        solar_elevation = filters.get('solar_elevation', None)
        satellite_view_angle = filters.get('satellite_view_angle', None)
        water_coverage = filters.get('water_coverage', None)

        # Validación de parámetros requeridos
        if not all([start_date, end_date, bbox]):
            return Response({"error": "Faltan parámetros requeridos."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            bbox_ee = ee.Geometry.BBox(*map(float, bbox))
        except Exception as e:
            return Response({"error": f"Bounding box inválido: {str(e)}"}, status=status.HTTP_400_BAD_REQUEST)

        # Obtener colección de imágenes
        collection = ee.ImageCollection('LANDSAT/LC09/C02/T1') \
            .filterDate(start_date, end_date) \
            .filterBounds(bbox_ee)

        # Aplicar filtro de cobertura de nubes
        try:
            if cloud_coverage.startswith('<'):
                max_cloud = float(cloud_coverage[1:])
                collection = collection.filter(ee.Filter.lt('CLOUD_COVER', max_cloud))
            elif cloud_coverage.startswith('>'):
                min_cloud = float(cloud_coverage[1:])
                collection = collection.filter(ee.Filter.gt('CLOUD_COVER', min_cloud))
            else:
                collection = collection.filter(ee.Filter.eq('CLOUD_COVER', float(cloud_coverage)))
        except ValueError:
            return Response({"error": "Formato de cobertura de nubes inválido."}, status=status.HTTP_400_BAD_REQUEST)

        # Filtrar por ángulo solar (Solar Elevation)
        if solar_elevation:
            try:
                min_solar_elevation, max_solar_elevation = map(float, solar_elevation.split('-'))
                collection = collection.filter(ee.Filter.rangeContains('SOLAR_ELEVATION', min_solar_elevation, max_solar_elevation))
            except ValueError:
                return Response({"error": "Formato de ángulo solar inválido. Usa min-max."}, status=status.HTTP_400_BAD_REQUEST)

        # Filtrar por ángulo de vista del satélite (Satellite View Angle)
        if satellite_view_angle:
            try:
                max_view_angle = float(satellite_view_angle)
                collection = collection.filter(ee.Filter.lt('SATELLITE_VIEW_ANGLE', max_view_angle))
            except ValueError:
                return Response({"error": "Formato de ángulo de vista del satélite inválido."}, status=status.HTTP_400_BAD_REQUEST)

        # Filtrar por cobertura de agua (si es necesario)
        if water_coverage:
            collection = collection.map(self.calculate_water_coverage)

        # Ordenar por cobertura de nubes
        collection = collection.sort('CLOUD_COVER')

        # Aplicar limitación de imágenes para no sobrecargar
        try:
            images = collection.limit(100).toList(100).getInfo()
        except Exception as e:
            return Response({"error": f"Error al obtener imágenes: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        # Filtrar por bandas específicas
        filtered_images = []

        for img in images:
            img_bands = [band['id'] for band in img['bands']]
            if not bands or all(band in img_bands for band in bands):
                filtered_images.append({
                    'image_id': img['id'],
                    'fecha_captura': img['properties']['DATE_ACQUIRED'],
                    'cloud_coverage': img['properties']['CLOUD_COVER'],
                    'solar_elevation': img['properties']['SOLAR_ELEVATION'],
                    'satellite_view_angle': img['properties']['SATELLITE_VIEW_ANGLE'],
                    'bandas': img_bands  # Devuelve las bandas disponibles en la imagen
                })

        return Response({"filtered_images": filtered_images}, status=status.HTTP_200_OK)

    def calculate_water_coverage(self, image):
        """ Calcula la cobertura de agua de una imagen usando el índice NDWI (Normalized Difference Water Index) """
        ndwi = image.normalizedDifference(['B3', 'B5'])  # NDWI usa las bandas verde e infrarroja
        water_mask = ndwi.gt(0.3)  # Umbral para definir áreas de agua
        water_percentage = water_mask.reduceRegion(ee.Reducer.mean(), geometry=image.geometry(), scale=30).get('ndwi')
        return image.set('WATER_COVERAGE', water_percentage)
    
class LandsatImageRenderView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        image_id = request.query_params.get('image_id')
        bands = request.query_params.get('bands')  # Espera una cadena separada por comas

        if not all([image_id, bands]):
            return Response({"error": "Faltan parámetros requeridos."}, status=status.HTTP_400_BAD_REQUEST)

        bands_list = bands.split(',')

        try:
            image = ee.Image(image_id)
            vis_params = {
                'bands': bands_list,
                'min': 0,
                'max': 3000,
                'gamma': 1.4
            }
            url = image.getThumbURL({
                'bands': bands_list,
                'min': 0,
                'max': 3000,
                'gamma': 1.4,
                'dimensions': 512,
                'format': 'png'
            })
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

        # Actualizar la URL renderizada en la base de datos
        try:
            landsat_image = LandsatImage.objects.get(image_id=image_id)
            landsat_image.url_renderizada = url
            landsat_image.procesado = True
            landsat_image.bandas = bands_list
            landsat_image.save()
        except LandsatImage.DoesNotExist:
            return Response({"error": "Imagen no encontrada."}, status=status.HTTP_404_NOT_FOUND)

        return Response({
            "render_url": url,
            "metadata": {
                "image_id": image_id,
                "bands": bands_list,
                "visualization_parameters": {
                    "min": 0,
                    "max": 3000,
                    "gamma": 1.4
                }
            }
        }, status=status.HTTP_200_OK)
    
class LandsatImageDownloadView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        image_id = request.query_params.get('image_id')
        bands = request.query_params.get('bands')  # Espera una cadena separada por comas

        if not all([image_id, bands]):
            return Response({"error": "Faltan parámetros requeridos."}, status=status.HTTP_400_BAD_REQUEST)

        bands_list = bands.split(',')

        try:
            image = ee.Image(image_id)
            task = ee.batch.Export.image.toDrive(
                image=image.select(bands_list),
                description=f'{image_id}_export',
                folder='LandsatExports',
                fileNamePrefix=image_id,
                scale=30,
                region=image.geometry().bounds().getInfo()['coordinates']
            )
            task.start()
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

        return Response({"message": "Exportación iniciada. Verifica tu Google Drive."}, status=status.HTTP_200_OK)
    

class LandsatCoordinatesView(APIView):
    def get(self, request):

        ephem.now()  # Actualizar la fecha y hora actual

        # Definir el satélite Landsat 9 con sus TLE actualizados
        landsat_9 = ephem.readtle(
            'Landsat 9',
            '1 49260U 21088A   24274.23553067  .00001568  00000-0  35814-3 0  9994',
            '2 49260  98.2225 342.5236 0001395  92.4131 267.7227 14.57097040159986',
        )

        # Establecer el tiempo actual
        landsat_9.compute()

        # Obtener las coordenadas
        lat = landsat_9.sublat  # Latitud
        lon = landsat_9.sublong  # Longitud

        # Convertir a grados decimales
        lat = lat * (180.0 / 3.141592653589793)
        lon = lon * (180.0 / 3.141592653589793)

        # Serializar la respuesta
        data = {
            'latitude': lat,
            'longitude': lon
        }
        serializer = LandsatCoordinatesSerializer(data=data)

        if serializer.is_valid():
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    
class FutureLandsatCoordinatesView(APIView):
    def get(self, request):
        # Obtener los parámetros de la consulta
        steps = int(request.GET.get('steps', 10))  # número de pasos
        interval = int(request.GET.get('interval', 10))  # intervalo en minutos

        # Definir el satélite Landsat 9 con sus TLE actualizados
        landsat_9 = ephem.readtle(
            'Landsat 9',
            '1 49260U 21088A   24273.75483892  .00001457  00000-0  33357-3 0  9995',
            '2 49260  98.2226 342.0491 0001388  92.6026 267.5331 14.57094968159926'
        )

        # Lista para almacenar las coordenadas futuras
        future_coordinates = []

        # Establecer el tiempo inicial (actual)
        current_time = datetime.utcnow()

        for i in range(steps):
            # Calcular la posición en el tiempo actual
            landsat_9.compute(current_time)

            # Obtener las coordenadas
            lat = landsat_9.sublat  # Latitud
            lon = landsat_9.sublong  # Longitud

            # Agregar a la lista
            future_coordinates.append({
                'timestamp': current_time.isoformat(),
                'latitude': lat,
                'longitude': lon
            })

            # Aumentar el tiempo
            current_time += timedelta(minutes=interval)

        # Serializar la respuesta
        serializer = FutureLandsatCoordinatesSerializer(data=future_coordinates, many=True)
        
        if serializer.is_valid():
            return Response(future_coordinates)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class LandsatPassTimeView(APIView):
    def get(self, request):
        # Obtener los parámetros de la consulta
        lat = request.GET.get('lat')
        lon = request.GET.get('lon')

        # Validar que las coordenadas se han proporcionado
        if lat is None or lon is None:
            return Response({"error": "Las coordenadas lat y lon son requeridas."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            lat = float(lat)
            lon = float(lon)
        except ValueError:
            return Response({"error": "Las coordenadas deben ser números."}, status=status.HTTP_400_BAD_REQUEST)

        # Definir el satélite Landsat 9 con sus TLE actualizados
        landsat_9 = ephem.readtle(
            'Landsat 9',
            '1 49260U 21088A   24273.75483892  .00001457  00000-0  33357-3 0  9995',
            '2 49260  98.2226 342.0491 0001388  92.6026 267.5331 14.57094968159926'
        )

        # Establecer el tiempo inicial (actual)
        current_time = datetime.utcnow()

        # Inicializar una lista para almacenar los tiempos de paso
        pass_times = []

        # Buscar los próximos pasos durante los próximos 16 días
        for _ in range(2304):  # 16 días * 144 (cada 10 minutos)
            landsat_9.compute(current_time)

            # Comprobar si el satélite está sobre las coordenadas proporcionadas
            if (landsat_9.sublat - lat) ** 2 + (landsat_9.sublong - lon) ** 2 < 0.01:  # ajuste el umbral según sea necesario
                pass_times.append(current_time.isoformat())

            # Aumentar el tiempo
            current_time += timedelta(minutes=10)  # comprobar cada 10 minutos

        if pass_times:
            # Retornar el primer tiempo de paso
            serializer = LandsatPassTimeSerializer(data={"timestamp": pass_times[0]})
            if serializer.is_valid():
                return Response(serializer.data)
        else:
            return Response({"message": "El satélite no pasará sobre estas coordenadas en los próximos 16 días."}, status=status.HTTP_404_NOT_FOUND)