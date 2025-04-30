
import { useState, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectsScene from '../components/scenes/ProjectsScene'
import AboutScene from '../components/scenes/AboutScene'
import SkillsScene from '../components/scenes/SkillsScene'
import ContactScene from '../components/scenes/ContactScene'
import Sparkles from '../components/effects/Sparkles'
import GalaxyStars from '../components/effects/GalaxyStars'

// Types
type Scene = 'home' | 'projects' | 'about' | 'skills' | 'contact'

const Portfolio = () => {
  const [activeScene, setActiveScene] = useState<Scene>('home')

  return (
    
    <div className="relative w-full h-full perspective-[1000px]">

      {/* Galaxy Background - Always Rendered */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Suspense fallback={<div className="absolute inset-0 bg-[#0a0a0a]" />}>
          <GalaxyStars />
        </Suspense>
      </div>

      {/* Universe Container */}
      <div className="relative w-full h-full transition-all duration-500 ease-in-out">
        
        {/* Navigation */}
        <nav className="fixed bottom-15 left-1/2 -translate-x-1/2 flex gap-5 px-6 py-4 bg-[#121212]/80 backdrop-blur-md rounded-full z-50 shadow-lg">
          {[
            { id: 'home', label: 'Home', img: 'https://img.icons8.com/clouds/400/home.png' , icon: '🏠' },
            { id: 'projects', label: 'Projects', img: 'https://img.icons8.com/clouds/400/folder-invoices.png', icon: '📁' },
            { id: 'about', label: 'About', img: 'https://img.icons8.com/clouds/400/about.png', icon: '💁🏻‍♀️' },
            { id: 'skills', label: 'Skills', img: 'https://img.icons8.com/clouds/400/gear.png', icon: '⚙️' },
            { id: 'contact', label: 'Contact', img: 'https://img.icons8.com/clouds/400/contact.png', icon: '✉️' }
          ].map((item) => (
            <button
              key={item.id}
              className={`w-12 h-12 flex items-center justify-center rounded transition-all duration-300 relative group
                ${activeScene === item.id ? 'bg-[#ffcc4d] text-white' : 'bg-transparent text-[#f5f5f7] hover:bg-white/10'}`}
              onClick={() => setActiveScene(item.id as Scene)}
            >
              {/* {item.icon} */}
              <img
                src={item.img}
                alt={item.label}
                className="w-15 h-15 object-contain"
              />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#88a035] text-white px-2 py-1 rounded text-xs opacity-0 scale-0 transition-all duration-300 pointer-events-none whitespace-nowrap group-hover:opacity-100 group-hover:scale-100">
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        {/* Scenes */}
        <AnimatePresence mode="wait">
          {activeScene === 'home' && (
            <motion.div
              key="home"
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, x: 100, rotateY: 10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100, rotateY: -10 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            >
              
              <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-2xl px-6">
                <motion.h1 
                    className="text-5xl font-bold mb-5"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    >
                    <Sparkles>
                        <span className="bg-gradient-to-r from-[#88a035] to-[#bbcf64] bg-clip-text text-transparent">
                        Pranjal Lokhande
                        </span>
                    </Sparkles>
                </motion.h1>
                <motion.h2 
                  className="text-2xl mb-6 opacity-80 text-amber-300"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 0.8 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  ✨ Creative Technologist ✨
                </motion.h2>
                <motion.p 
                  className="mb-10"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  With 3+ years' experience building video games, apps, websites, and tools, a relentless idea machine who lives at the crossroads of storytelling, design, and technology.
                </motion.p>
                <motion.div 
                  className="flex gap-5 mt-10"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  {[
                    { href: "mailto:pranjalmlokhande@gmail.com", img: "https://img.icons8.com/bubbles/200/apple-mail.png", icon: "M" },
                    { href: "https://www.linkedin.com/in/pranjallokhande/", img: "https://img.icons8.com/bubbles/200/linkedin.png", icon: "L" },
                    { href: "https://github.com/frolicphoenix", img: "https://img.icons8.com/bubbles/200/github.png", icon: "G" },
                    { href: "https://www.youtube.com/@theunrealdesigner", img: "https://img.icons8.com/bubbles/200/youtube-squared.png", icon: "Y" },
                    { href: "https://medium.com/@pranjalmlokhande", img: "https://img.icons8.com/bubbles/200/medium-new.png", icon: "M" },
                    { href: "https://theunrealdesigner.tumblr.com/", img: "https://img.icons8.com/bubbles/200/tumblr.png", icon: "T" }
                  ].map((link, i) => (
                    <a 
                      key={i} 
                      href={link.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full text-[#f5f5f7] transition-all duration-300 hover:bg-[#88a035] hover:-translate-y-1 overflow-hidden"
                    >
                      {link.img ? (
                        <img 
                          src={link.img}
                          alt="icon"
                          className="w-15 h-15 object-contain"
                        />
                      ) : (
                        link.icon
                      )}
                    </a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}

          {activeScene === 'projects' && <ProjectsScene />}
          
          {activeScene === 'about' && <AboutScene />}
          
          {activeScene === 'skills' && <SkillsScene />}
          
          {activeScene === 'contact' && <ContactScene />}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Portfolio