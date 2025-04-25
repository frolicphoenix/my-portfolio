import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'

// Random float between min and max
const random = (min: number, max: number) => Math.random() * (max - min) + min

const ParticleBackground = () => {
  const ref = useRef<THREE.Points>(null!)
  const { mouse } = useThree()
  
  // Generate random positions for particles
  const count = 1500
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      // Create a spherical distribution of particles
      const theta = random(0, Math.PI * 2)
      const phi = Math.acos(random(-1, 1))
      const radius = random(1, 15)
      
      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi) - 10 // Push particles a bit back
      
      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
    }
    
    return positions
  }, [count])
  
  // Create sizes for particles (some larger, some smaller)
  
  // Animation - rotate particles and respond to mouse
  useFrame((_state, delta) => {
    if (ref.current) {
      // Gentle rotation
      ref.current.rotation.x += delta * 0.01
      ref.current.rotation.y += delta * 0.02
      
      // Move with mouse
      ref.current.position.x += (mouse.x * 2 - ref.current.position.x) * 0.04
      ref.current.position.y += (-mouse.y * 2 - ref.current.position.y) * 0.04
    }
  })
  
  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial 
        transparent
        color="#bbcf64" 
        size={0.1}
        sizeAttenuation={true}
        depthWrite={false}
        vertexColors
      />
    </Points>
  )
}

export default ParticleBackground