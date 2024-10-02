from django.db import models

class LandsatImage(models.Model):
    # Campos básicos de la imagen
    date = models.DateField()  # Fecha de adquisición de la imagen
    cloud_coverage = models.FloatField()  # Cobertura de nubes en porcentaje
    sensor = models.CharField(max_length=50)  # Sensor que adquirió la imagen (p. ej., Landsat 8 OLI, Landsat 9)
    
    # Coordenadas de la imagen
    bbox = models.JSONField()  # Límite de coordenadas (bounding box) en formato JSON, p. ej., [min_longitude, min_latitude, max_longitude, max_latitude]
    
    # Campos para almacenar información adicional
    path = models.IntegerField()  # Ruta de la imagen
    row = models.IntegerField()  # Fila de la imagen
    url = models.URLField(max_length=200)  # URL de la imagen
    metadata_url = models.URLField(max_length=200)  # URL del metadato de la imagen
    created_at = models.DateTimeField(auto_now_add=True)  # Fecha de creación del registro
    updated_at = models.DateTimeField(auto_now=True)  # Fecha de la última actualización

    def __str__(self):
        return f"Landsat Image - Date: {self.date}, Sensor: {self.sensor}"

    class Meta:
        verbose_name = "Landsat Image"
        verbose_name_plural = "Landsat Images"
        ordering = ['date']  # Ordenar por fecha
