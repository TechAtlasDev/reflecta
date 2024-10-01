from django.db import models

class LandsatImage(models.Model):
    image_id = models.CharField(max_length=100, unique=True)
    bands = models.CharField(max_length=200)
    cloud_coverage = models.FloatField()
    capture_date = models.DateField()

    def __str__(self):
        return f'Landsat Image {self.image_id}'
