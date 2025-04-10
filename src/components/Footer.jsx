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

const Footer = ({ isDark }) => {
  const { t } = useTranslation();
  return (
    <FooterStyled isDark={isDark}>
      <p>
        {t('footer')} - {t('allRightsReserved')}
      </p>
    </FooterStyled>
  );
};

export default Footer;