import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon, FaGlobe } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Navbar = ({ toggleTheme, toggleLanguage, isDark }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = ['home', 'about', 'projects', 'certificates', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      }) || 'home';
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  const navItems = [
    { name: t('home'), href: '#home' },
    { name: t('about'), href: '#about' },
    { name: t('projects'), href: '#projects' },
    { name: t('certificates'), href: '#certificates' },
    { name: t('skills'), href: '#skills' },
    { name: t('contact'), href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 w-full z-[1000] transition-all duration-300
          ${isScrolled ? 'shadow-lg' : ''}
          bg-[#0a0a0a]/95 backdrop-blur-md`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#bca18d] tracking-tight">FV</span>
            <span className="hidden md:inline text-lg font-semibold text-[#4e342e]">Funny VAZONIAINA</span>
          </div>
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map(item => (
              <motion.a
                key={item.href}
                href={item.href}
                className={`relative font-medium px-2 py-1 transition
                  ${activeSection === item.href.substring(1)
                    ? 'text-[#bca18d]'
                    : 'text-[#f3e9e1] hover:text-[#bca18d]'}
                  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-gradient-to-r after:from-[#4e342e] after:to-[#bca18d] after:rounded
                  after:transition-all after:duration-300
                  ${activeSection === item.href.substring(1) ? 'after:w-full' : 'after:w-0'} hover:after:w-full`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
          {/* Controls */}
          <div className="flex items-center gap-2">
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-1 border border-[#bca18d] text-[#bca18d] px-3 py-1 rounded-2xl font-medium text-sm transition hover:bg-[#4e342e] hover:text-white"
            >
              <FaGlobe /> {i18n.language === 'en' ? 'FR' : 'EN'}
            </motion.button>
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 30 }}
              whileTap={{ scale: 0.9, rotate: 0 }}
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-[#4e342e]/20 text-[#bca18d] text-lg transition hover:bg-[#4e342e] hover:text-white"
              aria-label="Toggle theme"
            >
              {isDark ? <FaSun /> : <FaMoon />}
            </motion.button>
            {/* Hamburger */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex lg:hidden items-center justify-center w-10 h-10 rounded-full bg-[#4e342e]/20 text-[#bca18d] text-xl transition hover:bg-[#4e342e] hover:text-white"
              aria-label="Menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>
        </div>
      </motion.nav>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[998]"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 w-4/5 max-w-xs h-full bg-[#0a0a0a] shadow-2xl z-[999] flex flex-col p-6"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-2xl text-[#bca18d] hover:text-white transition"
                aria-label="Close"
              >
                <FaTimes />
              </button>
              <div className="flex flex-col gap-6 mt-12">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-semibold text-lg px-2 py-2 rounded transition
                      ${activeSection === item.href.substring(1)
                        ? 'bg-gradient-to-r from-[#4e342e] to-[#bca18d] text-white'
                        : 'text-[#bca18d] hover:bg-[#4e342e]/30 hover:text-white'}`}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.07 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
              <div className="flex gap-2 mt-8 border-t border-[#4e342e]/40 pt-6">
                <motion.button
                  onClick={toggleLanguage}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1 border border-[#bca18d] text-[#bca18d] px-3 py-1 rounded-2xl font-medium text-sm transition hover:bg-[#4e342e] hover:text-white"
                >
                  <FaGlobe /> {i18n.language === 'en' ? 'FR' : 'EN'}
                </motion.button>
                <motion.button
                  onClick={toggleTheme}
                  whileHover={{ scale: 1.1, rotate: 30 }}
                  whileTap={{ scale: 0.9, rotate: 0 }}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#4e342e]/20 text-[#bca18d] text-lg transition hover:bg-[#4e342e] hover:text-white"
                  aria-label="Toggle theme"
                >
                  {isDark ? <FaSun /> : <FaMoon />}
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
