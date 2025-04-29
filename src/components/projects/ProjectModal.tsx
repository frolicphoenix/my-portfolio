import React, { KeyboardEvent } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Project } from '../../data/project';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { scale: 0.95, y: 50, opacity: 0 },
  visible: { scale: 1, y: 0, opacity: 1 },
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const shouldReduceMotion = useReducedMotion();
  if (!project) return null;

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') onClose();
  };

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`Project details for ${project.title}`}
      tabIndex={-1}
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
    >
      <motion.div
        className="bg-[#1e1e1e]/95 rounded-2xl overflow-hidden w-11/12 max-w-5xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
      >
        <header
          className="flex justify-between items-center p-6 border-b border-white/10 bg-cover"
          style={{ backgroundImage: `url(${project.bgimg})` }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            {project.title}
          </h2>
          <div className="flex gap-3">
            {project.designDoc && (
              <a
                href={project.designDoc}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View design documentation"
                className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#88a035] hover:bg-[#bbcf64]/20"
              >
                <img
                  src="https://img.icons8.com/external-others-pike-picture/100/external-Documentation-logistics-others-pike-picture-2.png"
                  alt="Documentation"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  loading="lazy"
                />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View GitHub repository"
                className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#88a035] hover:bg-[#bbcf64]/20"
              >
                <img
                  src="https://img.icons8.com/dusk/200/github.png"
                  alt="GitHub"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  loading="lazy"
                />
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live demo"
                className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#88a035] hover:bg-[#bbcf64]/20"
              >
                <img
                  src="https://img.icons8.com/dusk/64/internet--v1.png"
                  alt="Live Demo"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  loading="lazy"
                />
              </a>
            )}
            {project.steam && (
              <a
                href={project.steam}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View on Steam"
                className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#88a035] hover:bg-[#bbcf64]/20"
              >
                <img
                  src="https://img.icons8.com/plasticine/400/steam.png"
                  alt="Steam"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  loading="lazy"
                />
              </a>
            )}
          </div>
          <button
            type="button"
            aria-label="Close project modal"
            onClick={onClose}
            className="text-2xl sm:text-3xl text-white transition-transform duration-200 hover:text-[#88a035] hover:rotate-90 focus:outline-none focus:ring-2 focus:ring-[#88a035]"
          >
            &times;
          </button>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="col-span-1 lg:col-span-2 w-full aspect-video rounded-lg overflow-hidden">
              {project.youtube ? (
                <iframe
                  src={project.youtube}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full"
                />
              ) : project.thumb ? (
                <video
                  src={project.thumb}
                  poster={project.media}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              ) : null}
            </div>

            <div className="col-span-1 space-y-4">
              <div>
                <h3 className="text-sm sm:text-base text-amber-300 font-semibold mb-1">Tools</h3>
                <ul role="list" className="flex flex-wrap gap-1">
                  {project.tags.map((tag, i) => (
                    <li key={i} aria-hidden="true">
                      <span
                        className={`text-xs sm:text-sm px-2 py-0.5 rounded-full whitespace-nowrap ${tag.isWebTag ? 'bg-[#506b2d]/20' : 'bg-[#88a035]/20'} text-[#bbcf64]`}
                      >
                        {tag.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              {project.genre && (
                <div>
                  <h3 className="text-sm sm:text-base text-amber-300 font-semibold mb-1">Genre</h3>
                  <p className="text-sm sm:text-base leading-relaxed">{project.genre}</p>
                </div>
              )}
              {project.platform && (
                <div>
                  <h3 className="text-sm sm:text-base text-amber-300 font-semibold mb-1">Platform</h3>
                  <p className="text-sm sm:text-base leading-relaxed">{project.platform}</p>
                </div>
              )}
              {project.teamsize && (
                <div>
                  <h3 className="text-sm sm:text-base text-amber-300 font-semibold mb-1">Team Size</h3>
                  <p className="text-sm sm:text-base leading-relaxed">{project.teamsize}</p>
                </div>
              )}
              {project.duration && (
                <div>
                  <h3 className="text-sm sm:text-base text-amber-300 font-semibold mb-1">Duration</h3>
                  <p className="text-sm sm:text-base leading-relaxed">{project.duration}</p>
                </div>
              )}
              {project.released && (
                <div>
                  <h3 className="text-sm sm:text-base text-amber-300 font-semibold mb-1">Released</h3>
                  <p className="text-sm sm:text-base leading-relaxed">{project.released}</p>
                </div>
              )}
            </div>
          </div>

          <section className="mb-6">
            <h3 className="text-lg sm:text-xl text-[#88a035] font-semibold mb-2">Overview</h3>
            <p className="leading-relaxed text-gray-300">{project.detailedDescription}</p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <section>
              <h3 className="text-lg sm:text-xl text-[#88a035] font-semibold mb-2">Features</h3>
              <ul role="list" className="list-disc pl-5 space-y-1">
                {project.features.map((feature, i) => (
                  <li key={i} className="leading-relaxed text-gray-300">{feature}</li>
                ))}
              </ul>
            </section>

            {project.responsibilities && (
              <section>
                <h3 className="text-lg sm:text-xl text-[#88a035] font-semibold mb-2">What I Worked On</h3>
                <ul role="list" className="list-disc pl-5 space-y-1">
                  {project.responsibilities.map((resp, i) => (
                    <li key={i} className="leading-relaxed text-gray-300">{resp}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {project.designDoc && (
            <section className="mb-6">
              <h3 className="text-lg sm:text-xl text-[#88a035] font-semibold mb-2">Design Document</h3>
              <iframe
                src={project.designDoc}
                title="Design Document"
                loading="lazy"
                className="w-full h-64 sm:h-80 rounded-lg border border-white/20"
              />
            </section>
          )}
        </main>
      </motion.div>
    </motion.div>
  );
};

export default React.memo(ProjectModal);
