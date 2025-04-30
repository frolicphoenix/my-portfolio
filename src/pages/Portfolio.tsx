import { useState, Suspense, lazy, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ProjectsScene = lazy(() => import('../components/scenes/ProjectsScene'))
const AboutScene    = lazy(() => import('../components/scenes/AboutScene'))
const SkillsScene   = lazy(() => import('../components/scenes/SkillsScene'))
const ContactScene  = lazy(() => import('../components/scenes/ContactScene'))

import Sparkles from '../components/effects/Sparkles'
import GalaxyStars from '../components/effects/GalaxyStars'

// Types
type Scene = 'home' | 'projects' | 'about' | 'skills' | 'contact'

const Portfolio = () => {
  const [activeScene, setActiveScene] = useState<Scene>('home')
  const [isNavVisible, setIsNavVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    let resizeTimer: string | number | NodeJS.Timeout | undefined;
    
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        checkIfMobile();
      }, 250); 

    }
    
    checkIfMobile()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimer)
    }
  }, [])

  const navItems = [
    { id: 'home', label: 'Home', img: 'https://img.icons8.com/clouds/400/home.png' , icon: '🏠' },
    { id: 'projects', label: 'Projects', img: 'https://img.icons8.com/clouds/400/folder-invoices.png', icon: '📁' },
    { id: 'about', label: 'About', img: 'https://img.icons8.com/clouds/400/about.png', icon: '💁🏻‍♀️' },
    { id: 'skills', label: 'Skills', img: 'https://img.icons8.com/clouds/400/gear.png', icon: '⚙️' },
    { id: 'contact', label: 'Contact', img: 'https://img.icons8.com/clouds/400/contact.png', icon: '✉️' }
  ]

  return (
    <div className="relative w-full h-full perspective-[1000px]">
      {/* Galaxy Background - Always Rendered */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Suspense fallback={<div className="absolute inset-0 bg-[#0a0a0a]" />}>
          <GalaxyStars />
        </Suspense>
      </div>

      {/* Universe Container */}
      <div className="relative bottom-20 top-2 w-full h-full transition-all duration-500 ease-in-out">
        
        {/* MOBILE NAVIGATION - Corner Menu */}
        {isMobile && (
          <>
            {/* Menu Toggle Button */}
            <motion.button
              onClick={() => setIsNavVisible(!isNavVisible)}
              className="fixed bottom-20 right-6 z-50 bg-[#677927] text-amber-300 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isNavVisible ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Menu/Close Icon */}
                {isNavVisible ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <line x1="4" y1="12" x2="20" y2="12"></line>
                    <line x1="4" y1="6" x2="20" y2="6"></line>
                    <line x1="4" y1="18" x2="20" y2="18"></line>
                  </svg>
                )}
              </motion.div>
              
              {/* Animated Glow Effect */}
              <motion.div 
                key="glow-effect"
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  repeatType: "loop", 
                  times: [0, 0.5, 1] 
                }}
              >
                <span className="absolute h-2 w-2 rounded-full bg-amber-300/80 top-2 left-1/2 -translate-x-1/2"></span>
                <span className="absolute h-2 w-2 rounded-full bg-amber-300/80 bottom-2 left-1/2 -translate-x-1/2"></span>
              </motion.div>
            </motion.button>
            
            {/* Mobile Navigation Menu */}
            <AnimatePresence key="nav-presence">
              {isNavVisible && (
                <motion.div
                  className="fixed bottom-28 right-6 z-50 bg-[#121212]/90 backdrop-blur-md rounded-2xl p-4 shadow-lg"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ duration: 0.3, ease: "backOut" }}
                >
                  <div className="flex flex-col gap-3">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.id}
                        className={`flex items-center gap-3 p-2 rounded-xl transition-all duration-300
                          ${activeScene === item.id ? 'bg-[#ffcc4d]/20 text-[#ffcc4d]' : 'bg-transparent text-[#f5f5f7] hover:bg-white/10'}`}
                        onClick={() => {
                          setActiveScene(item.id as Scene);
                          // Close menu after selection
                          setIsNavVisible(false);
                        }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          transition: { delay: index * 0.05 } 
                        }}
                      >
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1e1e1e]">
                          <img
                            src={item.img}
                            alt={item.label}
                            loading="lazy"
                            className="w-10 h-10 object-contain"
                          />
                        </div>
                        <span className="font-medium">{item.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}

        {/* DESKTOP NAVIGATION */}
        {!isMobile && (
          <nav 
            aria-label="Main Navigation"
            className="fixed bottom-20 left-1/2 -translate-x-1/2 flex gap-5 px-6 py-4 bg-[#121212]/80 backdrop-blur-md rounded-full z-50 shadow-lg"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`w-12 h-12 flex items-center justify-center rounded transition-all duration-300 relative group
                  ${activeScene === item.id ? 'bg-[#ffcc4d] text-white' : 'bg-transparent text-[#f5f5f7] hover:bg-white/10'}`}
                onClick={() => setActiveScene(item.id as Scene)}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  loading='lazy'
                  className="w-15 h-15 object-contain"
                />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#88a035] text-white px-2 py-1 rounded text-xs opacity-0 scale-0 transition-all duration-300 pointer-events-none whitespace-nowrap group-hover:opacity-100 group-hover:scale-100">
                  {item.label}
                </span>
              </button>
            ))}
          </nav>
        )}

        {/* Scenes */}
        <AnimatePresence mode="wait" key="scene-presense">
          <Suspense fallback={<div className="absolute inset-0 flex items-center justify-center">Loading…</div>}>
            {activeScene === 'home' && (
              <motion.div
                key="home"
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, x: 100, rotateY: 10 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -100, rotateY: -10 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                onAnimationComplete={(_definition) => {
                  
                }}
              >
                
                <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-2xl px-6">
                  <motion.h1 
                      className="text-4xl md:text-5xl font-bold mb-5"
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
                    className="text-xl md:text-2xl mb-6 opacity-80 text-amber-300"
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
                    className="flex flex-wrap justify-center gap-3 md:gap-5 mt-10"
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
                        className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/10 rounded-full text-[#f5f5f7] transition-all duration-300 hover:bg-[#88a035] hover:-translate-y-1 overflow-hidden"
                      >
                        {link.img ? (
                          <img 
                            src={link.img}
                            alt="icon"
                            loading="lazy"
                            className="w-12 h-12 md:w-15 md:h-15 object-contain"
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
          
          </Suspense>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Portfolio