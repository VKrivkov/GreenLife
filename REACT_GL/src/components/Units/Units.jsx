import React, { useState } from 'react';
import './Units.css';
import Plan1 from '../../assets/Plan1.jpg';
import Plan2 from '../../assets/Plan2.jpg';
import Plan3 from '../../assets/Plan3.jpg';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Units = () => {
  const [selectedUnit, setSelectedUnit] = useState('one');
  const [price, setPrice] = useState('364,000 EUR');
  const [planImage, setPlanImage] = useState(Plan1);
  const { t } = useTranslation();

  const handleSelection = (unitType) => {
    setSelectedUnit(unitType);
    switch (unitType) {
      case 'one':
        setPrice('364,000 EUR');
        setPlanImage(Plan1);
        break;
      case 'two':
        setPrice('464,000 EUR');
        setPlanImage(Plan2);
        break;
      case 'three':
        setPrice('564,000 EUR');
        setPlanImage(Plan3);
        break;
      default:
    }
  };

  const handleButtonClick = () => {
    window.location.href = '/listing';
  };

  return (
    <div id='units-section' className='units'>
      <div className='units-header'>
        <h1 className='headline-units'>{t('units.headline')}</h1>
        <p>{t('units.description')}</p>
      </div>
      <div className='content'>
        <div className='unit-selector'>
          <p className={`unit-option ${selectedUnit === 'one' ? 'active' : ''}`} onClick={() => handleSelection('one')}>{t('units.oneBedroom')}</p>
          <p className={`unit-option ${selectedUnit === 'two' ? 'active' : ''}`} onClick={() => handleSelection('two')}>{t('units.twoBedrooms')}</p>
          <p className={`unit-option ${selectedUnit === 'three' ? 'active' : ''}`} onClick={() => handleSelection('three')}>{t('units.threeBedrooms')}</p>
          <div className='price'>
            <p>{t('units.startingFrom')}</p>
            <p className='price-value'>{price}</p>
          </div>
        </div>
        <div className='plan-container'>
        <img src={planImage} alt={`${selectedUnit} unit plan`} />
          <button onClick={handleButtonClick} className='available-units'>{t('units.showApartments')}</button>
        </div>
      </div>
    </div>
  );
};

export default Units;
