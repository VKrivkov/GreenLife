import React from 'react';
import './Navbar2.css'; // Ensure you have a corresponding CSS file
import GreenLifetext from '../../../assets/GreenLifetext.svg'; // make sure the path is correct
import Logo from '../../../assets/Logo.png'; // make sure the path is correct
import ArrowBack from '../../../assets/ArrowBack.svg'; // make sure the path is correct
import { useTranslation } from 'react-i18next';


import {Link, useNavigate} from "react-router-dom"


const Navbar2 = () => {

    const handleLogoClick = () => {
        // This will send the user to the homepage and reload the page
        window.location.href = '/';
      };

      const navigate = useNavigate();

      const goBack = () => {
        navigate(-1);
      };
    
      const { t } = useTranslation();

  return (
    <nav className="navbar2">
      <div className= 'nav2-left-side'>
        <img onClick={goBack} src={ArrowBack} alt="ArrowBack" className="navbar-ArrowBack" />
        <div onClick={handleLogoClick} className="navbar2-brand" style={{ cursor: 'pointer' }}>
          <img src={Logo} alt="Logo" className="navbar-logo" />
          <img src={GreenLifetext} alt="GreenLife Perivolia" className="navbar-text" />
        </div>
      </div>
      <div className='nav2-label'>
        <p>{t('navbar.Slogan')}</p>
      </div>
      <div className="nav2-links">
        <Link to="/contact" className="contact-us2">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar2;
