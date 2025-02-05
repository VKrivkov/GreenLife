import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Location.css';
import smallLogo from '../../../assets/smalllogo_Rich olive.svg';
import school from '../../../assets/school.svg';
import shop from '../../../assets/shop.svg';


const Location = () => {
  const position = [34.832139, 33.584444]; // Your coordinates
  const supermarket_loc = [34.83065377644859, 33.581260043895206];
  const school_loc = [34.83046960947292, 33.578978573134364];

  const customIcon = new Icon ({
    iconUrl: smallLogo,
    iconSize: [65,65]
  });

  const shopIcon = new Icon ({
    iconUrl: shop,
    iconSize: [30,30]
  });

  const schoolIcon = new Icon ({
    iconUrl: school,
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
          Park Residences
        </Popup>
      </Marker>
      <Marker position={supermarket_loc} icon={shopIcon}>
        <Popup>
          Supermarket
        </Popup>
      </Marker>
      <Marker position={school_loc} icon={schoolIcon}>
        <Popup>
          School and kindergarten
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Location;
