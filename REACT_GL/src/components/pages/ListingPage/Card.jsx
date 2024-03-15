import React from 'react';
import './Card.css';

import { useTranslation } from 'react-i18next';



const Card = ({ title, roomCount, area, planImage, onClick}) => {
  const { t } = useTranslation();
  
  // Function to determine the correct word based on roomCount
  const getRoomWord = (count) => {
    return count == 1 ? t('room.singular') : t('room.plural');
  };

  return (
    <div className="card" onClick={onClick}>
      <div className="card-content">
        <img src={planImage} alt='Plan Image'></img>
      </div>
      {/* Render the title div only if title is not an empty string */}
      {title !== "" && <div className="card-title" title={title}>{title}</div>}
      <div className="card-footer">
        {/* Use the getRoomWord function to display the correct word for rooms */}
        <span>{roomCount} {getRoomWord(roomCount)}</span>
        <span className='area'>{area} m²</span>
      </div>
    </div>
  );
};

export default Card;
