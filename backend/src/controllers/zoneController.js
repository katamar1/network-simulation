// backend/src/controllers/zoneController.js

import { getLatestMetrics, saveMetrics, getHistory } from "../services/riskServices.js";

// GET /zones/status
export async function getZoneStatus(req, res) {
    try {
        const data = await getLatestMetrics();
        res.json(data);
    } catch (err) {
        console.error("Error in getZoneStatus:", err);
        res.status(500).json({ error: "Failed to fetch zone status" });
    }
}

// GET /zones/history
export async function getZoneHistory(req, res) {
    try {
        const zone = req.query.zone || "A";
        const history = await getHistory(zone);
        res.json(history || []);
    } catch (err) {
        console.error("Error in getZoneHistory:", err);
        res.status(500).json({ error: "Failed to fetch history" });
    }
}

// POST /zones/ingest
export async function ingestZoneMetrics(req, res) {
    try {
        const newMetrics = req.body;
        await saveMetrics(newMetrics);
        res.status(201).json({ message: "Metrics ingested" });
    } catch (err) {
        console.error("Error in ingestZoneMetrics:", err);
        res.status(500).json({ error: "Failed to ingest metrics" });
    }
}
