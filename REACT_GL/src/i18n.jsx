import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en.json';
import translationGR from './locales/gr.json';
import translationRU from './locales/ru.json';

// The translations
const resources = {
  en: {
    translation: translationEN,
  },
  gr: {
    translation: translationGR,
  },
  ru: {
    translation: translationRU,
  },
};

// Attempt to retrieve the saved language preference
const savedLanguage = localStorage.getItem('language') || 'en'; // Default to English if no preference found

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: savedLanguage, // Use the saved language or default to 'en'
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // React already safeguards from XSS
    },
  });

export default i18n;
