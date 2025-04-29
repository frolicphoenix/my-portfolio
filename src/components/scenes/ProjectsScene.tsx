import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FilterTag from '../projects/FilterTag';
import ProjectCard from '../projects/ProjectCard';
import ProjectModal from '../projects/ProjectModal';
import projects, { Project, ProjectTool, gameTools, webTools } from '../../data/project';

const ProjectsScene: React.FC = () => {
  const [gameFilter, setGameFilter] = useState<ProjectTool | 'all'>('all');
  const [webFilter, setWebFilter] = useState<ProjectTool | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Memoize project lists
  const gameProjects = useMemo<Project[]>(
    () => projects.filter((p: Project) => p.category === 'game'),
    []
  );
  const webProjects = useMemo<Project[]>(
    () => projects.filter((p: Project) => p.category === 'web'),
    []
  );

  // Filtered lists
  const filteredGameProjects = useMemo<Project[]>(
    () =>
      gameProjects.filter(
        (project: Project) => gameFilter === 'all' || project.tools.includes(gameFilter)
      ),
    [gameProjects, gameFilter]
  );

  const filteredWebProjects = useMemo<Project[]>(
    () =>
      webProjects.filter(
        (project: Project) => webFilter === 'all' || project.tools.includes(webFilter)
      ),
    [webProjects, webFilter]
  );

  return (
    <motion.section
      role="region"
      aria-label="Projects Gallery"
      className="absolute inset-0 flex items-center justify-center p-4"
      initial={{ opacity: 0, x: 100, rotateY: 10 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      exit={{ opacity: 0, x: -100, rotateY: -10 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-11/12 max-w-screen-xl h-4/5">

        {/* Game Projects */}
        <section
          aria-labelledby="games-heading"
          className="flex flex-col gap-5 p-6 rounded-xl bg-[#1e1e1e]/50 backdrop-blur-md h-full overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#88a035]/50"
        >
          <h2 id="games-heading" className="text-2xl font-semibold relative inline-block">
            Games
            <div className="absolute h-[3px] w-12 bg-[#506b2d] rounded left-0 -bottom-2" />
          </h2>

          <div role="toolbar" aria-label="Filter game projects" className="flex flex-wrap gap-2 mt-1 mb-4">
            <FilterTag
              active={gameFilter === 'all'}
              aria-pressed={gameFilter === 'all'}
              onClick={() => setGameFilter('all')}
            >
              All
            </FilterTag>
            {gameTools.map((tool: { id: ProjectTool; label: string }) => (
              <FilterTag
                key={tool.id}
                active={gameFilter === tool.id}
                aria-pressed={gameFilter === tool.id}
                onClick={() => setGameFilter(tool.id)}
              >
                {tool.label}
              </FilterTag>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {filteredGameProjects.length > 0 ? (
              filteredGameProjects.map((project: Project) => (
                <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
              ))
            ) : (
              <p className="text-center py-10 opacity-60">No projects match the selected filter.</p>
            )}
          </div>
        </section>

        {/* Web Projects */}
        <section
          aria-labelledby="apps-heading"
          className="flex flex-col gap-5 p-6 rounded-xl bg-[#1e1e1e]/50 backdrop-blur-md h-full overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#88a035]/50"
        >
          <h2 id="apps-heading" className="text-2xl font-semibold relative inline-block">
            Apps
            <div className="absolute h-[3px] w-12 bg-[#88a035] rounded left-0 -bottom-2" />
          </h2>

          <div role="toolbar" aria-label="Filter web projects" className="flex flex-wrap gap-2 mt-1 mb-4">
            <FilterTag
              active={webFilter === 'all'}
              aria-pressed={webFilter === 'all'}
              onClick={() => setWebFilter('all')}
              isWebTag
            >
              All
            </FilterTag>
            {webTools.map((tool: { id: ProjectTool; label: string }) => (
              <FilterTag
                key={tool.id}
                active={webFilter === tool.id}
                aria-pressed={webFilter === tool.id}
                onClick={() => setWebFilter(tool.id)}
                isWebTag
              >
                {tool.label}
              </FilterTag>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {filteredWebProjects.length > 0 ? (
              filteredWebProjects.map((project: Project) => (
                <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
              ))
            ) : (
              <p className="text-center py-10 opacity-60">No projects match the selected filter.</p>
            )}
          </div>
        </section>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </motion.section>
  );
};

export default React.memo(ProjectsScene);
