import express from "express";
import Decoration from "../models/decoration.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const decorations = await Decoration.find({ description: req.body.description });
        if (!decorations) {
            return res.status(404).send("Decoration not found");
        }
        res.send(decorations);
    } catch (error) {
        res.status(500).send
    }
});

export default router;