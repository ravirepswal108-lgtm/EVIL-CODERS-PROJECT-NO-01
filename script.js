// Enhanced Traffic Management Application Data
const TRAFFIC_DATA = {
  "traffic_network": {
    "roads": [
      {
        "id": "broadway_times_square",
        "name": "Broadway (Times Square to Columbus Circle)",
        "coordinates": [[40.7580, -73.9855], [40.7674, -73.9823], [40.7700, -73.9831]],
        "current_speed": 12,
        "free_flow_speed": 25,
        "congestion_level": "heavy",
        "traffic_volume": 2400,
        "incidents": ["Construction at 45th St"],
        "last_updated": "2025-09-13T12:06:00Z"
      },
      {
        "id": "fifth_avenue_midtown",
        "name": "5th Avenue (14th to 59th St)",
        "coordinates": [[40.7359, -73.9906], [40.7614, -73.9776]],
        "current_speed": 18,
        "free_flow_speed": 30,
        "congestion_level": "moderate",
        "traffic_volume": 1800,
        "incidents": [],
        "last_updated": "2025-09-13T12:06:00Z"
      },
      {
        "id": "fdr_drive_east",
        "name": "FDR Drive (Brooklyn Bridge to 59th St)",
        "coordinates": [[40.7081, -73.9967], [40.7589, -73.9441]],
        "current_speed": 35,
        "free_flow_speed": 40,
        "congestion_level": "light",
        "traffic_volume": 1200,
        "incidents": [],
        "last_updated": "2025-09-13T12:06:00Z"
      },
      {
        "id": "west_side_highway",
        "name": "West Side Highway (Battery Park to 59th St)",
        "coordinates": [[40.7074, -74.0113], [40.7681, -73.9917]],
        "current_speed": 28,
        "free_flow_speed": 35,
        "congestion_level": "moderate",
        "traffic_volume": 1600,
        "incidents": ["Accident cleared at 34th St"],
        "last_updated": "2025-09-13T12:06:00Z"
      }
    ],
    "traffic_signals": [
      {
        "id": 1,
        "location": "Times Square - 42nd St & Broadway",
        "coordinates": [40.7580, -73.9855],
        "current_state": "red",
        "time_remaining": 45,
        "cycle_time": 90,
        "next_state": "green",
        "traffic_volume": 85,
        "emergency_override": false,
        "coordination_group": "midtown_main"
      },
      {
        "id": 2,
        "location": "Central Park South & 5th Ave",
        "coordinates": [40.7614, -73.9776],
        "current_state": "green",
        "time_remaining": 30,
        "cycle_time": 75,
        "next_state": "yellow",
        "traffic_volume": 65,
        "emergency_override": false,
        "coordination_group": "upper_east"
      },
      {
        "id": 3,
        "location": "34th St & 8th Ave (Penn Station)",
        "coordinates": [40.7505, -73.9934],
        "current_state": "yellow",
        "time_remaining": 5,
        "cycle_time": 80,
        "next_state": "red",
        "traffic_volume": 92,
        "emergency_override": false,
        "coordination_group": "midtown_west"
      },
      {
        "id": 4,
        "location": "Union Square - 14th St & Broadway",
        "coordinates": [40.7359, -73.9906],
        "current_state": "green",
        "time_remaining": 25,
        "cycle_time": 70,
        "next_state": "yellow",
        "traffic_volume": 78,
        "emergency_override": false,
        "coordination_group": "downtown"
      },
      {
        "id": 5,
        "location": "Lincoln Center - 65th St & Broadway",
        "coordinates": [40.7736, -73.9851],
        "current_state": "red",
        "time_remaining": 35,
        "cycle_time": 85,
        "next_state": "green",
        "traffic_volume": 55,
        "emergency_override": false,
        "coordination_group": "upper_west"
      },
      {
        "id": 6,
        "location": "Houston St & Varick St",
        "coordinates": [40.7281, -74.0063],
        "current_state": "green",
        "time_remaining": 40,
        "cycle_time": 75,
        "next_state": "yellow",
        "traffic_volume": 68,
        "emergency_override": true,
        "coordination_group": "downtown_west"
      }
    ],
    "incidents": [
      {
        "id": "inc_001",
        "type": "construction",
        "location": "Broadway & 45th St",
        "coordinates": [40.7590, -73.9845],
        "description": "Lane closure for utility work",
        "severity": "moderate",
        "estimated_duration": "2 hours",
        "traffic_impact": "Heavy delays in southbound direction"
      },
      {
        "id": "inc_002",
        "type": "accident_cleared",
        "location": "West Side Highway & 34th St",
        "coordinates": [40.7505, -74.0041],
        "description": "Multi-vehicle accident cleared",
        "severity": "low",
        "estimated_duration": "cleared",
        "traffic_impact": "Residual delays clearing"
      },
      {
        "id": "inc_003",
        "type": "road_closure",
        "location": "6th Ave & 23rd St",
        "coordinates": [40.7428, -73.9914],
        "description": "Emergency water main repair",
        "severity": "high",
        "estimated_duration": "4 hours",
        "traffic_impact": "Complete northbound closure"
      }
    ]
  },
  "network_graph": {
    "nodes": [
      { "id": "n1",  "name": "Houston St & Varick St",          "lat": 40.7281, "lng": -74.0063 },
      { "id": "n2",  "name": "Union Square (14th & Broadway)",  "lat": 40.7359, "lng": -73.9906 },
      { "id": "n3",  "name": "23rd St & 6th Ave",               "lat": 40.7428, "lng": -73.9914 },
      { "id": "n4",  "name": "Penn Station (34th & 8th Ave)",   "lat": 40.7505, "lng": -73.9934 },
      { "id": "n5",  "name": "Times Square (42nd & Broadway)",  "lat": 40.7580, "lng": -73.9855 },
      { "id": "n6",  "name": "Central Park South & 5th Ave",    "lat": 40.7614, "lng": -73.9776 },
      { "id": "n7",  "name": "Columbus Circle",                 "lat": 40.7700, "lng": -73.9831 },
      { "id": "n8",  "name": "Lincoln Center (65th & Broadway)","lat": 40.7736, "lng": -73.9851 },
      { "id": "n9",  "name": "Brooklyn Bridge",                 "lat": 40.7081, "lng": -73.9967 },
      { "id": "n10", "name": "Battery Park",                     "lat": 40.7074, "lng": -74.0113 },
      { "id": "n11", "name": "14th St & 3rd Ave",                "lat": 40.7340, "lng": -73.9860 },
      { "id": "n12", "name": "34th St & Park Ave",               "lat": 40.7480, "lng": -73.9810 },
      { "id": "n13", "name": "59th St & FDR Drive",              "lat": 40.7589, "lng": -73.9441 },
      { "id": "n14", "name": "23rd St & Broadway",               "lat": 40.7400, "lng": -73.9900 },
      { "id": "n15", "name": "34th St & Broadway",               "lat": 40.7485, "lng": -73.9880 },
      { "id": "n16", "name": "42nd St & 5th Ave",                "lat": 40.7527, "lng": -73.9817 },
      { "id": "n17", "name": "57th St & 7th Ave",                "lat": 40.7650, "lng": -73.9795 },
      { "id": "n18", "name": "72nd St & Broadway",               "lat": 40.7784, "lng": -73.9814 },
      { "id": "n19", "name": "Tribeca (Chambers St)",            "lat": 40.7163, "lng": -74.0086 },
      { "id": "n20", "name": "SoHo (Spring & Lafayette)",        "lat": 40.7233, "lng": -73.9985 }
    ],
    "edges": [
      { "from": "n10", "to": "n19", "road_name": "West Side Highway",       "distance_km": 1.0, "base_speed_kmh": 50, "congestion_factor": 0.20 },
      { "from": "n19", "to": "n1",  "road_name": "West St",                 "distance_km": 1.3, "base_speed_kmh": 35, "congestion_factor": 0.40 },
      { "from": "n1",  "to": "n3",  "road_name": "6th Ave (northbound)",    "distance_km": 1.7, "base_speed_kmh": 30, "congestion_factor": 0.50 },
      { "from": "n3",  "to": "n4",  "road_name": "6th Ave (23rd-34th)",     "distance_km": 1.1, "base_speed_kmh": 25, "congestion_factor": 0.60 },
      { "from": "n4",  "to": "n5",  "road_name": "8th Ave (34th-42nd)",     "distance_km": 1.2, "base_speed_kmh": 20, "congestion_factor": 0.80 },
      { "from": "n5",  "to": "n7",  "road_name": "Broadway (42nd-Columbus)","distance_km": 1.4, "base_speed_kmh": 22, "congestion_factor": 0.50 },
      { "from": "n7",  "to": "n8",  "road_name": "Broadway (Columbus-65th)","distance_km": 0.5, "base_speed_kmh": 30, "congestion_factor": 0.20 },
      { "from": "n8",  "to": "n18", "road_name": "Broadway (65th-72nd)",    "distance_km": 0.6, "base_speed_kmh": 35, "congestion_factor": 0.15 },
      { "from": "n20", "to": "n2",  "road_name": "Broadway (SoHo-Union Sq)","distance_km": 1.4, "base_speed_kmh": 25, "congestion_factor": 0.50 },
      { "from": "n2",  "to": "n14", "road_name": "Broadway (14th-23rd)",    "distance_km": 1.0, "base_speed_kmh": 28, "congestion_factor": 0.40 },
      { "from": "n14", "to": "n15", "road_name": "Broadway (23rd-34th)",    "distance_km": 1.0, "base_speed_kmh": 25, "congestion_factor": 0.50 },
      { "from": "n15", "to": "n5",  "road_name": "Broadway (34th-42nd)",    "distance_km": 1.1, "base_speed_kmh": 18, "congestion_factor": 0.75 },
      { "from": "n9",  "to": "n11", "road_name": "FDR Drive (Brooklyn-14th)","distance_km": 3.0, "base_speed_kmh": 40, "congestion_factor": 0.30 },
      { "from": "n11", "to": "n12", "road_name": "Park Ave (14th-34th)",    "distance_km": 1.6, "base_speed_kmh": 30, "congestion_factor": 0.40 },
      { "from": "n12", "to": "n16", "road_name": "Park Ave (34th-42nd)",    "distance_km": 0.8, "base_speed_kmh": 28, "congestion_factor": 0.50 },
      { "from": "n16", "to": "n6",  "road_name": "5th Ave (42nd-59th)",     "distance_km": 1.2, "base_speed_kmh": 25, "congestion_factor": 0.45 },
      { "from": "n12", "to": "n13", "road_name": "FDR Drive (34th-59th)",   "distance_km": 3.0, "base_speed_kmh": 45, "congestion_factor": 0.20 },
      { "from": "n6",  "to": "n13", "road_name": "59th St crosstown",       "distance_km": 2.8, "base_speed_kmh": 35, "congestion_factor": 0.35 },
      { "from": "n9",  "to": "n10", "road_name": "FDR/West Side connector", "distance_km": 1.5, "base_speed_kmh": 30, "congestion_factor": 0.30 },
      { "from": "n19", "to": "n20", "road_name": "Canal St",                "distance_km": 1.0, "base_speed_kmh": 28, "congestion_factor": 0.40 },
      { "from": "n20", "to": "n9",  "road_name": "Bowery / Manhattan Br",   "distance_km": 2.0, "base_speed_kmh": 25, "congestion_factor": 0.40 },
      { "from": "n2",  "to": "n11", "road_name": "14th St crosstown",       "distance_km": 0.5, "base_speed_kmh": 25, "congestion_factor": 0.30 },
      { "from": "n3",  "to": "n14", "road_name": "23rd St crosstown",       "distance_km": 0.3, "base_speed_kmh": 25, "congestion_factor": 0.30 },
      { "from": "n4",  "to": "n15", "road_name": "34th St (8th-Broadway)",  "distance_km": 0.5, "base_speed_kmh": 22, "congestion_factor": 0.60 },
      { "from": "n4",  "to": "n12", "road_name": "34th St (8th-Park)",      "distance_km": 1.2, "base_speed_kmh": 22, "congestion_factor": 0.55 },
      { "from": "n15", "to": "n12", "road_name": "34th St (Broadway-Park)", "distance_km": 0.7, "base_speed_kmh": 20, "congestion_factor": 0.55 },
      { "from": "n15", "to": "n16", "road_name": "35th-42nd (midtown)",     "distance_km": 1.2, "base_speed_kmh": 22, "congestion_factor": 0.60 },
      { "from": "n5",  "to": "n16", "road_name": "42nd St crosstown",       "distance_km": 0.4, "base_speed_kmh": 18, "congestion_factor": 0.70 },
      { "from": "n17", "to": "n6",  "road_name": "57th St crosstown",       "distance_km": 1.0, "base_speed_kmh": 25, "congestion_factor": 0.40 },
      { "from": "n17", "to": "n7",  "road_name": "57th/Columbus connector", "distance_km": 0.5, "base_speed_kmh": 30, "congestion_factor": 0.25 },
      { "from": "n5",  "to": "n17", "road_name": "7th Ave (42nd-57th)",     "distance_km": 0.9, "base_speed_kmh": 22, "congestion_factor": 0.50 },
      { "from": "n6",  "to": "n7",  "road_name": "Central Park South",      "distance_km": 0.5, "base_speed_kmh": 28, "congestion_factor": 0.30 },
      { "from": "n1",  "to": "n20", "road_name": "Lafayette St",            "distance_km": 0.6, "base_speed_kmh": 25, "congestion_factor": 0.35 }
    ]
  },
  "route_options": [
    {
      "route_id": "route_a",
      "name": "Fastest Route",
      "distance": "12.5 km",
      "duration_current": "28 minutes",
      "duration_predicted": "32 minutes",
      "traffic_delay": "8 minutes",
      "coordinates": [[40.7505, -73.9934], [40.7580, -73.9855], [40.7614, -73.9776]],
      "traffic_conditions": ["heavy", "moderate", "light"],
      "route_type": "optimal"
    },
    {
      "route_id": "route_b",
      "name": "Avoid Traffic Route",
      "distance": "14.2 km",
      "duration_current": "25 minutes",
      "duration_predicted": "26 minutes",
      "traffic_delay": "3 minutes",
      "coordinates": [[40.7505, -73.9934], [40.7589, -73.9441], [40.7614, -73.9776]],
      "traffic_conditions": ["moderate", "light", "light"],
      "route_type": "traffic_aware"
    },
    {
      "route_id": "route_c",
      "name": "Shortest Distance",
      "distance": "11.8 km",
      "duration_current": "35 minutes",
      "duration_predicted": "38 minutes",
      "traffic_delay": "12 minutes",
      "coordinates": [[40.7505, -73.9934], [40.7359, -73.9906], [40.7614, -73.9776]],
      "traffic_conditions": ["heavy", "heavy", "moderate"],
      "route_type": "distance"
    }
  ],
  "traffic_predictions": {
    "next_30_minutes": {
      "overall_congestion": "increasing",
      "peak_expected": "12:45 PM",
      "recommended_departure": "12:15 PM",
      "alternate_routes_needed": true
    },
    "next_60_minutes": {
      "overall_congestion": "peak",
      "peak_expected": "1:00 PM",
      "recommended_departure": "after 2:00 PM",
      "alternate_routes_needed": true
    }
  },
  "analytics_data": {
    "current_metrics": {
      "total_vehicles_monitored": 45230,
      "average_speed_citywide": 22.5,
      "congestion_index": 68,
      "incident_count": 3,
      "signal_efficiency": 78
    },
    "hourly_patterns": [
      {"hour": 6, "congestion": 25}, {"hour": 7, "congestion": 45},
      {"hour": 8, "congestion": 85}, {"hour": 9, "congestion": 70},
      {"hour": 10, "congestion": 55}, {"hour": 11, "congestion": 60},
      {"hour": 12, "congestion": 68}, {"hour": 13, "congestion": 72},
      {"hour": 14, "congestion": 65}, {"hour": 15, "congestion": 58},
      {"hour": 16, "congestion": 70}, {"hour": 17, "congestion": 90},
      {"hour": 18, "congestion": 95}, {"hour": 19, "congestion": 80}
    ]
  },
  "map_config": {
    "initial_center": [40.7580, -73.9855],
    "initial_zoom": 13,
    "update_interval": 30000,
    "colors": {
      "traffic_free": "#22c55e",
      "traffic_moderate": "#f59e0b", 
      "traffic_heavy": "#ef4444",
      "signal_red": "#dc2626",
      "signal_yellow": "#fbbf24",
      "signal_green": "#16a34a",
      "route_primary": "#1fb8cd",
      "route_alternative": "#5d878f"
    }
  }
};

// Allow config.js to override default map settings.
if (window.APP_CONFIG && window.APP_CONFIG.map) {
  const mapConfig = window.APP_CONFIG.map;
  if (Array.isArray(mapConfig.center) && mapConfig.center.length === 2) {
    TRAFFIC_DATA.map_config.initial_center = mapConfig.center;
  }
  if (Number.isFinite(mapConfig.zoom)) {
    TRAFFIC_DATA.map_config.initial_zoom = mapConfig.zoom;
  }
  if (Number.isFinite(mapConfig.updateIntervalMs)) {
    TRAFFIC_DATA.map_config.update_interval = mapConfig.updateIntervalMs;
  }
}

// ─── A* Pathfinding Router ───────────────────────────────────────────────────
class AStarRouter {
  constructor(graph) {
    this.nodes = new Map();
    this.adjacency = new Map();

    graph.nodes.forEach(n => {
      this.nodes.set(n.id, n);
      this.adjacency.set(n.id, []);
    });

    graph.edges.forEach(e => {
      const fwd = { to: e.to,   from: e.from, road_name: e.road_name, distance_km: e.distance_km, base_speed_kmh: e.base_speed_kmh, congestion_factor: e.congestion_factor };
      const rev = { to: e.from, from: e.to,   road_name: e.road_name, distance_km: e.distance_km, base_speed_kmh: e.base_speed_kmh, congestion_factor: e.congestion_factor };
      this.adjacency.get(e.from).push(fwd);
      this.adjacency.get(e.to).push(rev);
    });
  }

  /** Haversine distance in km */
  haversine(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const toRad = v => v * Math.PI / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) ** 2 +
              Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  /** Return the node id closest to the given coordinates */
  findNearestNode(lat, lng) {
    let nearest = null, minDist = Infinity;
    this.nodes.forEach((node, id) => {
      const d = this.haversine(lat, lng, node.lat, node.lng);
      if (d < minDist) { minDist = d; nearest = id; }
    });
    return nearest;
  }

  /**
   * A* search.
   * costMode: "time" | "distance" | "traffic_aware"
   */
  findPath(startId, goalId, costMode = 'time') {
    if (!this.nodes.has(startId) || !this.nodes.has(goalId)) return null;
    if (startId === goalId) return null;

    const gScore  = new Map();
    const fScore  = new Map();
    const cameFrom = new Map();
    const edgeUsed = new Map();

    this.nodes.forEach((_, id) => {
      gScore.set(id, Infinity);
      fScore.set(id, Infinity);
    });

    gScore.set(startId, 0);
    fScore.set(startId, this._heuristic(startId, goalId, costMode));

    const openSet  = new Set([startId]);
    const closedSet = new Set();

    while (openSet.size > 0) {
      // Pick node with lowest f
      let current = null, minF = Infinity;
      openSet.forEach(id => {
        const f = fScore.get(id);
        if (f < minF) { minF = f; current = id; }
      });

      if (current === goalId) {
        return this._reconstructPath(cameFrom, edgeUsed, current, gScore.get(current), costMode);
      }

      openSet.delete(current);
      closedSet.add(current);

      for (const edge of (this.adjacency.get(current) || [])) {
        if (closedSet.has(edge.to)) continue;

        const tentativeG = gScore.get(current) + this._edgeCost(edge, costMode);

        if (tentativeG < gScore.get(edge.to)) {
          cameFrom.set(edge.to, current);
          edgeUsed.set(edge.to, edge);
          gScore.set(edge.to, tentativeG);
          fScore.set(edge.to, tentativeG + this._heuristic(edge.to, goalId, costMode));
          openSet.add(edge.to);
        }
      }
    }

    return null; // no path
  }

  /* ---- private helpers ---- */

  _edgeCost(edge, costMode) {
    const effectiveSpeed = edge.base_speed_kmh * (1 - edge.congestion_factor * 0.8);
    switch (costMode) {
      case 'time':
        return (edge.distance_km / effectiveSpeed) * 60;          // minutes
      case 'distance':
        return edge.distance_km;
      case 'traffic_aware': {
        const timeCost = (edge.distance_km / effectiveSpeed) * 60;
        const congestionPenalty = edge.congestion_factor * 10;     // extra penalty
        return timeCost + congestionPenalty;
      }
      default:
        return edge.distance_km;
    }
  }

  _heuristic(nodeId, goalId, costMode) {
    const n = this.nodes.get(nodeId);
    const g = this.nodes.get(goalId);
    const dist = this.haversine(n.lat, n.lng, g.lat, g.lng);
    switch (costMode) {
      case 'time':          return (dist / 60) * 60;   // optimistic: 60 km/h straight line
      case 'traffic_aware': return (dist / 60) * 60;
      case 'distance':      return dist;
      default:              return dist;
    }
  }

  _reconstructPath(cameFrom, edgeUsed, current, totalCost, costMode) {
    const path = [current];
    const edges = [];
    let totalDistance = 0;
    let totalTime = 0;
    const conditions = [];
    const roadNames = [];

    while (cameFrom.has(current)) {
      const edge = edgeUsed.get(current);
      edges.unshift(edge);
      totalDistance += edge.distance_km;
      const effSpeed = edge.base_speed_kmh * (1 - edge.congestion_factor * 0.8);
      totalTime += (edge.distance_km / effSpeed) * 60;

      if (edge.congestion_factor > 0.6)       conditions.unshift('heavy');
      else if (edge.congestion_factor > 0.3)  conditions.unshift('moderate');
      else                                     conditions.unshift('light');
      roadNames.unshift(edge.road_name);

      current = cameFrom.get(current);
      path.unshift(current);
    }

    const coordinates = path.map(id => {
      const n = this.nodes.get(id);
      return [n.lat, n.lng];
    });

    const freeFlowTime = edges.reduce(
      (sum, e) => sum + (e.distance_km / e.base_speed_kmh) * 60, 0
    );

    return {
      path,
      edges,
      coordinates,
      totalDistance,
      totalTime,
      freeFlowTime,
      trafficDelay: totalTime - freeFlowTime,
      conditions,
      roadNames,
      costMode
    };
  }

  /**
   * Compute three route alternatives using different A* cost strategies.
   * Returns an array formatted for the UI (distance string, duration string …).
   */
  computeRoutes(startId, goalId) {
    const modes = [
      { mode: 'time',          id: 'astar_time',    name: 'A* Fastest Route',      type: 'optimal' },
      { mode: 'traffic_aware', id: 'astar_traffic',  name: 'A* Avoid Traffic',      type: 'traffic_aware' },
      { mode: 'distance',      id: 'astar_distance', name: 'A* Shortest Distance',  type: 'distance' }
    ];

    const results = [];
    for (const m of modes) {
      const r = this.findPath(startId, goalId, m.mode);
      if (!r) continue;

      results.push({
        route_id:           m.id,
        name:               m.name,
        algorithm:          `A* (${m.mode.replace('_', '-')})`,
        route_type:         m.type,
        distance:           `${r.totalDistance.toFixed(1)} km`,
        duration_current:   `${Math.round(r.totalTime)} min`,
        duration_predicted: `${Math.round(r.totalTime * 1.08)} min`,
        traffic_delay:      `${Math.round(r.trafficDelay)} min`,
        coordinates:        r.coordinates,
        traffic_conditions: r.conditions,
        road_names:         r.roadNames,
        _raw:               r
      });
    }

    return results;
  }
}

// Main Application Class
class TrafficFlowPro {
  constructor() {
    this.map = null;
    this.trafficSignals = new Map();
    this.signalMarkers = new Map();
    this.incidentMarkers = new Map();
    this.trafficFlowLayer = null;
    this.routeLayer = null;
    this.updateInterval = null;
    this.trafficChart = null;
    this.currentRoute = null;
    this.selectedRouteIndex = 0;
    this.isInitialized = false;

    // A* Router
    this.router = new AStarRouter(TRAFFIC_DATA.network_graph);
    this.computedRoutes = TRAFFIC_DATA.route_options; // default fallback

    // External markers loaded from data.json
    this.externalMarkers = [];
    this.externalMarkerLayer = L.layerGroup();
    
    // Layer visibility states
    this.layerStates = {
      trafficSignals: true,
      trafficFlow: true,
      incidents: true,
      analytics: false
    };

    // Map tile layers
    this.tileLayers = {
      streets: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }),
      satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '© Esri'
      }),
      dark: L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '© CARTO'
      })
    };

    this.currentTileLayer = 'streets';
    this.controlPanelVisible = true;
    this.lastUpdateTime = new Date();

    // Emergency loading timeout
    setTimeout(() => {
      if (!this.isInitialized) {
        console.warn('Emergency loading timeout triggered');
        this.hideLoading();
        this.showNotification('Application loaded with basic functionality', 'warning');
      }
    }, 3000);

    this.init();
  }

  async init() {
    try {
      this.showLoading();
      
      console.log('Initializing TrafficFlow Pro...');
      
      // Initialize components with error handling
      try {
        await this.initializeMap();
        console.log('Map initialized');
      } catch (error) {
        console.error('Map initialization failed:', error);
      }

      try {
        await this.loadTrafficData();
        console.log('Traffic data loaded');
      } catch (error) {
        console.error('Traffic data loading failed:', error);
      }

      // Load external markers from data.json (connected via config.js)
      try {
        await this.loadExternalData();
        console.log('External data.json loaded');
      } catch (error) {
        console.warn('External data.json not loaded (optional):', error.message);
      }

      try {
        this.setupEventListeners();
        console.log('Event listeners setup');
      } catch (error) {
        console.error('Event listeners setup failed:', error);
      }

      try {
        this.startRealTimeUpdates();
        this.updateStatistics();
        this.updatePredictions();
        console.log('Real-time updates started');
      } catch (error) {
        console.error('Real-time updates failed:', error);
      }

      // Mark as initialized
      this.isInitialized = true;
      
      // Always hide loading after initialization
      setTimeout(() => {
        this.hideLoading();
        this.showNotification('TrafficFlow Pro ready - Real-time monitoring active', 'success');
        console.log('Initialization complete');
      }, 500);
      
    } catch (error) {
      console.error('Critical initialization error:', error);
      this.isInitialized = true;
      this.hideLoading();
      this.showNotification('Application loaded with limited functionality', 'error');
    }
  }

  async initializeMap() {
    return new Promise((resolve, reject) => {
      try {
        const config = TRAFFIC_DATA.map_config;
        
        this.map = L.map('map', {
          center: config.initial_center,
          zoom: config.initial_zoom,
          zoomControl: false,
          attributionControl: true
        });

        this.tileLayers[this.currentTileLayer].addTo(this.map);

        this.map.whenReady(() => {
          try {
            this.initializeMapLayers();
            resolve();
          } catch (error) {
            console.error('Map layer initialization error:', error);
            resolve(); // Still resolve to continue
          }
        });

        // Fallback timeout
        setTimeout(() => {
          try {
            if (!this.trafficFlowLayer) {
              this.initializeMapLayers();
            }
            resolve();
          } catch (error) {
            console.error('Fallback initialization error:', error);
            resolve();
          }
        }, 1000);

      } catch (error) {
        console.error('Map creation error:', error);
        reject(error);
      }
    });
  }

  initializeMapLayers() {
    try {
      // Initialize layer groups
      this.trafficFlowLayer = L.layerGroup();
      this.routeLayer = L.layerGroup();

      this.createTrafficFlowVisualization();
      
      if (this.layerStates.trafficFlow && this.map) {
        this.trafficFlowLayer.addTo(this.map);
      }
    } catch (error) {
      console.error('Layer initialization error:', error);
    }
  }

  createTrafficFlowVisualization() {
    try {
      const roads = TRAFFIC_DATA.traffic_network.roads;
      
      roads.forEach(road => {
        try {
          let color;
          switch (road.congestion_level) {
            case 'light':
              color = TRAFFIC_DATA.map_config.colors.traffic_free;
              break;
            case 'moderate':
              color = TRAFFIC_DATA.map_config.colors.traffic_moderate;
              break;
            case 'heavy':
              color = TRAFFIC_DATA.map_config.colors.traffic_heavy;
              break;
            default:
              color = '#888888';
          }

          const polyline = L.polyline(road.coordinates, {
            color: color,
            weight: 8,
            opacity: 0.8,
            className: 'traffic-flow-line'
          });
          
          polyline.bindPopup(this.createTrafficFlowPopup(road), {
            maxWidth: 300,
            className: 'traffic-flow-popup'
          });
          
          this.trafficFlowLayer.addLayer(polyline);
        } catch (error) {
          console.error('Error creating road visualization:', error);
        }
      });
    } catch (error) {
      console.error('Traffic flow visualization error:', error);
    }
  }

  createTrafficFlowPopup(road) {
    const speedPercentage = Math.round((road.current_speed / road.free_flow_speed) * 100);
    return `
      <div style="font-family: var(--font-family-base); line-height: 1.4;">
        <h4 style="margin: 0 0 12px 0; color: var(--color-text); font-size: 16px;">${road.name}</h4>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 12px;">
          <div>
            <span style="font-size: 12px; color: var(--color-text-secondary);">Current Speed:</span><br>
            <strong style="color: var(--color-text);">${road.current_speed} mph</strong>
          </div>
          <div>
            <span style="font-size: 12px; color: var(--color-text-secondary);">Free Flow:</span><br>
            <strong style="color: var(--color-text);">${road.free_flow_speed} mph</strong>
          </div>
          <div>
            <span style="font-size: 12px; color: var(--color-text-secondary);">Congestion:</span><br>
            <strong style="color: ${road.congestion_level === 'heavy' ? '#ef4444' : road.congestion_level === 'moderate' ? '#f59e0b' : '#22c55e'};">
              ${road.congestion_level.toUpperCase()}
            </strong>
          </div>
          <div>
            <span style="font-size: 12px; color: var(--color-text-secondary);">Volume:</span><br>
            <strong style="color: var(--color-text);">${road.traffic_volume.toLocaleString()} veh/hr</strong>
          </div>
        </div>
        <div style="text-align: center; padding: 8px; background: var(--color-bg-1); border-radius: 6px;">
          <span style="font-size: 12px; color: var(--color-text-secondary);">Speed Efficiency:</span><br>
          <strong style="font-size: 18px; color: var(--color-primary);">${speedPercentage}%</strong>
        </div>
        ${road.incidents.length > 0 ? `
          <div style="margin-top: 12px; padding: 8px; background: rgba(239, 68, 68, 0.1); border-radius: 6px;">
            <strong style="color: #ef4444;">Active Incidents:</strong>
            <ul style="margin: 4px 0 0 16px;">${road.incidents.map(incident => `<li style="color: var(--color-text);">${incident}</li>`).join('')}</ul>
          </div>
        ` : ''}
      </div>
    `;
  }

  async loadTrafficData() {
    try {
      // Load traffic signals
      TRAFFIC_DATA.traffic_network.traffic_signals.forEach(signal => {
        try {
          this.trafficSignals.set(signal.id, { ...signal });
          this.createSignalMarker(signal);
        } catch (error) {
          console.error('Error loading signal:', signal.id, error);
        }
      });

      // Load incidents
      TRAFFIC_DATA.traffic_network.incidents.forEach(incident => {
        try {
          this.createIncidentMarker(incident);
        } catch (error) {
          console.error('Error loading incident:', incident.id, error);
        }
      });

      this.updateLastUpdateTime();
    } catch (error) {
      console.error('Traffic data loading error:', error);
    }
  }

  /** Load data.json markers and GeoJSON into the map (connected via config.js) */
  async loadExternalData() {
    const cfg = window.APP_CONFIG && window.APP_CONFIG.data;
    if (!cfg || !cfg.enableExternalMarkers) return;

    const res = await fetch(cfg.markersUrl);
    if (!res.ok) throw new Error(`data.json fetch failed: ${res.status}`);
    const data = await res.json();

    const iconCfg = window.APP_CONFIG && window.APP_CONFIG.assets;
    const defaultIconUrl = (iconCfg && iconCfg.defaultMarkerIcon) || 'icons/marker-default.svg';

    const customIcon = L.icon({
      iconUrl: defaultIconUrl,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -28]
    });

    // Place markers from data.json
    if (Array.isArray(data.markers)) {
      data.markers.forEach(m => {
        if (!m.coordinates || m.coordinates.length < 2) return;
        const marker = L.marker(m.coordinates, { icon: customIcon })
          .bindPopup(`<strong>${m.name || 'Marker'}</strong><br>Type: ${m.type || 'unknown'}`);
        this.externalMarkerLayer.addLayer(marker);
        this.externalMarkers.push(marker);
      });
    }

    // Add GeoJSON features if present
    if (data.geojson && data.geojson.features && data.geojson.features.length > 0) {
      L.geoJSON(data.geojson, {
        style: { color: TRAFFIC_DATA.map_config.colors.route_alternative, weight: 3 }
      }).addTo(this.externalMarkerLayer);
    }

    if (this.map) {
      this.externalMarkerLayer.addTo(this.map);
    }

    console.log(`Loaded ${this.externalMarkers.length} markers from data.json`);
  }

  createSignalMarker(signal) {
    try {
      const color = this.getSignalColor(signal);
      
      const icon = L.divIcon({
        className: 'signal-marker',
        html: `
          <div style="
            width: 28px;
            height: 28px;
            background-color: ${color};
            border: 3px solid rgba(255,255,255,0.9);
            border-radius: 50%;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            ${signal.emergency_override ? 'animation: pulse 1s infinite;' : ''}
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          ">
            ${signal.emergency_override ? '<div style="position: absolute; top: -3px; right: -3px; width: 10px; height: 10px; background: #ff0066; border: 2px solid white; border-radius: 50%; animation: pulse 0.5s infinite;"></div>' : ''}
            <div style="font-size: 10px; color: white; font-weight: bold;">${signal.time_remaining}</div>
          </div>
        `,
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      });

      const marker = L.marker(signal.coordinates, { icon });
      marker.bindPopup(this.createSignalPopup(signal), {
        maxWidth: 320,
        className: 'signal-popup-container',
        closeButton: true
      });

      // Ensure popup opens on click
      marker.on('click', () => {
        marker.openPopup();
      });

      this.signalMarkers.set(signal.id, marker);

      if (this.layerStates.trafficSignals && this.map) {
        marker.addTo(this.map);
      }
    } catch (error) {
      console.error('Error creating signal marker:', error);
    }
  }

  createIncidentMarker(incident) {
    try {
      let icon, color;
      
      switch (incident.type) {
        case 'construction':
          icon = '🚧';
          color = '#f59e0b';
          break;
        case 'accident_cleared':
          icon = '🚗';
          color = '#22c55e';
          break;
        case 'road_closure':
          icon = '⚠️';
          color = '#ef4444';
          break;
        default:
          icon = '⚠️';
          color = '#888888';
      }

      const marker = L.marker(incident.coordinates, {
        icon: L.divIcon({
          className: 'incident-marker',
          html: `
            <div style="
              font-size: 24px;
              background-color: ${color};
              border-radius: 50%;
              width: 36px;
              height: 36px;
              display: flex;
              align-items: center;
              justify-content: center;
              border: 3px solid white;
              box-shadow: 0 2px 8px rgba(0,0,0,0.3);
              cursor: pointer;
            ">${icon}</div>
          `,
          iconSize: [36, 36],
          iconAnchor: [18, 18]
        })
      });

      marker.bindPopup(this.createIncidentPopup(incident), {
        maxWidth: 300,
        className: 'incident-popup-container'
      });

      marker.on('click', () => {
        marker.openPopup();
      });

      this.incidentMarkers.set(incident.id, marker);

      if (this.layerStates.incidents && this.map) {
        marker.addTo(this.map);
      }
    } catch (error) {
      console.error('Error creating incident marker:', error);
    }
  }

  getSignalColor(signal) {
    if (signal.emergency_override) {
      return '#ec4899';
    }
    
    const colors = TRAFFIC_DATA.map_config.colors;
    switch (signal.current_state) {
      case 'red': return colors.signal_red;
      case 'yellow': return colors.signal_yellow;
      case 'green': return colors.signal_green;
      default: return '#888888';
    }
  }

  createSignalPopup(signal) {
    const statusColor = this.getSignalColor(signal);
    const stateText = signal.current_state.charAt(0).toUpperCase() + signal.current_state.slice(1);
    
    return `
      <div class="signal-popup">
        <div class="signal-header">
          <div class="signal-status" style="background-color: ${statusColor};"></div>
          <h4 class="signal-title">${signal.location}</h4>
        </div>
        
        <div class="signal-details">
          <div class="signal-detail">
            <span class="detail-label">Current State</span>
            <span class="detail-value">${stateText} Light</span>
          </div>
          <div class="signal-detail">
            <span class="detail-label">Next State</span>
            <span class="detail-value">${signal.next_state.charAt(0).toUpperCase() + signal.next_state.slice(1)}</span>
          </div>
          <div class="signal-detail">
            <span class="detail-label">Traffic Volume</span>
            <span class="detail-value">${signal.traffic_volume}%</span>
          </div>
          <div class="signal-detail">
            <span class="detail-label">Cycle Time</span>
            <span class="detail-value">${signal.cycle_time}s</span>
          </div>
          <div class="signal-detail">
            <span class="detail-label">Coordination</span>
            <span class="detail-value">${signal.coordination_group.replace('_', ' ')}</span>
          </div>
        </div>
        
        <div class="countdown-timer">
          <div class="countdown-value" id="countdown-${signal.id}">${signal.time_remaining}</div>
          <div class="countdown-label">seconds until ${signal.next_state}</div>
        </div>
        
        ${signal.emergency_override ? '<div class="emergency-badge">Emergency Override Active</div>' : ''}
      </div>
    `;
  }

  createIncidentPopup(incident) {
    let icon;
    switch (incident.type) {
      case 'construction': icon = '🚧'; break;
      case 'accident_cleared': icon = '🚗'; break;
      case 'road_closure': icon = '⚠️'; break;
      default: icon = '⚠️';
    }

    return `
      <div class="incident-popup">
        <div class="incident-header">
          <div class="incident-icon">${icon}</div>
          <h4 class="incident-title">${incident.type.replace('_', ' ').toUpperCase()}</h4>
        </div>
        
        <div class="incident-details">
          <p class="incident-description">${incident.description}</p>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin: 12px 0;">
            <div>
              <span style="font-size: 12px; color: var(--color-text-secondary);">Location:</span><br>
              <span style="color: var(--color-text);">${incident.location}</span>
            </div>
            <div>
              <span style="font-size: 12px; color: var(--color-text-secondary);">Duration:</span><br>
              <span style="color: var(--color-text);">${incident.estimated_duration}</span>
            </div>
          </div>
          <div style="margin: 8px 0;">
            <span style="font-size: 12px; color: var(--color-text-secondary);">Traffic Impact:</span><br>
            <span style="color: var(--color-text);">${incident.traffic_impact}</span>
          </div>
          <div class="severity-badge ${incident.severity}">${incident.severity.toUpperCase()}</div>
        </div>
      </div>
    `;
  }

  setupEventListeners() {
    try {
      // Route planning
      const planRouteBtn = document.getElementById('plan-route');
      const swapRoutesBtn = document.getElementById('swap-routes');
      
      if (planRouteBtn) {
        planRouteBtn.addEventListener('click', () => this.planRoute());
      }
      
      if (swapRoutesBtn) {
        swapRoutesBtn.addEventListener('click', () => this.swapRouteInputs());
      }

      // Location services
      const findLocationBtn = document.getElementById('find-location');
      if (findLocationBtn) {
        findLocationBtn.addEventListener('click', () => this.findUserLocation());
      }

      // Panel controls
      const togglePanelBtn = document.getElementById('toggle-panel');
      if (togglePanelBtn) {
        togglePanelBtn.addEventListener('click', () => this.toggleControlPanel());
      }

      // Layer toggles
      ['traffic-signals', 'traffic-flow', 'incidents', 'analytics'].forEach(layer => {
        const toggle = document.getElementById(`${layer}-toggle`);
        if (toggle) {
          const layerKey = layer.replace('-', '_');
          toggle.addEventListener('change', (e) => {
            this.toggleLayer(layerKey, e.target.checked);
          });
        }
      });

      // Map style
      const mapStyleSelect = document.getElementById('map-style');
      if (mapStyleSelect) {
        mapStyleSelect.addEventListener('change', (e) => {
          this.changeMapStyle(e.target.value);
        });
      }

      // Map controls
      const zoomInBtn = document.getElementById('zoom-in');
      const zoomOutBtn = document.getElementById('zoom-out');
      const fullscreenBtn = document.getElementById('fullscreen');
      const centerMapBtn = document.getElementById('center-map');
      
      if (zoomInBtn) zoomInBtn.addEventListener('click', () => this.map && this.map.zoomIn());
      if (zoomOutBtn) zoomOutBtn.addEventListener('click', () => this.map && this.map.zoomOut());
      if (fullscreenBtn) fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
      if (centerMapBtn) centerMapBtn.addEventListener('click', () => this.centerMap());

      // Analytics dashboard
      const analyticsToggle = document.getElementById('analytics-toggle');
      const closeAnalytics = document.getElementById('close-analytics');
      
      if (analyticsToggle) {
        analyticsToggle.addEventListener('change', (e) => {
          this.toggleAnalyticsDashboard(e.target.checked);
        });
      }
      
      if (closeAnalytics) {
        closeAnalytics.addEventListener('click', () => {
          this.toggleAnalyticsDashboard(false);
          const analyticsToggle = document.getElementById('analytics-toggle');
          if (analyticsToggle) analyticsToggle.checked = false;
        });
      }

      // Route summary
      const closeRouteSummary = document.getElementById('close-route-summary');
      if (closeRouteSummary) {
        closeRouteSummary.addEventListener('click', () => this.hideRouteSummary());
      }

      // Notification close
      document.addEventListener('click', (e) => {
        if (e.target.classList.contains('notification-close')) {
          this.hideNotification();
        }
      });

      // Emergency loading close on click
      const loadingOverlay = document.getElementById('loading-overlay');
      if (loadingOverlay) {
        loadingOverlay.addEventListener('click', (e) => {
          if (e.target === loadingOverlay) {
            this.hideLoading();
            this.showNotification('Loading cancelled by user', 'info');
          }
        });
      }

    } catch (error) {
      console.error('Event listener setup error:', error);
    }
  }

  /** Resolve free-text location to the nearest graph node id.
   *  Uses a three-tier strategy: exact alias → fuzzy word match → always returns best guess. */
  _resolveLocation(text) {
    if (!text) return null;
    const lower = text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
    if (!lower) return null;

    // ── Tier 1: keyword / alias lookup (very broad) ─────────────────────
    const aliases = [
      { keys: ['times square','times sq','42nd broadway','42 broadway','42nd st broadway','time square'], id: 'n5' },
      { keys: ['penn station','penn','madison square garden','msg','34th 8th','34 8th','moynihan'], id: 'n4' },
      { keys: ['union square','union sq','14th broadway','14 broadway'], id: 'n2' },
      { keys: ['central park','central park south','59th 5th','59 5th','cps'], id: 'n6' },
      { keys: ['columbus circle','columbus','columbus cir'], id: 'n7' },
      { keys: ['lincoln center','lincoln ctr','lincoln','65th broadway','65 broadway'], id: 'n8' },
      { keys: ['brooklyn bridge','brooklyn br','brooklyn'], id: 'n9' },
      { keys: ['battery park','battery','financial district','wall street','wall st','fidi','lower manhattan'], id: 'n10' },
      { keys: ['soho','spring st','spring street','spring lafayette','lafayette'], id: 'n20' },
      { keys: ['tribeca','chambers','chambers st','chambers street'], id: 'n19' },
      { keys: ['houston','houston st','houston street','varick','varick st'], id: 'n1' },
      { keys: ['chelsea','23rd 6th','23 6th','23rd st 6th','23rd avenue'], id: 'n3' },
      { keys: ['flatiron','flat iron','23rd broadway','23 broadway','madison sq park'], id: 'n14' },
      { keys: ['herald square','herald sq','herald','macy','macys','34th broadway','34 broadway'], id: 'n15' },
      { keys: ['57th','57 st','57th st','carnegie','carnegie hall','57th 7th'], id: 'n17' },
      { keys: ['72nd','72 st','72nd st','72nd broadway','upper west','uws'], id: 'n18' },
      { keys: ['fdr','fdr drive','east side','east river','59th fdr','sutton'], id: 'n13' },
      { keys: ['grand central','grand central station','grand central terminal','gct','42nd 5th','42 5th','library','nypl','bryant park','midtown east'], id: 'n16' },
      { keys: ['gramercy','gramercy park','14th 3rd','14 3rd','stuyvesant'], id: 'n11' },
      { keys: ['park ave','park avenue','murray hill','34th park','34 park'], id: 'n12' }
    ];

    for (const group of aliases) {
      for (const kw of group.keys) {
        if (lower.includes(kw) || kw.includes(lower)) return group.id;
      }
    }

    // ── Tier 2: match street numbers ("34th" → nodes with "34th" in name) ─
    const streetMatch = lower.match(/(\d+)(?:st|nd|rd|th)?/);
    if (streetMatch) {
      const num = streetMatch[1];
      const candidates = [];
      this.router.nodes.forEach((node, id) => {
        if (node.name.includes(num)) candidates.push(id);
      });
      if (candidates.length === 1) return candidates[0];
      if (candidates.length > 1) {
        // pick the one whose name shares the most words with input
        const words = lower.split(/\s+/);
        let bestId = candidates[0], bestS = 0;
        candidates.forEach(id => {
          const name = this.router.nodes.get(id).name.toLowerCase();
          const s = words.filter(w => name.includes(w)).length;
          if (s > bestS) { bestS = s; bestId = id; }
        });
        return bestId;
      }
    }

    // ── Tier 3: fuzzy word overlap against all node names ───────────────
    const words = lower.split(/\s+/).filter(w => w.length >= 2);
    let best = null, bestScore = 0;
    this.router.nodes.forEach((node, id) => {
      const name = node.name.toLowerCase();
      let score = 0;
      for (const w of words) {
        if (name.includes(w)) score += w.length;    // longer word matches score higher
      }
      if (score > bestScore) { bestScore = score; best = id; }
    });
    if (best) return best;

    // ── Tier 4: substring check (input inside a node name or vice versa)
    this.router.nodes.forEach((node, id) => {
      const name = node.name.toLowerCase();
      if (name.includes(lower) || lower.includes(name.split('(')[0].trim())) {
        best = id;
      }
    });
    return best;
  }

  /** Returns a readable list of location names the resolver understands */
  _getAvailableLocationNames() {
    const names = [];
    this.router.nodes.forEach(n => names.push(n.name));
    return names;
  }

  planRoute() {
    const originInput = document.getElementById('origin-input');
    const destinationInput = document.getElementById('destination-input');

    const origin = originInput ? originInput.value.trim() : '';
    const destination = destinationInput ? destinationInput.value.trim() : '';

    if (!origin || !destination) {
      this.showNotification('Please enter both origin and destination addresses', 'error');
      return;
    }

    this.showLoading();

    // Resolve text to graph nodes
    const startNode = this._resolveLocation(origin);
    const goalNode  = this._resolveLocation(destination);

    if (!startNode || !goalNode) {
      this.hideLoading();
      const places = this._getAvailableLocationNames().slice(0, 8).join(', ');
      this.showNotification(
        `Could not resolve location. Try: ${places}…`, 'error'
      );
      return;
    }

    if (startNode === goalNode) {
      this.hideLoading();
      this.showNotification('Origin and destination resolve to the same node', 'error');
      return;
    }

    // Run A* with three cost strategies
    const routes = this.router.computeRoutes(startNode, goalNode);

    if (!routes.length) {
      this.hideLoading();
      this.showNotification('No route found between these locations', 'error');
      return;
    }

    this.computedRoutes = routes;
    this.selectedRouteIndex = 0;

    this.displayRouteOptions();
    this.showRouteSummary();
    this.hideLoading();

    const startName = this.router.nodes.get(startNode).name;
    const goalName  = this.router.nodes.get(goalNode).name;
    this.showNotification(
      `A* found ${routes.length} routes: ${startName} → ${goalName}`, 'success'
    );
  }

  displayRouteOptions() {
    const container = document.getElementById('route-options-container');
    const section = document.getElementById('route-options-section');
    
    if (!container || !section) return;

    section.classList.remove('hidden');
    
    const routes = this.computedRoutes;
    container.innerHTML = routes.map((route, index) => `
      <div class="route-option ${index === this.selectedRouteIndex ? 'selected' : ''}" data-route-index="${index}">
        <div class="route-option-header">
          <span class="route-name">${route.name}</span>
          <span class="route-duration">${route.duration_current}</span>
        </div>
        <div class="route-details">
          <span class="route-distance">${route.distance}</span>
          <span class="route-delay">+${route.traffic_delay} delay</span>
        </div>
        ${route.algorithm ? `<div class="route-algo" style="font-size:11px;color:var(--color-primary);margin-top:4px;">⚡ ${route.algorithm}</div>` : ''}
      </div>
    `).join('');

    // Add click listeners
    container.querySelectorAll('.route-option').forEach(option => {
      option.addEventListener('click', (e) => {
        const routeIndex = parseInt(e.currentTarget.dataset.routeIndex);
        this.selectRoute(routeIndex);
      });
    });

    // Display the selected route
    this.displayRouteOnMap(this.selectedRouteIndex);
  }

  selectRoute(index) {
    this.selectedRouteIndex = index;
    
    // Update UI
    const container = document.getElementById('route-options-container');
    if (container) {
      container.querySelectorAll('.route-option').forEach((option, i) => {
        option.classList.toggle('selected', i === index);
      });
    }

    // Update map
    this.displayRouteOnMap(index);
    this.updateRouteSummary(index);
  }

  displayRouteOnMap(routeIndex) {
    try {
      // Clear existing route
      if (this.routeLayer) {
        this.routeLayer.clearLayers();
      } else {
        this.routeLayer = L.layerGroup();
        if (this.map) this.routeLayer.addTo(this.map);
      }

      const route = this.computedRoutes[routeIndex];
      if (!route || !this.map) return;

      // Draw each segment colour-coded by traffic condition
      const coords = route.coordinates;
      for (let i = 0; i < coords.length - 1; i++) {
        const cond = route.traffic_conditions && route.traffic_conditions[i];
        let segColor = TRAFFIC_DATA.map_config.colors.route_primary;
        if (cond === 'heavy')    segColor = TRAFFIC_DATA.map_config.colors.traffic_heavy;
        else if (cond === 'moderate') segColor = TRAFFIC_DATA.map_config.colors.traffic_moderate;
        else if (cond === 'light')    segColor = TRAFFIC_DATA.map_config.colors.traffic_free;
        const seg = L.polyline([coords[i], coords[i + 1]], { color: segColor, weight: 6, opacity: 0.9 });
        this.routeLayer.addLayer(seg);
      }

      // Full route line used for bounds fitting
      const routeLine = L.polyline(coords, { opacity: 0 });

      // Add start marker
      const startMarker = L.marker(route.coordinates[0], {
        icon: L.divIcon({
          className: 'route-marker-start',
          html: '<div style="background: #22c55e; color: white; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; font-weight: bold; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3); font-size: 16px;">A</div>',
          iconSize: [32, 32],
          iconAnchor: [16, 16]
        })
      });

      // Add end marker
      const endMarker = L.marker(route.coordinates[route.coordinates.length - 1], {
        icon: L.divIcon({
          className: 'route-marker-end',
          html: '<div style="background: #ef4444; color: white; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; font-weight: bold; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3); font-size: 16px;">B</div>',
          iconSize: [32, 32],
          iconAnchor: [16, 16]
        })
      });

      this.routeLayer.addLayer(routeLine);
      this.routeLayer.addLayer(startMarker);
      this.routeLayer.addLayer(endMarker);

      // Fit map to route bounds
      this.map.fitBounds(routeLine.getBounds(), { padding: [40, 40] });
    } catch (error) {
      console.error('Error displaying route:', error);
    }
  }

  swapRouteInputs() {
    const originInput = document.getElementById('origin-input');
    const destinationInput = document.getElementById('destination-input');
    
    if (originInput && destinationInput) {
      const temp = originInput.value;
      originInput.value = destinationInput.value;
      destinationInput.value = temp;
    }
  }

  showRouteSummary() {
    const summary = document.getElementById('route-summary');
    if (summary) {
      summary.classList.remove('hidden');
      this.updateRouteSummary(this.selectedRouteIndex);
    }
  }

  updateRouteSummary(routeIndex) {
    const content = document.getElementById('summary-content');
    const route = this.computedRoutes[routeIndex];

    if (!content || !route) return;

    content.innerHTML = `
      <div style="font-family: var(--font-family-base);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid var(--color-border);">
          <h4 style="margin: 0; color: var(--color-text);">${route.name}</h4>
          <div style="font-size: 20px; font-weight: bold; color: var(--color-primary);">${route.duration_current}</div>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px;">
          <div>
            <span style="font-size: 12px; color: var(--color-text-secondary);">Distance:</span><br>
            <span style="color: var(--color-text); font-weight: 500;">${route.distance}</span>
          </div>
          <div>
            <span style="font-size: 12px; color: var(--color-text-secondary);">Traffic Delay:</span><br>
            <span style="color: #f59e0b; font-weight: 500;">${route.traffic_delay}</span>
          </div>
          <div>
            <span style="font-size: 12px; color: var(--color-text-secondary);">Predicted Time:</span><br>
            <span style="color: var(--color-text); font-weight: 500;">${route.duration_predicted}</span>
          </div>
          <div>
            <span style="font-size: 12px; color: var(--color-text-secondary);">Route Type:</span><br>
            <span style="color: var(--color-text); font-weight: 500;">${route.route_type.replace('_', ' ')}</span>
          </div>
        </div>

        <div style="margin-bottom: 16px;">
          <h5 style="margin: 0 0 8px 0; color: var(--color-text);">Traffic Conditions</h5>
          <div style="display: flex; flex-direction: column; gap: 6px;">
            ${route.traffic_conditions.map((condition, i) => `
              <div style="display: flex; align-items: center; gap: 8px;">
                <div style="width: 12px; height: 12px; background-color: ${this.getTrafficColor(condition)}; border-radius: 50%;"></div>
                <span style="font-size: 14px; color: var(--color-text);">Segment ${i + 1}: ${condition.toUpperCase()}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div style="background: var(--color-bg-1); padding: 12px; border-radius: 8px; border: 1px solid var(--color-border);">
          <h5 style="margin: 0 0 8px 0; color: var(--color-text);">AI Recommendations</h5>
          <ul style="margin: 0; padding-left: 16px; font-size: 14px; color: var(--color-text);">
            <li>Best departure: ${TRAFFIC_DATA.traffic_predictions.next_30_minutes.recommended_departure}</li>
            <li>Traffic expected: ${TRAFFIC_DATA.traffic_predictions.next_30_minutes.overall_congestion} in 30 min</li>
            <li>Alternative routes ${TRAFFIC_DATA.traffic_predictions.next_30_minutes.alternate_routes_needed ? 'recommended' : 'not needed'}</li>
          </ul>
        </div>
      </div>
    `;
  }

  hideRouteSummary() {
    const summary = document.getElementById('route-summary');
    const section = document.getElementById('route-options-section');
    
    if (summary) summary.classList.add('hidden');
    if (section) section.classList.add('hidden');
    
    // Clear route from map
    if (this.routeLayer) {
      this.routeLayer.clearLayers();
    }
  }

  getTrafficColor(condition) {
    const colors = TRAFFIC_DATA.map_config.colors;
    switch (condition) {
      case 'light': return colors.traffic_free;
      case 'moderate': return colors.traffic_moderate;
      case 'heavy': return colors.traffic_heavy;
      default: return '#888888';
    }
  }

  findUserLocation() {
    if (!navigator.geolocation) {
      this.showNotification('Geolocation not supported by this browser', 'error');
      return;
    }

    this.showLoading();

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        if (this.map) {
          this.map.setView([latitude, longitude], 16);
          
          const userMarker = L.marker([latitude, longitude], {
            icon: L.divIcon({
              className: 'user-location-marker',
              html: '<div style="width: 20px; height: 20px; background-color: #007bff; border: 4px solid white; border-radius: 50%; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>',
              iconSize: [20, 20],
              iconAnchor: [10, 10]
            })
          }).addTo(this.map);

          setTimeout(() => {
            if (this.map && this.map.hasLayer(userMarker)) {
              this.map.removeLayer(userMarker);
            }
          }, 10000);
        }

        this.hideLoading();
        this.showNotification('Your location found', 'success');
      },
      (error) => {
        this.hideLoading();
        this.showNotification('Unable to get your location', 'error');
      },
      { timeout: 10000 }
    );
  }

  toggleControlPanel() {
    const panel = document.getElementById('control-panel');
    if (!panel) return;
    
    this.controlPanelVisible = !this.controlPanelVisible;
    panel.classList.toggle('hidden', !this.controlPanelVisible);
  }

  toggleLayer(layerName, visible) {
    this.layerStates[layerName] = visible;

    switch (layerName) {
      case 'traffic_signals':
        this.signalMarkers.forEach(marker => {
          if (visible && this.map && !this.map.hasLayer(marker)) {
            marker.addTo(this.map);
          } else if (!visible && this.map && this.map.hasLayer(marker)) {
            this.map.removeLayer(marker);
          }
        });
        break;

      case 'traffic_flow':
        if (visible && this.map && this.trafficFlowLayer && !this.map.hasLayer(this.trafficFlowLayer)) {
          this.trafficFlowLayer.addTo(this.map);
        } else if (!visible && this.map && this.trafficFlowLayer && this.map.hasLayer(this.trafficFlowLayer)) {
          this.map.removeLayer(this.trafficFlowLayer);
        }
        break;

      case 'incidents':
        this.incidentMarkers.forEach(marker => {
          if (visible && this.map && !this.map.hasLayer(marker)) {
            marker.addTo(this.map);
          } else if (!visible && this.map && this.map.hasLayer(marker)) {
            this.map.removeLayer(marker);
          }
        });
        break;

      case 'analytics':
        this.toggleAnalyticsDashboard(visible);
        break;
    }
  }

  toggleAnalyticsDashboard(show) {
    const dashboard = document.getElementById('analytics-dashboard');
    if (dashboard) {
      dashboard.classList.toggle('hidden', !show);
      
      if (show) {
        // Initialize chart if not already done
        setTimeout(() => {
          this.initializeAnalytics();
        }, 100);
      }
    }
  }

  initializeAnalytics() {
    const ctx = document.getElementById('traffic-chart');
    if (ctx && !this.trafficChart) {
      try {
        this.trafficChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: TRAFFIC_DATA.analytics_data.hourly_patterns.map(p => `${p.hour}:00`),
            datasets: [{
              label: 'Congestion Level (%)',
              data: TRAFFIC_DATA.analytics_data.hourly_patterns.map(p => p.congestion),
              borderColor: '#1FB8CD',
              backgroundColor: 'rgba(31, 184, 205, 0.1)',
              tension: 0.4,
              fill: true,
              pointBackgroundColor: '#1FB8CD',
              pointBorderColor: '#1FB8CD',
              pointRadius: 4
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                max: 100,
                grid: {
                  color: 'rgba(0,0,0,0.1)'
                },
                ticks: {
                  callback: function(value) {
                    return value + '%';
                  }
                }
              },
              x: {
                grid: {
                  color: 'rgba(0,0,0,0.1)'
                }
              }
            },
            elements: {
              point: {
                hoverRadius: 6
              }
            }
          }
        });
      } catch (error) {
        console.error('Failed to initialize chart:', error);
      }
    }
  }

  changeMapStyle(style) {
    if (!this.map || !this.tileLayers[style]) return;
    
    if (this.tileLayers[this.currentTileLayer]) {
      this.map.removeLayer(this.tileLayers[this.currentTileLayer]);
    }
    
    this.currentTileLayer = style;
    this.tileLayers[this.currentTileLayer].addTo(this.map);
  }

  centerMap() {
    if (!this.map) return;
    
    const config = TRAFFIC_DATA.map_config;
    this.map.setView(config.initial_center, config.initial_zoom);
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }

  startRealTimeUpdates() {
    try {
      if (this.updateInterval) {
        clearInterval(this.updateInterval);
      }

      // Update every second for smooth countdowns
      this.updateInterval = setInterval(() => {
        try {
          this.simulateTrafficUpdates();
          this.updateSignalCountdowns();
          this.updateLastUpdateTime();
        } catch (error) {
          console.error('Update cycle error:', error);
        }
      }, 1000);

      // Major updates at configured interval
      const majorUpdateInterval = TRAFFIC_DATA.map_config.update_interval || 30000;
      setInterval(() => {
        try {
          this.simulateSignalChanges();
          this.updateStatistics();
          this.updatePredictions();
        } catch (error) {
          console.error('Major update cycle error:', error);
        }
      }, majorUpdateInterval);
    } catch (error) {
      console.error('Real-time update setup error:', error);
    }
  }

  simulateTrafficUpdates() {
    this.trafficSignals.forEach(signal => {
      if (signal.time_remaining > 0) {
        signal.time_remaining--;
      } else {
        this.advanceSignalState(signal);
      }
    });
  }

  advanceSignalState(signal) {
    const states = ['red', 'green', 'yellow'];
    const currentIndex = states.indexOf(signal.current_state);
    const nextIndex = (currentIndex + 1) % states.length;
    
    signal.current_state = states[nextIndex];
    signal.next_state = states[(nextIndex + 1) % states.length];
    
    switch (signal.current_state) {
      case 'red':
        signal.time_remaining = Math.floor(signal.cycle_time * 0.5);
        break;
      case 'green':
        signal.time_remaining = Math.floor(signal.cycle_time * 0.4);
        break;
      case 'yellow':
        signal.time_remaining = Math.floor(signal.cycle_time * 0.1);
        break;
    }

    this.updateSignalMarker(signal);
  }

  simulateSignalChanges() {
    this.trafficSignals.forEach(signal => {
      const volumeChange = (Math.random() - 0.5) * 20;
      signal.traffic_volume = Math.max(0, Math.min(100, signal.traffic_volume + volumeChange));
      
      if (Math.random() < 0.05) {
        signal.emergency_override = !signal.emergency_override;
        this.updateSignalMarker(signal);
      }
    });
  }

  updateSignalMarker(signal) {
    try {
      const marker = this.signalMarkers.get(signal.id);
      if (!marker) return;

      const color = this.getSignalColor(signal);
      marker.setIcon(L.divIcon({
        className: 'signal-marker',
        html: `
          <div style="
            width: 28px;
            height: 28px;
            background-color: ${color};
            border: 3px solid rgba(255,255,255,0.9);
            border-radius: 50%;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            ${signal.emergency_override ? 'animation: pulse 1s infinite;' : ''}
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          ">
            ${signal.emergency_override ? '<div style="position: absolute; top: -3px; right: -3px; width: 10px; height: 10px; background: #ff0066; border: 2px solid white; border-radius: 50%; animation: pulse 0.5s infinite;"></div>' : ''}
            <div style="font-size: 10px; color: white; font-weight: bold;">${signal.time_remaining}</div>
          </div>
        `,
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      }));

      if (marker.isPopupOpen()) {
        marker.setPopupContent(this.createSignalPopup(signal));
      }
    } catch (error) {
      console.error('Error updating signal marker:', error);
    }
  }

  updateSignalCountdowns() {
    // Update countdown displays in open popups
    this.trafficSignals.forEach(signal => {
      const countdownElement = document.getElementById(`countdown-${signal.id}`);
      if (countdownElement) {
        countdownElement.textContent = signal.time_remaining;
      }
    });
  }

  updateStatistics() {
    try {
      const metrics = TRAFFIC_DATA.analytics_data.current_metrics;
      
      // Simulate realistic fluctuations
      metrics.total_vehicles_monitored += Math.floor((Math.random() - 0.5) * 200);
      metrics.average_speed_citywide += (Math.random() - 0.5) * 1.5;
      metrics.congestion_index += (Math.random() - 0.5) * 3;
      metrics.signal_efficiency += (Math.random() - 0.5) * 2;

      // Keep values in realistic ranges
      metrics.total_vehicles_monitored = Math.max(40000, Math.min(50000, metrics.total_vehicles_monitored));
      metrics.average_speed_citywide = Math.max(15, Math.min(30, metrics.average_speed_citywide));
      metrics.congestion_index = Math.max(50, Math.min(85, metrics.congestion_index));
      metrics.signal_efficiency = Math.max(70, Math.min(90, metrics.signal_efficiency));

      // Update UI elements
      this.updateElement('vehicles-monitored', metrics.total_vehicles_monitored.toLocaleString());
      this.updateElement('avg-city-speed', `${metrics.average_speed_citywide.toFixed(1)} mph`);
      this.updateElement('congestion-index', `${Math.round(metrics.congestion_index)}%`);
      this.updateElement('active-incidents', TRAFFIC_DATA.traffic_network.incidents.length);
      this.updateElement('signal-efficiency', `${Math.round(metrics.signal_efficiency)}%`);
      this.updateElement('avg-delay', `${(6 + Math.random() * 8).toFixed(1)} min`);
    } catch (error) {
      console.error('Statistics update error:', error);
    }
  }

  updatePredictions() {
    try {
      // Simulate dynamic predictions based on current time
      const currentHour = new Date().getHours();
      let congestionStatus;
      let peakTime;
      let departureTime;

      if (currentHour >= 7 && currentHour <= 9) {
        congestionStatus = 'peak morning rush';
        peakTime = '8:30 AM';
        departureTime = 'after 10:00 AM';
      } else if (currentHour >= 17 && currentHour <= 19) {
        congestionStatus = 'peak evening rush';
        peakTime = '6:00 PM';
        departureTime = 'after 7:30 PM';
      } else if (currentHour >= 11 && currentHour <= 14) {
        congestionStatus = 'moderate lunch traffic';
        peakTime = '12:30 PM';
        departureTime = 'now or after 2:00 PM';
      } else {
        congestionStatus = 'light traffic';
        peakTime = 'next rush hour';
        departureTime = 'anytime';
      }
      
      this.updateElement('prediction-30', congestionStatus);
      this.updateElement('prediction-peak', peakTime);
      this.updateElement('prediction-departure', departureTime);
    } catch (error) {
      console.error('Predictions update error:', error);
    }
  }

  updateElement(id, value) {
    try {
      const element = document.getElementById(id);
      if (element && element.textContent !== value) {
        element.textContent = value;
      }
    } catch (error) {
      console.error('Element update error:', error);
    }
  }

  updateLastUpdateTime() {
    try {
      this.lastUpdateTime = new Date();
      const timeString = this.lastUpdateTime.toLocaleTimeString();
      this.updateElement('last-update', `Last update: ${timeString}`);
    } catch (error) {
      console.error('Time update error:', error);
    }
  }

  showLoading() {
    try {
      const loading = document.getElementById('loading-overlay');
      if (loading) {
        loading.style.display = 'flex';
        loading.classList.remove('hidden');
      }
    } catch (error) {
      console.error('Show loading error:', error);
    }
  }

  hideLoading() {
    try {
      const loading = document.getElementById('loading-overlay');
      if (loading) {
        loading.style.display = 'none';
        loading.classList.add('hidden');
      }
      console.log('Loading hidden successfully');
    } catch (error) {
      console.error('Hide loading error:', error);
    }
  }

  showNotification(message, type = 'info') {
    try {
      const notification = document.getElementById('notification');
      const messageElement = notification?.querySelector('.notification-message');
      
      if (notification && messageElement) {
        messageElement.textContent = message;
        notification.classList.remove('hidden');
        
        // Auto-hide after 4 seconds
        setTimeout(() => this.hideNotification(), 4000);
      }
    } catch (error) {
      console.error('Notification error:', error);
    }
  }

  hideNotification() {
    try {
      const notification = document.getElementById('notification');
      if (notification) {
        notification.classList.add('hidden');
      }
    } catch (error) {
      console.error('Hide notification error:', error);
    }
  }
}

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  try {
    console.log('DOM loaded, initializing TrafficFlow Pro...');
    new TrafficFlowPro();
  } catch (error) {
    console.error('Application initialization error:', error);
    // Emergency fallback
    setTimeout(() => {
      const loading = document.getElementById('loading-overlay');
      if (loading) {
        loading.style.display = 'none';
        loading.classList.add('hidden');
      }
    }, 2000);
  }
});