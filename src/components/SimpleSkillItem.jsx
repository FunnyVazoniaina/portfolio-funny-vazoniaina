import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const SimpleSkillItem = ({ name, level, iconName, isDark }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4 mb-5"
    >
      <div className="w-10 h-10 flex justify-center items-center rounded-full bg-gradient-to-br from-[#4e342e]/80 to-[#bca18d]/60 shadow">
        <Icon icon={iconName} className="text-2xl text-[#bca18d]" />
      </div>
      <div className="flex-1">
        <h4 className="text-base font-semibold mb-1 text-[#bca18d]">{name}</h4>
        <div className="w-full h-2 bg-[#181210] rounded overflow-hidden">
          <div
            className="h-full rounded bg-gradient-to-r from-[#4e342e] to-[#bca18d] transition-all duration-700"
            style={{ width: `${level}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SimpleSkillItem;
