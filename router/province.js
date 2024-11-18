import express from "express";
import Province from "../models/Province.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const provinces = await Province.find();

    const importantProvincesOrder = [
        "القاهره",
        "الجيزه",
        "الاسكندريه",
        "الاسماعليه",
        "الدقهليه",
        "الغربيه",
        "الشرقيه",
        "المنوفيه",
        "البحيره",
        "بور سعيد",
        "دمياط",
        "كفر الشيخ",
    ];

    const sortedProvinces = provinces.sort((a, b) => {
        const indexA = importantProvincesOrder.indexOf(a.name);
        const indexB = importantProvincesOrder.indexOf(b.name);
        return (indexA === -1 ? Number.MAX_VALUE : indexA) - (indexB === -1 ? Number.MAX_VALUE : indexB);
    });

    res.send(sortedProvinces);
});


export default router;