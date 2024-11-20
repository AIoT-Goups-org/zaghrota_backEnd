import express from "express";
import Bridegroom from "../models/bridegroom.js";

const router = express.Router();

router.get("/:description", async (req, res) => {
    try {
        const bridegroom = await Bridegroom.find({ description: req.params.description });
        if (!bridegroom) {
            return res.status(404).send("Bridegroom not found");
        }
        res.send(bridegroom);
    } catch (error) {
        res.status(500).send
    }
});

export default router;