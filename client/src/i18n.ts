import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  es: {
    translation: {
      navbar: {
        explore: "Explorar", messages: "Mensajes", social: "Social", admin: "Admin", business: "Mi Negocio", taxi: "Modo Taxi", theme: "Tema", profile: "Perfil", logout: "Cerrar sesión"
      },
      home: {
        hero_title: "Descubre el mundo con", hero_subtitle: "Explora los destinos más exclusivos, sabores inolvidables y experiencias inmersivas impulsadas por inteligencia artificial.", search_placeholder: "Buscar por nombre, descripción o ciudad...", distance: "Distancia", price: "Precio", explore_btn: "Explorar", no_results: "No se encontraron resultados", back: "Volver a Explorar", navigate: "Ir al lugar", order_taxi: "Ordenar Taxi", hide_taxi: "Ocultar Taxi", "3d_model": "Ver Modelo 3D", virtual_tour: "Explorar Tour Virtual", ask_info: "Solicitar Información",
        filters: "Filtros", popular: "Popular", any: "Cualquiera"
      },
      categories: {
        all: "Todos los Destinos", hotel: "Alojamientos", restaurant: "Gastronomía", recreation: "Experiencias", transport: "Movilidad"
      },
      chatbot: {
        placeholder: "Escribe tu mensaje...", send: "Enviar", start: "¡Hola! Soy Kokoro, tu asistente IA de ViaNova. ¿A dónde quieres ir hoy?", voice_on: "Activar voz", voice_off: "Desactivar voz"
      }
    }
  },
  en: {
    translation: {
      navbar: {
        explore: "Explore", messages: "Messages", social: "Social", admin: "Admin", business: "My Business", taxi: "Taxi Mode", theme: "Theme", profile: "Profile", logout: "Sign Out"
      },
      home: {
        hero_title: "Discover the world with", hero_subtitle: "Explore the most exclusive destinations, unforgettable flavors, and immersive AI-powered experiences.", search_placeholder: "Search by name, description or city...", distance: "Distance", price: "Price", explore_btn: "Explore", no_results: "No results found", back: "Back to Explore", navigate: "Navigate", order_taxi: "Order Taxi", hide_taxi: "Hide Taxi", "3d_model": "View 3D Model", virtual_tour: "Virtual Tour", ask_info: "Request Info",
        filters: "Filters", popular: "Popular", any: "Any"
      },
      categories: {
        all: "All Destinations", hotel: "Accommodations", restaurant: "Gastronomy", recreation: "Experiences", transport: "Mobility"
      },
      chatbot: {
        placeholder: "Type a message...", send: "Send", start: "Hello! I'm Kokoro, your ViaNova AI assistant. Where do you want to go today?", voice_on: "Voice On", voice_off: "Voice Off"
      }
    }
  },
  fr: {
    translation: {
      navbar: {
        explore: "Explorer", messages: "Messages", social: "Social", admin: "Admin", business: "Mon Entreprise", taxi: "Mode Taxi", theme: "Thème", profile: "Profil", logout: "Déconnexion"
      },
      home: {
        hero_title: "Découvrez le monde avec", hero_subtitle: "Explorez les destinations les plus exclusives, des saveurs inoubliables et des expériences immersives.", search_placeholder: "Rechercher...", distance: "Distance", price: "Prix", explore_btn: "Explorer", no_results: "Aucun résultat trouvé", back: "Retour", navigate: "Naviguer", order_taxi: "Commander Taxi", hide_taxi: "Cacher Taxi", "3d_model": "Modèle 3D", virtual_tour: "Visite Virtuelle", ask_info: "Demander Info",
        filters: "Filtres", popular: "Populaire", any: "Tous"
      },
      categories: {
        all: "Toutes les Destinations", hotel: "Hébergement", restaurant: "Gastronomie", recreation: "Expériences", transport: "Mobilité"
      },
      chatbot: {
        placeholder: "Tapez un message...", send: "Envoyer", start: "Bonjour ! Je suis Kokoro, votre assistante IA. Où voulez-vous aller aujourd'hui ?", voice_on: "Voix Activée", voice_off: "Voix Désactivée"
      }
    }
  },
  pt: {
    translation: {
      navbar: {
        explore: "Explorar", messages: "Mensagens", social: "Social", admin: "Admin", business: "Meu Negócio", taxi: "Modo Táxi", theme: "Tema", profile: "Perfil", logout: "Sair"
      },
      home: {
        hero_title: "Descubra o mundo com", hero_subtitle: "Explore os destinos mais exclusivos, sabores inesquecíveis e experiências imersivas.", search_placeholder: "Pesquisar...", distance: "Distância", price: "Preço", explore_btn: "Explorar", no_results: "Nenhum resultado", back: "Voltar", navigate: "Ir", order_taxi: "Pedir Táxi", hide_taxi: "Ocultar Táxi", "3d_model": "Modelo 3D", virtual_tour: "Tour Virtual", ask_info: "Pedir Informação",
        filters: "Filtros", popular: "Popular", any: "Qualquer"
      },
      categories: {
        all: "Todos", hotel: "Acomodações", restaurant: "Gastronomia", recreation: "Experiências", transport: "Mobilidade"
      },
      chatbot: {
        placeholder: "Digite sua mensagem...", send: "Enviar", start: "Olá! Sou a Kokoro, sua assistente IA. Para onde vamos hoje?", voice_on: "Voz Ativada", voice_off: "Voz Desativada"
      }
    }
  },
  zh: {
    translation: {
      navbar: {
        explore: "探索", messages: "消息", social: "社交", admin: "管理", business: "我的企业", taxi: "出租车", theme: "主题", profile: "个人资料", logout: "注销"
      },
      home: {
        hero_title: "与探索世界", hero_subtitle: "探索最独特的目的地、难忘的风味和沉浸式体验。", search_placeholder: "搜索...", distance: "距离", price: "价格", explore_btn: "探索", no_results: "未找到结果", back: "返回", navigate: "导航", order_taxi: "叫出租车", hide_taxi: "隐藏", "3d_model": "3D模型", virtual_tour: "虚拟旅游", ask_info: "请求信息",
        filters: "筛选", popular: "流行", any: "任何"
      },
      categories: {
        all: "所有目的地", hotel: "住宿", restaurant: "美食", recreation: "体验", transport: "交通"
      },
      chatbot: {
        placeholder: "输入消息...", send: "发送", start: "你好！我是你的AI助手Kokoro。你今天想去哪里？", voice_on: "语音开启", voice_off: "语音关闭"
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
      escapeValue: false
    }
  });

export default i18n;
