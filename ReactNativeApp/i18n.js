import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const languageDetector = {
    type: 'languageDetector',
    async: true,
    detect: cb => cb('de'),
    init: () => {},
    cacheUserLanguage: () => {},
  };

i18n
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translations: {
                    "Willkommen bei FoodMatching App.": "Welcome to FoodMatching App.",
                    "Corona FAQs": "Here you can find frequently asked questions",
                    "welcome": "Hello, <br/> <strong>Welcome</strong>",
                    "EN": "English",
                    "DE": "German"
                }
            },
            de: {
                translations: {
                    "Willkommen bei FoodMatching App.": "Willkommen bei FoodMatching App.",
                    "Corona FAQs": "Hier finden Sie häufig gestellte Fragen",
                    "welcome": "Hello, <br/> <strong>Willkommen</strong>",
                    "EN": "Englisch",
                    "DE": "Deutsch"
                }
            }
        },
        fallbackLng: "de",
        debug: true,

        // have a common namespace used around the full app
        ns: ["translations"],
        defaultNS: "translations",

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
