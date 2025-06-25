import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const YoutubeModal = ({ open, onClose, youtubeUrl }) => {
  if (!open) return null;
  // Extract video ID from URL
  let videoId = '';
  try {
    const url = new URL(youtubeUrl);
    if (url.hostname.includes('youtu.be')) {
      videoId = url.pathname.slice(1);
    } else {
      videoId = url.searchParams.get('v');
      if (!videoId && url.pathname.startsWith('/embed/')) {
        videoId = url.pathname.split('/embed/')[1];
      }
    }
  } catch {
    const match = youtubeUrl.match(/[?&]v=([^&]+)/) || youtubeUrl.match(/youtu\.be\/([^?&]+)/);
    videoId = match ? match[1] : '';
  }
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : '';

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-[9999] backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-gradient-to-br from-[#181210] via-[#4e342e]/90 to-[#bca18d]/70 rounded-2xl shadow-2xl max-w-2xl w-[90vw] max-h-[80vh] flex flex-col items-center p-0 overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-4 text-3xl text-[#bca18d] hover:text-white transition z-10"
              aria-label="Close"
            >
              &times;
            </button>
            <div className="w-full h-[400px] md:h-[340px] sm:h-[220px] bg-black rounded-b-2xl flex items-center justify-center">
              {embedUrl && (
                <iframe
                  width="100%"
                  height="100%"
                  src={embedUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-b-2xl w-full h-full"
                />
              )}
            </div>
            <div className="w-full py-3 text-center bg-gradient-to-r from-[#4e342e]/80 to-[#bca18d]/60 text-[#f3e9e1] font-semibold text-base">
              YouTube
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default YoutubeModal;
