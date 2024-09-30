import os
import ee
import json
from django.apps import AppConfig

class ApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'api'

    def ready(self):
        # Inicializar Google Earth Engine (EE)
        try:
            service_account = os.environ.get('SERVICE_ACCOUNT')
            credentials_json = os.environ.get('GOOGLE_CREDENTIALS_JSON')

            if not service_account or not credentials_json:
                raise ValueError("Se requiere la variable de entorno 'service_account' y 'GOOGLE_CREDENTIALS_JSON'")

            # Cargar las credenciales del JSON
            credentials_dict =credentials_json
            credentials = ee.ServiceAccountCredentials(service_account, key_data=credentials_dict)

            # Inicializar Earth Engine
            ee.Initialize(credentials)

        except Exception as e:
            print(f"Error al inicializar Google Earth Engine: {e}")
            raise