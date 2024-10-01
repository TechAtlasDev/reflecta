from django.db import models

# Create your models here.
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





from django.contrib.auth.models import UserManager, AbstractBaseUser
from django.utils.translation import gettext_lazy as _

class UserManager(UserManager):
    def create_user(self, email, username, nombres, password=None, **extra_fields):
        if not email:
            raise ValueError(_('El usuario debe tener un correo electrónico'))
        
        # Normalizar el correo electrónico
        email = self.normalize_email(email)
        
        # Crear el usuario
        user = self.model(email=email, username=username, nombres=nombres, **extra_fields)
        user.set_password(password)  # Establecer contraseña en formato hash
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, nombres, password=None, **extra_fields):
        # Establecer permisos adicionales
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError(_('Superuser debe tener is_staff=True.'))
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_('Superuser debe tener is_superuser=True.'))

        return self.create_user(email, username, nombres, password, **extra_fields)

from django.db import models

class User(AbstractBaseUser):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    nombres = models.CharField(max_length=255)
    edad = models.PositiveIntegerField(null=True, blank=True)
    biografia = models.TextField(null=True, blank=True)
    
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    # Conectar el manager personalizado
    objects = UserManager()

    def __str__(self):
        return self.username
