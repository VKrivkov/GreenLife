import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      <button onClick={() => i18n.changeLanguage('en')}>English</button>
      <button onClick={() => i18n.changeLanguage('gr')}>Ελληνικά</button>
      <button onClick={() => i18n.changeLanguage('ru')}>Русский</button>
    </div>
  );
};

export default LanguageSwitcher;
