from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import LandsatImage
from .serializers import *
import ee
from rest_framework.pagination import PageNumberPagination
import ee
from django.http import JsonResponse
from django.views import View
import ee
from django.views import View

from .functions.coordenadas import *

class LandsatImagePagination(PageNumberPagination):
    page_size = 10  # Número de resultados por página
    page_size_query_param = 'page_size'
    max_page_size = 100  # Máximo de imágenes por página

class LandsatImageView(View):
    def get(self, request):
        # Obtener parámetros de la consulta
        start_date = request.GET.get('start_date')
        end_date = request.GET.get('end_date')
        bbox = request.GET.get('bbox')

        if not (start_date and end_date and bbox):
            return JsonResponse({'error': 'Faltan parámetros: start_date, end_date y bbox son necesarios.'}, status=400)

        # Procesar el bbox
        try:
            bbox = eval(bbox)  # Asegúrate de que el bbox es seguro usar eval()
            if len(bbox) != 4:
                raise ValueError("El bbox debe tener 4 valores.")
        except Exception as e:
            return JsonResponse({'error': f'Error procesando el bbox: {str(e)}'}, status=400)

        # Crear una colección de imágenes
        collection = ee.ImageCollection('LANDSAT/LC09/C02/T1')
        
        # Filtrar por fecha y bbox
        filtered_collection = collection.filterDate(start_date, end_date).filterBounds(ee.Geometry.Rectangle(bbox))

        # Imprimir el número de imágenes encontradas
        image_count = filtered_collection.size().getInfo()
        print(f'Número de imágenes encontradas: {image_count}')

        # Obtener la primera imagen de la colección
        image = filtered_collection.first()

        if image is None or image_count == 0:
            return JsonResponse({'error': 'No se encontraron imágenes para las fechas y el área especificadas.'}, status=404)

        # Generar una URL para la visualización de la imagen
        url = image.getThumbUrl({'min': 0, 'max': 3000, 'dimensions': 512})
        
        # Imprimir el URL de la imagen
        print(f'URL de la imagen: {url}')

        # Devuelve la URL en formato JSON
        return JsonResponse({'image_url': url})


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
    
# Obtener las coordenadas actuales del landsat
class LandsatCoordinatesView(APIView):
    def get(self, request):

        data = getCoordenadas()
        serializer = LandsatCoordinatesSerializer(data=data)

        if serializer.is_valid():
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    
# Obtener próximas "x" pasadas del landsat
class FutureLandsatCoordinatesView(APIView):
    def get(self, request):
        # Obtener los parámetros de la consulta
        steps = int(request.GET.get('steps', 10))  # número de pasos
        interval = int(request.GET.get('interval', 10))  # intervalo en minutos

        future_coordinates = futurasCoordenadas(steps, interval)

        # Serializar la respuesta
        serializer = FutureLandsatCoordinatesSerializer(data=future_coordinates, many=True)
        
        if serializer.is_valid():
            return Response(future_coordinates)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
# Definir cuándo el landsat pasará en ciertas coordenadas
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

        pass_times = pasaraEn(lat, lon)

        if pass_times:
            # Retornar el primer tiempo de paso
            serializer = LandsatPassTimeSerializer(data={"timestamp": pass_times[0]})
            if serializer.is_valid():
                return Response(serializer.data)
        else:
            return Response({"message": "El satélite no pasará sobre estas coordenadas en los próximos 16 días."}, status=status.HTTP_404_NOT_FOUND)

class LandsatNews(APIView):
    def get(self, request):
        news = [
            {
                "title": "Tracking Losses in the Amazon, Beyond the Rainforest",
                "Fecha": "September 23, 2024",
                "Extracto": "The Amazon is in trouble. Researchers found that, between 2000 and 2022, the Brazilian Amazon lost about 10% of its natural non-forest vegetation.",
                "URL": "https://landsat.gsfc.nasa.gov/article/tracking-losses-in-the-amazon-beyond-the-rainforest/",
            },
            {
                "title": "Tracking Losses in the Amazon, Beyond the Rainforest",
                "Fecha": "September 23, 2024",
                "Extracto": "The Amazon is in trouble. Researchers found that, between 2000 and 2022, the Brazilian Amazon lost about 10% of its natural non-forest vegetation.",
                "URL": "https://landsat.gsfc.nasa.gov/article/tracking-losses-in-the-amazon-beyond-the-rainforest/",
            },
            {
                "title": "Tracking Losses in the Amazon, Beyond the Rainforest",
                "Fecha": "September 23, 2024",
                "Extracto": "The Amazon is in trouble. Researchers found that, between 2000 and 2022, the Brazilian Amazon lost about 10% of its natural non-forest vegetation.",
                "URL": "https://landsat.gsfc.nasa.gov/article/tracking-losses-in-the-amazon-beyond-the-rainforest/",
            },
        ]
        return Response({"news": news}, status=status.HTTP_200_OK)