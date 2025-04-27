import { motion } from 'framer-motion';

interface SparkleWordProps {
  children: React.ReactNode;
}

const SparkleWord = ({ children }: SparkleWordProps) => {
  return (
    <motion.span 
      className="bg-gradient-to-r from-[#88a035] via-[#bbcf64] to-[#88a035] bg-clip-text text-transparent font-semibold"
      initial={{ backgroundPosition: '0% 50%' }}
      animate={{ backgroundPosition: '200% 50%' }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'linear'
      }}
      style={{
        backgroundSize: '200% 200%',
        display: 'inline-block'
      }}
    >
      {children}
    </motion.span>
  )
}

export default SparkleWord;
