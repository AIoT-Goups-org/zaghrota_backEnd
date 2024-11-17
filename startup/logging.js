import winston from "winston";
import "express-async-errors";

export default function () {
    winston.exceptions.handle(
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.prettyPrint()
            )
        }),
        new winston.transports.File({ filename: "logs/logs.log" })
    );

    winston.add(new winston.transports.File({ filename: "logs/log.log" }));

    process.on("unhandledRejection", (ex) => {
        throw ex;
    });
}
