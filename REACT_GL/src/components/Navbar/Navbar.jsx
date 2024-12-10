// src/components/Navbar.jsx
import React, { useState }  from 'react';
import './Navbar.css';
import Logo from '../../assets/smalllogo_Rich olive.svg'; // make sure the path is correct
import LogoT from '../../assets/logo_Rich olive-2.svg'; // make sure the path is correct

import BurgerIcon from '../../assets/BurgerIcon.svg'; // Path to burger menu icon
import CloseIcon from '../../assets/CloseIcon.svg'; // Path to close menu icon
import { useTranslation } from 'react-i18next';


import {Link} from "react-router-dom"


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useTranslation();
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  const handleLogoClick = () => {
    // This will send the user to the homepage and reload the page
    window.location.href = '/';
    
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    if (isMenuOpen) toggleMenu(); // Close the menu if it's open

  
    // Calculate the position of the section
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
  
    // Define the smooth scroll function
    const smoothScroll = (targetPosition) => {
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800; // Duration of the scroll animation in milliseconds
      let startTime = null;
  
      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const nextScrollPosition = ease(timeElapsed, startPosition, distance, duration);
  
        window.scrollTo(0, nextScrollPosition);
  
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };
  
      const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };
  
      requestAnimationFrame(animation);
    };
  
    // Execute the smooth scroll function
    smoothScroll(sectionTop);
  };
  

  return (
    <div className={`navbar ${isMenuOpen ? "show" : ""}`}>
      <div onClick={handleLogoClick} className="navbar-brand" style={{ cursor: 'pointer' }}>
        <img src={LogoT} alt="Logo" className="navbar-logo" />
      </div>
      <div className={`navbar-center ${isMenuOpen ? "show" : ""}`}>
        <a onClick={() => scrollToSection('exterior')} className="nav-link">{t('navbar.About')}</a>
        <a onClick={() => scrollToSection('location')} className="nav-link">{t('navbar.Gallery')}</a>
        <a onClick={() => scrollToSection('interior')} className="nav-link">{t('navbar.Apartments')}</a>
        <a onClick={() => scrollToSection('units-section')} className="nav-link">{t('navbar.Benefits')}</a>
      </div>
      <div className={`navbar-side ${isMenuOpen ? "show" : ""}`}>
        <Link to="/contact" className="contact-us">{t('navbar.ContactUs')}</Link>
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        <img src={isMenuOpen ? CloseIcon : BurgerIcon} alt="Menu" className="menu-icon" />
      </div>
    </div>
  );
};





export default Navbar;
