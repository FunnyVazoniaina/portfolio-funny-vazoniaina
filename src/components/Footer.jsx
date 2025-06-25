import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaHeart, FaCode, FaShareAlt, FaTimes } from 'react-icons/fa';

// Animations pour les éléments du footer
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Footer = ({ isDark }) => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const [showQRCode, setShowQRCode] = useState(false);
  
  return (
    <>
      <footer className="bg-gray-100 dark:bg-gray-800 px-6 py-10 pb-5 relative overflow-hidden shadow-[0_-4px_24px_rgba(59,130,246,0.1)] dark:shadow-[0_-4px_24px_rgba(59,130,246,0.1)]">
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-center text-gray-600 dark:text-gray-400 text-[1.05rem] space-y-3"
          >
            <p>
              <strong>© {currentYear} Funny VAZONIAINA.</strong> {t('allRightsReserved')}
            </p>
            <p className="flex items-center justify-center gap-1">
              {t('madeWith')} 
              <FaHeart 
                className="text-red-500 animate-heart-pulse" 
                aria-hidden="true" 
              /> 
              {t('and')} 
              <FaCode 
                className="text-gray-600 dark:text-gray-400" 
                aria-hidden="true" 
              />
            </p>
            
            <div className="flex items-center justify-center gap-6 mt-5 flex-wrap">
              <motion.a
                href="#privacy"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="text-gray-600 dark:text-gray-400 no-underline text-base font-medium tracking-wide transition-all duration-300 relative cursor-pointer py-1 px-2 rounded-lg hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 group"
              >
                {t('privacy')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 rounded-full group-hover:w-full"></span>
              </motion.a>
              
              <motion.a
                href="#security"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="text-gray-600 dark:text-gray-400 no-underline text-base font-medium tracking-wide transition-all duration-300 relative cursor-pointer py-1 px-2 rounded-lg hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 group"
              >
                {t('security')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 rounded-full group-hover:w-full"></span>
              </motion.a>
              
              <motion.a
                href="#terms"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="text-gray-600 dark:text-gray-400 no-underline text-base font-medium tracking-wide transition-all duration-300 relative cursor-pointer py-1 px-2 rounded-lg hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 group"
              >
                {t('terms')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 rounded-full group-hover:w-full"></span>
              </motion.a>
              
              <motion.span
                onClick={() => setShowQRCode(true)}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="text-gray-600 dark:text-gray-400 no-underline text-base font-medium tracking-wide transition-all duration-300 relative cursor-pointer py-1 px-2 rounded-lg hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 group flex items-center gap-1.5"
              >
                <FaShareAlt className="align-middle" /> {t('share')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 rounded-full group-hover:w-full"></span>
              </motion.span>
            </div>
          </motion.div>
        </div>
      </footer>
      
      {/* QR Code Popup */}
      <AnimatePresence>
        {showQRCode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowQRCode(false)}
            className="fixed inset-0 bg-black/70 flex justify-center items-center z-[1000] backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] max-w-[90%] w-[350px] relative flex flex-col items-center"
            >
              <button
                onClick={() => setShowQRCode(false)}
                className="absolute top-4 right-4 bg-transparent border-none text-gray-600 dark:text-gray-400 text-xl cursor-pointer transition-colors duration-300 hover:text-blue-500"
              >
                <FaTimes />
              </button>
              
              <h3 className="text-2xl text-gray-900 dark:text-white mb-4">
                {t('shareMyProfile')}
              </h3>
              
              <motion.img
                src="/QRCODE.svg" 
                alt="Scan for contact info"
                whileHover={{ rotate: 5 }}
                className="w-[200px] h-[200px] rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.1)] p-2.5 bg-white my-4"
              />
              
              <p className="text-base text-gray-600 dark:text-gray-400 text-center mt-4">
                {t('scanQRCode')}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
  
export default Footer;
