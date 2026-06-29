# Integración Backend con Node.js y Express

Este es un backend mínimo que demuestra la creación de un servidor, enrutamiento, controladores y middlewares.

## Instrucciones de Ejecución

1. Clonar el repositorio.
2. Abrir la terminal en la carpeta del proyecto.
3. Ejecutar el comando `npm install` para instalar las dependencias (Express).
4. Ejecutar el comando `npm start` para levantar el servidor.
5. El servidor estará escuchando en `http://localhost:3000`.

## Endpoints Disponibles

- **GET `/api/status`**: Retorna el estado operativo del servidor (Status 200).
- **POST `/api/ticket`**: Crea un ticket. Requiere enviar un JSON con `asunto` y `descripcion` en el body (Status 201 o 400 si hay error).