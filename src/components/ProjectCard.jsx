import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaExternalLinkAlt, FaGithub, FaStar } from 'react-icons/fa';

const Card = styled(motion.div)`
  background: ${({ theme, isDark }) => 
    isDark ? 'rgba(22, 28, 36, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${({ theme, isDark }) => 
    isDark ? '0 10px 30px rgba(0, 0, 0, 0.3)' : '0 10px 30px rgba(0, 0, 0, 0.1)'};
  transition: all 0.4s ease;
  position: relative;
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme, isDark }) => 
    isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme, isDark }) => 
      isDark ? '0 20px 40px rgba(0, 0, 0, 0.4)' : '0 20px 40px rgba(0, 0, 0, 0.15)'};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, ${({ theme }) => theme.accent}, ${({ theme }) => theme.hover});
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
`;

// Ajout du composant pour l'icône dans le coin
const ProjectIcon = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: ${({ theme }) => theme.accent};
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 10;
  transition: all 0.3s ease;
  
  ${Card}:hover & {
    transform: scale(1.1) rotate(10deg);
  }
`;

const ProjectImage = styled.div`
  height: 180px; 
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      ${({ theme, isDark }) => 
        isDark ? 'rgba(22, 28, 36, 0.8)' : 'rgba(255, 255, 255, 0.8)'} 100%
    );
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }
  
  ${Card}:hover & img {
    transform: scale(1.1);
  }
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h3`
   font-size: 1.3rem; // Réduit de 1.4rem à 1.3rem
  font-weight: 700;
  color: ${({ theme, isDark }) => (isDark ? '#e2e8f0' : '#1e293b')};
  margin-bottom: 0.7rem; // Réduit de 0.8rem à 0.7rem
  position: relative;
  display: inline-block;
`;

const Description = styled.p`
  color: ${({ theme, isDark }) => (isDark ? '#94a3b8' : '#64748b')};
  font-size: 0.95rem; // Réduit de 1rem à 0.95rem
  line-height: 1.5; // Réduit de 1.6 à 1.5
  margin-bottom: 1.3rem; // Réduit de 1.5rem à 1.3rem
`;

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: ${({ theme, isDark }) => 
    isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)'};
  color: ${({ theme, isDark }) => (isDark ? '#94a3b8' : '#64748b')};
  font-size: 0.8rem;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.accent}30;
    color: ${({ theme }) => theme.accent};
  }
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
`;

const LinkButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &.primary {
    background: ${({ theme }) => theme.accent};
    color: white;
    
    &:hover {
      background: ${({ theme }) => theme.hover};
    }
  }
  
  &.secondary {
    background: ${({ theme, isDark }) => 
      isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)'};
    color: ${({ theme, isDark }) => (isDark ? '#e2e8f0' : '#1e293b')};
    
    &:hover {
      background: ${({ theme, isDark }) => 
        isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)'};
    }
  }
`;

const ProjectCard = ({ title, description, technologies, link, githubLink, image, isDark, onLiveDemoClick }) => {
  const { t } = useTranslation();
  
  // Default image if none provided
  const projectImage = image || `/images/project-placeholder.jpg`;
  const isYoutubeLink = link && (link.includes('youtube.com') || link.includes('youtu.be'));
  
  return (
    <Card 
      isDark={isDark} 
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      {/* Ajout de l'icône dans le coin supérieur gauche */}
      <ProjectIcon>
        <FaStar />
      </ProjectIcon>
      
      <ProjectImage isDark={isDark}>
        <img src={projectImage} alt={title} />
      </ProjectImage>
      <Content>
        <Title isDark={isDark}>{title}</Title>
        <Description isDark={isDark}>{description}</Description>
        <TechContainer>
          {technologies.map((tech, index) => (
            <TechTag key={index} isDark={isDark}>
              {tech}
            </TechTag>
          ))}
        </TechContainer>
        <Links>
          <LinkButton 
            className="primary"
            as={isYoutubeLink && onLiveDemoClick ? 'button' : 'a'}
            href={isYoutubeLink && onLiveDemoClick ? undefined : link}
            type={isYoutubeLink && onLiveDemoClick ? 'button' : undefined}
            target={isYoutubeLink ? undefined : '_blank'}
            rel={isYoutubeLink ? undefined : 'noopener noreferrer'}
            onClick={isYoutubeLink && onLiveDemoClick ? (e) => { e.preventDefault(); onLiveDemoClick(); } : undefined}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaExternalLinkAlt /> {t('viewProject')}
          </LinkButton>
          {githubLink && (
            <LinkButton 
              className="secondary"
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              isDark={isDark}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub /> GitHub
            </LinkButton>
          )}
        </Links>
      </Content>
    </Card>
  );
};

export default ProjectCard;
