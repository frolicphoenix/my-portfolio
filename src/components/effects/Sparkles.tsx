import React, { useState, useRef, useEffect } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

interface SparkleProps {
  id: string
  createdAt: number
  color: string
  size: number
  style: React.CSSProperties
}

// Utility to get a random number between min and max
const random = (min: number, max: number) => Math.random() * (max - min) + min

// Generate a new sparkle
const generateSparkle = (color: string): SparkleProps => ({
  id: String(random(10000, 99999)),
  createdAt: Date.now(),
  color,
  size: random(10, 20),
  style: {
    top: `${random(-10, 50)}%`,
    left: `${random(-10, 110)}%`,
    zIndex: 2,
  },
})

// Range helper
const range = (start: number, end: number, step = 1): number[] => {
  const output: number[] = []
  for (let i = start; i < end; i += step) output.push(i)
  return output
}

// Single sparkle instance
const SparkleInstance: React.FC<{ color: string; size: number; style: React.CSSProperties }> = ({ color, size, style }) => {
  const controls = useAnimationControls()

  useEffect(() => {
    controls.start({
      scale: [0, 1, 0],
      rotate: [0, 180],
      transition: { duration: 0.7 }
    })
  }, [controls])

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 68 68"
      fill="none"
      style={style}
      className="absolute pointer-events-none"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      animate={controls}
    >
      <path
        d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
        fill={color}
      />
    </motion.svg>
  )
}

// Main Sparkles wrapper
interface SparklesProps {
  color?: string
  children: React.ReactNode
  className?: string
}

const Sparkles: React.FC<SparklesProps> = ({ color = '#FFFF00', children, className = '' }) => {
  const [sparkles, setSparkles] = useState<SparkleProps[]>([])
  const prefersReducedMotion = useRef(false)

  useEffect(() => {
    // Check for reduced motion
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion.current) return

    // Initial sparkles
    setSparkles(range(0, 3).map(() => generateSparkle(color)))

    // Interval to add new sparkles
    const intervalId = window.setInterval(() => {
      const now = Date.now()
      setSparkles(old => [
        ...old.filter(s => now - s.createdAt < 750),
        generateSparkle(color)
      ])
    }, 350)

    return () => window.clearInterval(intervalId)
  }, [color])

  return (
    <span className={`inline-block relative ${className}`} aria-hidden="true">
      {!prefersReducedMotion.current && sparkles.map(s => (
        <SparkleInstance
          key={s.id}
          color={s.color}
          size={s.size}
          style={s.style}
        />
      ))}
      <span className="relative z-1">
        {children}
      </span>
    </span>
  )
}

export default React.memo(Sparkles)
