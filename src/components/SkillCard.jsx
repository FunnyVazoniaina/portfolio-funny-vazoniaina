import { motion } from 'framer-motion';
import styled from 'styled-components';

const Card = styled(motion.div)`
  background: transparent;
  padding: 1rem; // Réduit de 1.5rem à 1rem pour diminuer la hauteur
  border-radius: 16px;
  box-shadow: ${({ theme, isDark }) => 
    isDark ? '0 8px 25px rgba(0, 0, 0, 0.1)' : '0 8px 25px rgba(0, 0, 0, 0.03)'};
  transition: all 0.4s ease;
  backdrop-filter: blur(5px);
  border: 1px solid ${({ theme, isDark }) => 
    isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)'};
  position: relative;
  overflow: hidden;
  width: 50%; // Réduire à la moitié de la largeur
  margin: 0 auto; // Centrer la carte
  
  &:hover {
    transform: translateY(-5px) scale(1.02); // Réduire l'effet de survol pour qu'il reste proportionnel
    box-shadow: ${({ theme, isDark }) => 
      isDark ? '0 15px 35px rgba(0, 0, 0, 0.2)' : '0 15px 35px rgba(0, 0, 0, 0.08)'};
    background: ${({ theme, isDark }) => 
      isDark ? 'rgba(22, 28, 36, 0.4)' : 'rgba(255, 255, 255, 0.4)'};
  }
  
  &::before {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    background: ${({ theme }) => theme.accent}10;
    border-radius: 50%;
    top: -50px;
    right: -50px;
    transition: all 0.5s ease;
  }
  
  &:hover::before {
    transform: scale(2.5);
  }
`;

const IconWrapper = styled.div`
  font-size: 1.8rem; // Réduit de 2.5rem à 1.8rem
  color: ${({ theme }) => theme.accent};
  margin-bottom: 0.8rem; // Réduit de 1.2rem à 0.8rem
  display: inline-block;
  transition: all 0.3s ease;
  
  ${Card}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`;

const Name = styled.h3`
  font-size: 1rem; // Réduit de 1.25rem à 1rem
  font-weight: 600;
  color: ${({ theme, isDark }) => (isDark ? '#e2e8f0' : '#1e293b')};
  margin-bottom: 0.5rem; // Réduit de 0.8rem à 0.5rem
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.accent};
    transition: width 0.3s ease;
  }
  
  ${Card}:hover &::after {
    width: 100%;
  }
`;

const ProgressContainer = styled.div`
  margin-top: 0.6rem; // Réduit de 1rem à 0.6rem
`;
const ProgressLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.3rem; // Réduit de 0.5rem à 0.3rem
  font-size: 0.8rem; // Réduit de 0.9rem à 0.8rem
`;

const ProgressText = styled.span`
  color: ${({ theme, isDark }) => (isDark ? '#94a3b8' : '#64748b')};
`;

const ProgressValue = styled.span`
  color: ${({ theme }) => theme.accent};
  font-weight: 600;
`;

const ProgressBar = styled.div`
  background: ${({ theme, isDark }) => 
    isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.08)'};
  height: 5px; // Réduit de 8px à 5px
  border-radius: 9999px;
  overflow: hidden;
  position: relative;
`;

const Progress = styled(motion.div)`
  background: linear-gradient(90deg, ${({ theme }) => theme.accent}, ${({ theme }) => theme.hover});
  height: 100%;
  border-radius: 9999px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 5px;
    height: 100%;
    background: white;
    opacity: 0.3;
    filter: blur(3px);
  }
`;

const SkillCard = ({ name, level, icon, isDark }) => {
  // Extract just the percentage number from the name if it contains it
  const displayName = name.includes('%') ? name.split('(')[0].trim() : name;
  const percentage = level;
  
  return (
    <Card 
      isDark={isDark} 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <Name isDark={isDark}>{displayName}</Name>
      <ProgressContainer>
        <ProgressLabel>
          <ProgressText isDark={isDark}>Maîtrise</ProgressText>
          <ProgressValue>{percentage}%</ProgressValue>
        </ProgressLabel>
        <ProgressBar isDark={isDark}>
          <Progress 
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          />
        </ProgressBar>
      </ProgressContainer>
    </Card>
  );
};

export default SkillCard;
