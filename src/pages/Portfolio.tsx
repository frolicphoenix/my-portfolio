import { useState, Suspense, lazy, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ProjectsScene = lazy(() => import('../components/scenes/ProjectsScene'))
const AboutScene    = lazy(() => import('../components/scenes/AboutScene'))
const SkillsScene   = lazy(() => import('../components/scenes/SkillsScene'))
const ContactScene  = lazy(() => import('../components/scenes/ContactScene'))

const Sparkles = lazy(() => import('../components/effects/Sparkles'))
const GalaxyStars = lazy(() => import('../components/effects/GalaxyStars'))

// Types
type Scene = 'home' | 'projects' | 'about' | 'skills' | 'contact'

const Portfolio = () => {
  const [activeScene, setActiveScene] = useState<Scene>('home')
  const [isNavVisible, setIsNavVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [reduceAnimations, setReduceAnimations] = useState(false) 
  const [lowPerfMode, setLowPerfMode] = useState(false)
  const [disableHeavyAnimations, setDisableHeavyAnimations] = useState(false)

  const frameCountRef = useRef(0)
  const lastFrameTimeRef = useRef(Date.now())
  const performanceCheckRef = useRef<number | null>(null)

  // Safety timers to prevent browser crashes
  useEffect(() => {
    const autoSwitchTimer = setTimeout(() => {
      // console.log("Auto-switching to low performance mode to prevent browser crash")
      setLowPerfMode(true)
    }, 3 * 60 * 1000) 

    const disableTimer = setTimeout(() => {
      // console.log("Disabling heavy animations to prevent browser crash")
      setDisableHeavyAnimations(true)
    }, 6 * 60 * 1000)

    return () => {
      clearTimeout(autoSwitchTimer)
      clearTimeout(disableTimer)
    }
  }, [])

  // Page visibility detection
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        setLowPerfMode(true)
      } else if (!disableHeavyAnimations) {
        // Only reset to normal if animations aren't completely disabled
        setLowPerfMode(false)
      }
    }
    
    document.addEventListener("visibilitychange", handleVisibility)
    return () => {
      document.removeEventListener("visibilitychange", handleVisibility)
    }
  }, [disableHeavyAnimations])

  // Memory usage monitor
  useEffect(() => {
    // Only run if the performance API is available
    if (!('performance' in window)) {
      return;
    }
    
    // TypeScript workaround for non-standard performance.memory
    const getMemoryInfo = (): { usedJSHeapSize?: number } => {
      return (performance as any).memory || {};
    };
    
    const memoryInterval = setInterval(() => {
      const memInfo = getMemoryInfo();
      if (memInfo.usedJSHeapSize) {
        const memUsage = memInfo.usedJSHeapSize / (1024 * 1024);
        // console.log(`Memory usage: ${memUsage.toFixed(2)}MB`);
        
        // If memory usage is over 300MB, take action
        if (memUsage > 300) {
          // console.warn("High memory usage detected - reducing animations");
          setLowPerfMode(true);
        }
        
        // If memory usage is critical, disable animations
        if (memUsage > 500) {
          // console.warn("Critical memory usage - disabling animations");
          setDisableHeavyAnimations(true);
          // Clear this interval when we've disabled animations
          clearInterval(memoryInterval);
        }
      }
    }, 30000);
    
    return () => clearInterval(memoryInterval);
  }, [])

  // Performance monitoring
  useEffect(() => {
    // Cancel any existing animation frame
    if (performanceCheckRef.current) {
      cancelAnimationFrame(performanceCheckRef.current)
    }
    
    let counter = 0
    
    const checkPerformance = () => {
      const now = Date.now()
      const elapsed = now - lastFrameTimeRef.current
      
      // Only calculate every ~1 second
      if (elapsed > 1000) {
        const fps = Math.round((frameCountRef.current * 1000) / elapsed)
        
        // Only log when FPS is below threshold to avoid console spam
        if (fps < 40) {
          // console.log(`Current FPS: ${fps}`)
        }
        
        if (fps < 30) {
          // console.warn('Performance degrading')
          counter++
          
          // Auto-reduce animations after consistent low performance
          if (counter > 3 && !reduceAnimations) {
            // console.warn('Automatically reducing animations to prevent crash')
            setReduceAnimations(true)
          }
        } else {
          counter = Math.max(0, counter - 1) // Gradually recover
        }
        
        // Reset counters
        frameCountRef.current = 0
        lastFrameTimeRef.current = now
      }
      
      frameCountRef.current++
      performanceCheckRef.current = requestAnimationFrame(checkPerformance)
    }
    
    performanceCheckRef.current = requestAnimationFrame(checkPerformance)
    
    return () => {
      if (performanceCheckRef.current) {
        cancelAnimationFrame(performanceCheckRef.current)
      }
    }
  }, [reduceAnimations])

  // User inactivity detection
  useEffect(() => {
    let idleTimer: NodeJS.Timeout
    
    const resetTimer = () => {
      clearTimeout(idleTimer)
      
      // Only restore animations if they weren't explicitly disabled
      if (reduceAnimations && !disableHeavyAnimations) {
        setReduceAnimations(false)
      }
      
      idleTimer = setTimeout(() => {
        // Don't override a full disable
        if (!disableHeavyAnimations) {
          setReduceAnimations(true)
          // console.log("User inactive, reducing animations")
        }
      }, 60000) // 1 minute of inactivity
    }
    
    // Events that reset the timer
    window.addEventListener('mousemove', resetTimer)
    window.addEventListener('keypress', resetTimer)
    window.addEventListener('click', resetTimer)
    window.addEventListener('scroll', resetTimer)
    
    resetTimer()
    
    return () => {
      clearTimeout(idleTimer)
      window.removeEventListener('mousemove', resetTimer)
      window.removeEventListener('keypress', resetTimer)
      window.removeEventListener('click', resetTimer)
      window.removeEventListener('scroll', resetTimer)
    }
  }, [reduceAnimations, disableHeavyAnimations])
  
  // Mobile detection with debounce
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    let resizeTimer: NodeJS.Timeout
    
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        checkIfMobile()
      }, 250)
    }
    
    checkIfMobile()
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimer)
    }
  }, [])

  const navItems = [
    { id: 'home', label: 'Home', img: 'navigation/home.webp' , icon: '🏠' },
    { id: 'projects', label: 'Projects', img: 'navigation/folder-invoices.webp', icon: '📁' },
    { id: 'about', label: 'About', img: 'navigation/about.webp', icon: '💁🏻‍♀️' },
    { id: 'skills', label: 'Skills', img: 'navigation/gear.webp', icon: '⚙️' },
    { id: 'contact', label: 'Contact', img: 'navigation/contact.webp', icon: '✉️' }
  ]

  // Performance settings are combined to create a clear hierarchy
  const actualLowPerfMode = lowPerfMode || reduceAnimations
  const actualDisabledAnimations = disableHeavyAnimations

  return (
    <div className="relative w-full h-full perspective-[1000px]">
      {/* Performance controls */}
      <div className="fixed top-4 right-4 z-[9999] flex flex-col gap-2 items-end">
        {/* Only show re-enable button when animations are reduced but not disabled */}
        {reduceAnimations && !disableHeavyAnimations && (
          <button
            onClick={() => setReduceAnimations(false)}
            className="bg-black/70 text-white text-xs p-2 rounded"
          >
            Re-enable animations
          </button>
        )}
        
        {/* Always show disable button until animations are fully disabled */}
        {!disableHeavyAnimations && (
          <button
            onClick={() => setDisableHeavyAnimations(true)}
            className="bg-black/70 text-white text-xs p-2 rounded opacity-30 hover:opacity-100"
          >
            Disable all animations
          </button>
        )}
        
        {/* Show re-enable button when animations are fully disabled */}
        {disableHeavyAnimations && (
          <button
            onClick={() => {
              setDisableHeavyAnimations(false)
              setReduceAnimations(false)
              setLowPerfMode(false)
            }}
            className="bg-amber-800/80 text-white text-xs p-2 rounded"
          >
            Re-enable animations (may cause instability)
          </button>
        )}
      </div>
      
      {/* Galaxy Background with optimizations */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Suspense fallback={<div className="absolute inset-0 bg-[#0a0a0a]" />}>
          <GalaxyStars 
            lowPerformanceMode={actualLowPerfMode} 
            disabled={actualDisabledAnimations} 
          />
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
              whileHover={actualDisabledAnimations ? {} : { scale: 1.1 }}
              whileTap={actualDisabledAnimations ? {} : { scale: 0.95 }}
            >
              <motion.div
                animate={actualDisabledAnimations ? {} : { rotate: isNavVisible ? 45 : 0 }}
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
              
              {/* Animated Glow Effect - Only when animations enabled */}
              {!actualDisabledAnimations && (
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
              )}
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
                        initial={actualDisabledAnimations ? { opacity: 1 } : { opacity: 0, x: 20 }}
                        animate={actualDisabledAnimations ? { opacity: 1 } : { 
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
                            decoding="async"
                            width="40"
                            height="40"
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
                aria-label={`Navigate to ${item.label}`}
                className={`w-12 h-12 flex items-center justify-center rounded transition-all duration-300 relative group
                  ${activeScene === item.id ? 'bg-[#ffcc4d] text-white' : 'bg-transparent text-[#f5f5f7] hover:bg-white/10'}`}
                onClick={() => setActiveScene(item.id as Scene)}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  loading="lazy"
                  decoding="async"
                  width="48"
                  height="48"
                  className="w-15 h-15 object-contain"
                />
                {!actualDisabledAnimations && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#88a035] text-white px-2 py-1 rounded text-xs opacity-0 scale-0 transition-all duration-300 pointer-events-none whitespace-nowrap group-hover:opacity-100 group-hover:scale-100">
                    {item.label}
                  </span>
                )}
              </button>
            ))}
          </nav>
        )}

        {/* Scenes */}
        <AnimatePresence mode="wait" key="scene-presence">
          <Suspense fallback={<div className="absolute inset-0 flex items-center justify-center">Loading…</div>}>
            {activeScene === 'home' && (
              <motion.div
                key="home"
                className="absolute inset-0 flex items-center justify-center"
                initial={actualDisabledAnimations ? { opacity: 0 } : { opacity: 0, x: 100, rotateY: 10 }}
                animate={actualDisabledAnimations ? { opacity: 1 } : { opacity: 1, x: 0, rotateY: 0 }}
                exit={actualDisabledAnimations ? { opacity: 0 } : { opacity: 0, x: -100, rotateY: -10 }}
                transition={{ duration: actualDisabledAnimations ? 0.3 : 0.5, ease: [0.23, 1, 0.32, 1] }}
              >
                <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-2xl px-6">
                  <motion.h1 
                    className="text-4xl md:text-5xl font-bold mb-5"
                    initial={actualDisabledAnimations ? { opacity: 1 } : { y: 20, opacity: 0 }}
                    animate={actualDisabledAnimations ? { opacity: 1 } : { y: 0, opacity: 1 }}
                    transition={{ delay: actualDisabledAnimations ? 0 : 0.2, duration: actualDisabledAnimations ? 0.3 : 0.8 }}
                  >
                    {actualDisabledAnimations ? (
                      <span className="bg-gradient-to-r from-[#88a035] to-[#bbcf64] bg-clip-text text-transparent">
                        Pranjal Lokhande
                      </span>
                    ) : (
                      <Sparkles>
                        <span className="bg-gradient-to-r from-[#88a035] to-[#bbcf64] bg-clip-text text-transparent">
                          Pranjal Lokhande
                        </span>
                      </Sparkles>
                    )}
                  </motion.h1>
                  
                  <motion.h2 
                    className="text-xl md:text-2xl mb-6 opacity-80 text-amber-300"
                    initial={actualDisabledAnimations ? { opacity: 0.8 } : { y: 20, opacity: 0 }}
                    animate={actualDisabledAnimations ? { opacity: 0.8 } : { y: 0, opacity: 0.8 }}
                    transition={{ delay: actualDisabledAnimations ? 0 : 0.4, duration: actualDisabledAnimations ? 0.3 : 0.8 }}
                  >
                    ✨ Creative Technologist ✨
                  </motion.h2>
                  
                  <p className="mb-10">
                    With 3+ years' experience building video games, apps, websites, and tools, a relentless idea machine who lives at the crossroads of storytelling, design, and technology.
                  </p>
                  
                  <motion.div 
                    className="flex flex-wrap justify-center gap-3 md:gap-5 mt-10"
                    initial={actualDisabledAnimations ? { opacity: 1 } : { y: 20, opacity: 0 }}
                    animate={actualDisabledAnimations ? { opacity: 1 } : { y: 0, opacity: 1 }}
                    transition={{ delay: actualDisabledAnimations ? 0 : 0.8, duration: actualDisabledAnimations ? 0.3 : 0.8 }}
                  >
                    {[
                      { href: "mailto:pranjalmlokhande@gmail.com", img: "socials/apple-mail.webp", icon: "M" },
                      { href: "https://www.linkedin.com/in/pranjallokhande/", img: "socials/linkedin.webp", icon: "L" },
                      { href: "https://github.com/frolicphoenix", img: "socials/github.webp", icon: "G" },
                      { href: "https://www.youtube.com/@theunrealdesigner", img: "socials/youtube-squared.webp", icon: "Y" },
                      { href: "https://medium.com/@pranjalmlokhande", img: "socials/medium-new.webp", icon: "M" },
                      { href: "https://theunrealdesigner.tumblr.com/", img: "socials/tumblr.webp", icon: "T" }
                    ].map((link, i) => (
                      <a 
                        key={i} 
                        href={link.href} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/10 rounded-full text-[#f5f5f7] ${!actualDisabledAnimations ? 'transition-all duration-300 hover:bg-[#88a035] hover:-translate-y-1' : ''} overflow-hidden`}
                      >
                        {link.img ? (
                          <img 
                            src={link.img}
                            alt={link.icon}
                            loading="lazy"
                            decoding="async"
                            width="48"
                            height="48"
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