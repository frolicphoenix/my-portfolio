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
        <div className="flex justify-between items-center p-5 border-b border-white/10 bg-cover" style={{ backgroundImage: `url(${project.bgimg})` }}>
         
          <h2 className="text-2xl font-semibold">{project.title}</h2>
          <div className="flex">
            
            {project.designDoc && (
              <a
                href={project.designDoc}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2"
              >
                <img
                  src="https://img.icons8.com/external-others-pike-picture/100/external-Documentation-logistics-others-pike-picture-2.png"
                  alt="Documentation"
                  className="w-11 h-11 hover:bg-amber-400 hover:rounded-xs"
                />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2"
              >
                <img
                  src="https://img.icons8.com/dusk/200/github.png"
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
                  src="https://img.icons8.com/dusk/64/internet--v1.png"
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
                  src="https://img.icons8.com/plasticine/400/steam.png"
                  alt="Steam"
                  className="w-10 h-10 hover:bg-amber-400 hover:rounded-4xl"
                />
              </a>
            )}
          </div>
          <button 
            className="text-2xl transition-all hover:text-[#88a035] hover:rotate-90"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-5">
          <div className="w-full rounded-lg overflow-hidden mb-5">
          {project.youtube ? (
            <iframe
              width="700"
              height="415"
              src={project.youtube}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full object-cover"
            />
          ) : project.thumb ? (
            <video
              src={project.thumb}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              preload="metadata"
            />
          ) : null}
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
          
          <div className=" flex mb-5">
            {project.designDoc && (
              <iframe className='w-25/26 h-100' src="https://docs.google.com/document/d/e/2PACX-1vSJkgj9lxDNcYDl8PptKUE8WQK-4d3pG1OIHi1Vtru21Sc5mjUfLIukphLYuzSGPd5QLS1u_h-48JB4/pub?embedded=true"></iframe>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectModal