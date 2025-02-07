import React from 'react'
import "./About.css"
import HouseAbout from '../../assets/HouseAbout.webp'; // Adjust path as needed
import LocationIcon from '../../assets/LocationIcon.svg'; // Adjust path as needed
import GymIcon from '../../assets/GymIcon.svg'; // Adjust path as needed
import PoolIcon from '../../assets/PoolIcon.svg'; // Adjust path as needed
import SecurityIcon from '../../assets/SecurityIcon.svg'; // Adjust path as needed
import SolarIcon from '../../assets/SolarIcon.svg'; // Adjust path as needed
import ECIcon from '../../assets/ECIcon.svg'; // Adjust path as needed
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import Location from '../pages/Location/Location.jsx';
import MapImage from '../../assets/MapImg.png'





const About = () => {
  const { t } = useTranslation();


  return (
    <div className="about-project">
        <div className='map-image-comtainer'>
          <img src={MapImage} alt='Map Image'/>
        </div>
      <div className="content-container-about">
        <div className="image-container-about">
          <Location/>
        </div>

        <div className='text-container-about'> 
          <ul>
            <li><Trans i18nKey="about.li1" /></li>
            <li><Trans i18nKey="about.li2" /> <b>1300</b> {t('about.meters')} </li>
            <li><Trans i18nKey="about.li3" />< b>300</b> {t('about.meters')} </li>
            <li><Trans i18nKey="about.li4" /> <b>400</b> {t('about.meters')}  </li>
            <li><Trans i18nKey="about.li8" /> <b>9</b> {t('about.kilometers')}  </li>

            <li><Trans i18nKey="about.li5" /></li>
            <li><Trans i18nKey="about.li6" /></li>
            <li><Trans i18nKey="about.li7" /></li>
          </ul>
        </div>
        
      </div> 
      <div className="icons-container-about">

        <div className="icon-item">
          <img src={LocationIcon}alt="Location" />
          <span>{t('about.location')}</span>
        </div>

        <div className="icon-item">
          <img src={SolarIcon} alt="Solar Panels" />
          <span>{t('about.solarPanels')}</span>
        </div>

        <div className="icon-item">
          <img src={GymIcon} alt="Gym" />
          <span>{t('about.privateGym')}</span>
        </div>

        <div className="icon-item">
          <img src={SecurityIcon} alt="Advanced Security" />
          <span>{t('about.advancedSecurity')}</span>
        </div>

        <div className="icon-item">
          <img src={PoolIcon} alt="Pool" />
          <span>{t('about.indoorPool')}</span>
        </div>

        <div className="icon-item">
          <img src={ECIcon} alt="EC Charging stations" />
          <span>{t('about.chargingStations')}</span>
        </div>

      </div>
    </div>
  )
}

export default About