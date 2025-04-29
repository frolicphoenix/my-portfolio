import React, { Suspense } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Lazy-load heavy effects
const GalaxyStars = React.lazy(() => import('../effects/GalaxyStars'));
const AboutCardSparkles = React.lazy(() => import('../effects/AboutCardSparkles'));
import SparkleWord from '../effects/SparkleWord';

// Scene animation variants
const sceneVariants = {
  hidden: { opacity: 0, x: 100, rotateY: 10 },
  visible: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 0.5, ease: [0.23,1,0.32,1] } },
  exit:    { opacity: 0, x: -100, rotateY: -10, transition: { duration: 0.5, ease: [0.23,1,0.32,1] } },
};

// Text animation variants
const textContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3, delayChildren: 0.5 } }
};
const textItem = {
  hidden:  { opacity: 0, y: 10 },
  visible:{ opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.8 } }
};

const AboutScene: React.FC = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      role="region"
      aria-label="About Me Section"
      className="absolute inset-0 flex items-center justify-center overflow-hidden p-4"
      variants={sceneVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={reduceMotion ? { duration: 0 } : undefined}
    >
      {/* Galaxy Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Suspense fallback={<div className="absolute inset-0 bg-[#0a0a0a]" />}>          
          <GalaxyStars />
        </Suspense>
      </div>

      {/* Card Container */}
      <div className="relative w-full max-w-6xl h-auto md:h-4/5 bg-[#1e1e1e]/50 backdrop-blur-md rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
        {/* Sparkles Overlay */}
        <Suspense fallback={null}>
          <AboutCardSparkles />
        </Suspense>

        {/* Profile Image */}
        <div className="md:w-1/3 w-full h-64 md:h-full relative overflow-hidden">
          <img
            src="/assets/img/pranjall.webp"
            alt="Pranjal Lokhande"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            loading="lazy"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent md:bg-gradient-to-r"
            aria-hidden="true"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 p-6 md:p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-[#88a035]/50">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 relative text-white">
            About Me
            <span className="absolute h-[3px] w-14 bg-[#88a035] rounded left-0 -bottom-1" />
          </h2>

          <motion.div
            variants={textContainer}
            initial="hidden"
            animate="visible"
            className="space-y-4 text-base sm:text-lg text-[#f5f5f7]"
          >
            <motion.p variants={textItem}>
              Check out my profile on{' '}
              <a
                href="https://bento.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 underline hover:text-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300"
              >
                bento.me
              </a>
            </motion.p>

            <motion.p variants={textItem}>Hello there~!</motion.p>

            <motion.p variants={textItem}>
              My name is Pranjal. I build{' '}
              <SparkleWord>games</SparkleWord>,{' '}
              <SparkleWord>apps</SparkleWord>, and{' '}
              <SparkleWord>tools</SparkleWord> where design, technology, and story meet. I’ve spent a few years as a{' '}
              <SparkleWord>Game Designer</SparkleWord> and{' '}
              <SparkleWord>Full Stack Engineer</SparkleWord>, learning by doing and iterating on every challenge.
            </motion.p>

            <motion.p variants={textItem}>
              With a degree in{' '}
              <SparkleWord>Computer Science & Engineering</SparkleWord> and a Master’s in{' '}
              <SparkleWord>Video Game Design</SparkleWord>, I dive deep into systems, iterations, and creative problem-solving.
            </motion.p>

            <motion.p variants={textItem}>
              When I’m not coding or designing, I’m lost in a{' '}
              <SparkleWord>game</SparkleWord>,{' '}
              <SparkleWord>anime</SparkleWord>, or researching{' '}
              <SparkleWord>astronomy</SparkleWord>—in school, I even built a cardboard telescope that actually worked!
            </motion.p>

            <motion.p variants={textItem}>
              Find my art on{' '}
              <a
                href="https://theunrealdesigner.tumblr.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Tumblr
              </a>{' '}
              or{' '}
              <a
                href="https://www.instagram.com/theunrealdesigner/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 underline hover:text-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
              >
                Instagram
              </a>, and videos on{' '}
              <a
                href="https://www.youtube.com/@theunrealdesigner"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 underline hover:text-red-300 focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                YouTube
              </a>.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default React.memo(AboutScene);
