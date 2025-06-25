import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaHeart, FaCode, FaShareAlt, FaTimes } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Footer = ({ isDark }) => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const [showQRCode, setShowQRCode] = useState(false);

  return (
    <footer className="bg-[#0a0a0a] text-white pt-10 pb-5 px-4 rounded-t-3xl shadow-[0_-4px_24px_rgba(20,10,5,0.25)] relative overflow-hidden">
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="w-full flex flex-col gap-3 border-t border-[#4e342e]/40 pt-5 text-center"
        >
          <p>
            <strong className="text-[#bca18d]">© {currentYear} Funny VAZONIAINA.</strong> {t('allRightsReserved')}
          </p>
          <p>
            {t('madeWith')}
            <span className="inline-block mx-1 animate-pulse text-[#e57373]"><FaHeart aria-hidden="true" /></span>
            {t('and')}
            <span className="inline-block mx-1 align-middle text-[#bca18d]"><FaCode aria-hidden="true" /></span>
          </p>
          <div className="flex justify-center gap-6 mt-3 flex-wrap">
            <motion.a
              href="#privacy"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="text-[#bca18d] hover:text-[#fff] text-base font-medium px-2 py-1 rounded transition relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-[#4e342e] after:to-[#bca18d] after:rounded after:transition-all after:duration-300 hover:after:w-full hover:bg-[#4e342e]/20"
            >
              {t('privacy')}
            </motion.a>
            <motion.a
              href="#security"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="text-[#bca18d] hover:text-[#fff] text-base font-medium px-2 py-1 rounded transition relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-[#4e342e] after:to-[#bca18d] after:rounded after:transition-all after:duration-300 hover:after:w-full hover:bg-[#4e342e]/20"
            >
              {t('security')}
            </motion.a>
            <motion.a
              href="#terms"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="text-[#bca18d] hover:text-[#fff] text-base font-medium px-2 py-1 rounded transition relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-[#4e342e] after:to-[#bca18d] after:rounded after:transition-all after:duration-300 hover:after:w-full hover:bg-[#4e342e]/20"
            >
              {t('terms')}
            </motion.a>
            <motion.button
              type="button"
              onClick={() => setShowQRCode(true)}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="text-[#bca18d] hover:text-[#fff] text-base font-medium px-2 py-1 rounded transition flex items-center gap-1 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-[#4e342e] after:to-[#bca18d] after:rounded after:transition-all after:duration-300 hover:after:w-full hover:bg-[#4e342e]/20"
            >
              <FaShareAlt className="mr-1" /> {t('share')}
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* QR Code Popup */}
      <AnimatePresence>
        {showQRCode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex justify-center items-center z-[1000] backdrop-blur-sm"
            onClick={() => setShowQRCode(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-gradient-to-br from-[#4e342e] to-[#bca18d] text-white rounded-2xl shadow-2xl p-8 max-w-xs w-full flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setShowQRCode(false)}
                className="absolute top-3 right-3 text-[#bca18d] hover:text-[#fff] text-xl transition"
                aria-label="Close"
              >
                <FaTimes />
              </button>
              <h3 className="text-xl font-bold mb-4 text-[#4e342e]">{t('shareMyProfile')}</h3>
              <motion.img
                src="/QRCODE.svg"
                alt="Scan for contact info"
                className="w-48 h-48 rounded-lg shadow-lg bg-white p-2"
                whileHover={{ rotate: 5 }}
              />
              <p className="text-base text-[#4e342e] text-center mt-4">{t('scanQRCode')}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
