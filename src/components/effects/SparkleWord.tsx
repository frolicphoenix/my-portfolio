import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface SparkleWordProps {
  children: React.ReactNode;
  className?: string;
}

const SparkleWord: React.FC<SparkleWordProps> = ({ children, className = '' }) => {
  // Respect user motion preferences
  const shouldReduceMotion = useReducedMotion();

  const animationProps = shouldReduceMotion
    ? {} // no animation
    : {
        initial: { backgroundPosition: '0% 50%' },
        animate: { backgroundPosition: '200% 50%' },
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        } as const,
      };

  return (
    <motion.span
      className={`bg-gradient-to-r from-[#88a035] via-[#bbcf64] to-[#88a035] \
        bg-clip-text text-transparent font-semibold inline-block ${className}`}
      style={{
        backgroundSize: '200% 200%',
        display: 'inline-block',
      }}
      aria-label={typeof children === 'string' ? children : undefined}
      {...animationProps}
    >
      {children}
    </motion.span>
  );
};

export default React.memo(SparkleWord);
