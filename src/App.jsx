import { Canvas } from '@react-three/fiber'
import GalaxyBackground from './components/GalaxyBackground'
import Carousel from './components/Carousel'

function App() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-[#0f0f23] via-[#0a0a1a] to-[#0a0a1a]">
      {/* 3D Galaxy Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <GalaxyBackground starCount={2000} />
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
          <pointLight position={[-10, -10, -10]} intensity={0.6} color="#00d9ff" />
          <pointLight position={[0, 5, 5]} intensity={0.8} color="#ff6b6b" />
          <spotLight position={[0, 10, 0]} intensity={0.5} color="#4ecdc4" />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="w-full h-full relative z-10 flex flex-col items-center justify-center min-h-screen">
        <Carousel />
      </div>

    </div>
  )
}

export default App
