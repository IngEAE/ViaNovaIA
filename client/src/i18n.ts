import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Recuros de idiomas (pueden expandirse)
const resources = {
  es: {
    translation: {
      navbar: {
        explore: "Explorar",
        messages: "Mensajes",
        social: "Social",
        admin: "Admin",
        business: "Mi Negocio",
        taxi: "Modo Taxi",
        theme: "Tema",
        profile: "Perfil",
        logout: "Cerrar sesión"
      },
      home: {
        hero_title: "Descubre el mundo con",
        hero_subtitle: "Explora los destinos más exclusivos, sabores inolvidables y experiencias inmersivas impulsadas por inteligencia artificial.",
        search_placeholder: "Buscar por nombre, descripción o ciudad...",
        distance: "Distancia",
        price: "Precio",
        explore_btn: "Explorar",
        no_results: "No se encontraron resultados",
        back: "Volver a Explorar"
      },
      categories: {
        all: "Todos los Destinos",
        hotel: "Alojamientos",
        restaurant: "Gastronomía",
        recreation: "Experiencias",
        transport: "Movilidad"
      }
    }
  },
  en: {
    translation: {
      navbar: {
        explore: "Explore",
        messages: "Messages",
        social: "Social",
        admin: "Admin",
        business: "My Business",
        taxi: "Taxi Mode",
        theme: "Theme",
        profile: "Profile",
        logout: "Sign Out"
      },
      home: {
        hero_title: "Discover the world with",
        hero_subtitle: "Explore the most exclusive destinations, unforgettable flavors, and immersive AI-powered experiences.",
        search_placeholder: "Search by name, description or city...",
        distance: "Distance",
        price: "Price",
        explore_btn: "Explore",
        no_results: "No results found",
        back: "Back to Explore"
      },
      categories: {
        all: "All Destinations",
        hotel: "Accommodations",
        restaurant: "Gastronomy",
        recreation: "Experiences",
        transport: "Mobility"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false // React ya hace el escape
    }
  });

export default i18n;
