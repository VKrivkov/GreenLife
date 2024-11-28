import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "./Footer.css";
import Logo from '../../assets/logo_White-2.svg'; 
import LanguageSwitcher from './LanguageSwitcher';

const Footer = () => {
  const location = useLocation();
  const { t } = useTranslation();

  React.useEffect(() => {
    const sectionId = location.hash.replace('#', '');
    if (sectionId) {
      scrollToSection(sectionId);
    }
  }, [location]);

  const handleLogoClick = () => {
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
          <img src={Logo} alt="Logo" className='footer-logo'/>
          <p>{t('footer.companyInfo')}</p>
        </div>
        <div className='contact-info-container'>
          <h6>{t('footer.contactUs')}</h6>
          <p>{t('footer.telephone')}</p>
          <p>{t('footer.email')}</p>
          <p>{t('footer.address')}</p>
        </div>
        <div className='navigation-footer'>
          <Link to="/#about-section" className="footer-link">{t('footer.about')}</Link>
          <Link to="/#gallery-section" className="footer-link">{t('footer.gallery')}</Link>
          <Link to="/#units-section" className="footer-link">{t('footer.apartments')}</Link>
          <Link to="/#benefits-section" className="footer-link">{t('footer.benefits')}</Link>
        </div>
        <div className='nobody-reads-container'>
          <p>{t('footer.privacyPolicy')}</p>
          <p>{t('footer.termsConditions')}</p>
          <p className='Rights'>{t('footer.rights')}</p>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}

export default Footer;
