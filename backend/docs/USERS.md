# Users API Documentation

Esta documentación describe la API relacionada con los usuarios. La API permite registrar usuarios, iniciar sesión y acceder a rutas protegidas mediante autenticación basada en tokens JWT.

## Dependencias
- rest_framework
- rest_framework_simplejwt

## Endpoints

1. Registro de usuario (Signup)

Este endpoint permite registrar nuevos usuarios en el sistema.

- URL: /users/signup/
- Método: POST
- Autenticación: No requerida
- Descripción: Crea un nuevo usuario con los datos proporcionados y retorna un token JWT para autenticación.
- Parámetros del cuerpo de la solicitud (JSON):

```json
{
  "username": "string",  // Nombre de usuario único
  "password": "string",  // Contraseña del usuario
  "nombres": "string",   // Nombres completos del usuario
  "email": "string"      // Correo electrónico del usuario
}
```

Respuesta exitosa (201 Created):

```json
{
  "refresh": "string",   // Token de refresco
  "access": "string",    // Token de acceso JWT
  "username": "string"   // Nombre de usuario registrado
}
```

Ejemplo:

```
POST /users/signup/
Content-Type: application/json

{
  "username": "johndoe",
  "password": "password123",
  "nombres": "John Doe",
  "email": "johndoe@example.com"
}
```

2. Inicio de sesión (Login)

Este endpoint permite a los usuarios autenticarse y obtener un token JWT para acceder a las rutas protegidas.

- URL: /users/login/
- Método: POST
- Autenticación: No requerida
- Descripción: Retorna tokens JWT de acceso y refresco al proporcionar credenciales válidas.
- Parámetros del cuerpo de la solicitud (JSON):

```json
{
  "username": "string",  // Nombre de usuario registrado
  "password": "string"   // Contraseña del usuario
}
```

Respuesta exitosa (200 OK):

```json
{
  "refresh": "string",   // Token de refresco
  "access": "string",    // Token de acceso JWT
  "username": "string"   // Nombre de usuario autenticado
}
```

Ejemplo:

```
POST /users/login/
Content-Type: application/json

{
  "username": "johndoe",
  "password": "password123"
}
```

3. Obtener un nuevo token de acceso (Token Refresh)

Este endpoint permite obtener un nuevo token de acceso JWT utilizando un token de refresco. Es útil cuando el token de acceso expira.

- URL: /users/token/refresh/
- Método: POST
- Autenticación: No requerida
- Descripción: Retorna un nuevo token de acceso basado en el token de refresco proporcionado.
- Parámetros del cuerpo de la solicitud (JSON):

```json
{
  "refresh": "string"   // Token de refresco válido
}
```

Respuesta exitosa (200 OK):

```json
{
  "access": "string"    // Nuevo token de acceso JWT
}
```

Ejemplo:

```
POST /users/token/refresh/
Content-Type: application/json

{
  "refresh": "your_refresh_token_here"
}
```

4. Ruta protegida de prueba
Este endpoint es un ejemplo de cómo acceder a una ruta que requiere autenticación mediante un token JWT.

- URL: /users/protected/
- Método: GET
- Autenticación: Requerida (JWT)
- Descripción: Accede a esta ruta únicamente si se proporciona un token JWT válido en la cabecera.
- Headers de la solicitud:

```http
Authorization: Bearer <token_de_acceso_JWT>
```

Respuesta exitosa (200 OK):

```json
{
  "message": "Acceso permitido, usuario autenticado"
}
```

Ejemplo:

```
GET /users/protected/
Authorization: Bearer your_access_token_here
```

## Respuestas de error comunes
- 400 Bad Request: Error en los datos proporcionados (por ejemplo, campos faltantes o valores inválidos).
- 401 Unauthorized: El usuario no está autenticado o el token JWT es inválido/expirado.
- 403 Forbidden: El usuario no tiene permisos para acceder al recurso solicitado.
- 404 Not Found: El recurso solicitado no existe.

## Ejemplos de uso con curl
Registro de usuario:

```bash
curl -X POST http://localhost:8000/users/signup/ \
  -H "Content-Type: application/json" \
  -d '{"username": "johndoe", "password": "password123", "nombres": "John Doe", "email": "johndoe@example.com"}'
```
Inicio de sesión:

```bash

curl -X POST http://localhost:8000/users/login/ \
  -H "Content-Type: application/json" \
  -d '{"username": "johndoe", "password": "password123"}'
```
Obtener un nuevo token de acceso:

```bash

curl -X POST http://localhost:8000/users/token/refresh/ \
  -H "Content-Type: application/json" \
  -d '{"refresh": "your_refresh_token_here"}'
```
Acceder a una ruta protegida:

```bash

curl -X GET http://localhost:8000/users/protected/ \
  -H "Authorization: Bearer your_access_token_here"
```

Notas adicionales

- Todos los endpoints que requieran autenticación deben enviar el token JWT en la cabecera Authorization con el formato Bearer <token>.
- El token de acceso tiene una duración limitada, mientras que el token de refresco puede ser utilizado para obtener un nuevo token de acceso sin necesidad de volver a iniciar sesión.