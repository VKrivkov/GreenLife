import React from 'react';
import './Navbar2.css'; // Ensure you have a corresponding CSS file
import LogoT from '../../../assets/logo_Rich olive-2.svg'; // make sure the path is correct
import Logo from '../../../assets/smalllogo_Rich olive.svg'; // make sure the path is correct


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
        <div onClick={handleLogoClick} className="navbar-brand2" style={{ cursor: 'pointer' }}>
          <img src={Logo} alt="Logo" className="navbar-logo-small" />
          <img src={LogoT} alt="Logo" className="navbar-logo" />
        </div>
      </div>
      <div className={`navbar-sideshow"}`}>
        <Link to="/contact" className="contact-us">{t('navbar.ContactUs')}</Link>
      </div>
    </nav>
  );
};

export default Navbar2;
