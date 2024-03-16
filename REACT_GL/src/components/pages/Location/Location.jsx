import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Location.css';
import smallLogo from '../../../assets/Logo.png';

const Location = () => {
  const position = [34.832139, 33.584444]; // Your coordinates

  const customIcon = new Icon ({
    iconUrl: smallLogo,
    iconSize: [30,30]
  });

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true} className="map-container">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          GreenLife.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Location;
