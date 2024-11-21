import express from "express";
import CarDecoration from "../models/decorationcar.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const carDecorations = await CarDecoration.find({});
        if (!carDecorations) {
            return res.status(404).send("car Decoration not found");
        }
        res.send(carDecorations);
    } catch (error) {
        res.status(500).send
    }
});

export default router;