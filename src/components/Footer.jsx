import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaHeart, FaCode, FaShareAlt, FaTimes } from 'react-icons/fa';

// Animations pour les éléments du footer
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const FooterStyled = styled.footer`
  background: ${({ theme }) => theme.backgroundAlt};
  padding: 2.5rem 1.5rem 1.2rem 1.5rem;
  position: relative;
  overflow: hidden;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  box-shadow: 0 -4px 24px ${({ theme }) => theme.accent}10;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;
`;

const Copyright = styled(motion.div)`
  text-align: center;
  padding-top: 1.2rem;
  border-top: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1.05rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  width: 100%;
`;

const HeartIcon = styled(FaHeart)`
  color: ${({ theme }) => theme.error};
  display: inline-block;
  margin: 0 0.25rem;
  animation: pulse 1.5s infinite;
  vertical-align: middle;
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.2rem;
  flex-wrap: wrap;
`;

const FooterBottomLink = styled(motion.a)`
  color: ${({ theme }) => theme.textSecondary};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  padding: 0.2rem 0.5rem;
  border-radius: 8px;
  
  &:hover {
    color: ${({ theme }) => theme.accent};
    background: ${({ theme }) => theme.accent}10;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.accent};
    transition: width 0.3s ease;
    border-radius: 2px;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

// Popup styles
const PopupOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

const PopupContent = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground};
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 90%;
  width: 350px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const QRCodeImage = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 10px;
  background: white;
  margin: 1rem 0;
`;

const QRCodeCaption = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondary};
  text-align: center;
  margin-top: 1rem;
`;

const PopupTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
`;

const Footer = ({ isDark }) => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const [showQRCode, setShowQRCode] = useState(false);
  
  return (
    <FooterStyled>
      <FooterContent>
        <Copyright
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <p>
            <strong>© {currentYear} Funny VAZONIAINA.</strong> {t('allRightsReserved')}
          </p>
          <p>
            {t('madeWith')} <HeartIcon aria-hidden="true" /> {t('and')} <FaCode style={{ display: 'inline-block', margin: '0 0.25rem', verticalAlign: 'middle' }} aria-hidden="true" />
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
            <FooterBottomLink 
              as="span"
              onClick={() => setShowQRCode(true)}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <FaShareAlt style={{ marginRight: '5px', verticalAlign: 'middle' }} /> {t('share')}
            </FooterBottomLink>
          </FooterBottom>
        </Copyright>
      </FooterContent>
      
      {/* QR Code Popup */}
      <AnimatePresence>
        {showQRCode && (
          <PopupOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowQRCode(false)}
          >
            <PopupContent
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={() => setShowQRCode(false)}>
                <FaTimes />
              </CloseButton>
              <PopupTitle>{t('shareMyProfile')}</PopupTitle>
              <QRCodeImage 
                src="/QRCODE.svg" 
                alt="Scan for contact info"
                whileHover={{ rotate: 5 }}
              />
              <QRCodeCaption>
                {t('scanQRCode')}
              </QRCodeCaption>
            </PopupContent>
          </PopupOverlay>
        )}
      </AnimatePresence>
    </FooterStyled>
  );
};

export default Footer;
