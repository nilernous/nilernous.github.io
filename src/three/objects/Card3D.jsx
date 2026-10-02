import { useRef, useState, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Text mesh with word wrapping using canvas
function TextMesh({ text, position, color = '#ffffff', fontSize = 0.15, maxWidth = 2 }) {
  const meshRef = useRef()
  
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    const fontSizePx = 48
    canvas.width = 512
    canvas.height = 256
    
    context.fillStyle = 'transparent'
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.font = `bold ${fontSizePx}px Arial, sans-serif`
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    
    // Word wrapping
    const words = text.split(' ')
    let line = ''
    const lines = []
    const maxWidthPx = maxWidth * (canvas.width / fontSizePx * 0.5)
    
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' '
      const metrics = context.measureText(testLine)
      if (metrics.width > maxWidthPx && n > 0) {
        lines.push(line)
        line = words[n] + ' '
      } else {
        line = testLine
      }
    }
    lines.push(line)
    
    // Draw text
    context.fillStyle = color
    const lineHeight = fontSizePx * 1.2
    const startY = canvas.height / 2 - (lines.length - 1) * lineHeight / 2
    
    lines.forEach((line, i) => {
      context.fillText(line.trim(), canvas.width / 2, startY + i * lineHeight)
    })
    
    const texture = new THREE.CanvasTexture(canvas)
    texture.needsUpdate = true
    return texture
  }, [text, color, maxWidth])
  
  // Update texture when text changes
  useEffect(() => {
    texture.needsUpdate = true
  }, [text, texture])

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[fontSize * 6, fontSize * 4]} />
      <meshBasicMaterial map={texture} transparent side={THREE.DoubleSide} />
    </mesh>
  )
}

export default function Card3D({ 
  position, 
  rotation, 
  frontContent, 
  backContent,
  size = [2.5, 3.5, 0.08],
  onClick 
}) {
  const groupRef = useRef()
  const [isFlipped, setIsFlipped] = useState(false)
  const [hovered, setHovered] = useState(false)

  useFrame((state, delta) => {
    // Smooth flip animation
    const targetRotation = isFlipped ? Math.PI : 0
    groupRef.current.rotation.y += (targetRotation - groupRef.current.rotation.y) * delta * 5
    
    // Gentle floating animation
    groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.05
    
    // Scale on hover
    const targetScale = hovered ? 1.05 : 1
    groupRef.current.scale.x += (targetScale - groupRef.current.scale.x) * delta * 5
    groupRef.current.scale.y += (targetScale - groupRef.current.scale.y) * delta * 5
    groupRef.current.scale.z += (targetScale - groupRef.current.scale.z) * delta * 5
  })

  const handleClick = () => {
    setIsFlipped(!isFlipped)
    onClick?.()
  }

  return (
    <group
      ref={groupRef}
      position={position}
      rotation={rotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={handleClick}
    >
      {/* Card Back (visible when flipped) */}
      <mesh>
        <boxGeometry args={[size[0], size[1], size[2]]} />
        <meshStandardMaterial color="#2d1b4e" metalness={0.3} roughness={0.4} />
      </mesh>
      
      {/* Back Content */}
      <group rotation={[0, Math.PI, 0]} position={[0, 0, 0.02]}>
        {backContent}
      </group>

      {/* Card Front */}
      <mesh position={[0, 0, 0.03]}>
        <boxGeometry args={[size[0] - 0.1, size[1] - 0.1, size[2] - 0.02]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.4} roughness={0.3} />
      </mesh>
      
      {/* Front Content */}
      <group position={[0, 0, 0.05]}>
        {frontContent}
      </group>

      {/* Glow effect */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[size[0] + 0.2, size[1] + 0.2, size[2]]} />
        <meshBasicMaterial color={isFlipped ? '#6b5b95' : '#00d9ff'} transparent opacity={0.1} />
      </mesh>
    </group>
  )
}

export { TextMesh }
