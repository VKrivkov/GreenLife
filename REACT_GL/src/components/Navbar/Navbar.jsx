// src/components/Navbar.jsx
import React, { useState }  from 'react';
import './Navbar.css';
import GreenLifetext from '../../assets/GreenLifetext.svg'; // make sure the path is correct
import Logo from '../../assets/Logo.png'; // make sure the path is correct
import BurgerIcon from '../../assets/BurgerIcon.svg'; // Path to burger menu icon
import CloseIcon from '../../assets/CloseIcon.svg'; // Path to close menu icon



import {Link} from "react-router-dom"


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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
        <img src={Logo} alt="Logo" className="navbar-logo" />
        <img src={GreenLifetext} alt="GreenLife Perivolia" className="navbar-text" />
      </div>
      <div className='navbar-label'>
        <p>The best way to be healthy is to be happy</p>
      </div>
      <div className={`navbar-center ${isMenuOpen ? "show" : ""}`}>
        <a onClick={() => scrollToSection('about-section')} className="nav-link">About</a>
        <a onClick={() => scrollToSection('gallery-section')} className="nav-link">Gallery</a>
        <a onClick={() => scrollToSection('units-section')} className="nav-link">Apartments</a>
        <a onClick={() => scrollToSection('benefits-section')} className="nav-link">Benefits</a>
      </div>
      <div className={`navbar-side ${isMenuOpen ? "show" : ""}`}>
        <Link to="/contact" className="contact-us">Contact Us</Link>
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        <img src={isMenuOpen ? CloseIcon : BurgerIcon} alt="Menu" className="menu-icon" />
      </div>
    </div>
  );
};





export default Navbar;
