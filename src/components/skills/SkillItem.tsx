interface SkillItemProps {
    icon: string;
    name: string;
  }
  
  const SkillItem = ({ icon, name }: SkillItemProps) => {
    return (
      <div className="flex items-center gap-3 bg-[#121212]/60 rounded-lg p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1e1e1e]/80 hover:shadow-lg">
        <div className="w-10 h-10 flex items-center justify-center bg-[#88a035]/20 text-[#bbcf64] rounded-lg text-lg font-bold">
          {icon}
        </div>
        <div className="text-sm font-medium">{name}</div>
      </div>
    )
  }
  
  export default SkillItem