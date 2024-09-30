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
            # Cargar las variables de entorno con valores por defecto
            service_account = os.environ.get('SERVICE_ACCOUNT', 'default_service_account')
            project_id = os.environ.get('PROJECT_ID', 'reflecta-techatlasdev')
            private_key_id = os.environ.get('PRIVATE_KEY_ID', 'default_private_key_id')
            private_key = os.environ.get('PRIVATE_KEY', '-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n')
            client_email = os.environ.get('CLIENT_EMAIL', 'default_client_email')
            client_id = os.environ.get('CLIENT_ID', 'default_client_id')
            auth_uri = os.environ.get('AUTH_URI', 'https://accounts.google.com/o/oauth2/auth')
            token_uri = os.environ.get('TOKEN_URI', 'https://oauth2.googleapis.com/token')
            auth_provider_cert_url = os.environ.get('AUTH_PROVIDER_CERT_URL', 'https://www.googleapis.com/oauth2/v1/certs')
            client_cert_url = os.environ.get('CLIENT_CERT_URL', 'https://www.googleapis.com/robot/v1/metadata/x509/default_client_email')

            DATAJSON = json.dumps({
                "type": "service_account",
                "project_id": project_id.encode(),
                "private_key_id": private_key_id.encode(),
                "private_key": private_key.encode(),
                "client_email": client_email.encode(),
                "client_id": client_id.encode(),
                "auth_uri": auth_uri.encode(),
                "token_uri": token_uri.encode(),
                "auth_provider_x509_cert_url": auth_provider_cert_url.encode(),
                "client_x509_cert_url": client_cert_url.encode(),
                "universe_domain": "googleapis.com"
            })

            # Crear las credenciales de servicio
            credentials = ee.ServiceAccountCredentials(service_account, key_data=DATAJSON)

            # Inicializar Earth Engine
            ee.Initialize(credentials)

        except json.JSONDecodeError as e:
            print(f"Error al decodificar el JSON de las credenciales: {e}")
            raise
        except Exception as e:
            print(f"Error al inicializar Google Earth Engine: {e}")
            raise
