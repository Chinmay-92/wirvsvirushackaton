import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const languageDetector = {
    type: 'languageDetector',
    async: true,
    detect: cb => cb('de'),
    init: () => { },
    cacheUserLanguage: () => { },
};

i18n
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translations: {
                    "Welcome Message": "Welcome to FoodMatching App.",
                    "Corona FAQs": "Here you can find frequently asked questions",
                    "welcome": "Hello, <br/> <strong>Welcome</strong>",
                    "EN": "English",
                    "DE": "German",
                    "title1": "This is the first entry",
                    "description1": "This is the text displayed. Bulletlist follows: <ul><li>Coffee</li><li>Tea</li><li>Milk</li></ul>",
                    "imageUrl1": "https://drive.google.com/open?id=1-47k8qKPMy_1JIaQLv18AWFVwpExCsqB",
                    "title2": "This is another entry",
                    "description2": "We have a simpler text here",
                    "imageUrl2": "assets/images/myotherimage"
                }
            },
            de: {
                translations: {
                    "Welcome Message": "Willkommen bei FoodMatching App.",
                    "Corona FAQs": "Hier finden Sie häufig gestellte Fragen",
                    "welcome": "Hello, <br/> <strong>Willkommen</strong>",
                    "EN": "Englisch",
                    "DE": "Deutsch",
                    "title1": "Das ist der erste Eintrag",
                    "description1": "Dieser Text wird angezeigt. Eine Liste folgt:<ul><li>Kaffee</li><li>Tee</li><li>Milch</li></ul>",
                    "imageUrl1": "https://drive.google.com/open?id=1-47k8qKPMy_1JIaQLv18AWFVwpExCsqB",
                    "title2": "Und hier noch ein Eintrag",
                    "description2": "Hier steht ein einfacherer Text",
                    "imageUrl2": "https://firebasestorage.googleapis.com/v0/b/wirvsvirus-65979.appspot.com/o/Hackathon_pick_products.png?alt=media&token=bb09e758-2799-4019-ab3b-3f22e897d4c7"
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
        }
    });

export default i18n;
