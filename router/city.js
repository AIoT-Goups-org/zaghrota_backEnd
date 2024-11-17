import express from "express";
import City from "../models/City.js";
import validateObjectId from "../middleware/validateObjectId.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const cities = await City.find();
    res.send(cities);
});

router.get("/:id", async (req, res) => {
    const city = await City.findById(req.params.id);
    if (!city) return res.status(404).send("City not found");
    res.send(city);
});

router.get("/province/:provinceId", async (req, res) => {
    const cities = await City.find({ province: req.params.provinceId });
    res.send(cities);
});

export default router;