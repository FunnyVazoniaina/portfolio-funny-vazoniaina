import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FaBars, FaTimes, FaSun, FaMoon, FaGlobe } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${({ theme, isDark }) => 
    isDark ? 'rgba(13, 17, 23, 0.85)' : 'rgba(248, 249, 252, 0.85)'};
  backdrop-filter: blur(12px);
  z-index: 1000;
  padding: ${({ isScrolled }) => (isScrolled ? '0.8rem 2rem' : '1.2rem 2rem')};
  transition: all 0.3s ease;
  box-shadow: ${({ theme, isDark, isScrolled }) => 
    isScrolled ? (isDark ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(99, 102, 241, 0.1)') : 'none'};
  
  @media (max-width: 768px) {
    padding: ${({ isScrolled }) => (isScrolled ? '0.8rem 1.5rem' : '1.2rem 1.5rem')};
  }
`;

const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 992px) {
    display: none;
  }
`;

const NavItem = styled(motion.a)`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.accent};
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }
  
  &:hover, &.active {
    color: ${({ theme }) => theme.accent};
    
    &::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;

const NavControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 992px) {
    .desktop-only {
      display: none;
    }
  }
`;

const ThemeToggle = styled(motion.button)`
  background: ${({ theme, isDark }) => 
    isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme, isDark }) => 
    isDark ? theme.accent : theme.text};
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.accent};
    color: white;
    transform: rotate(30deg);
  }
`;

const LanguageToggle = styled(motion.button)`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.accent};
  border-radius: 20px;
  padding: 0.4rem 1rem;
  color: ${({ theme }) => theme.accent};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.accent};
    color: white;
  }
`;

const Hamburger = styled(motion.button)`
  display: none;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.accent}20;
    color: ${({ theme }) => theme.accent};
  }

  @media (max-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 998;
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 75%;
  max-width: 350px;
  height: 100vh;
  background: ${({ theme, isDark }) => 
    isDark ? theme.backgroundAlt : theme.cardBackground};
  padding: 5rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 999;
  box-shadow: -5px 0 25px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
`;

const MobileNavItem = styled(motion.a)`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: 600;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  
  &:hover, &.active {
    background: ${({ theme }) => theme.accent}20;
    color: ${({ theme }) => theme.accent};
    padding-left: 1.5rem;
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.accent}20;
    color: ${({ theme }) => theme.accent};
  }
`;

const MobileNavControls = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  padding: 1rem;
  border-top: 1px solid ${({ theme, isDark }) => 
    isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
`;

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
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const navItems = [
    { name: t('home'), href: '#home' },
    { name: t('about'), href: '#about' },
    { name: t('projects'), href: '#projects' },
    { name: t('certificates'), href: '#certificates' },
    { name: t('skills'), href: '#skills' },
    { name: t('contact'), href: '#contact' },
  ];
  
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <Nav 
        isDark={isDark} 
        isScrolled={isScrolled} 
        initial={{ y: -100 }} 
        animate={{ y: 0 }} 
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <NavContainer>
          <LogoContainer>
            {/* Avatar et nom supprimés */}
          </LogoContainer>
          
          <NavMenu>
            {navItems.map((item) => (
              <NavItem 
                key={item.name} 
                href={item.href} 
                className={activeSection === item.href.substring(1) ? 'active' : ''}
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
              >
                {item.name}
              </NavItem>
            ))}
          </NavMenu>
          
          <NavControls>
            <LanguageToggle 
              onClick={toggleLanguage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="desktop-only"
            >
              <FaGlobe /> {i18n.language === 'en' ? 'FR' : 'EN'}
            </LanguageToggle>
            
            <ThemeToggle 
              isDark={isDark} 
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 30 }}
              whileTap={{ scale: 0.9, rotate: 0 }}
              className="desktop-only"
            >
              {isDark ? <FaSun /> : <FaMoon />}
            </ThemeToggle>
            
            <Hamburger 
              onClick={toggleMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </Hamburger>
          </NavControls>
        </NavContainer>
      </Nav>
      
      <AnimatePresence>
        {isOpen && (
          <>
            <MobileMenuOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
            />
            
            <MobileMenu
              isDark={isDark}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <CloseButton 
                onClick={closeMenu}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes />
              </CloseButton>
              
              {navItems.map((item, index) => (
                <MobileNavItem 
                  key={item.name} 
                  href={item.href} 
                  className={activeSection === item.href.substring(1) ? 'active' : ''}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  {item.name}
                </MobileNavItem>
              ))}
              
              <MobileNavControls isDark={isDark}>
                <LanguageToggle 
                  onClick={() => {
                    toggleLanguage();
                    closeMenu();
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGlobe /> {i18n.language === 'en' ? 'FR' : 'EN'}
                </LanguageToggle>
                
                <ThemeToggle 
                  isDark={isDark} 
                  onClick={() => {
                    toggleTheme();
                    closeMenu();
                  }}
                  whileHover={{ scale: 1.1, rotate: 30 }}
                  whileTap={{ scale: 0.9, rotate: 0 }}
                >
                  {isDark ? <FaSun /> : <FaMoon />}
                </ThemeToggle>
              </MobileNavControls>
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
