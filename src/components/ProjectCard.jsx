import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Card = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => prop !== 'isDark',
})`
  background: ${({ isDark }) => (isDark ? '#16213e' : '#ffffff')};
  padding: 2rem;
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadow.replace('10px', '20px')};
  }
`;

const Title = styled.h3.withConfig({
  shouldForwardProp: (prop) => prop !== 'isDark',
})`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ isDark }) => (isDark ? '#e2e8f0' : '#0f172a')};
`;

const Description = styled.p`
  margin-top: 0.75rem;
  color: ${({ isDark }) => (isDark ? '#d1d5db' : '#475569')};
  font-size: 1rem;
  line-height: 1.6;
`;

const Tech = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: ${({ isDark }) => (isDark ? '#9ca3af' : '#64748b')};
  font-style: italic;
`;

const Link = styled.a.withConfig({
  shouldForwardProp: (prop) => prop !== 'isDark',
})`
  margin-top: 1.5rem;
  display: inline-flex;
  background: ${({ theme }) => theme.accent};
  color: #fff;
  padding: 0.6rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  &:hover {
    background: ${({ theme }) => theme.hover};
  }
`;

const ProjectCard = ({ title, description, technologies, link, isDark }) => {
  const { t } = useTranslation();
  return (
    <Card isDark={isDark} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Title isDark={isDark}>{title}</Title>
      <Description isDark={isDark}>{description}</Description>
      <Tech isDark={isDark}>{technologies.join(', ')}</Tech>
      <Link isDark={isDark} href={link} target="_blank" rel="noopener noreferrer">
        {t('viewProject')}
      </Link>
    </Card>
  );
};

export default ProjectCard;