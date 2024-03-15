import React from 'react'
import "./About.css"
import HouseAbout from '../../assets/HouseAbout.jpg'; // Adjust path as needed
import LocationIcon from '../../assets/LocationIcon.svg'; // Adjust path as needed
import GymIcon from '../../assets/GymIcon.svg'; // Adjust path as needed
import PoolIcon from '../../assets/PoolIcon.svg'; // Adjust path as needed
import SecurityIcon from '../../assets/SecurityIcon.svg'; // Adjust path as needed
import SolarIcon from '../../assets/SolarIcon.svg'; // Adjust path as needed
import ECIcon from '../../assets/ECIcon.svg'; // Adjust path as needed
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';




const About = () => {
  const { t } = useTranslation();


  return (
    <div id = 'about-section' className="about-project">

    <h2 className='HeadlineAbout'>{t('about.headline')}</h2>

      <div className="content-container-about">

        <div className="image-container-about">
          <img src={HouseAbout} alt="House" />
        </div>

        <div className='text-container-about'> 
          <p className='Slogan'>{t('navbar.Slogan')}</p>
          <ul>
            <li><Trans i18nKey="about.li1" /></li>
            <li><Trans i18nKey="about.li2" /> <b>1900</b> {t('about.meters')} </li>
            <li><Trans i18nKey="about.li3" />< b>300</b> {t('about.meters')} </li>
            <li><Trans i18nKey="about.li4" /> <b>400</b> {t('about.meters')}  </li>
            <li><Trans i18nKey="about.li5" /></li>
            <li><Trans i18nKey="about.li6" /></li>
            <li><Trans i18nKey="about.li7" /></li>
          </ul>
        </div>
        
      </div> 
      <div className="icons-container-about">

        <Link to={"/gallery/location"}> 
          <div className="icon-item">
            <img src={LocationIcon}alt="Location" />
            <span>{t('about.location')}</span>
          </div>
        </Link>

        <Link to={"/gallery/solar-panels"}> 
          <div className="icon-item">
            <img src={SolarIcon} alt="Solar Panels" />
            <span>{t('about.solarPanels')}</span>
          </div>
        </Link>

        <Link to={"/gallery/gym"}> 
          <div className="icon-item">
            <img src={GymIcon} alt="Gym" />
            <span>{t('about.privateGym')}</span>
          </div>
        </Link>

        <Link to={"/gallery/security"}> 
          <div className="icon-item">
            <img src={SecurityIcon} alt="Advanced Security" />
            <span>{t('about.advancedSecurity')}</span>
          </div>
        </Link>

        <Link to={"/gallery/pool"}> 
          <div className="icon-item">
            <img src={PoolIcon} alt="Pool" />
            <span>{t('about.indoorPool')}</span>
          </div>
        </Link>

        <Link to={"/gallery/EC-charging"}> 
          <div className="icon-item">
            <img src={ECIcon} alt="EC Charging stations" />
            <span>{t('about.chargingStations')}</span>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default About