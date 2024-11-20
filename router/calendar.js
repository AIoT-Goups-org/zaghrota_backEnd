import express from "express";
import Calendar from "../models/calendar.js";


const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const calendars = await Calendar.find(req.body);
        res.send(calendars);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.post("/", async (req, res) => {
    try {
        const calendar = new Calendar({
            date: req.body.date,
            title: req.body.title,
            content: req.body.content,
            hash: req.body.hash,
            type: req.body.type
        });

        await calendar.save();
        res.status(201).send(calendar);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const calendar = await Calendar.findByIdAndDelete(req.params.id);

        if (!calendar) {
            res.status(404).send("Calendar not found");
            return;
        }
        
        res.send(calendar);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

export default router;