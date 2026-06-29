// middlewares/logger.middleware.js
const logger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} a la ruta ${req.url}`);
    next(); // Pasa el control a la siguiente función
};

module.exports = { logger };