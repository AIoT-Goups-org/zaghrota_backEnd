import express from 'express';
import sanitize from 'express-mongo-sanitize';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import errorMiddleware from '../middleware/error.js';
import provinceRouter from '../router/province.js';
import cityRouter from '../router/city.js';
import hallRouter from '../router/hall.js';
import calendarRouter from '../router/calendar.js';
import bridegroomRouter from '../router/bridegroom.js';
import brideRouter from '../router/bride.js';
import DecorationRouter from '../router/decoration.js';
import CarDecorationRouter from '../router/cardecoration.js';


export default function (app) {


    const limiter = rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 1000,
        message: 'Too many requests from this IP, please try again later.'
    });

    app.use(limiter);

    app.use(helmet());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(sanitize());

    app.get('/', (req, res) => {
        res.send({
            appName: process.env.ZAGHROTA_APP_NAME,
        });
    });

    app.get("/error", (req, res) => {
        throw new Error("testing Error route")
    })

    app.use('/api/provinces', provinceRouter);
    app.use('/api/cities', cityRouter);
    app.use('/api/halls', hallRouter);
    app.use('/api/calendars', calendarRouter);
    app.use('/api/bridegrooms', bridegroomRouter);
    app.use('/api/brides', brideRouter);
    app.use('/api/decorations', DecorationRouter);
    app.use('/api/cardecorations', CarDecorationRouter);

    app.use(errorMiddleware)
}
