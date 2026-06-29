// controllers/api.controller.js

// Lógica para la ruta GET
const getStatus = (req, res) => {
    res.status(200).json({
        estado: "éxito",
        mensaje: "El servidor backend está operativo.",
        codigo: 200
    });
};

// Lógica para la ruta POST
const postTicket = (req, res) => {
    const { asunto, descripcion } = req.body;

    // Validación simple (Manejo de error 400 - Bad Request)
    if (!asunto || !descripcion) {
        return res.status(400).json({
            estado: "error",
            mensaje: "Faltan datos obligatorios: 'asunto' y 'descripcion' son requeridos.",
            codigo: 400
        });
    }

    // Respuesta exitosa (201 - Created)
    res.status(201).json({
        estado: "éxito",
        mensaje: "Ticket creado correctamente.",
        datos: { asunto, descripcion },
        codigo: 201
    });
};

module.exports = { getStatus, postTicket };