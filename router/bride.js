import express from "express";
import Bride from "../models/bride.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {

        console.log(req.body);
        const bride = await Bride.find(req.body);
        if (!bride) {
            return res.status(404).send("Bride not found");
        }
        res.send(bride);
    } catch (error) {
        res.status(500).send
    }
});

export default router;