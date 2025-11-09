// backend/src/routes/zones.js
import express from "express";
import {
    getZoneStatus,
    ingestZoneMetrics,
    getZoneHistory,
} from "../controllers/zoneController.js";

const router = express.Router();

// connect routes to real controller logic
router.get("/status", getZoneStatus);
router.post("/ingest", ingestZoneMetrics);
router.get("/history", getZoneHistory);

export default router;
