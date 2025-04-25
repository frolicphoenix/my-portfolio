import { useState, useRef, useEffect } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

interface SparkleProps {
  id: string
  createdAt: number
  color: string
  size: number
  style: React.CSSProperties
}

const random = (min: number, max: number) => Math.random() * (max - min) + min

const generateSparkle = (color: string): SparkleProps => {
  return {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: random(10, 20),
    style: {
      top: random(-10, 50) + '%',
      left: random(-10, 110) + '%',
      zIndex: 2,
    },
  }
}

const range = (start: number, end: number, step = 1): number[] => {
  const output = []
  for (let i = start; i < end; i += step) {
    output.push(i)
  }
  return output
}

interface SparkleInstanceProps {
  color: string
  size: number
  style: React.CSSProperties
}

const SparkleInstance = ({ color, size, style }: SparkleInstanceProps) => {
  const controls = useAnimationControls()
  
  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        scale: [0, 1, 0],
        rotate: [0, 180],
        transition: { duration: 0.7 }
      })
    }
    sequence()
  }, [controls])
  
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 68 68"
      fill="none"
      style={style}
      className="absolute pointer-events-none"
      animate={controls}
    >
      <path
        d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
        fill={color}
      />
    </motion.svg>
  )
}

interface SparklesProps {
  color?: string
  children: React.ReactNode
  className?: string
}

const Sparkles = ({ color = '#bbcf64', children, className = '' }: SparklesProps) => {
  const [sparkles, setSparkles] = useState<SparkleProps[]>([])
  const prefersReducedMotion = useRef(false)
  
  useEffect(() => {
    // Check if user prefers reduced motion
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion.current) return
    
    // Create initial sparkles
    const initialSparkles = range(0, 3).map(() => generateSparkle(color))
    setSparkles(initialSparkles)
    
    // Set up interval to add new sparkles
    const intervalId = setInterval(() => {
      const now = Date.now()
      // Remove sparkles older than 700ms and add a new one
      setSparkles(sparkles => {
        const nextSparkles = sparkles
          .filter(sparkle => now - sparkle.createdAt < 750)
          .concat(generateSparkle(color))
        
        return nextSparkles
      })
    }, 350)
    
    return () => clearInterval(intervalId)
  }, [color])
  
  return (
    <span className={`inline-block relative ${className}`}>
      {prefersReducedMotion.current ? null : sparkles.map(sparkle => (
        <SparkleInstance
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <span className="relative z-1">{children}</span>
    </span>
  )
}

export default Sparkles