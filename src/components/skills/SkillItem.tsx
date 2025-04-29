import React from 'react';
import { useReducedMotion } from 'framer-motion';

interface SkillItemProps {
  icon: string;
  name: string;
  img?: string;
  className?: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ icon, name, img, className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Skill: ${name}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          (e.currentTarget as HTMLElement).click();
          e.preventDefault();
        }
      }}
      className={
        `flex items-center gap-3 bg-[#121212]/60 rounded-lg p-2
         transition duration-300 ease-in-out
         cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#88a035]
         hover:shadow-lg ` +
        (shouldReduceMotion ? '' : 'hover:-translate-y-1 hover:bg-[#1e1e1e]/80') +
        ` ${className}`
      }
    >
      <div className="w-10 h-10 flex items-center justify-center bg-[#88a035]/20 rounded-lg">
        {img ? (
          <img
            src={img}
            alt={name}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        ) : (
          <span className="text-[#bbcf64] text-lg font-bold" aria-hidden="true">{icon}</span>
        )}
      </div>
      <span className="font-medium text-white text-sm sm:text-base">{name}</span>
    </div>
  );
};

export default React.memo(SkillItem);
