import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const FooterStyled = styled.footer.withConfig({
  shouldForwardProp: (prop) => prop !== 'isDark',
})`
  margin-top: auto;
  background: ${({ isDark }) => (isDark ? '#16213e' : '#e2e8f0')};
  padding: 1.5rem;
  text-align: center;
  color: ${({ isDark }) => (isDark ? '#e2e8f0' : '#0f172a')};
  font-size: 0.9rem;
  opacity: 0.9;
`;

const FooterLinks = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const FooterLink = styled.a`
  color: ${({ isDark }) => (isDark ? '#e2e8f0' : '#0f172a')};
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const Footer = ({ isDark }) => {
  const { t } = useTranslation();
  return (
    <FooterStyled isDark={isDark}>
      <p>
        {t('footer')} - {t('allRightsReserved')}
      </p>
      <FooterLinks>
        <FooterLink href="#privacy" isDark={isDark}>
          {t('privacy')}
        </FooterLink>
        <FooterLink href="#security" isDark={isDark}>
          {t('security')}
        </FooterLink>
        <FooterLink href="#terms" isDark={isDark}>
          {t('terms')}
        </FooterLink>
      </FooterLinks>
    </FooterStyled>
  );
};

export default Footer;