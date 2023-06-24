import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"
import translationEN from "./assets/data/locales/en.json"
import translationAR from "./assets/data/locales/ar.json"
import Backend from 'i18next-http-backend'



// ** Languages Imports
const en = new URL('./assets/data/locales/en.json', import.meta.url).href
const ar = new URL('./assets/data/locales/ar.json', import.meta.url).href



const languages = {
  en,
  ar
};

i18n

  // Enables the i18next backend
  .use(Backend)

  // Enable automatic language detection
  .use(LanguageDetector)

  // Enables the hook initialization module
  .use(initReactI18next)
  .init({
    lng: 'en',
    backend: {
      /* translation file path */
      loadPath: lng => languages[lng]
    },
    fallbackLng: 'en',
    debug: false,
    keySeparator: false,
    react: {
      useSuspense: false
    },
    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    }
  })

  export default i18n;