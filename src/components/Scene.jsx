import GalaxyBackground from './GalaxyBackground'
import Carousel from './Carousel'

export default function Scene() {
  return (
    <>
      {/* Galaxy Background */}
      <GalaxyBackground starCount={2000} />
      
      {/* Lights */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.6} color="#00d9ff" />
      <pointLight position={[0, 5, 5]} intensity={0.8} color="#ff6b6b" />
      <spotLight position={[0, 10, 0]} intensity={0.5} color="#4ecdc4" />
      
      {/* Circular Carousel */}
      <Carousel cardCount={6} radius={5} />
    </>
  )
}
