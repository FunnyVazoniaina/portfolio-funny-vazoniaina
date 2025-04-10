import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      homeTitle: "Hello, I'm Funny VAZONIAINA",
      subtitle: "Fullstack Web & Mobile Developer",
      description: "Crafting modern, performant, and delightful digital experiences with a passion for clean code and intuitive design.",
      aboutTitle: "About Me",
      aboutText1: "With years of experience as a fullstack developer, I specialize in building scalable web and mobile applications. My toolkit includes ReactJS, Node.js, Flutter, and more—blending technical expertise with a keen eye for design.",
      aboutText2: "When I’m not coding, you’ll find me exploring music and technology, fueling my creativity and drive.",
      projectsTitle: "My Projects",
      project1Title: "E-commerce Platform",
      project1Desc: "A sleek online store with seamless user management and payment integration.",
      project1Tech: "Tech: React, Node.js, MongoDB, Stripe",
      project2Title: "Fitness Mobile App",
      project2Desc: "A minimalist app to track workouts and progress with a clean UI.",
      project2Tech: "Tech: Flutter, Firebase",
      skillsTitle: "My Skills",
      contactTitle: "Get in Touch",
      contactDesc: "I’d love to hear from you! Drop me a line or connect with me on socials.",
      footer: "Copyright © 2025 Funny VAZONIAINA. Built with passion and precision",
      allRightsReserved: "All rights reserved",
      privacy: "Privacy",
      security: "Security",
      terms: "Terms",
      contactMe: "Contact Me",
      downloadCV: "Download CV",
      viewProject: "View Project",
    },
  },
  fr: {
    translation: {
      homeTitle: "Salut, je suis Funny VAZONIAINA",
      subtitle: "Développeur Fullstack Web & Mobile",
      description: "Je crée des expériences numériques modernes, performantes et agréables, avec une passion pour le code propre et un design intuitif.",
      aboutTitle: "À propos de moi",
      aboutText1: "Avec des années d’expérience en tant que développeur fullstack, je me spécialise dans la création d’applications web et mobiles évolutives. Mon toolkit inclut ReactJS, Node.js, Flutter, et plus encore—combinant expertise technique et sens du design.",
      aboutText2: "Quand je ne code pas, vous me trouverez en train d’explorer la musique et la technologie, alimentant ma créativité et ma motivation.",
      projectsTitle: "Mes Projets",
      project1Title: "Plateforme E-commerce",
      project1Desc: "Une boutique en ligne élégante avec une gestion fluide des utilisateurs et une intégration de paiement.",
      project1Tech: "Tech : React, Node.js, MongoDB, Stripe",
      project2Title: "Application Mobile Fitness",
      project2Desc: "Une application minimaliste pour suivre les entraînements et les progrès avec une interface épurée.",
      project2Tech: "Tech : Flutter, Firebase",
      skillsTitle: "Mes Compétences",
      contactTitle: "Contactez-moi",
      contactDesc: "J’adorerais avoir de vos nouvelles ! Envoyez-moi un message ou connectez-vous avec moi sur les réseaux sociaux.",
      footer: "Copyright © 2025 Funny VAZONIAINA. Construit avec passion et précision",
      allRightsReserved: "Tous droits réservés",
      privacy: "Confidentialité",
      security: "Sécurité",
      terms: "Conditions",
      contactMe: "Me Contacter",
      downloadCV: "Télécharger CV",
      viewProject: "Voir le Projet",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Langue par défaut
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;