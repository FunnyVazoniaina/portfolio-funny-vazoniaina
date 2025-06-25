import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import SimpleSkillItem from './components/SimpleSkillItem';
import YoutubeModal from './components/YoutubeModal';
import ReactGA from "react-ga4";
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
  FaYoutube
} from 'react-icons/fa';
import { RiHandHeartLine } from 'react-icons/ri';

ReactGA.initialize("G-XY2BEPZ0DL");

const App = () => {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [youtubeModal, setYoutubeModal] = useState({ open: false, url: '' });

  const isDark = theme === 'dark';

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    localStorage.setItem('theme', theme);
    const handleScroll = () => setShowScrollButton(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const toggleLanguage = () => i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const isYoutubeLink = url =>
    typeof url === 'string' &&
    (url.includes('youtube.com') || url.includes('youtu.be'));

  const projects = [
    {
      title: t('project1Title'),
      description: t('project1Desc'),
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: 'https://www.youtube.com/watch?v=g-z-YxgKHLY&list=PLwLsbqvBlImHG5yeUCXJ1aqNMgUKi1NK3&index=14',
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
      image: '/images/management1.png'
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
    {
      title: 'Food Suggester',
      description: 'Food Suggester is a PWA that suggests easy recipes based on the ingredients you already have at home.',
      technologies: ['ReactJS+Vite', 'ExpressJS', 'MySQL','SpoonacularAPI'],
      link: 'https://youtu.be/mr5f24gEuG0',
      githubLink: 'https://github.com/FunnyVazoniaina/foodSuggesterClient',
      image: '/images/foodsuggester.png'
    },
  ];

  const certificates = [
    {
      title: "Linux Command Line",
      issuer: "Udemy",
      date: "Mai 2025",
      image: "/images/certificates/LinuxCommand.jpg",
      link: "https://www.udemy.com/certificate/UC-f56c9a97-74b9-47b0-99ea-f7b1ba95e656/"
    },
    {
      title: "AI-Powered SCRUM Master",
      issuer: "Udemy",
      date: "Juin 2025",
      image: "/images/certificates/SCRUM.jpg",
      link: "https://www.udemy.com/certificate/UC-c684db30-954f-4249-92fd-2d9795d0e133/"
    },
    {
      title: "GitHub Fundamentals",
      issuer: "Mindluster",
      date: "Mai 2025",
      image: "/images/certificates/github.jpg",
      link: "https://www.mindluster.com/student/certificate/44028272"
    },
    {
      title: "English For Developer B1",
      issuer: "freeCodeCamp",
      date: "Juin 2025",
      image: "/images/certificates/fullstack-cert.jpg",
      link: "https://www.freecodecamp.org/certification/example4/"
    }
  ];

  const skills = {
    sgbd: [
      { name: 'MySQL', level: 70, iconName: 'logos:mysql' },
      { name: 'PostgreSQL', level: 50, iconName: 'logos:postgresql' },
      { name: 'MongoDB', level: 45, iconName: 'logos:mongodb' },
    ],
    languages: [
      { name: 'JavaScript', level: 70, iconName: 'logos:javascript' },
      { name: 'Java', level: 40, iconName: 'logos:java' },
      { name: 'PHP', level: 60, iconName: 'logos:php' },
    ],
    frameworks: [
      { name: 'ReactJS', level: 70, iconName: 'logos:react' },
      { name: 'Node.js', level: 75, iconName: 'logos:nodejs' },
      { name: 'Symfony', level: 65, iconName: 'logos:symfony' },
      { name: 'NextJS', level: 58, iconName: 'logos:nextjs-icon' },
      { name: 'TailwindCSS', level: 61, iconName: 'logos:tailwindcss-icon' },
    ],
    webTech: [
      { name: 'HTML', level: 75, iconName: 'logos:html-5' },
      { name: 'CSS', level: 70, iconName: 'logos:css-3' },
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
    <div
      className={`min-h-screen flex flex-col transition-colors duration-500 ${
        isDark
          ? "bg-[#0a0a0a] text-slate-100"
          : "bg-[#f8fafc] text-slate-900"
      }`}
    >
      <Navbar
        toggleTheme={toggleTheme}
        toggleLanguage={toggleLanguage}
        isDark={isDark}
        className="!bg-[#4e342e] !shadow-lg"
      />

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center pt-32 pb-8 relative overflow-hidden"
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto w-full">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center md:justify-start gap-2 text-[#4e342e] text-xl font-medium mb-4"
            >
              <motion.span
                animate={{ rotate: [0, 20, -10, 20, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 1.5,
                  repeatDelay: 1,
                }}
                className="inline-block text-2xl"
              >
                <RiHandHeartLine />
              </motion.span>
              {t("Greeting,")}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#4e342e] via-[#bca18d] to-[#4e342e] bg-clip-text text-transparent mb-4"
            >
              Funny VAZONIAINA
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl md:text-3xl font-semibold text-[#bca18d] mb-6"
            >
              {t("subtitle")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg text-[#e0cfc2] max-w-xl mx-auto md:mx-0 mb-8"
            >
              {t("description")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4e342e] to-[#bca18d] hover:from-[#3b241a] hover:to-[#bca18d]/80 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition"
                onClick={() =>
                  ReactGA.event({
                    category: "User",
                    action: "Clicked Contact Button",
                  })
                }
              >
                <FaEnvelope /> {t("contactMe")}
              </a>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 border-2 border-[#bca18d] text-[#bca18d] hover:bg-[#4e342e] hover:text-white px-6 py-3 rounded-full font-semibold transition"
                onClick={() =>
                  ReactGA.event({
                    category: "User",
                    action: "Downloaded CV",
                  })
                }
              >
                <FaDownload /> {t("downloadCV")}
              </a>
            </motion.div>
          </div>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex justify-center items-center relative"
          >
            <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-[#4e342e]/30 to-[#bca18d]/20 -z-10" />
            <img
              src="/profile.jpeg"
              alt="Funny VAZONIAINA"
              className="w-72 h-72 rounded-full object-cover border-4 border-[#bca18d] shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative overflow-hidden py-8 px-3 max-w-full w-full">
        <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-indigo-500/10 z-0" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-blue-500/10 z-0" />
        <div className="text-center mb-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent mb-2 inline-block"
          >
            {t('aboutTitle')}
          </motion.h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">{t('aboutSubtitle')}</p>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto text-center text-base text-slate-400">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            {t('aboutText1')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            {t('aboutText2')}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12 px-2"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-[#161b22] p-7 rounded-xl shadow-md text-center border border-indigo-100 dark:border-indigo-900 hover:-translate-y-2 hover:shadow-xl transition"
            >
              <div className="text-3xl text-indigo-500 mb-4 bg-indigo-500/10 p-4 rounded-full inline-block">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">{service.title}</h3>
              <p className="text-slate-400 text-base">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative overflow-hidden py-12 px-6 max-w-full w-full">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent mb-2 inline-block"
          >
            {t('projectsTitle')}
          </motion.h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">{t('projectsSubtitle')}</p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project} 
              isDark={isDark} 
              onLiveDemoClick={isYoutubeLink(project.link)
                ? () => setYoutubeModal({ open: true, url: project.link })
                : undefined
              }
            />
          ))}
        </motion.div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="relative overflow-hidden py-12 px-6 max-w-full w-full bg-transparent">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent mb-2 inline-block"
          >
            {t('certificatesTitle')}
          </motion.h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">{t('certificatesSubtitle')}</p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
        >
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group perspective-[1200px] min-h-[320px] w-full"
            >
              <div className="relative w-full h-full min-h-[320px] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute w-full h-full backface-hidden bg-white dark:bg-[#161b22] rounded-xl flex flex-col justify-center shadow-md border border-indigo-100 dark:border-indigo-900">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-1 text-slate-900 dark:text-slate-100">{certificate.title}</h3>
                    <p className="text-indigo-500 font-medium mb-2">{certificate.issuer}</p>
                    <p className="text-xs text-slate-400 mb-2">{certificate.date}</p>
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-medium transition"
                    >
                      {t('viewCertificate')} →
                    </a>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute w-full h-full backface-hidden bg-white dark:bg-[#161b22] rounded-xl flex items-center justify-center [transform:rotateY(180deg)] overflow-hidden">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-contain rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative overflow-hidden py-12 px-6 max-w-full w-full">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent mb-2 inline-block"
          >
            {t('skillsTitle')}
          </motion.h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">{t('skillsSubtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
          {/* SGBD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 inline-block relative after:content-[''] after:block after:w-12 after:h-1 after:bg-indigo-500 after:rounded after:mx-auto after:mt-1">
                {t('Database Management Systems')}
              </h3>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.2 }}
              className="flex flex-col gap-2 w-full"
            >
              {skills.sgbd.map((skill, index) => (
                <SimpleSkillItem key={index} {...skill} isDark={isDark} />
              ))}
            </motion.div>
          </motion.div>
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 inline-block relative after:content-[''] after:block after:w-12 after:h-1 after:bg-indigo-500 after:rounded after:mx-auto after:mt-1">
                {t('Programming Languages')}
              </h3>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.2 }}
              className="flex flex-col gap-2 w-full"
            >
              {skills.languages.map((skill, index) => (
                <SimpleSkillItem key={index} {...skill} isDark={isDark} />
              ))}
            </motion.div>
          </motion.div>
          {/* Frameworks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 inline-block relative after:content-[''] after:block after:w-12 after:h-1 after:bg-indigo-500 after:rounded after:mx-auto after:mt-1">
                {t('Frameworks & Libraries')}
              </h3>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.2 }}
              className="flex flex-col gap-2 w-full"
            >
              {skills.frameworks.map((skill, index) => (
                <SimpleSkillItem key={index} {...skill} isDark={isDark} />
              ))}
            </motion.div>
          </motion.div>
          {/* Web Tech */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 inline-block relative after:content-[''] after:block after:w-12 after:h-1 after:bg-indigo-500 after:rounded after:mx-auto after:mt-1">
                {t('Web Technologies')}
              </h3>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.2 }}
              className="flex flex-col gap-2 w-full"
            >
              {skills.webTech.map((skill, index) => (
                <SimpleSkillItem key={index} {...skill} isDark={isDark} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative overflow-hidden py-12 px-6 max-w-full w-full">
        <div className="absolute top-[-200px] right-[-200px] w-[400px] h-[400px] rounded-full bg-indigo-500/10 z-0" />
        <div className="absolute bottom-[-200px] left-[-200px] w-[400px] h-[400px] rounded-full bg-blue-500/10 z-0" />
        <div className="text-center mb-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent mb-2 inline-block"
          >
            {t('contactTitle')}
          </motion.h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">{t('contactSubtitle')}</p>
        </div>
        <div className="max-w-2xl mx-auto text-center relative z-10 px-2">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-slate-400 mb-8"
          >
            {t('contactDesc')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            <ContactIcon
              href="tel:+261342229428"
              icon={<FaPhone />}
              tooltip="+261 34 22 294 28"
              delay={0.1}
            />
            <ContactIcon
              href="https://github.com/FunnyVazoniaina"
              icon={<FaGithub />}
              tooltip="GitHub"
              delay={0.2}
              target="_blank"
            />
            <ContactIcon
              href="https://www.linkedin.com/in/funny-vazoniaina-915429281/"
              icon={<FaLinkedin />}
              tooltip="LinkedIn"
              delay={0.3}
              target="_blank"
            />
            <ContactIcon
              href="https://web.facebook.com/vazuniaina.funy/"
              icon={<FaFacebook />}
              tooltip="Facebook"
              delay={0.4}
              target="_blank"
            />
            <ContactIcon
              href="https://youtube.com/@funnyvazoniainaluffy?si=KkDboQ3Fa0t-xuA9"
              icon={<FaYoutube />}
              tooltip="YouTube"
              delay={0.5}
              target="_blank"
            />
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded mx-auto my-8"
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-center gap-3 mt-8"
          >
            <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">{t('directContact')}</p>
            <a
              href="mailto:funnyvazoniaina@gmail.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition"
            >
              <FaEnvelope /> {t('sendMessage')}
            </a>
          </motion.div>
        </div>
      </section>

      <Footer isDark={isDark} className="!bg-[#4e342e] !text-white" />

      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#4e342e] text-white flex items-center justify-center text-xl shadow-lg z-50 transition hover:bg-[#3b241a]"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>

      <YoutubeModal
        open={youtubeModal.open}
        youtubeUrl={youtubeModal.url}
        onClose={() => setYoutubeModal({ open: false, url: "" })}
      />
    </div>
  );
};

// Helper component for contact icons with tooltip
function ContactIcon({ href, icon, tooltip, delay = 0, target }) {
  return (
    <motion.a
      href={href}
      target={target}
      rel={target ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="relative text-slate-900 dark:text-slate-100 text-2xl w-16 h-16 rounded-full flex items-center justify-center bg-white dark:bg-[#161b22] shadow-md border border-indigo-100 dark:border-indigo-900 transition hover:bg-indigo-600 hover:text-white group"
    >
      {icon}
      <span className="absolute bottom-[-2.5rem] left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-3 py-1 rounded-2xl text-xs font-medium opacity-0 group-hover:opacity-100 pointer-events-none transition whitespace-nowrap shadow-lg z-10">
        {tooltip}
      </span>
    </motion.a>
  );
}

export default App;

