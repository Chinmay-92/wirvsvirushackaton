import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translations: {
                    "Welcome Message": "Welcome to FoodMatching App.",
                    "Corona FAQs": "Here you can find frequently asked questions",
                    welcome: "Hello, <br/> <strong>Welcome</strong>"
                }
            },
            de: {
                translations: {
                    "Welcome Message": "Willkommen bei FoodMatching App.",
                    "Corona FAQs": "Hier finden Sie häufig gestellte Fragen",
                    welcome: "Hello, <br/> <strong>Willkommen</strong>"
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
