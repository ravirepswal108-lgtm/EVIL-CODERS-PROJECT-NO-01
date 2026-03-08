require("dotenv").config();           // loads .env into process.env
const express = require("express");
const path    = require("path");

const app  = express();
const PORT = process.env.PORT || 3000;

// Serve all static files (html, css, js, json, icons, images)
app.use(express.static(__dirname, {
  extensions: ["html"],               // allows /404 to resolve 404.html
  setHeaders(res, filePath) {
    if (filePath.endsWith(".json")) {
      res.setHeader("Content-Type", "application/json");
    }
  }
}));

// API endpoint: expose non-secret config to the client
app.get("/api/config", (req, res) => {
  res.json({
    mapApiKey: process.env.MAP_API_KEY || "",
    trafficApiKey: process.env.TRAFFIC_API_KEY || ""
  });
});

// Everything else → 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.listen(PORT, () => {
  console.log(`TrafficFlow Pro server → http://localhost:${PORT}`);
});
