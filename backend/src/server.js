// backend/src/server.js
import express from "express";
import cors from "cors";
import zoneRoutes from "./routes/zones.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

// middleware
app.use(cors());
app.use(express.json());

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve the frontend
app.use(express.static(path.join(__dirname, "../../frontend")));

// Redirect /index → /index.html
app.get("/index", (req, res) => {
    res.redirect("/index.html");
});

// mount API routes BEFORE catch-all
app.use("/zones", zoneRoutes);

// Serve index.html for "/" (this should be the ONLY "/" route)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/index.html"));

});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log("Serving file from:", path.join(__dirname, "../../frontend/index.html"));

});
