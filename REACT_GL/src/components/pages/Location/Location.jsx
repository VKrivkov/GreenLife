import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Location.css';

const Location = () => {
  const position = [34.832139, 33.584444]; // Your coordinates
  
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true} className="map-container">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          GreenLife.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Location;
