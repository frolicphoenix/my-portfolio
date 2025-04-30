import { motion } from 'framer-motion'
import AboutCardSparkles from '../effects/AboutCardSparkles'
import SparkleWord from '../effects/SparkleWord'    

const textContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3, delayChildren: 0.5 }
  }
}
const textItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.8 } }
}

const AboutScene = () => (
  <motion.div
    className="absolute inset-0 flex items-center justify-center overflow-y-auto pb-20 md:pb-0 pt-4 md:pt-0"
    initial={{ opacity: 0, x: 100, rotateY: 10 }}
    animate={{ opacity: 1, x: 0, rotateY: 0 }}
    exit={{ opacity: 0, x: -100, rotateY: -10 }}
    transition={{ duration: 0.5, ease: [0.23,1,0.32,1] }}
  >

    {/* About Card */}
    <div className="relative w-11/12 max-w-6xl h-auto md:h-5/6 bg-[#1e1e1e]/50 backdrop-blur-md rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
      <AboutCardSparkles/>

      {/* Image */}
      <div className="w-full md:w-1/3 h-64 md:h-auto relative overflow-hidden">
        <img src="/assets/img/pranjall.webp" alt="Pranjal" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"/>
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent md:bg-gradient-to-r"/>
      </div>

      {/* Text */}
      <div className="flex-1 p-6 md:p-8 overflow-y-auto scrollbar max-h-[60vh] md:max-h-none pb-16 sm:pb-6">
        <h2 className="text-2xl md:text-3xl font-bold relative inline-block mb-6 md:mb-8 text-white">
          About Me
          <div className="absolute h-[3px] w-14 bg-[#88a035] rounded left-0 -bottom-3"/>
        </h2>

        <motion.div
          variants={textContainer}
          initial="hidden"
          animate="visible"
          className="space-y-4 md:space-y-5 text-med md:text-med text-[#f5f5f7] animate-[textGlow_4s_ease-in-out_infinite]"
        >
          
          <motion.p variants={textItem}>
            <a href="https://www.youtube.com/@theunrealdesigner" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline hover:text-amber-300">
              bento.me
            </a>
          </motion.p>
          <motion.p variants={textItem}>
            Hello there~!
          </motion.p>

          <motion.p variants={textItem}>
            My name is Pranjall. I build{' '}
            <SparkleWord>games</SparkleWord>,{' '}
            <SparkleWord>apps</SparkleWord>, and{' '}
            <SparkleWord>tools</SparkleWord> where design, technology, and story meet. I've spent a few years working as a{' '}
            <SparkleWord>Game Designer</SparkleWord> and{' '}
            <SparkleWord>Full Stack Engineer</SparkleWord>, learning by doing, messing up sometimes, and figuring out things along the way. I believe in making ideas real, one code at a time.
          </motion.p>

          <motion.p variants={textItem}>
            With a Bachelor's in{' '}
            <SparkleWord>Computer Science & Engineering</SparkleWord>, and a Master's in{' '}
            <SparkleWord>Video Game Design</SparkleWord>, I dove deep into how systems work, how ideas are built, and how things can be shaped, tested, and improved. It gave me a strong mix of technical skills and creative thinking that I carry into everything I make.
          </motion.p>

          <motion.p variants={textItem}>
            When I'm not working, I'm usually getting lost in a{' '}
            <SparkleWord>game</SparkleWord>,{' '}
            <SparkleWord>anime</SparkleWord>,{' '}
            <SparkleWord>book</SparkleWord>, or researching{' '}
            <SparkleWord>astronomy</SparkleWord> and dreaming of the stars. (Fun fact: back in school, I built a working telescope out of cardboard—rough, but it worked!)
          </motion.p>

          <motion.p variants={textItem}>
            Check out my art gallery on{" "}
            <a href="https://theunrealdesigner.tumblr.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">
              Tumblr
            </a>{" "}
            or{" "}
            <a href="https://www.instagram.com/theunrealdesigner/" target="_blank" rel="noopener noreferrer" className="text-pink-400 underline hover:text-pink-300">
              Instagram
            </a>.{" "}
            I, sometimes, also post showcase videos on{" "}
            <a href="https://www.youtube.com/@theunrealdesigner" target="_blank" rel="noopener noreferrer" className="text-red-400 underline hover:text-red-300">
              YouTube
            </a>.
          </motion.p>
        </motion.div>
      </div>
    </div>
  </motion.div>
)

export default AboutScene