import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.7);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled(motion.div)`
  background: #161b22;
  border-radius: 16px;
  max-width: 90vw;
  max-height: 80vh;
  width: 700px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.4);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem 1rem 1rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  z-index: 2;
`;

const IframeWrapper = styled.div`
  width: 100%;
  height: 400px;
  @media (max-width: 768px) {
    height: 220px;
  }
`;

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
    // fallback: try to extract from string
    const match = youtubeUrl.match(/[?&]v=([^&]+)/) || youtubeUrl.match(/youtu\.be\/([^?&]+)/);
    videoId = match ? match[1] : '';
  }
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : '';

  return (
    <AnimatePresence>
      {open && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContent
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={e => e.stopPropagation()}
          >
            <CloseButton onClick={onClose}>&times;</CloseButton>
            <IframeWrapper>
              {embedUrl && (
                <iframe
                  width="100%"
                  height="100%"
                  src={embedUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </IframeWrapper>
          </ModalContent>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default YoutubeModal;
