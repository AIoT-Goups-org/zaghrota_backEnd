import express from "express";
import Hall from "../models/Hall.js";
import validateObjectId from "../middleware/validateObjectId.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const halls = await Hall.find();
    res.send(halls);
}
);

router.get("/:id", validateObjectId, async (req, res) => {
    const hall = await Hall.findById(req.params.id);
    if (!hall) return res.status(404).send("Hall not found");
    res.send(hall);
});

router.get("/city/:cityId", async (req, res) => {
    const halls = await Hall.find({ city: req.params.cityId });
    res.send(halls);
});

export default router;