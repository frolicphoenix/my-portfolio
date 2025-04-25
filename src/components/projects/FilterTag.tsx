import { ReactNode } from 'react'

interface FilterTagProps {
  active?: boolean;
  onClick: () => void;
  isWebTag?: boolean;
  children: ReactNode;
}

const FilterTag = ({ active, onClick, isWebTag, children }: FilterTagProps) => {
  return (
    <button
      className={`
        px-3 py-1.5 rounded-full text-sm 
        transition-all duration-300 ease-in-out
        ${active 
          ? isWebTag 
            ? 'bg-[#506b2d] border-[#506b2d]' 
            : 'bg-[#88a035] border-[#88a035]' 
          : 'bg-[#1e1e1e]/80 border border-white/10 hover:bg-[#323232]/80 hover:-translate-y-0.5'
        }
        text-white
      `}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default FilterTag