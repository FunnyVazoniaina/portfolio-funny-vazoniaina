import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Existant
      homeTitle: "Hello, I'm Funny VAZONIAINA",
      subtitle: "Fullstack Web & Mobile Developer",
      description: "Crafting modern, performant, and delightful digital experiences with a passion for clean code and intuitive design.",
      aboutTitle: "About Me",
      aboutText1: "With years of experience as a fullstack developer, I specialize in building scalable web and mobile applications. My toolkit includes ReactJS, Node.js, Flutter, and more—blending technical expertise with a keen eye for design.",
      aboutText2: "When I'm not coding, you'll find me exploring foreign language, music and technology, fueling my creativity, drive and enhancing my communication skills aswell.",
      projectsTitle: "My Projects",
      project1Title: "E-commerce Platform",
      project1Desc: "A sleek online store with seamless user management and payment integration.",
      project1Tech: "Tech: React, Node.js, MongoDB, Stripe",
      project2Title: "Fitness Mobile App",
      project2Desc: "A minimalist app to track workouts and progress with a clean UI.",
      project2Tech: "Tech: Flutter, Firebase",
      skillsTitle: "My Skills",
      contactTitle: "Get in Touch",
      contactDesc: "I'd love to hear from you! Drop me a line or connect with me on socials.",
      footer: "Copyright © 2025 Funny VAZONIAINA. Built with passion and precision",
      allRightsReserved: "All rights reserved",
      privacy: "Privacy",
      security: "Security",
      terms: "Terms",
      contactMe: "Contact Me",
      downloadCV: "Download CV",
      viewProject: "Live Demo",
      
      // Navbar
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      "certificates": "Certificates",


      
      // Greeting
      "Greeting,": "Hi there,",
      
      // About section
      aboutSubtitle: "Learn more about who I am and what I do",
      
      // Services
      webDev: "Web Development",
      webDevDesc: "Creating responsive and modern websites with the latest technologies.",
      backendDev: "Backend Development",
      backendDevDesc: "Building robust server-side applications and APIs.",
      mobileDev: "Mobile Development",
      mobileDevDesc: "Developing cross-platform mobile applications with native feel.",
      uiDesign: "UI/UX Design",
      uiDesignDesc: "Designing intuitive and beautiful user interfaces.",
      
      // Projects section
      projectsSubtitle: "Check out some of my recent work",
      
      // Skills section
      skillsSubtitle: "Technologies I work with",
      
      // SkillCard
      mastery: "Mastery",
      
      // Contact section
      contactSubtitle: "Let's work together on your next project",
      directContact: "Want to work together or have a question?",
      sendMessage: "Send Message",
      
      // Footer
      scanQRCode: "Scan this QR code to share my portfolio!",
      shareMyProfile: "shareMyProfile",
      madeWith: "Made with",
      and: "and",
      Share: "Share",
    },
  },
  fr: {
    translation: {
      // Existant
      homeTitle: "Salut, je suis Funny VAZONIAINA",
      subtitle: "Développeur Fullstack Web & Mobile",
      description: "Je crée des expériences numériques modernes, performantes et agréables, avec une passion pour le code propre et un design intuitif.",
      aboutTitle: "À propos de moi",
      aboutText1: "Avec des années d'expérience en tant que développeur fullstack, je me spécialise dans la création d'applications web et mobiles évolutives. Mon toolkit inclut ReactJS, Node.js, Flutter, et plus encore—combinant expertise technique et sens du design.",
      aboutText2: "Quand je ne code pas, vous me trouverez en train d'explorer la langue étrangère, musique et la technologie, alimentant ma créativité et ma motivation et notamment améliorant ma communication.",
      projectsTitle: "Mes Projets",
      project1Title: "Plateforme E-commerce",
      project1Desc: "Une boutique en ligne élégante avec une gestion fluide des utilisateurs et une intégration de paiement.",
      project1Tech: "Tech : React, Node.js, MongoDB, Stripe",
      project2Title: "Application Mobile Fitness",
      project2Desc: "Une application minimaliste pour suivre les entraînements et les progrès avec une interface épurée.",
      project2Tech: "Tech : Flutter, Firebase",
      skillsTitle: "Mes Compétences",
      contactTitle: "Contactez-moi",
      contactDesc: "J'adorerais avoir de vos nouvelles ! Envoyez-moi un message ou connectez-vous avec moi sur les réseaux sociaux.",
      footer: "Copyright © 2025 Funny VAZONIAINA. Construit avec passion et précision",
      allRightsReserved: "Tous droits réservés",
      privacy: "Confidentialité",
      security: "Sécurité",
      terms: "Conditions",
      contactMe: "Me Contacter",
      downloadCV: "Télécharger CV",
      viewProject: "Voir le Projet",
      
      // Navbar
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact",
      "certificates": "Certificats",
      
      // Greeting
      "Greeting,": "Bonjour,",
      
      // About section
      aboutSubtitle: "Apprenez-en plus sur qui je suis et ce que je fais",
      
      // Services
      webDev: "Développement Web",
      webDevDesc: "Création de sites web modernes et responsifs avec les dernières technologies.",
      backendDev: "Développement Backend",
      backendDevDesc: "Construction d'applications robustes côté serveur et d'APIs.",
      mobileDev: "Développement Mobile",
      mobileDevDesc: "Développement d'applications mobiles multiplateformes avec une sensation native.",
      uiDesign: "Design UI/UX",
      uiDesignDesc: "Conception d'interfaces utilisateur intuitives et esthétiques.",
      
      // Projects section
      projectsSubtitle: "Découvrez quelques-uns de mes travaux récents",
      
      // Skills section
      skillsSubtitle: "Technologies avec lesquelles je travaille",
      
      // SkillCard
      mastery: "Maîtrise",
      
      // Contact section
      contactSubtitle: "Travaillons ensemble sur votre prochain projet",
      directContact: "Vous souhaitez collaborer ou avez une question ?",
      sendMessage: "Envoyer un message",
      
      // Footer
      scanQRCode: "Scannez ce QR code pour partager mon portfolio!",
      shareMyProfile: "partagerMonProfile",
      madeWith: "Fait avec",
      and: "et",
      Share: "Partager",
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
