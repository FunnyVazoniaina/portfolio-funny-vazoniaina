import { motion } from 'framer-motion';
import styled from 'styled-components';

const Card = styled(motion.div)`
  background: ${({ theme, isDark }) => 
    isDark ? 'rgba(22, 28, 36, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
  padding: 1.8rem;
  border-radius: 16px;
  box-shadow: ${({ theme, isDark }) => 
    isDark ? '0 8px 25px rgba(0, 0, 0, 0.2)' : '0 8px 25px rgba(0, 0, 0, 0.06)'};
  transition: all 0.4s ease;
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme, isDark }) => 
    isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)'};
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: ${({ theme, isDark }) => 
      isDark ? '0 15px 35px rgba(0, 0, 0, 0.3)' : '0 15px 35px rgba(0, 0, 0, 0.1)'};
  }
  
  &::before {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    background: ${({ theme }) => theme.accent}20;
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
  font-size: 2.5rem;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 1.2rem;
  display: inline-block;
  transition: all 0.3s ease;
  
  ${Card}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`;

const Name = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme, isDark }) => (isDark ? '#e2e8f0' : '#1e293b')};
  margin-bottom: 0.8rem;
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
  margin-top: 1rem;
`;

const ProgressLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
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
    isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  height: 8px;
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
