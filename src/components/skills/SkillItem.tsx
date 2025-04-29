interface SkillItemProps {
  icon: string;
  name: string;
  img?: string;
}

const SkillItem = ({ icon, name, img }: SkillItemProps) => {
  return (
    <div className="flex items-center gap-3 bg-[#121212]/60 rounded-lg p-2 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1e1e1e]/80 hover:shadow-lg">
      <div className="w-10 h-10 flex items-center justify-center bg-[#88a035]/20 rounded-lg">
        {img ? (
          <img 
            src={img} 
            alt={name}
            className="w-12 h-12 object-contain"
          />
        ) : (
          <span className="text-[#bbcf64] text-lg font-bold">{icon}</span>
        )}
      </div>
      <div className="text- font-medium text-white">{name}</div>
    </div>
  );
}

export default SkillItem;
