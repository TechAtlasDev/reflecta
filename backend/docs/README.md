## Variables de Entorno

Son variables que se tienen que configurar antes de ejecutar el sistema.

- **DEBUG (bool)**: Indica el modo DEBUG del framework -> Default: `False`
- **SERVICE_ACCOUNT (str)**: Establece la cuenta de servicio que se usará para Google Earth Engine. Este es el nombre de la cuenta que se utilizará para autenticarse.
- **GOOGLE_CREDENTIALS_JSON (str)**: Establece las credenciales de autenticación de la cuenta de servicio de Google Earth Engine. Especifica las credenciales en formato JSON codificado en Base64.
- **PROJECT_ID (str)**: Establece el ID del proyecto de Google Cloud que se utilizará -> Default: `reflecta-techatlasdev`
- **PRIVATE_KEY_ID (str)**: Establece el ID de la clave privada de la cuenta de servicio.
- **PRIVATE_KEY (str)**: Establece la clave privada de la cuenta de servicio -> Default: `-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n`
- **CLIENT_EMAIL (str)**: Establece el correo electrónico del cliente de la cuenta de servicio.
- **CLIENT_ID (str)**: Establece el ID del cliente de la cuenta de servicio.
- **AUTH_URI (str)**: Establece la URI de autenticación de Google -> Default: `https://accounts.google.com/o/oauth2/auth`
- **TOKEN_URI (str)**: Establece la URI del token de Google -> Default: `https://oauth2.googleapis.com/token`
- **AUTH_PROVIDER_CERT_URL (str)**: Establece la URL del certificado del proveedor de autenticación de Google -> Default: `https://www.googleapis.com/oauth2/v1/certs`
- **CLIENT_CERT_URL (str)**: Establece la URL del certificado del cliente de la cuenta de servicio -> Default: `https://www.googleapis.com/robot/v1/metadata/x509/default_client_email`
- **UNIVERSE_DOMAIN (str)**: Establece el dominio del universo de Google API -> Default: `googleapis.com`
- **NAME_DB (str)**: Establece el nombre de la base de datos que irá a producción -> Default: `postgres`
- **USER_DB (str)**: Establece el nombre de usuario de la base de datos.
- **PASSWORD_DB (str)**: Establece la contraseña del nombre de usuario de la base de datos.
- **HOST_DB (str)**: Establece la IP o URL del proyecto de la base de datos.
- **PORT_DB (str)**: Establece el puerto de la base de datos.

### Ejemplo de Configuración

A continuación, se muestra un ejemplo de cómo se pueden establecer estas variables en un archivo `.env`:

DEBUG=False
SERVICE_ACCOUNT=my_service_account
GOOGLE_CREDENTIALS_JSON=base64_encoded_credentials
PROJECT_ID=reflecta-techatlasdev
PRIVATE_KEY_ID=my_private_key_id
PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n
CLIENT_EMAIL=my_service_account_email
CLIENT_ID=my_client_id
AUTH_URI=https://accounts.google.com/o/oauth2/auth
TOKEN_URI=https://oauth2.googleapis.com/token
AUTH_PROVIDER_CERT_URL=https://www.googleapis.com/oauth2/v1/certs
CLIENT_CERT_URL=https://www.googleapis.com/robot/v1/metadata/x509/my_service_account_email
UNIVERSE_DOMAIN=googleapis.com
NAME_DB=postgres
USER_DB=my_db_user
PASSWORD_DB=my_db_password
HOST_DB=localhost
PORT_DB=5432
