import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import ParticleBackground from './ParticleBackground'
import { Suspense } from 'react'

const ThreeScene = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <ParticleBackground />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default ThreeScene