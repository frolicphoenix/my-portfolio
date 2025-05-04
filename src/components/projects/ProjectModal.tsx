import { Project } from '../../data/project';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null

const [lightboxIndex, setLightboxIndex] = useState<number|null>(null);

  return (
    <motion.div 
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="w-11/12 max-w-5xl max-h-[90vh] bg-[#1e1e1e]/95 rounded-2xl overflow-hidden flex flex-col"
        initial={{ scale: 0.95, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 50 }}
        onClick={e => e.stopPropagation()}
      >

        {lightboxIndex !== null && project.gallery && (
          <div
            className='fixed inset-0 bg-black/90 z-60 flex items-center justify-center p4'
            onClick={() => setLightboxIndex(null)}
          >
            <img
             src={project.gallery[lightboxIndex]}
             alt={`Zoomed ${project.title} #${lightboxIndex+1}`}
             className="max-w-full max-h-full rounded-lg shadow-2xl"
            />

          </div>
        )}

        <div className="flex justify-between items-center p-7 border-b border-white/10 bg-cover" style={{ backgroundImage: `url(${project.bgimg})` }}>
         
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
          <button 
            className="text-2xl transition-all hover:text-[#88a035] hover:rotate-90"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
            <div className="col-span-3 md:col-span-2 w-full rounded-lg overflow-hidden">
              {project.youtube ? (
                <iframe
                  width="400"
                  height="315"
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
              ) : project.thumbimg ? (
                <img
                  src={project.thumbimg}
                  className="w-full h-full object-cover"
                />
              ) : null}                       
            </div>
            <div className="col-span-3 md:col-span-1 space-y-3">
              
              <div>                
                <h3 className="text-med text-amber-300 mb-2">Tools</h3>
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
              
              <div>
                {project.genre && (
                  <><h3 className="text-med text-amber-300 mb-1">Genre</h3>
                  <p className="leading-relaxed">{project.genre}</p></>
                )}
              </div>

              <div>
                {project.platform && (
                  <><h3 className="text-med text-amber-300 mb-1">Platform</h3>
                  <p className="leading-relaxed">{project.platform}</p></>
                )}
              </div>

              <div>
                {project.teamsize && (
                  <><h3 className="text-med text-amber-300 mb-1">Team Size</h3>
                  <p className="leading-relaxed">{project.teamsize}</p></>
                )}
              </div>

              <div>
                {project.duration && (
                  <><h3 className="text-med text-amber-300 mb-1">Duration</h3>
                  <p className="leading-relaxed">{project.duration}</p></>
                )}
              </div>

              <div>
                {project.released && (
                  <><h3 className="text-med text-amber-300 mb-1">Released</h3>
                  <p className="leading-relaxed">{project.released}</p></>
                )}
              </div>
            </div>
          </div>
            
          
          <div className="mb-5">
            <h3 className="text-xl text-[#88a035] mb-2">Overview</h3>
            <p className="leading-relaxed">{project.detailedDescription}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">

            <div className="mb-5">
            {project.features && (
              <><h3 className="text-xl text-[#88a035] mb-2">Features</h3>
              <ul className="list-disc pl-5 space-y-1">
                {(project.features ?? []).map((feature, index) => (
                  <li key={index} className="leading-relaxed">{feature}</li>
                ))}
              </ul></>
            )}
            </div>

            <div className="mb-5">
              {project.responsibilities && (
                <><h3 className="text-xl text-[#88a035] mb-2">What I worked on</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {project.responsibilities.map((feature, index) => (
                    <li key={index} className="leading-relaxed">{feature}</li>
                  ))}
                </ul></>
              )}
            </div>
            
          </div>
          
          <div className="flex-1 overflow-y-auto p-10">
          {(project.gallery ?? []).length > 0 && (
            <div className="mb-6 overflow-x-auto flex gap-4 snap-x snap-mandatory px-2">
              {(project.gallery ?? []).map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  loading="lazy"
                  onClick={() => setLightboxIndex(idx)}
                  className="snap-start flex-shrink-0 w-60 h-40 object-cover rounded-lg shadow-lg cursor-zoom-in"
                />
              ))}
            </div>
          )}
          </div>
          

          <div className="mb-5">
            {project.designDoc && (
              <a href={project.designDoc} target="_blank" className="text-amber-400"><u><strong>Link to the attached Process Document</strong></u></a>
            )}
            {project.designDoc && (
              <iframe className='w-25/26 h-150' src={project.designDoc}></iframe>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectModal