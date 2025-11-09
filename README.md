# network-simulation

# server.js
starts the http server, exposes the endpoints, starts the db

# zones.js
like the 312 router

# zoneController.js
format json data for the simulator

# riskService.js
calculates the actual logic that determines how degraded the network is

# simulator.js
generates the fake data from the database live

# database.js
dealing w any mongodb config

# thresholds.js
constants for the code

# app.jsx
the main central code for the app

# zoneApi.js
main api for backend calls

# ZoneCard.js
displays the zones and their current stats

# AlertBanner.js
big banner that appears when any network starts having issues

# Dashboard.jsx
makes the dashboard with all the zones

# useZoneData.jsx
gets live data every few seconds

# index.css
custom animations + making it look cool

# What the backend will send

[
{
"zone": "A",
"status": "OK",                // OK | DEGRADED | AT_RISK
"latency": 132,                // ms
"download": 85,                // Mbps
"upload": 8,                   // Mbps
"packetLoss": 0.3,             // %
"predictedOutageRisk": 0.45    // 0–1.5 scale (you can map to color)
},
...
]

# what the frontend sends to the backend

[
{
"zone": "A",
"infraScore": 0.7,
"vulnerabilityScore": 0.3,
"distanceToStorm": 10
},
{
"zone": "B",
"infraScore": 0.5
}
]
