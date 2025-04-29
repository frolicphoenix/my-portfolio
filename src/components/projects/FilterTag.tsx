import React from 'react';

interface FilterTagProps {
  active?: boolean;
  onClick: () => void;
  isWebTag?: boolean;
  children: React.ReactNode;
  className?: string;
}

const FilterTag: React.FC<FilterTagProps> = ({
  active = false,
  isWebTag = false,
  onClick,
  children,
  className = ''
}) => {
  // Determine background and border based on active state
  const bgClasses = active
    ? isWebTag
      ? 'bg-[#506b2d] border-[#506b2d]'
      : 'bg-[#88a035] border-[#88a035]'
    : 'bg-[#1e1e1e]/80 border border-white/10 hover:bg-[#323232]/80 hover:-translate-y-0.5';

  // Determine focus ring color
  const focusRingClass = isWebTag ? 'focus:ring-[#506b2d]' : 'focus:ring-[#88a035]';

  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={
        `
        px-3 py-1.5 rounded-full text-sm sm:text-base
        transition-colors duration-300 ease-in-out
        ${bgClasses} text-white
        focus:outline-none focus:ring-2 focus:ring-offset-2 ${focusRingClass}
        cursor-pointer
        ${className}
      `
      }
    >
      {children}
    </button>
  );
};

export default React.memo(FilterTag);
