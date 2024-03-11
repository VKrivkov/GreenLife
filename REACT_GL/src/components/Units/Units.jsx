import React, { useState } from 'react';
import './Units.css';
import Plan1 from '../../assets/Plan1.jpg';
import Plan2 from '../../assets/Plan2.jpg';
import Plan3 from '../../assets/Plan3.jpg';
import { Link } from 'react-router-dom';

const Units = () => {
  const [selectedUnit, setSelectedUnit] = useState('one');
  const [price, setPrice] = useState('364,000 USD');
  const [planImage, setPlanImage] = useState(Plan1);


  const handleSelection = (unitType) => {
    setSelectedUnit(unitType);
    switch (unitType) {
      case 'one':
        setPrice('364,000 USD');
        setPlanImage(Plan1);
        break;
      case 'two':
        setPrice('464,000 USD'); // Set the correct price for two bedrooms
        setPlanImage(Plan2);
        break;
      case 'three':
        setPrice('564,000 USD'); // Set the correct price for three bedrooms
        setPlanImage(Plan3);
        break;
      default:
    }

  };

  const handleButtonClick = () => {
    window.location.href = '/listing';

  };

  
  return (
    <div id = 'units-section' className='units'>
      <div className='units-header'>
        <h1 className='headline-units'>Apartments</h1>
        <p>Select the perfect apartment that aligns with your preferences, needs, and budget. Our range includes 1 to 3-bedroom options.</p>
      </div>
      <div className='content'>
        <div className='unit-selector'>
          <p className={`unit-option ${selectedUnit === 'one' ? 'active' : ''}`} onClick={() => handleSelection('one')}>One Bedroom</p>
          <p className={`unit-option ${selectedUnit === 'two' ? 'active' : ''}`} onClick={() => handleSelection('two')}>Two Bedrooms</p>
          <p className={`unit-option ${selectedUnit === 'three' ? 'active' : ''}`} onClick={() => handleSelection('three')}>Three Bedrooms</p>
          <div className='price'>
            <p>Starting from</p>
            <p className='price-value'>{price}</p>
          </div>
        </div>
        <div className='plan-container'>
          <img src={planImage} alt={`${selectedUnit} unit plan`} />
          <button onClick = {handleButtonClick} className='available-units'>Show Apartments</button>
        </div>
      </div>
    </div>
  );
};

export default Units;
