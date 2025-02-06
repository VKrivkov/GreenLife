import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language); // Save the selected language
  };

  return (
    <div className='LanguageSwitcher'>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('gr')}>Ελληνικά</button>
      <button onClick={() => changeLanguage('ru')}>Русский</button>
      <button onClick={() => changeLanguage('de')}>Deutsch</button>

    </div>
  );
};

export default LanguageSwitcher;
