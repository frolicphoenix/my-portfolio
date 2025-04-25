import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FilterTag from '../projects/FilterTag'
import ProjectCard from '../projects/ProjectCard'
import ProjectModal from '../projects/ProjectModal'
import projects, { ProjectTool, Project, gameTools, webTools } from '../../data/project'
import { Suspense } from 'react'
import GalaxyStars from '../effects/GalaxyStars'

const ProjectsScene = () => {
  const [gameFilter, setGameFilter] = useState<ProjectTool | 'all'>('all')
  const [webFilter, setWebFilter] = useState<ProjectTool | 'all'>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  
  const gameProjects = projects.filter(p => p.category === 'game')
  const webProjects = projects.filter(p => p.category === 'web')

  const filteredGameProjects = gameProjects.filter(project => 
    gameFilter === 'all' || project.tools.includes(gameFilter)
  )
  
  const filteredWebProjects = webProjects.filter(project => 
    webFilter === 'all' || project.tools.includes(webFilter)
  )

  return (
    
    <motion.div 
      // className="absolute inset-0 flex items-center justify-center"
      className="absolute inset-0 overflow-y-auto px-4 sm:px-10 py-10 sm:py-20 flex flex-col items-center justify-center"
      initial={{ opacity: 0, x: 100, rotateY: 10 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      exit={{ opacity: 0, x: -100, rotateY: -10 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-11/12 max-w-6xl h-4/5">
      {/* Galaxy Background - Always Rendered */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Suspense fallback={<div className="absolute inset-0 bg-[#0a0a0a]" />}>
          <GalaxyStars />
        </Suspense>
      </div>
        {/* Game Projects */}
        <div className="flex flex-col gap-5 p-6 rounded-xl bg-[#1e1e1e]/50 backdrop-blur-md h-full overflow-y-auto scrollbar">
          <h2 className="text-2xl font-semibold relative inline-block">
            Game Projects
            <div className="absolute h-[3px] w-12 bg-[#506b2d] rounded left-0 -bottom-2"></div>
          </h2>
          
          <div className="flex flex-wrap gap-2 mt-1 mb-4">
            <FilterTag 
              active={gameFilter === 'all'} 
              onClick={() => setGameFilter('all')}
            >
              All
            </FilterTag>
            {gameTools.map(tool => (
              <FilterTag 
                key={tool.id}
                active={gameFilter === tool.id} 
                onClick={() => setGameFilter(tool.id)}
              >
                {tool.label}
              </FilterTag>
            ))}
          </div>
          
          <div className="flex flex-col gap-4">
            {filteredGameProjects.map(project => (
              <ProjectCard 
                key={project.id}
                project={project} 
                onClick={() => setSelectedProject(project)}
              />
            ))}
            {filteredGameProjects.length === 0 && (
              <p className="text-center py-10 opacity-60">No projects match the selected filter.</p>
            )}
          </div>
        </div>
        
        {/* Web Projects */}
        <div className="flex flex-col gap-5 p-6 rounded-xl bg-[#1e1e1e]/50 backdrop-blur-md h-full overflow-y-auto scrollbar">
          <h2 className="text-2xl font-semibold relative inline-block">
            Web Projects
            <div className="absolute h-[3px] w-12 bg-[#88a035] rounded left-0 -bottom-2"></div>
          </h2>
          
          <div className="flex flex-wrap gap-2 mt-1 mb-4">
            <FilterTag 
              active={webFilter === 'all'} 
              onClick={() => setWebFilter('all')}
              isWebTag
            >
              All
            </FilterTag>
            {webTools.map(tool => (
              <FilterTag 
                key={tool.id}
                active={webFilter === tool.id} 
                onClick={() => setWebFilter(tool.id)}
                isWebTag
              >
                {tool.label}
              </FilterTag>
            ))}
          </div>
          
          <div className="flex flex-col gap-4">
            {filteredWebProjects.map(project => (
              <ProjectCard 
                key={project.id}
                project={project} 
                onClick={() => setSelectedProject(project)}
              />
            ))}
            {filteredWebProjects.length === 0 && (
              <p className="text-center py-10 opacity-60">No projects match the selected filter.</p>
            )}
          </div>
        </div>
      </div>
      
      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default ProjectsScene