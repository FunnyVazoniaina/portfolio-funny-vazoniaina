import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const lightTheme = {
  background: '#f8fafc',
  text: '#0f172a',
  cardBackground: '#ffffff',
  shadow: '0 10px 15px rgba(0, 0, 0, 0.05)',
  accent: '#facc15',
  hover: '#10b981',
};

const darkTheme = {
  background: '#1a1a2e',
  text: '#e2e8f0',
  cardBackground: '#16213e',
  shadow: '0 10px 15px rgba(0, 0, 0, 0.3)',
  accent: '#facc15',
  hover: '#10b981',
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  overflow-x: hidden;
`;

const Section = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  text-align: center;
  margin-bottom: 3rem;
  background: ${({ theme }) =>
    theme === lightTheme
      ? 'linear-gradient(45deg, #facc15, #10b981)'
      : 'linear-gradient(45deg, #facc15, #10b981)'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HomeSection = styled(Section)`
  text-align: center;
  padding-top: 8rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.9;
  margin-top: 1rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  max-width: 40rem;
  margin: 1.5rem auto;
`;

const Button = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.accent};
  color: #fff;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    background: ${({ theme }) => theme.hover};
    transform: translateY(-2px);
  }
`;

const AboutSection = styled(Section)`
  text-align: center;
`;

const Content = styled.div`
  max-width: 50rem;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.85;
`;

const ProjectsSection = styled(Section)`
  text-align: center;
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const SkillsSection = styled(Section)`
  text-align: center;
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ContactSection = styled(Section)`
  text-align: center;
`;

const ContactIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const IconLink = styled(motion.a)`
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  opacity: 0.8;
  transition: all 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.accent};
    opacity: 1;
  }
`;

const App = () => {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState('dark');
  const isDark = theme === 'dark';

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const toggleLanguage = () => i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');

  const projects = [
    {
      title: t('project1Title'),
      description: t('project1Desc'),
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: 'https://example.com',
    },
    {
      title: t('project2Title'),
      description: t('project2Desc'),
      technologies: ['Flutter', 'Firebase'],
      link: 'https://example.com',
    },
  ];

  const skills = [
    { name: 'ReactJS', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Flutter', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'Styled-Components', level: 95 },
  ];

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
        <Navbar toggleTheme={toggleTheme} toggleLanguage={toggleLanguage} isDark={isDark} />
        <HomeSection id="home">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Title>{t('homeTitle')}</Title>
            <Subtitle>{t('subtitle')}</Subtitle>
            <Description>{t('description')}</Description>
            <div>
              <Button href="#contact" whileHover={{ scale: 1.05 }}>
                <FaEnvelope /> {t('contactMe')}
              </Button>
              <Button href="/cv.pdf" download whileHover={{ scale: 1.05 }}>
                <FaDownload /> {t('downloadCV')}
              </Button>
            </div>
          </motion.div>
        </HomeSection>
        <AboutSection id="about">
          <Title>{t('aboutTitle')}</Title>
          <Content>
            <p>{t('aboutText1')}</p>
            <p>{t('aboutText2')}</p>
          </Content>
        </AboutSection>
        <ProjectsSection id="projects">
          <Title>{t('projectsTitle')}</Title>
          <ProjectsGrid
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} isDark={isDark} />
            ))}
          </ProjectsGrid>
        </ProjectsSection>
        <SkillsSection id="skills">
          <Title>{t('skillsTitle')}</Title>
          <SkillsGrid
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} isDark={isDark} />
            ))}
          </SkillsGrid>
        </SkillsSection>
        <ContactSection id="contact">
          <Title>{t('contactTitle')}</Title>
          <Description>{t('contactDesc')}</Description>
          <ContactIcons>
            <IconLink href="mailto:funnyvazoniaina@gmail.com" whileHover={{ scale: 1.1 }}>
              <FaEnvelope />
            </IconLink>
            <IconLink href="https://github.com/FunnyVazoniaina" target="_blank" whileHover={{ scale: 1.1 }}>
              <FaGithub />
            </IconLink>
            <IconLink href="https://www.linkedin.com/in/funny-vazoniaina-915429281/" target="_blank" whileHover={{ scale: 1.1 }}>
              <FaLinkedin />
            </IconLink>
          </ContactIcons>
        </ContactSection>
        <Footer isDark={isDark} />
      </Container>
    </ThemeProvider>
  );
};

export default App;