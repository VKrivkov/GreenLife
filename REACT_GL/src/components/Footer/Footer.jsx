import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Footer.css";
import LanguageSwitcher from './LanguageSwitcher'

const Footer = () => {
  const location = useLocation();

  React.useEffect(() => {
    const sectionId = location.hash.replace('#', '');
    if (sectionId) {
      scrollToSection(sectionId);
    }
  }, [location]);

  const handleLogoClick = () => {
    // This will send the user to the homepage. The page will not reload, but React Router will handle the navigation.
    window.history.pushState({}, '', '/');
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className='footer-container'>
      <div className='footer-first-level'>
        <div onClick={handleLogoClick} className='company-container'>
          <h5>GREENLIFE</h5>
          <h6>PERVOLIA</h6>
          <p>ZYRBAGAN RESIDENCES LTD</p>
        </div>
        <div className='contact-info-container'>
          <h6>Contact us</h6>
          <p>T: +352111111111</p>
          <p>E: blank.email@greenlife.com</p>
          <p>A: Cyprus, Pervolia, Fictional address 8, CY-123913</p>
        </div>
        <div className='navigation-footer'>
          {/* Using Link from react-router-dom with a hash to indicate the section */}
          <Link to="/#about-section" className="footer-link">About</Link>
          <Link to="/#gallery-section" className="footer-link">Gallery</Link>
          <Link to="/#units-section" className="footer-link">Apartments</Link>
          <Link to="/#benefits-section" className="footer-link">Benefits</Link>
        </div>
        <div className='nobody-reads-container'>
          <p>Privacy policy</p>
          <p>Terms & Conditions</p>
          <p className='Rights'>© 2024, All rights reserved</p>
          <LanguageSwitcher/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
