import winston from "winston";
const logger = winston.createLogger({
    level: 'error',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'logs/log' }), // Log to a file
        new winston.transports.Console(), // Also log to the console
    ],
});

export default (err, req, res, next) => {
    // Log the error
    logger.error(err.stack || err.message);

    // Send a 500 response to the client
    res.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
    });
}