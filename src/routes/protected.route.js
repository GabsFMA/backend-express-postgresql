import express from "express";
import { authenticateToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/protected", authenticateToken, (req, res) => {
    res.status(200).json({ message: "Acesso autorizado!" });
});

export default router;