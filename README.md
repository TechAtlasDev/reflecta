# Reflecta

Para el desarrollo de este proyecto, es necesario comenzar con ciertos aspectos, uno de ellos es definir adecuadamente la ruta de desarrollo que vamos a seguir para poder tener un buen desempeño en el uso de las tecnologías y el desarrollo del proyecto.

## Descripción del Proyecto
Reflecta es una aplicación web progresiva (PWA) diseñada para permitir a los usuarios acceder y visualizar datos de reflectancia de imágenes satelitales. Utilizando la API de Google Earth Engine para usar el Landsat 9, la aplicación proporcionará herramientas para la visualización y análisis de datos geoespaciales, ayudando a los usuarios a obtener información sobre la cobertura terrestre y los cambios en el medio ambiente. La interfaz de usuario será moderna y receptiva, construida con React, Tailwind CSS y DaisyUI, y se desplegará en Vercel para un acceso rápido y eficiente.

## Objetivos Principales
- **Acceso a Datos Satelitales**: Permitir a los usuarios acceder a datos de reflectancia de imágenes de satélite.
- **Visualización Interactiva**: Proporcionar gráficos y visualizaciones interactivas de los datos para facilitar la comprensión.
- **Interfaz Amigable**: Crear una interfaz de usuario moderna y fácil de usar que sea accesible en dispositivos móviles y de escritorio.
- **Despliegue Eficiente**: Implementar la aplicación como una PWA y desplegarla en Vercel para optimizar el rendimiento y la disponibilidad.
- **Descarga de datos:** Habilitar la posibilidad de poder descargar los datos del Landsat 9 en formatos que se requiera como CSV.

## Ruta del proyecto

### Paso 1: Configuración del Proyecto [TERMINADO]
- **Objetivos**:
  - Establecer el entorno de desarrollo y las bases del proyecto.
- **Tareas**:
  1. Configurar DjanNavbargo y crear un nuevo proyecto.
  2. Inicializar un nuevo proyecto con Vite.
  3. Verificar la instalación de backend y frontend.

### Paso 2: Definición de Modelos y API
- **Objetivos**:
  - Crear el modelo de datos y configurar la API REST.
- **Tareas**:
  1. Definir los modelos en Django.
  2. Configurar serializers y vistas.
  3. Establecer las rutas para la API.

### Paso 3: Integración de Datos
- **Objetivos**:
  - Implementar la lógica para obtener datos de la API de Landsat.
- **Tareas**:
  1. Investigar la API de Landsat.
  2. Desarrollar la funcionalidad para obtener datos.
  3. Prueba de integración de datos.

### Paso 4: Configuración del Frontend [TERMINADO - PROTOTIPO]
- **Objetivos**:
  - Establecer la estructura y componentes básicos de la interfaz.
- **Tareas**:
  1. Crear la estructura de componentes.
  2. Implementar la navegación con React Router.
  3. Configurar estilos con Tailwind CSS y DaisyUI.

### Paso 5: Gráficos y Visualización de Datos
- **Objetivos**:
  - Implementar la lógica para visualizar los datos de reflectancia.
- **Tareas**:
  1. Seleccionar una biblioteca de gráficos.
  2. Crear el componente de gráfico.
  3. Estilizar el componente con Tailwind CSS.

### Paso 6: Conectar Frontend y Backend
- **Objetivos**:
  - Integrar la interfaz de usuario con la API del backend.
- **Tareas**:
  1. Hacer solicitudes a la API desde el frontend.
  2. Manejar el estado de los datos en React.
  3. Verificar el flujo de datos.

### Paso 7: Implementación de PWA 
- **Objetivos**:
  - Convertir tu aplicación en una Progressive Web App.
- **Tareas**:
  1. Configurar el manifest para la PWA.
  2. Implementar service workers.
  3. Probar la funcionalidad PWA en dispositivos móviles.

### Paso 8: Estilización y Mejoras UI
- **Objetivos**:
  - Mejorar la experiencia del usuario y los estilos de la aplicación.
- **Tareas**:
  1. Revisar y mejorar la UI.
  2. Implementar animaciones y transiciones.
  3. Verificar que la aplicación sea responsive.

### Paso 9: Pruebas y Depuración
- **Objetivos**:
  - Probar la aplicación y corregir errores.
- **Tareas**:
  1. Realizar pruebas funcionales.
  2. Depurar errores encontrados.
  3. Verificar la seguridad de la aplicación.

### Paso 10: Documentación y Preparación para la Entrega
- **Objetivos**:
  - Documentar el proyecto y prepararse para su presentación.
- **Tareas**:
  1. Crear documentación en `README.md`.
  2. Revisar el código y comentarlo.
  3. Preparar una presentación breve del proyecto.

## Datos adicionales

- Web desplegada: https://reflecta-nasa.vercel.app/