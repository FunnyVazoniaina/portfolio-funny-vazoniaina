import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaHeart, FaCode } from 'react-icons/fa';

// Animations pour les éléments du footer
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const FooterStyled = styled.footer`
  background: ${({ theme }) => theme.backgroundAlt};
  padding: 2rem 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, ${({ theme }) => theme.accent}, ${({ theme }) => theme.secondary});
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const QRCodeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const QRCodeImage = styled(motion.img)`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 10px;
  background: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const QRCodeCaption = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textSecondary};
  text-align: center;
  max-width: 200px;
`;

const Copyright = styled(motion.div)`
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.95rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
`;

const HeartIcon = styled(FaHeart)`
  color: ${({ theme }) => theme.error};
  display: inline-block;
  margin: 0 0.25rem;
  animation: pulse 1.5s infinite;
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
`;

const FooterBottomLink = styled(motion.a)`
  color: ${({ theme }) => theme.textSecondary};
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    bottom: -2px;
    left: 0;
    background-color: ${({ theme }) => theme.accent};
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: ${({ theme }) => theme.accent};
    
    &::after {
      width: 100%;
    }
  }
`;

const Footer = ({ isDark }) => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterStyled>
      <FooterContent>
        <QRCodeContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <QRCodeImage 
            src="/qrcode.png" 
            alt="Scan for contact info"
            whileHover={{ rotate: 5 }}
          />
          <QRCodeCaption>
            {t('scanQRCode')}
          </QRCodeCaption>
        </QRCodeContainer>
        
        <Copyright
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <p>
            © {currentYear} Funny VAZONIAINA. {t('allRightsReserved')}
          </p>
          <p>
            {t('madeWith')} <HeartIcon aria-hidden="true" /> {t('and')} <FaCode style={{ display: 'inline-block', margin: '0 0.25rem' }} aria-hidden="true" />
          </p>
          <FooterBottom>
            <FooterBottomLink 
              href="#privacy"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {t('privacy')}
            </FooterBottomLink>
            <FooterBottomLink 
              href="#security"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {t('security')}
            </FooterBottomLink>
            <FooterBottomLink 
              href="#terms"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {t('terms')}
            </FooterBottomLink>
          </FooterBottom>
        </Copyright>
      </FooterContent>
    </FooterStyled>
  );
};

export default Footer;
