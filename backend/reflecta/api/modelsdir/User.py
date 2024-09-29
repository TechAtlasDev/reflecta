from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models
from django.utils.translation import gettext_lazy as _

class UserManager(BaseUserManager):
    def create_user(self, email, username, nombres, password=None, **extra_fields):
        if not email:
            raise ValueError(_('El usuario debe tener un correo electrónico'))
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, nombres=nombres, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, nombres, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, username, nombres, password, **extra_fields)

class User(AbstractBaseUser):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    nombres = models.CharField(max_length=255)
    edad = models.PositiveIntegerField(null=True, blank=True)
    biografia = models.TextField(null=True, blank=True)
    
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'nombres']

    def __str__(self):
        return self.email
