import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function PlanetaryBelt({
  count = 500,
  innerRadius = 6,
  outerRadius = 7,
}) {
  const pointsRef = useRef();

  const [positions, colors, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    // Color palette for asteroids
    const colorPalette = [
      new THREE.Color("#8b7355"),
      new THREE.Color("#a0826d"),
      new THREE.Color("#6b5b4f"),
      new THREE.Color("#c4b7a6"),
      new THREE.Color("#8b8682"),
      new THREE.Color("#9c8b7a"),
    ];

    for (let i = 0; i < count; i++) {
      // Random radius between inner and outer
      const radius = innerRadius + Math.random() * (outerRadius - innerRadius);
      const theta = Math.random() * Math.PI * 2;

      // Position on the belt (flat disk)
      positions[i * 3] = radius * Math.cos(theta);
      positions[i * 3 + 1] = (Math.random() - 0.5) * 0.3; // Slight vertical variation
      positions[i * 3 + 2] = radius * Math.sin(theta);

      // Random color from palette
      const color =
        colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      // Random size
      sizes[i] = Math.random() * 0.05 + 0.02;
    }

    return [positions, colors, sizes];
  }, [count, innerRadius, outerRadius]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0003;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
