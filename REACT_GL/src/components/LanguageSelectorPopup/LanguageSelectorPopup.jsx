// LanguageSelector.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelectorPopup.css'; // Make sure to create a corresponding CSS file
import FlagEn from '../../assets/FlagEn.webp'
import FlagGr from '../../assets/FlagGr.webp'
import FlagRu from '../../assets/FlagRu.webp'
import FlagDe from '../../assets/FlagDe.webp'


const LanguageSelector = ({ onClose }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language); // Save the selected language
    onClose(); // Call the onClose function passed as a prop to hide the language selector
  };

  return (
    <>
    <div className="language-selector-overlay" onClick={() => changeLanguage('en')}></div>
    <div className="language-selector">
      <h2>Choose the language</h2>
      <div className="language-selector-content">
        
        <div className="language-option" onClick={() => changeLanguage('en')}>
          <img src={FlagEn} alt="English" />
          <span>English</span>
        </div>
        <div className="language-option" onClick={() => changeLanguage('gr')}>
          <img src={FlagGr} alt="Greek" />
          <span>Ελληνικά</span>
        </div>
        <div className="language-option" onClick={() => changeLanguage('ru')}>
          <img src={FlagRu} alt="Russian" />
          <span>Русский</span>
        </div>
        <div className="language-option" onClick={() => changeLanguage('de')}>
          <img src={FlagDe} alt="Deutsch" />
          <span>Deutsch</span>
        </div>
        <button className="close-button" onClick={() => changeLanguage('en')}>Close</button>
      </div>
    </div>
    </>
  );
};

export default LanguageSelector;
