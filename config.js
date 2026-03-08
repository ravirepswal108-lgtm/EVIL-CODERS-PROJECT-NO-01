window.APP_CONFIG = {
  map: {
    provider: "leaflet",
    center: [40.758, -73.9855],
    zoom: 13,
    updateIntervalMs: 30000,
    tileStyle: "streets"           // "streets" | "satellite" | "dark"
  },
  api: {
    mapApiKey: "",                  // optional — Leaflet/OSM doesn't need one
    trafficApiKey: ""               // reserved for future live data feed
  },
  data: {
    markersUrl: "data.json",        // external markers / GeoJSON source
    enableExternalMarkers: true     // toggle loading data.json at startup
  },
  assets: {
    logo: "images/logo.svg",
    defaultMarkerIcon: "icons/marker-default.svg"
  },
  server: {
    port: 3000                      // used by server.js
  }
};
