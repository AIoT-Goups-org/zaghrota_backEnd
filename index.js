import express from 'express';
import dotenv from 'dotenv';
import logging from './startup/logging.js';
import routes from './startup/routes.js';
import DB_start from './startup/db.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config();

const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.use('/wedding-halls', express.static(path.join(__dirname, './src/utils/Wedding halls')));
logging();
DB_start();
routes(app);


app.listen(process.env.ZAGHROTA_PORT, () => {
    console.log(`Server is running on port ${process.env.ZAGHROTA_PORT}`);
});