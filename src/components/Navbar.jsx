import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Nav = styled(motion.nav).withConfig({
  shouldForwardProp: (prop) => prop !== 'isDark' && prop !== 'isScrolled',
})`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${({ isDark }) =>
    isDark ? 'rgba(26, 26, 46, 0.9)' : 'rgba(248, 250, 252, 0.9)'};
  backdrop-filter: blur(12px);
  z-index: 1000;
  padding: ${({ isScrolled }) => (isScrolled ? '1rem 2rem' : '1.5rem 2rem')};
  transition: padding 0.3s ease;
  box-shadow: ${({ isDark }) => (isDark ? '0 4px 15px rgba(0, 0, 0, 0.2)' : '0 4px 15px rgba(0, 0, 0, 0.05)')};
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem; /* Légèrement augmenté pour équilibrer avec la photo plus grande */
`;

const ProfileImage = styled.img`
  width: 60px; /* Agrandi de 40px à 60px */
  height: 60px; /* Agrandi de 40px à 60px */
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${({ isDark }) => (isDark ? '#facc15' : '#10b981')};
`;

const Logo = styled.h1.withConfig({
  shouldForwardProp: (prop) => prop !== 'isDark',
})`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ isDark }) => (isDark ? '#e2e8f0' : '#0f172a')};
  letter-spacing: -0.02em;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.a.withConfig({
  shouldForwardProp: (prop) => prop !== 'isDark',
})`
  font-size: 1.1rem;
  color: ${({ isDark }) => (isDark ? '#e2e8f0' : '#0f172a')};
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background: ${({ theme }) => theme.accent};
      bottom: 0;
      left: 0;
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }

  &:after {
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
`;

const ThemeToggle = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'isDark',
})`
  background: ${({ isDark }) => (isDark ? '#16213e' : '#e2e8f0')};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ isDark }) => (isDark ? '#facc15' : '#0f172a')};
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: ${({ theme }) => theme.hover};
    color: #fff;
  }
`;

const LanguageToggle = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'isDark',
})`
  background: none;
  border: 1px solid ${({ isDark }) => (isDark ? '#e2e8f0' : '#0f172a')};
  border-radius: 20px;
  padding: 0.5rem 1rem;
  color: ${({ isDark }) => (isDark ? '#e2e8f0' : '#0f172a')};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: ${({ theme }) => theme.accent};
    color: #fff;
    border-color: ${({ theme }) => theme.accent};
  }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ isDark }) => (isDark ? '#e2e8f0' : '#0f172a')};
  font-size: 1.75rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 100vh;
  background: ${({ isDark }) => (isDark ? '#16213e' : '#ffffff')};
  padding: 5rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 999;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavItem = styled.a.withConfig({
  shouldForwardProp: (prop) => prop !== 'isDark',
})`
  font-size: 1.25rem;
  color: ${({ isDark }) => (isDark ? '#e2e8f0' : '#0f172a')};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const Navbar = ({ toggleTheme, toggleLanguage, isDark }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  window.addEventListener('scroll', handleScroll);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <Nav isDark={isDark} isScrolled={isScrolled} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
        <NavContainer>
          <LogoContainer>
            <ProfileImage src="/profile.jpeg" alt="Funny VAZONIAINA" isDark={isDark} />
            <Logo isDark={isDark}>Portfolio</Logo>
          </LogoContainer>
          <NavMenu>
            {navItems.map((item) => (
              <NavItem key={item.name} isDark={isDark} href={item.href}>
                {item.name}
              </NavItem>
            ))}
            <LanguageToggle isDark={isDark} onClick={toggleLanguage}>
              {i18n.language === 'en' ? 'FR' : 'EN'}
            </LanguageToggle>
            <ThemeToggle isDark={isDark} onClick={toggleTheme}>
              {isDark ? <FaSun /> : <FaMoon />}
            </ThemeToggle>
          </NavMenu>
          <Hamburger isDark={isDark} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </Hamburger>
        </NavContainer>
      </Nav>
      {isOpen && (
        <MobileMenu
          isDark={isDark}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {navItems.map((item) => (
            <MobileNavItem key={item.name} isDark={isDark} href={item.href} onClick={() => setIsOpen(false)}>
              {item.name}
            </MobileNavItem>
          ))}
          <LanguageToggle isDark={isDark} onClick={toggleLanguage}>
            {i18n.language === 'en' ? 'FR' : 'EN'}
          </LanguageToggle>
          <ThemeToggle isDark={isDark} onClick={toggleTheme}>
            {isDark ? <FaSun /> : <FaMoon />}
          </ThemeToggle>
        </MobileMenu>
      )}
    </>
  );
};

export default Navbar;