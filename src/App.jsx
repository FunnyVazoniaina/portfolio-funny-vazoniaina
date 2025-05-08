import { useState, useEffect } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';
import { Analytics } from "@vercel/analytics/react"
import { 
  FaDownload, 
  FaEnvelope, 
  FaGithub, 
  FaLinkedin, 
  FaFacebook,
  FaArrowUp,
  FaLaptopCode,
  FaServer,
  FaMobileAlt,
  FaPalette,
  FaPhone,
  FaShoppingCart, 
  FaCreditCard, 
  FaUsers, 
  FaBriefcase, 
  FaCheckSquare, 
  FaTasks, 
  FaHospital, 
  FaMedkit 
} from 'react-icons/fa';
import { RiHandHeartLine } from 'react-icons/ri';
import { 
  SiMysql, 
  SiPostgresql, 
  SiMongodb, 
  SiJavascript, 
  SiPhp, 
  SiReact, 
  SiNodedotjs, 
  SiSymfony, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiHtml5 
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';

// Modern color palette combining blue and purple tones
const lightTheme = {
  background: '#f8fafc',
  backgroundAlt: '#f1f5f9',
  text: '#0f172a',
  textSecondary: '#334155',
  cardBackground: '#ffffff',
  shadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
  accent: '#4f46e5', // Indigo - entre bleu et violet
  hover: '#3730a3', // Indigo plus foncé
  secondary: '#2563eb', // Bleu royal - complément harmonieux
  success: '#10b981',
  error: '#ef4444',
  border: 'rgba(79, 70, 229, 0.1)',
};

const darkTheme = {
  background: '#0d1117', // GitHub Dark background
  backgroundAlt: '#161b22', // GitHub Dark secondary background
  text: '#f1f5f9',
  textSecondary: '#cbd5e1',
  cardBackground: '#161b22', // Ajusté pour correspondre au backgroundAlt
  shadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
  accent: '#6366f1', // Indigo plus clair
  hover: '#4f46e5', // Indigo
  secondary: '#3b82f6', // Bleu plus clair
  success: '#10b981',
  error: '#ef4444',
  border: 'rgba(99, 102, 241, 0.2)',
};


// Global styles
const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
    font-size: 16px;
    
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
  
  // Dans le composant GlobalStyle
body {
  font-family: 'Inter', 'Segoe UI', Roboto, -apple-system, BlinkMacSystemFont, sans-serif;
  background: ${({ theme }) => theme.background};
  background-image: ${({ theme }) => theme === lightTheme ? 
    'linear-gradient(120deg, #f8f9fc, #eef2ff 100%)' : 'none'};
  color: ${({ theme }) => theme.text};
  line-height: 1.6;
  overflow-x: hidden;
  transition: background 0.3s ease, color 0.3s ease;
}

  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  ::selection {
    background: ${({ theme }) => theme.accent};
    color: white;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  overflow-x: hidden;
  position: relative;
`;

const Section = styled.section`
  padding: 6rem 1rem; // Réduire le padding horizontal global
  max-width: 1600px; // Augmenter la largeur maximale (était 1400px)
  margin: 0 auto;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 4rem 0.75rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.75rem;
  font-weight: 800;
  margin-bottom: 2rem; // Réduit de 3rem à 2rem
  text-align: center;
  position: relative;
  display: inline-block;
  background: linear-gradient(135deg, ${({ theme }) => theme.accent}, ${({ theme }) => theme.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px; // Réduit de -10px à -8px
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, ${({ theme }) => theme.accent}, ${({ theme }) => theme.secondary});
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem; // Réduit de 4rem à 2rem
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textSecondary};
  max-width: 700px;
  margin: 0.5rem auto 0; // Réduit de 1.5rem à 0.5rem (minimum recommandé)
  text-align: center;
`;

// Home Section
const HomeSection = styled(Section)`
   min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 8rem;
  padding-bottom: 4rem; // Ajout d'un padding-bottom réduit (au lieu de 6rem par défaut)
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at 80% 20%,
      ${({ theme }) => theme.accent}15 0%,
      transparent 50%
    );
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at 20% 80%,
      ${({ theme }) => theme.secondary}15 0%,
      transparent 50%
    );
    z-index: -1;
  }
`;

const HomeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  
  @media (max-width: 992px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const HomeText = styled.div`
  flex: 1;
`;

const HomeImage = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: linear-gradient(135deg, ${({ theme }) => theme.accent}30, ${({ theme }) => theme.secondary}30);
    z-index: -1;
  }
  
  img {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid ${({ theme }) => theme.accent};
    box-shadow: 0 20px 40px ${({ theme }) => theme.accent}30;
  }
  
  @media (max-width: 768px) {
    img {
      width: 250px;
      height: 250px;
    }
  }
`;

const Greeting = styled(motion.span)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 1rem;
`;

const WavingHand = styled(motion.span)`
  display: inline-block;
  font-size: 1.6rem;
  transform-origin: 70% 70%;
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 600; /* Réduit de 800 à 600 pour moins de graisse */
  font-family: 'Poppins', 'Inter', sans-serif; /* Nouvelle police plus élégante */
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #6366f1, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(99, 102, 241, 0.15);
  letter-spacing: 0.01em; /* Légèrement positif pour plus d'espace entre les lettres */
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40%;
    height: 2px; /* Plus fin */
    background: linear-gradient(90deg, #6366f1, transparent);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;


const Role = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textSecondary};
  max-width: 600px;
  margin-bottom: 2rem;
  line-height: 1.8;
  
  @media (max-width: 992px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: ${({ theme }) => theme.accent};
  color: white;
  padding: 0.9rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px ${({ theme }) => theme.accent}40;
  
  &:hover {
    background: ${({ theme }) => theme.hover};
    transform: translateY(-3px);
    box-shadow: 0 15px 25px ${({ theme }) => theme.accent}60;
  }
`;

const OutlineButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: transparent;
  color: ${({ theme }) => theme.accent};
  border: 2px solid ${({ theme }) => theme.accent};
  padding: 0.9rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.accent}10;
    border-color: ${({ theme }) => theme.hover};
    color: ${({ theme }) => theme.hover};
    transform: translateY(-3px);
  }
`;

// About Section
const AboutSection = styled(Section)`
  background: ${({ theme }) => theme.background};
  position: relative;
  overflow: hidden;
  padding: 4rem 0.75rem 3rem; // Réduction du padding bottom de 4rem à 3rem
  max-width: 100%;
  width: 100%;
  
  &::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -100px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: ${({ theme }) => theme.accent}10;
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -100px;
    left: -100px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: ${({ theme }) => theme.secondary}10;
    z-index: 0;
  }
`;



const AboutContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem; // Ajouter un peu de padding horizontal
  font-size: 1.15rem;
  line-height: 1.9;
  color: ${({ theme }) => theme.textSecondary};
  text-align: center;
`;

const AboutText = styled(motion.p)`
  margin-bottom: 1.5rem;
`;

const ServicesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem; // Réduit de 2rem à 1.5rem
  margin-top: 4rem;
  padding: 0 0.5rem; // Petit padding pour éviter que les cartes touchent les bords
`;

const ServiceCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground};
  padding: 1.75rem; // Légèrement réduit de 2rem
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadow};
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.border};
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px ${({ theme }) => theme.shadow};
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 1.5rem;
  display: inline-block;
  padding: 1rem;
  background: ${({ theme }) => theme.accent}15;
  border-radius: 50%;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`;

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1rem;
`;

// Projects Section
const ProjectsSection = styled(Section)`
  position: relative;
  overflow: hidden;
  padding: 3rem 1.5rem 3rem; // Augmenté le padding horizontal de 0.75rem à 1.5rem
  max-width: 100%;
  width: 100%;
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // Maintenir 2 colonnes
  gap: 2.5rem; // Augmenter légèrement l'espace entre les cartes
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr; // Une seule colonne sur mobile
    gap: 2rem; // Réduire légèrement l'espace sur mobile
  }
`;

// Skills Section
const SkillsSection = styled(Section)`
  background: ${({ theme }) => theme.background}; // Changé de backgroundAlt à background
  position: relative;
  overflow: hidden;
  padding: 3rem 1.5rem 3rem; // Même padding horizontal que ProjectsSection (1.5rem)
  max-width: 100%;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem 3rem; // Également ajusté pour les écrans mobiles
  }
`;


// Créer un conteneur pour les paires de catégories
const SkillsCategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // Quatre catégories par ligne
  gap: 0.5rem; // Espace minimal entre les colonnes
  width: 100%;
  
  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr); // Deux colonnes sur les écrans moyens
    gap: 1rem; // Un peu plus d'espace sur les écrans moyens
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr; // Une seule colonne sur les petits écrans
  }
`;



const SkillsCategory = styled(motion.div)`
  margin-bottom: 0;
  width: 100%;
`;

const CategoryTitle = styled.h3`
  font-size: 1.4rem; // Réduit de 1.75rem
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem; // Réduit de 2rem
  text-align: center;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -6px; // Réduit de -8px
    left: 0;
    width: 50px; // Réduit de 60px
    height: 3px;
    background: ${({ theme }) => theme.accent};
    border-radius: 2px;
  }
`;

const CategoryContainer = styled.div`
  text-align: center;
  margin-bottom: 1.5rem; // Réduire la marge (était 2rem)
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr; // Une seule colonne
  gap: 1.5rem;
  width: 100%;
`;


// Contact Section
const ContactSection = styled(Section)`
  position: relative;
  overflow: hidden;
  padding: 3rem 1.5rem 6rem; // Ajusté pour correspondre aux autres sections (1.5rem horizontal)
  max-width: 100%;
  width: 100%;
  
  &::before {
    content: '';
    position: absolute;
    top: -200px;
    right: -200px;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: ${({ theme }) => theme.accent}10;
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -200px;
    left: -200px;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: ${({ theme }) => theme.secondary}10;
    z-index: 0;
  }
`;

const ContactContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
  padding: 0 1rem; /* Ajout de padding horizontal */
`;

const ContactDescription = styled(motion.p)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 2.5rem; // Réduit de 3rem à 2.5rem
  line-height: 1.6; // Réduit de 1.8 à 1.6 pour diminuer l'interligne
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    line-height: 1.5; // Encore plus réduit sur mobile
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.4; // Minimum pour la lisibilité
  }
`;

const ContactIcons = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1.5rem; // Réduit de 1.8rem à 1.5rem
  margin: 2.5rem auto; // Réduit de 3rem à 2.5rem
  max-width: 500px;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1.2rem; // Réduit de 1.5rem à 1.2rem
  }
  
  @media (max-width: 480px) {
    gap: 1rem; // Réduit de 1.2rem à 1rem
  }
`;

const IconLink = styled(motion.a)`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.cardBackground};
  box-shadow: ${({ theme }) => theme.shadow};
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 1.3rem;
  }
  
  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    font-size: 1.1rem;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.accent};
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    z-index: -1;
  }
  
  &:hover {
    color: white;
    transform: translateY(-8px);
    box-shadow: 0 15px 30px ${({ theme }) => theme.accent}40;
    
    &::before {
      transform: scale(1);
    }
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: scale(1.2);
  }
`;

const ContactTooltip = styled.span`
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.accent};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  white-space: nowrap;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 0.4rem 0.8rem;
    bottom: -35px;
  }
  
  @media (max-width: 480px) {
    display: none; /* Masquer les tooltips sur très petits écrans */
  }
  
  ${IconLink}:hover & {
    opacity: 1;
    visibility: visible;
    bottom: -45px;
    
    @media (max-width: 768px) {
      bottom: -38px;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid ${({ theme }) => theme.accent};
  }
`;


const ContactDivider = styled(motion.div)`
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, ${({ theme }) => theme.accent}, ${({ theme }) => theme.secondary});
  margin: 2rem auto;
  border-radius: 2px;
`;

const ContactCTA = styled(motion.div)`
  margin-top: 3rem; // Réduit de 4rem à 3rem
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem; // Réduit de 1.5rem à 1.2rem
`;

const CTAText = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.8rem; // Réduit de 1rem à 0.8rem
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
`;

const CTAButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: ${({ theme }) => theme.accent};
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px ${({ theme }) => theme.accent}40;
  
  @media (max-width: 768px) {
    padding: 0.9rem 2rem;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem 1.8rem;
    font-size: 0.9rem;
  }
  
  &:hover {
    background: ${({ theme }) => theme.hover};
    transform: translateY(-3px);
    box-shadow: 0 15px 25px ${({ theme }) => theme.accent}60;
  }
`;

// Scroll to top button
const ScrollToTop = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.accent};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  cursor: pointer;
  border: none;
  box-shadow: 0 5px 15px ${({ theme }) => theme.accent}50;
  z-index: 99;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.hover};
    transform: translateY(-5px);
    box-shadow: 0 10px 20px ${({ theme }) => theme.accent}70;
  }
`;

const App = () => {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });
  const [showScrollButton, setShowScrollButton] = useState(false);
  
  const isDark = theme === 'dark';
  const currentTheme = isDark ? darkTheme : lightTheme;

  useEffect(() => {
    localStorage.setItem('theme', theme);
    
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const toggleLanguage = () => i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const projects = [
    {
      title: t('project1Title'),
      description: t('project1Desc'),
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: 'https://example.com',
      githubLink: 'https://github.com/FunnyVazoniaina/project1',
      image: '/images/project1.jpg'
    },
    {
      title: t('project2Title'),
      description: t('project2Desc'),
      technologies: ['Flutter', 'Firebase'],
      link: 'https://example.com',
      githubLink: 'https://github.com/FunnyVazoniaina/project2',
      image: '/images/fitness.png'
    },
    {
      title: 'Recruitment Management Platform',
      description: 'A comprehensive platform for managing job postings, applications, and candidate tracking.',
      technologies: ['Node.js', 'ReactJS', 'MySQL'],
      link: 'https://example.com/recruitment',
      githubLink: 'https://github.com/FunnyVazoniaina/recruitment',
      image: '/images/management.png'
    },
    {
      title: 'ToDo App with Authentication',
      description: 'A secure task management app with user authentication and real-time updates.',
      technologies: ['PostgreSQL', 'Node.js', 'ReactJS'],
      link: 'https://example.com/todo',
      githubLink: 'https://github.com/FunnyVazoniaina/todo-app',
      image: '/images/TOdO.jpg'
    },
    {
      title: 'Medical Center Desktop App',
      description: 'A desktop application for managing patient records and appointments in a medical center.',
      technologies: ['Java Swing', 'MySQL', 'Hibernate'],
      link: 'https://example.com/medical',
      githubLink: 'https://github.com/FunnyVazoniaina/medical-center',
      image: '/images/medical.png'
    },
  ];

  const skills = {
    sgbd: [
      { name: 'MySQL', level: 75, icon: <SiMysql /> },
      { name: 'PostgreSQL', level: 50, icon: <SiPostgresql /> },
      { name: 'MongoDB', level: 45, icon: <SiMongodb /> },
    ],
    languages: [
      { name: 'JavaScript', level: 70, icon: <SiJavascript /> },
      { name: 'Java', level: 40, icon: <DiJava /> },
      { name: 'PHP', level: 60, icon: <SiPhp /> },
    ],
    frameworks: [
      { name: 'ReactJS', level: 80, icon: <SiReact /> },
      { name: 'Node.js', level: 75, icon: <SiNodedotjs /> },
      { name: 'Symfony', level: 65, icon: <SiSymfony /> },
      { name: 'NextJS', level: 70, icon: <SiNextdotjs /> },
      { name: 'TailwindCSS', level: 85, icon: <SiTailwindcss /> },
    ],
    webTech: [
      { name: 'HTML & CSS', level: 70, icon: <SiHtml5 /> },
    ],
  };

  const services = [
    {
      title: t('webDev'),
      description: t('webDevDesc'),
      icon: <FaLaptopCode />
    },
    {
      title: t('backendDev'),
      description: t('backendDevDesc'),
      icon: <FaServer />
    },
    {
      title: t('mobileDev'),
      description: t('mobileDevDesc'),
      icon: <FaMobileAlt />
    },
    {
      title: t('uiDesign'),
      description: t('uiDesignDesc'),
      icon: <FaPalette />
    }
  ];

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle theme={currentTheme} />
      <Container>
        <Navbar 
          toggleTheme={toggleTheme} 
          toggleLanguage={toggleLanguage} 
          isDark={isDark} 
        />
        
        <HomeSection id="home">
          <HomeContent>
            <HomeText>
              <Greeting
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <WavingHand
                  animate={{ rotate: [0, 20, -10, 20, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    repeatType: "loop", 
                    duration: 1.5, 
                    repeatDelay: 1 
                  }}
                >
                  <RiHandHeartLine />
                </WavingHand>
                {t('Greeting,')}
              </Greeting>
              <Name
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Funny VAZONIAINA
              </Name>
              <Role
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {t('subtitle')}
              </Role>
              <Description
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {t('description')}
              </Description>
              <ButtonContainer
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                                <Button 
                  href="#contact" 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEnvelope /> {t('contactMe')}
                </Button>
                <OutlineButton 
                  href="/cv.pdf" 
                  download 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload /> {t('downloadCV')}
                </OutlineButton>
              </ButtonContainer>
            </HomeText>
            <HomeImage
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img src="/profile.jpeg" alt="Funny VAZONIAINA" />
            </HomeImage>
          </HomeContent>
        </HomeSection>
        
        <AboutSection id="about">
          <TitleContainer>
            <SectionTitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {t('aboutTitle')}
            </SectionTitle>
            <SectionSubtitle>{t('aboutSubtitle')}</SectionSubtitle>
          </TitleContainer>
          
          <AboutContent>
            <AboutText
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {t('aboutText1')}
            </AboutText>
            <AboutText
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('aboutText2')}
            </AboutText>
          </AboutContent>
          
          <ServicesGrid
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </AboutSection>
        
        <ProjectsSection id="projects">
          <TitleContainer>
            <SectionTitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {t('projectsTitle')}
            </SectionTitle>
            <SectionSubtitle>{t('projectsSubtitle')}</SectionSubtitle>
          </TitleContainer>
          
          <ProjectsGrid
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                {...project} 
                isDark={isDark} 
              />
            ))}
          </ProjectsGrid>
        </ProjectsSection>
        
        <SkillsSection id="skills">
  <TitleContainer>
    <SectionTitle
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {t('skillsTitle')}
    </SectionTitle>
    <SectionSubtitle>{t('skillsSubtitle')}</SectionSubtitle>
  </TitleContainer>
  
  <SkillsCategoriesContainer>
    {/* Première paire */}
    <SkillsCategory
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <CategoryContainer>
        <CategoryTitle>Database Management Systems</CategoryTitle>
      </CategoryContainer>
      <SkillsGrid
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {skills.sgbd.map((skill, index) => (
          <SkillCard key={index} {...skill} isDark={isDark} />
        ))}
      </SkillsGrid>
    </SkillsCategory>
    
    <SkillsCategory
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <CategoryContainer>
        <CategoryTitle>Programming Languages</CategoryTitle>
      </CategoryContainer>
      <SkillsGrid
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {skills.languages.map((skill, index) => (
          <SkillCard key={index} {...skill} isDark={isDark} />
        ))}
      </SkillsGrid>
    </SkillsCategory>
    
    {/* Deuxième paire */}
    <SkillsCategory
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <CategoryContainer>
        <CategoryTitle>Frameworks & Libraries</CategoryTitle>
      </CategoryContainer>
      <SkillsGrid
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {skills.frameworks.map((skill, index) => (
          <SkillCard key={index} {...skill} isDark={isDark} />
        ))}
      </SkillsGrid>
    </SkillsCategory>
    
    <SkillsCategory
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <CategoryContainer>
        <CategoryTitle>Web Technologies</CategoryTitle>
      </CategoryContainer>
      <SkillsGrid
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {skills.webTech.map((skill, index) => (
          <SkillCard key={index} {...skill} isDark={isDark} />
        ))}
      </SkillsGrid>
    </SkillsCategory>
  </SkillsCategoriesContainer>
</SkillsSection>    
        <ContactSection id="contact">
          <TitleContainer>
            <SectionTitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {t('contactTitle')}
            </SectionTitle>
            <SectionSubtitle>{t('contactSubtitle')}</SectionSubtitle>
          </TitleContainer>
          
          <ContactContent>
            <ContactDescription
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {t('contactDesc')}
            </ContactDescription>
            
            <ContactIcons
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, staggerChildren: 0.1 }}
            >
              <IconLink 
                href="mailto:funnyvazoniaina@gmail.com" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <FaEnvelope />
                <ContactTooltip>Email</ContactTooltip>
              </IconLink>
              <IconLink 
                href="tel:+261342229428" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <FaPhone />
                <ContactTooltip>+261 34 22 294 28</ContactTooltip>
              </IconLink>
              <IconLink 
                href="https://github.com/FunnyVazoniaina" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <FaGithub />
                <ContactTooltip>GitHub</ContactTooltip>
              </IconLink>
              <IconLink 
                href="https://www.linkedin.com/in/funny-vazoniaina-915429281/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <FaLinkedin />
                <ContactTooltip>LinkedIn</ContactTooltip>
              </IconLink>
              <IconLink 
                href="https://web.facebook.com/vazuniaina.funy/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <FaFacebook />
                <ContactTooltip>Facebook</ContactTooltip>
              </IconLink>
            </ContactIcons>
            
            <ContactDivider 
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            
            <ContactCTA
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <CTAText>{t('directContact')}</CTAText>
              <CTAButton 
                href="mailto:funnyvazoniaina@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope /> {t('sendMessage')}
              </CTAButton>
            </ContactCTA>
          </ContactContent>
        </ContactSection>
        
        <Footer isDark={isDark} />
        
        <AnimatePresence>
          {showScrollButton && (
            <ScrollToTop
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowUp />
            </ScrollToTop>
          )}
        </AnimatePresence>
      </Container>
    </ThemeProvider>
    
  );
};

export default App;

