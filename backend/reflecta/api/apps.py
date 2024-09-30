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
            # Cargar las variables de entorno
            service_account = os.environ.get('SERVICE_ACCOUNT')
            credentials_json = os.environ.get('GOOGLE_CREDENTIALS_JSON')

            if not service_account or not credentials_json:
                raise ValueError("Se requiere la variable de entorno 'SERVICE_ACCOUNT' y 'GOOGLE_CREDENTIALS_JSON'")

            # Imprimir parte del contenido de credentials_json para verificar
            print(f"Service Account: {service_account}")
            print(f"Credentials JSON (truncated): {credentials_json[:100]}...")

            # Cargar el JSON
            credentials_dict = json.loads(credentials_json)

            # Reemplazar las secuencias de escape \n por saltos de línea reales en la clave privada
            credentials_dict['private_key'] = credentials_dict['private_key'].replace('\\n', '\n')

            # Crear credenciales usando el diccionario actualizado
            credentials = ee.ServiceAccountCredentials(service_account, key_data=json.dumps(credentials_dict))

            # Inicializar Earth Engine
            ee.Initialize(credentials)

        except json.JSONDecodeError as e:
            print(f"Error al decodificar el JSON de las credenciales: {e}")
            raise
        except Exception as e:
            print(f"Error al inicializar Google Earth Engine: {e}")
            raise
