// Card.jsx
import React from 'react';
import './Card.css';

const Card = ({ title, roomCount, area, planImage, onClick}) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-content">
        <img src={planImage} alt='Plan Image'></img>
      </div>
      {/* Render the title div only if title is not an empty string */}
      {title !== "" && <div className="card-title" title = {title}>{title}</div>}
      <div className="card-footer">
        <span>{roomCount}</span>
        <span className='area'>{area} m²</span>
      </div>
    </div>
  );
};

export default Card;
