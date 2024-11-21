import express from "express";
import Buffet from "../models/buffet.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const buffet = new Buffet(req.body);
        await buffet.save();
        return res.status(201).send(buffet);
    } catch (error) {
        return res.status(400).send(error.message);
    }
});

router.get("/", async (req, res) => {
    try {
        const buffets = await Buffet.find({
            hash: req.body.hash,
            type: req.body.type
        });
        if (!buffets) {
            return res.status(404).send("Buffet not found");
        }
        res.send(buffets);
    } catch (error) {
        res.status(500).send
    }
});


export default router;
