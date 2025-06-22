import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationUZ from './locales/uz/translation.json';
import translationRU from './locales/ru/translation.json';
import translationKG from './locales/kg/translation.json';

const resources = {
  uz: {
    translation: translationUZ,
  },
  ru: {
    translation: translationRU,
  },
  kg: {
    translation: translationKG,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'kg',
  fallbackLng: 'kg',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
