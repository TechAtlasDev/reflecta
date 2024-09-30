from django.db import models

class LandsatImage(models.Model):
    image_id = models.CharField(max_length=100, unique=True, help_text="ID de la imagen en Google Earth Engine")
    fecha_captura = models.DateField(help_text="Fecha de captura de la imagen")
    path = models.CharField(max_length=255, help_text="Ruta en Google Earth Engine")
    bbox = models.JSONField(help_text="Bounding box de la imagen, almacenado como coordenadas geográficas")
    bandas = models.JSONField(help_text="Bandas seleccionadas para el procesamiento")
    procesado = models.BooleanField(default=False, help_text="Indica si la imagen ha sido procesada")
    url_renderizada = models.URLField(blank=True, help_text="URL de la imagen renderizada")

    def __str__(self):
        return f"Landsat Image {self.image_id} - {self.fecha_captura}"


    class Meta:
        verbose_name = "Landsat Image"
        verbose_name_plural = "Landsat Images"
