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
                    "title0": "Versorgung vs Virus: The idea",
                    "description0": "Everyone has to deal with many necessary precautions in our everyday life during the Corona-pandemic, to minimize the risk of infection and the spread of the virus. While there are many things and places you can avoid to help with this, everyone needs to get groceries eventually.  In the supermarket you can\u2019t really help being around strangers. So, to make this as pleasant of an experience as possible for everyone, it is important to be aware of how we act in this shared space, while we shop. We put together a list of useful tips and infos, to make your trip to the supermarket during this pandemic a little less frustrating and a little safer for everyone.",
                    "imageUrl0": "https://firebasestorage.googleapis.com/v0/b/wirvsvirus-65979.appspot.com/o/Hackathon_go_shopping.png?alt=media&token=8ca3f6b5-2d2e-4607-b0ed-5333764f3695",
                    "subUrl0": "",
                    "title1": "Your extra layer of security",
                    "description1": "\u2B24 Use single-use gloves to pick up items from shelves\n\u2B24 Do not reuse gloves and do not touch your face, the area around your eyes, or your nose with them\n\u2B24 You do not have gloves? Use the small plastic bags for fruits and vegetables instead. Again: Do not touch your skin or face with them.",
                    "imageUrl1": "https://firebasestorage.googleapis.com/v0/b/wirvsvirus-65979.appspot.com/o/Hackathon_wear_gloves.png?alt=media&token=46ac2b21-1c22-4d54-a960-02e7ab9b561f",
                    "subUrl1": "https://www.youtube.com/watch?v=xueBYfElFEg",
                    "title2": "Night owl or early bird? Be both",
                    "description2": "\u2B24 Infection risk increases in crowded areas\n\u2B24 Try to avoid trips to the supermarket during rush hours\n\u2B24 Are you encountering too many people? Go for a short walk and check again afterwards",
                    "imageUrl2": "https://firebasestorage.googleapis.com/v0/b/wirvsvirus-65979.appspot.com/o/Hackathon_Layout-Time.png?alt=media&token=1ede6536-9f44-4b6f-85b1-2006599fc423",
                    "subUrl2": "Link to time slot management app",
                    "title3": "Choose wisely!",
                    "description3": "\u2B24 Stand back before choosing goods\n\u2B24 Feel free to pick your favorites from the shelves, but be careful: Once handled, you should not put it back.\n\u2B24 One after another: Please keep distance from others",
                    "imageUrl3": "https://firebasestorage.googleapis.com/v0/b/wirvsvirus-65979.appspot.com/o/Hackathon_pick_products.png?alt=media&token=bb09e758-2799-4019-ab3b-3f22e897d4c7",
                    "subUrl3": "",
                    "title4": "Are you at the counter?",
                    "description4": "\u2B24 Pay contactless via card or phone\n\u2B24 Do not approach the cashier too much",
                    "imageUrl4": "https://firebasestorage.googleapis.com/v0/b/wirvsvirus-65979.appspot.com/o/Hackathon_pay_contactless-10.png?alt=media&token=bdfa2a1e-dab5-410f-ac7f-2375472fb960",
                    "subUrl4": "",
                    "title5": "Be kind to each other!",
                    "description5": "\u2B24 Be kind to each other!\n\u2B24 Take care of other customers and only take as much as you need\n\u2B24 Send a smile to everybody who cares for the rules\n\u2B24 Leave all unnecessary bags and things at home you do not need. Touching less items reduces infection risk",
                    "imageUrl5": "",
                    "subUrl5": "",
                    "title6": "Is there some tension?",
                    "description6": "\u2B24 Keep calm and stay at distance\n\u2B24 Be friendly and try to find the problem: Ask if you can help or leave the situation",
                    "imageUrl6": "",
                    "subUrl6": ""
                }
            },
            de: {
                translations: {
                    "Welcome Message": "Willkommen bei FoodMatching App.",
                    "Corona FAQs": "Hier finden Sie häufig gestellte Fragen",
                    "welcome": "Hello, <br/> <strong>Willkommen</strong>",
                    "EN": "Englisch",
                    "DE": "Deutsch",
                    "title0": "Versorgung vs Virus: Die Idee",
                    "description0": "In Zeiten der Corona-Pandemie kommt es zu vielen notwendigen Einschr\u00e4nkungen im Alltag, die helfen sollen das Infektionsrisiko und die Ausbreitung des Virus zu minimieren. Die meisten Orte kann man meiden und T\u00e4tigkeiten verschieben, doch jeder muss fr\u00fcher oder sp\u00e4ter einkaufen gehen.\u00a0 Im Supermarkt l\u00e4sst es sich weder vermeiden fremden Leuten zu begegnen, noch sich mit diesen in einem Raum aufzuhalten . Es ist daher f\u00fcr alle Beteiligten wichtig, sich in diesen Situationen angemessen\u00a0 zu verhalten, um das Einkaufserlebnis so stress- und risikofrei wie m\u00f6glich zu gestalten. Wir haben f\u00fcr euch einige n\u00fctzliche Tipps und Infos zusammengestellt, die euch und anderen beim Einkauf in Zeiten der Pandemie helfen k\u00f6nnen.",
                    "imageUrl0": "https://firebasestorage.googleapis.com/v0/b/wirvsvirus-65979.appspot.com/o/Hackathon_go_shopping.png?alt=media&token=8ca3f6b5-2d2e-4607-b0ed-5333764f3695",
                    "subUrl0": "",
                    "title1": "Deine extra Schutzschicht",
                    "description1": "\u2B24 Einmalhandschuhe beim Anfassen von Waren verringern das Infektionsrisiko. \n\u2B24 Verwende die Handschuhe nicht f\u00ef\u00bf\u00bdr mehrere Eink\u00ef\u00bf\u00bdufe. Ber\u00ef\u00bf\u00bdhre sie beim Anziehen nicht von au\u00ef\u00bf\u00bden\n\u2B24 Keine Handschuhe zur Hand? Verwende Plastikt\u00ef\u00bf\u00bdten aus der Obst und Gem\u00ef\u00bf\u00bdseabteilung\n\u2B24 Fasse dir auch mit Handschuhen nicht ins Gesicht, damit du keine Viren darauf \u00ef\u00bf\u00bdbertr\u00ef\u00bf\u00bdgst",
                    "imageUrl1": "https://firebasestorage.googleapis.com/v0/b/wirvsvirus-65979.appspot.com/o/Hackathon_wear_gloves.png?alt=media&token=46ac2b21-1c22-4d54-a960-02e7ab9b561f",
                    "subUrl1": "https://www.youtube.com/watch?v=xueBYfElFEg",
                    "title2": "Fr\u00ef\u00bf\u00bdher Vogel oder Nachteule? Beides gut!",
                    "description2": "\u2B24 Aufenthalte in gr\u00f6\u00dfere Menschenmengen erh\u00f6hen das Infektionsrisiko\n\u2B24 Versuche deinen Einkauf au\u00ef\u00bf\u00bderhalb von Sto\u00ef\u00bf\u00bdzeiten zu machen\n\u2B24 Sollte es zu voll sein, nutz die Zeit und geh eine Runde spazieren, um dem Ansturm zu entgehen",
                    "imageUrl2": "https://firebasestorage.googleapis.com/v0/b/wirvsvirus-65979.appspot.com/o/Hackathon_Layout-Time.png?alt=media&token=1ede6536-9f44-4b6f-85b1-2006599fc423",
                    "subUrl2": "Link to time slot management app",
                    "title3": "Triff deine Wahl!",
                    "description3": "\u2B24 Gehe nicht zu nah an die Lebensmitteln heran solange du aussuchst\n\u2B24 Such dir dein liebstes Lebensmittel aus bevor du es anfasst. Was du in die Hand nimmst Sollte nicht zur\u00ef\u00bf\u00bdck ins Regal kommen\n\u2B24 Einer nach dem anderen: Achte auf Abstand zu deinen Mitmenschen",
                    "imageUrl3": "https://firebasestorage.googleapis.com/v0/b/wirvsvirus-65979.appspot.com/o/Hackathon_pick_products.png?alt=media&token=bb09e758-2799-4019-ab3b-3f22e897d4c7",
                    "subUrl3": "",
                    "title4": "Bist du an der Kasse?",
                    "description4": "\u2B24 Bezahle bargeldlos wenn immer m\u00f6glich (EC / Kreditkarte / Handy)\n\u2B24 Sch\u00fctze die Kassierer*innen und bleib hinter der Scheibe ",
                    "imageUrl4": "https://firebasestorage.googleapis.com/v0/b/wirvsvirus-65979.appspot.com/o/Hackathon_pay_contactless-10.png?alt=media&token=bdfa2a1e-dab5-410f-ac7f-2375472fb960",
                    "subUrl4": "",
                    "title5": "Seid lieb zueinander!",
                    "description5": "\u2B24 Achte auf die anderen Kunden und nimm nur so viel du brauchst\n\u2B24 Sende ein L\u00ef\u00bf\u00bdcheln an alle, die auf die Regeln achten\n\u2B24 Lass Handtaschen und Handy zu Hause, wenn du sie nicht brauchst. Je mehr Gegenst\u00ef\u00bf\u00bdnde ber\u00ef\u00bf\u00bdhrt werden, desto h\u00ef\u00bf\u00bdher ist das Risiko einer \u00ef\u00bf\u00bdbertragung",
                    "imageUrl5": "",
                    "subUrl5": "",
                    "title6": "Ist die Stimmung doch mal angespannt?",
                    "description6": "\u2B24 Bewahre Ruhe und halte Abstand \n\u2B24 Bleibe freundlich und versuche das Problem ausfindig zu machen: Frage ob du vielleicht helfen kannst oder entziehe dich der Situation",
                    "imageUrl6": "",
                    "subUrl6": ""
                }
            }
        },
        fallbackLng: "de",
        debug: false,

        // have a common namespace used around the full app
        ns: ["translations"],
        defaultNS: "translations",

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
