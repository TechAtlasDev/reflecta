# Backend de Reflecta - Django

---

## Modelos (Creados por DRF)

Modelos que se usarán:

## 1. Users

Va a representar en la base de datos a los usuarios que se registren en la página web.

### Atributos:
1. Username
2. Email
3. Nombres
4. Contraseña
5. Edad
6. Biografia

### Autenticación:
- Se usará JWT

---

# Vistas

Se crearán los siguientes endpoints:

- /api/users/login (No requerirá autenticación)
- /api/users/signup (No requerirá autenticación)
- /api/users/refresh (Si requerirá autenticación)

---

## Arquitectura de proceso de solicitudes de la API

Esta es una breve explicación de lo que hará la API cuando reciba una solicitud.

1. Recibirá una solicitud a partir del endpoint, este endpoint es nombrada en la API como "vista".
2. Dicha solicitud va a ser procesada dependiendo del método de solicitud del protocolo HTTP que se escoja, puede ser GET, POST, PUT, DELETE, UPDATE, etc.
3. Esta solicitud va a ser serializada usando el serializador de Django Rest Framework, 