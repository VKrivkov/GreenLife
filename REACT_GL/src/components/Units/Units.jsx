import React, { useState } from 'react';
import './Units.css';
import Plan1 from '../../assets/Plan1.webp';
import Plan2 from '../../assets/Plan2.webp';
import Plan3 from '../../assets/Plan3.webp';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Units = () => {
  const [selectedUnit, setSelectedUnit] = useState('three');
  const [price, setPrice] = useState('1,550 EUR');
  const [planImage, setPlanImage] = useState(Plan1);
  const { t } = useTranslation();

  const handleSelection = (unitType) => {
    setSelectedUnit(unitType);
    switch (unitType) {
      case 'one':
        setPrice('2,250 EUR');
        setPlanImage(Plan1);
        break;
      case 'two':
        setPrice('2,100 EUR');
        setPlanImage(Plan2);
        break;
      case 'three':
        setPrice('1,550 EUR');
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
            <p>{t('units.startingFrom')} {t('units.form2')}</p>
            <p className='price-value'>{price}</p>
          </div>
        </div>
        <div className='plan-container'>
        <img src={planImage} alt={`${selectedUnit} unit plan`} />
        </div>
        <button onClick={handleButtonClick} className='available-units'>{t('units.showApartments')}</button>

      </div>
    </div>
  );
};

export default Units;
