import React from 'react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate, useParams } from 'react-router-dom'

const FilterTag = React.lazy(() => import('../projects/FilterTag'))
const ProjectCard = React.lazy(() => import('../projects/ProjectCard')) 
const ProjectModal = React.lazy(() => import('../projects/ProjectModal'))

// , webTools
import projects, { ProjectTool, Project, gameTools } from '../../data/project'

const ProjectsScene = () => {
  const navigate = useNavigate()
  const { projectId } = useParams<{ projectId: string }>()
  
  const [gameFilter, setGameFilter] = useState<ProjectTool | 'all'>('all')
  // const [webFilter, setWebFilter] = useState<ProjectTool | 'all'>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  
  const gameProjects = projects.filter(p => p.category === 'game')
  // const webProjects = projects.filter(p => p.category === 'web')

  const filteredGameProjects = gameProjects.filter(project => 
    gameFilter === 'all' || project.tools.includes(gameFilter)
  )
  
  // const filteredWebProjects = webProjects.filter(project => 
  //   webFilter === 'all' || project.tools.includes(webFilter)
  // )

  // Handle URL-based project selection
  useEffect(() => {
    if (projectId) {
      const project = projects.find(p => p.id === projectId)
      if (project) {
        setSelectedProject(project)
      } else {
        // If project not found, redirect to projects page
        navigate('/projects', { replace: true })
      }
    } else {
      setSelectedProject(null)
    }
  }, [projectId, navigate])

  // Handle project selection and URL update
  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project)
    navigate(`/projects/${project.id}`)
  }

  // Handle modal close and URL update
  const handleProjectClose = () => {
    setSelectedProject(null)
    navigate('/projects')
  }

  return (
    
    <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0, x: 100, rotateY: 10 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      exit={{ opacity: 0, x: -100, rotateY: -10 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
    >
      {/* md:grid-cols-2 */}
      <div className="grid grid-cols-1  gap-5 w-12/13 max-w-400 h-7/8">

        {/* Game Projects */}
        <div className="flex flex-col gap-5 p-6 rounded-xl bg-[#1e1e1e]/50 backdrop-blur-md h-full overflow-y-auto scrollbar">
          
          <h2 className="text-2xl font-semibold relative inline-block">
            Games
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredGameProjects.map(project => (
              <ProjectCard 
                key={project.id}
                project={project} 
                onClick={() => handleProjectSelect(project)}
              />
            ))}
            {filteredGameProjects.length === 0 && (
              <p className="col-span-full text-center py-10 opacity-60">No projects match the selected filter.</p>
            )}
          </div>
        </div>
        
        {/* Web Projects */}
        {/* <div className="flex flex-col gap-5 p-6 rounded-xl bg-[#1e1e1e]/50 backdrop-blur-md h-full overflow-y-auto scrollbar">
          <h2 className="text-2xl font-semibold relative inline-block">
            Apps
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredWebProjects.map(project => (
              <ProjectCard 
                key={project.id}
                project={project} 
                onClick={() => handleProjectSelect(project)}
              />
            ))}
            {filteredWebProjects.length === 0 && (
              <p className="col-span-full text-center py-10 opacity-60">No projects match the selected filter.</p>
            )}
          </div>
        </div> */}
      </div>
      
      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={handleProjectClose} 
          />
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default ProjectsScene