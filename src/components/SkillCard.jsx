import { motion } from 'framer-motion';
import styled from 'styled-components';

const Card = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => prop !== 'isDark',
})`
  background: ${({ isDark }) => (isDark ? '#16213e' : '#ffffff')};
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const Name = styled.h3.withConfig({
  shouldForwardProp: (prop) => prop !== 'isDark',
})`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ isDark }) => (isDark ? '#e2e8f0' : '#0f172a')};
`;

const ProgressBar = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isDark',
})`
  margin-top: 0.75rem;
  background: ${({ isDark }) => (isDark ? '#374151' : '#e5e7eb')};
  height: 8px;
  border-radius: 9999px;
  overflow: hidden;
`;

const Progress = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isDark',
})`
  background: ${({ theme }) => theme.accent};
  height: 100%;
  border-radius: 9999px;
  transition: width 0.5s ease;
`;

const SkillCard = ({ name, level, isDark }) => {
  return (
    <Card isDark={isDark} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Name isDark={isDark}>{name}</Name>
      <ProgressBar isDark={isDark}>
        <Progress isDark={isDark} style={{ width: `${level}%` }} />
      </ProgressBar>
    </Card>
  );
};

export default SkillCard;