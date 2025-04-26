import { motion } from 'framer-motion'
import { Suspense } from 'react'
import GalaxyStars from '../effects/GalaxyStars'

const AboutScene = () => {
  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center bg-radial-gradient"
      initial={{ opacity: 0, x: 100, rotateY: 10 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      exit={{ opacity: 0, x: -100, rotateY: -10 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="w-11/12 max-w-6xl h-4/5 bg-[#121212]/70 backdrop-blur-md rounded-2xl overflow-hidden flex flex-col md:flex-row">

        {/* Galaxy Background - Always Rendered */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Suspense fallback={<div className="absolute inset-0 bg-[#0a0a0a]" />}>
            <GalaxyStars />
          </Suspense>
        </div>

        <div className="md:w-1/3 w-full h-64 md:h-full relative overflow-hidden">
          <img 
            src="/assets/img/pranjall.webp" 
            alt="Pranjal Lokhande"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent md:bg-gradient-to-r"></div>
        </div>
        
        <div className="md:w-2/3 w-full p-8 overflow-y-auto scrollbar">
          <h2 className="text-3xl font-bold relative inline-block mb-8">
            About Me
            <div className="absolute h-[3px] w-14 bg-[#88a035] rounded left-0 -bottom-3"></div>
          </h2>
          
          <div className="space-y-5 text-lg">
            <p>
              I'm a ✨ creative technologist ✨ passionate about crafting interactive experiences that live at the crossroads of storytelling, design, and technology. With a solid foundation in both game design and software engineering, I thrive in that space where creativity meets code, bringing ideas to life through immersive, meaningful experiences.
            </p>
            
            <p>
              Over the years, I've worked on a variety of projects, from building intuitive gameplay systems to engineering technical tools that empower creators and bring virtual worlds to life. I'm always exploring, always iterating, and constantly looking for new ways to push the boundaries of how we interact with digital environments.
            </p>
            
            <p>
              My approach combines technical precision with creative vision. Whether I'm designing game levels that tell a story through environmental cues or building web applications that solve real-world problems, I focus on creating experiences that are both functional and delightful to use.
            </p>
            
            <div className="pt-6">
              <a 
                href="/resume/pranjallokhande_resume_FullStack.pdf" 
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#88a035] text-white rounded-md transition-all hover:bg-[#506b2d] hover:shadow-lg"
              >
                <span>Download Resume</span>
                <span>📄</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default AboutScene