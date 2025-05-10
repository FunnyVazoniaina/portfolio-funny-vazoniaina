import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const SkillContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.2rem;
`;

const SkillIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.accent};
  font-size: 2rem;
`;

const SkillInfo = styled.div`
  flex: 1;
`;

const SkillName = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
`;

const SkillBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background: ${({ theme, isDark }) => 
    isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  border-radius: 4px;
  overflow: hidden;
`;

const SkillBar = styled.div`
  height: 100%;
  width: ${({ level }) => `${level}%`};
  background: linear-gradient(90deg, ${({ theme }) => theme.accent}, ${({ theme }) => theme.secondary});
  border-radius: 4px;
`;

const SimpleSkillItem = ({ name, level, iconName, isDark }) => {
  return (
    <SkillContainer
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <SkillIcon>
        <Icon icon={iconName} />
      </SkillIcon>
      <SkillInfo>
        <SkillName>{name}</SkillName>
        <SkillBarContainer isDark={isDark}>
          <SkillBar level={level} />
        </SkillBarContainer>
      </SkillInfo>
    </SkillContainer>
  );
};

export default SimpleSkillItem;
