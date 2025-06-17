import { Project } from "../../data/project";
import { useState, useRef, useEffect } from 'react'
import { memo } from 'react'

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = memo(({ project, onClick }: ProjectCardProps) => {

  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.25 }
    )
    if (containerRef.current) obs.observe(containerRef.current)
    return () => { if (containerRef.current) obs.unobserve(containerRef.current) }
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) videoRef.current.play().catch(() => {/* silence */})
      else           videoRef.current.pause()
    }
  }, [isVisible])

  return (
    <div 
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-4 bg-[#121212]/60 rounded-lg p-4 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:bg-[#1e1e1e]/80 hover:shadow-lg"
      onClick={onClick}
    >
      <div className="w-full md:w-[300px] h-auto md:h-50 rounded overflow-hidden">
        {project.thumb && (
          <video
            ref={videoRef}
            src={project.thumb}
            loop
            muted
            playsInline
            preload="metadata"       
            className="w-full h-full object-cover"
          />
        )}
        {project.thumbimg && (
          <img
            src={project.thumbimg}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg font-medium mb-1">{project.title}</h3>
        <div className="mb-2">
          <p className="text-sm">
            <i><u>{project.companylink ? <a target="_blank" className="text-amber-300" href={project.companylink}>{project.company}</a> : project.company}</u></i>
          </p>
        </div>
        
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
        <div className="flex mt-1">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <img
                src="platform/github.webp"
                alt="GitHub"
                className="w-10 h-10 hover:bg-amber-400 hover:rounded-4xl"
              />
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <img
                src="platform/internet--v1.webp"
                alt="Live Demo"
                className="w-10 h-10 hover:bg-amber-400 hover:rounded-4xl"
              />
            </a>
          )}
          {project.steam && (
            <a
              href={project.steam}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <img
                src="platform/steam.webp"
                alt="Steam"
                className="w-10 h-10 hover:bg-amber-400 hover:rounded-4xl"
              />
            </a>
          )}
          {project.itchio && (
            <a
              href={project.itchio}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <img
                src="platform/icons8-itch-io-100.webp"
                alt="Itchio"
                className="w-10 h-10 hover:bg-amber-400 hover:rounded-4xl"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  )
});

export default ProjectCard;