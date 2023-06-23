import { useState } from "react";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import "./Map.css";
import Legend from "./Legend";

const polyline = [
  [51.515, -0.09],
  [51.52, -0.1],
  [51.52, -100],
]

const limeOptions = { color: 'lime' }

const INITIAL_MAP_CONFIG = { 
  center: [55, 0], 
  zoom: 6 
  };

function Map() {
  const [map, setMap] = useState(null);

  return (
    <MapContainer
      center={INITIAL_MAP_CONFIG.center}
      zoom={INITIAL_MAP_CONFIG.zoom}
      scrollWheelZoom={true}
      whenCreated={setMap}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      <Polyline pathOptions={limeOptions} positions={polyline} />

      <Legend map={map} />
    </MapContainer>
  );
}

export default Map;
