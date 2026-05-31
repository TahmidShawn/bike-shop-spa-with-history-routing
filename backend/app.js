import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import bikesRouter from "./routes/bikes.routes.js";

const app = express();

// middleware
app.use(cors());

// path setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// routes
app.use("/api/bikes", bikesRouter);

// serve frontend
app.use(express.static(path.join(__dirname, "frontend")));

// fallback
app.use((req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

export default app;
