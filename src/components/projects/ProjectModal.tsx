import { Project } from '../../data/project';
import { motion } from 'framer-motion'

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null

  return (
    <motion.div 
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="w-11/12 max-w-4xl max-h-[90vh] bg-[#1e1e1e]/95 rounded-2xl overflow-hidden flex flex-col"
        initial={{ scale: 0.95, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 50 }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-5 border-b border-white/10">
          <h2 className="text-2xl font-semibold">{project.title}</h2>
          <button 
            className="text-2xl transition-all hover:text-[#88a035] hover:rotate-90"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-5">
          <div className="w-full rounded-lg overflow-hidden mb-5">
            {project.media.endsWith('.mp4') || project.media.endsWith('.webm') ? (
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full max-h-96 object-cover"
              >
                <source src={project.media} type="video/mp4" />
              </video>
            ) : (
              <img 
                src={project.media} 
                alt={project.title}
                className="w-full max-h-96 object-cover" 
              />
            )}
          </div>
          
          <div className="mb-5">
            <h3 className="text-xl text-[#88a035] mb-2">Overview</h3>
            <p className="leading-relaxed">{project.detailedDescription}</p>
          </div>
          
          <div className="mb-5">
            <h3 className="text-xl text-[#88a035] mb-2">Skills & Technologies</h3>
            <p className="leading-relaxed">{project.technologies}</p>
          </div>
          
          <div className="mb-5">
            <h3 className="text-xl text-[#88a035] mb-2">Features</h3>
            <ul className="list-disc pl-5 space-y-1">
              {project.features.map((feature, index) => (
                <li key={index} className="leading-relaxed">{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex gap-3 mt-6">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#88a035] text-white rounded transition-all hover:bg-[#506b2d]"
              >
                GitHub
              </a>
            )}
            {project.liveDemo && (
              <a 
                href={project.liveDemo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#88a035] text-white rounded transition-all hover:bg-[#506b2d]"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectModal