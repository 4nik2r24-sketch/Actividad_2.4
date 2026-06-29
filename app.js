// app.js
const express = require('express');
const app = express();
const apiRoutes = require('./routes/api.routes.js');
const { logger } = require('./middlewares/logger.middleware.js');

const PORT = 3000;

// 1. Middlewares globales
app.use(express.json()); // Permite recibir JSON en los POST
app.use(logger);         // Nuestro middleware personalizado

// 2. Rutas
app.use('/api', apiRoutes);

// 3. Manejo de error 404 (Ruta no encontrada)
app.use((req, res) => {
    res.status(404).json({
        estado: "error",
        mensaje: "Ruta no encontrada.",
        codigo: 404
    });
});

// 4. Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});