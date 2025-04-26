import { Project } from "../../data/project";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div 
      className="grid grid-cols-[150px_1fr] gap-5 bg-[#121212]/60 rounded-lg p-4 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:bg-[#1e1e1e]/80 hover:shadow-lg"
      onClick={onClick}
    >
      <div className="w-[150px] h-30 rounded overflow-hidden">
        {/* <img 
          src={project.thumb} 
          alt={project.title} 
          className="w-full h-full object-cover"
        /> */}
        <video 
          src={project.thumb} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
          preload="metadata"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg font-medium mb-1">{project.title}</h3>
        <div className="flex flex-wrap gap-1 mb-2">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className={`
                text-xs px-2 py-0.5 rounded-full 
                ${tag.isWebTag 
                  ? 'bg-[#506b2d]/20 text-[#bbcf64]' 
                  : 'bg-[#88a035]/20 text-[#bbcf64]'
                }
              `}
            >
              {tag.label}
            </span>
          ))}
        </div>
        <p className="text-sm opacity-80">{project.description}</p>
      </div>
    </div>
  )
}

export default ProjectCard