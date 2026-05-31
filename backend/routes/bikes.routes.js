import express from "express";
import { data } from "../data/data.js";

const router = express.Router();

// get all bikes
router.get("/", (req, res) => {
    res.json(data);
});

// get single bike
router.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    const bike = data.find((p) => p.id === id);

    if (!bike) {
        return res.status(404).json({ message: "bike not found" });
    }

    res.json(bike);
});

export default router;
