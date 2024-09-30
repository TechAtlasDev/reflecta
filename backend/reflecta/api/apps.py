import os
import ee
import json
import base64
from django.apps import AppConfig

class ApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'api'

    def ready(self):
        # Inicializar Google Earth Engine (EE)
        try:
            # Cargar las variables de entorno
            service_account = os.environ.get('SERVICE_ACCOUNT')
            credentials_base64 = os.environ.get('GOOGLE_CREDENTIALS_JSON')

            if not service_account or not credentials_base64:
                raise ValueError("Se requiere la variable de entorno 'SERVICE_ACCOUNT' y 'GOOGLE_CREDENTIALS_JSON'")

            # Decodificar el JSON de las credenciales desde Base64
            credentials_json = base64.b64decode(credentials_base64).decode('utf-8')
            credentials_dict = json.loads(credentials_json)
            
            # Crear las credenciales de servicio
            credentials = ee.ServiceAccountCredentials(service_account, key_data=json.dumps(credentials_dict))

            # Inicializar Earth Engine
            ee.Initialize(credentials)

        except json.JSONDecodeError as e:
            print(f"Error al decodificar el JSON de las credenciales: {e}")
            raise
        except Exception as e:
            print(f"Error al inicializar Google Earth Engine: {e}")
            raise
