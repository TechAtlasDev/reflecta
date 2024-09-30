# Landsat Image API Documentation

Esta documentación describe la API para manejar imágenes del satélite Landsat 9. La API permite filtrar, renderizar, descargar y obtener las coordenadas del satélite.

## Dependencias

- `ephem`
- `rest_framework`
- `earthengine-api`

## Clases

### 1. `LandsatImagePagination`

Clase para la paginación de las imágenes de Landsat.

#### Atributos

- `page_size`: Número de resultados por página (default: 10).
- `page_size_query_param`: Parámetro de consulta para definir el tamaño de la página.
- `max_page_size`: Máximo número de imágenes por página (default: 100).

### 2. `LandsatImageListView`

Vista para listar imágenes de Landsat.

#### Métodos

- **`get_queryset(self)`**

  Obtiene un queryset de imágenes de Landsat basado en los parámetros de consulta.

  #### Parámetros de consulta

  - `start_date`: Fecha de inicio (requerido).
  - `end_date`: Fecha de finalización (requerido).
  - `bbox`: Coordenadas en formato JSON (requerido).

  #### Respuesta

  Retorna un queryset de imágenes de Landsat.

### 3. `LandsatImageFilterView`

Vista para filtrar imágenes de Landsat.

#### Métodos

- **`post(self, request)`**

  Filtra imágenes basadas en parámetros enviados en el cuerpo de la solicitud.

  #### Parámetros

  - `start_date`: Fecha de inicio (requerido).
  - `end_date`: Fecha de finalización (requerido).
  - `bbox`: Coordenadas (requerido).
  - `filters`: Diccionario con filtros adicionales.

  #### Filtros disponibles

  - `cloud_coverage`: Cobertura de nubes (ej. `<10`, `>20`).
  - `bands`: Lista de bandas a filtrar.
  - `solar_elevation`: Rango de ángulo solar (ej. `min-max`).
  - `satellite_view_angle`: Ángulo de vista del satélite.
  - `water_coverage`: Cobertura de agua (opcional).

  #### Respuesta

  Retorna las imágenes filtradas.

### 4. `LandsatImageRenderView`

Vista para renderizar imágenes de Landsat.

#### Métodos

- **`get(self, request)`**

  Renderiza una imagen de Landsat a partir de un `image_id` y una lista de `bands`.

  #### Parámetros de consulta

  - `image_id`: ID de la imagen (requerido).
  - `bands`: Bandas en formato de cadena separada por comas (requerido).

  #### Respuesta

  Retorna la URL de la imagen renderizada y metadatos.

### 5. `LandsatImageDownloadView`

Vista para descargar imágenes de Landsat.

#### Métodos

- **`get(self, request)`**

  Inicia la exportación de una imagen de Landsat a Google Drive.

  #### Parámetros de consulta

  - `image_id`: ID de la imagen (requerido).
  - `bands`: Bandas en formato de cadena separada por comas (requerido).

  #### Respuesta

  Mensaje de éxito si la exportación se inicia correctamente.

### 6. `LandsatCoordinatesView`

Vista para obtener las coordenadas actuales de Landsat 9.

#### Métodos

- **`get(self, request)`**

  Obtiene la latitud y longitud actuales del satélite.

  #### Respuesta

  Retorna las coordenadas en formato JSON.

### 7. `FutureLandsatCoordinatesView`

Vista para obtener coordenadas futuras de Landsat 9 (método aún no completo).

#### Métodos

- **`get(self, request)`**

  Obtiene coordenadas futuras basadas en el número de pasos.

  #### Parámetros de consulta

  - `steps`: Número de pasos (default: 10).

  #### Respuesta

  Pendiente de completar.

## Ejemplo de Uso

### Listar Imágenes

```http
GET /landsat/images?start_date=2023-01-01&end_date=2023-01-31&bbox=[-120.0,35.0,-119.0,36.0]
```

### Filtrar Imágenes

```http
POST /landsat/images/filter
Content-Type: application/json

{
    "start_date": "2023-01-01",
    "end_date": "2023-01-31",
    "bbox": [-120.0, 35.0, -119.0, 36.0],
    "filters": {
        "cloud_coverage": "<10",
        "bands": ["B4", "B5"]
    }
}
```

### Renderizar Imagen

```http
GET /landsat/render?image_id=LANDSAT_12345&bands=B4,B5
```

### Descargar Imagen

```http
GET /landsat/download?image_id=LANDSAT_12345&bands=B4,B5
```

### Obtener Coordenadas Actuales

```http
GET /landsat/coordinates
```