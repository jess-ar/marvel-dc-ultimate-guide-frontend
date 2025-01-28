import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            welcome: "Welcome to Your Profile",
            description: "Explore your personalized space in the Marvel/DC app. Log in to access your favorite heroes and manage your profile.",
            marvel: "Explore Marvel",
            dc: "Explore DC",
        },
    },
    es: {
        translation: {
            welcome: "Bienvenido a Tu Perfil",
            description: "Explora tu espacio personalizado en la aplicación Marvel/DC. Inicia sesión para acceder a tus héroes favoritos y gestionar tu perfil.",
            marvel: "Explorar Marvel",
            dc: "Explorar DC",
        },
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;