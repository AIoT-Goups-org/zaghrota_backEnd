import mongoose from "mongoose";
import winston from "winston";

export default async function db() {
    let DB_URL = process.env.ZAGHROTA_DB_URL;
    if (!DB_URL) {
        console.error("DB_URL is not set in .env file");
        process.exit(1);
    }

    if (process.env.ZAGHROTA_NODE_ENV === 'development') {
        DB_URL = DB_URL + "_dev";
    }

    mongoose.connect(DB_URL)
        .then(() => {
            winston.info(`DB Connected to ${DB_URL}`);
            console.log(`DB Connected to ${DB_URL}`);
        });
}
