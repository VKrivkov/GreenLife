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
    // <MapContainer center={position} zoom={13} scrollWheelZoom={true} className="map-container">
    //   <TileLayer
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //   />
    //   <Marker position={position} icon={customIcon}>
    //     <Popup>
    //       Park Residences
    //     </Popup>
    //   </Marker>
    //   <Marker position={supermarket_loc} icon={shopIcon}>
    //     <Popup>
    //       Supermarket
    //     </Popup>
    //   </Marker>
    //   <Marker position={school_loc} icon={schoolIcon}>
    //     <Popup>
    //       School and kindergarten
    //     </Popup>
    //   </Marker>
    // </MapContainer>

    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d6383.702323957627!2d33.58031143664141!3d34.83252959484982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDQ5JzU1LjkiTiAzM8KwMzUnMDQuMCJF!5e1!3m2!1sen!2slu!4v1738865102393!5m2!1sen!2slu" width={"100%"} height={"100%"} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  );
};

export default Location;
