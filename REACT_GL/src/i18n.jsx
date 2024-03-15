import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en.json';
import translationGR from './locales/gr.json';
import translationRU from './locales/ru.json';


// the translations
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

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, can be changed to "gr" or "ru" as needed
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
