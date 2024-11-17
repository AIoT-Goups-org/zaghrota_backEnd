import express from "express";
import Province from "../models/Province.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const provinces = await Province.find();
    res.send(provinces);
});

export default router;