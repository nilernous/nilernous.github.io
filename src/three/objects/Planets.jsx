import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Solar System inspired planet data
const solarSystemPlanets = [
  { name: "Mercury", color: "#b5b5b5", size: 0.2, distance: 2.5, speed: 0.02 },
  { name: "Venus", color: "#e6c229", size: 0.35, distance: 3.5, speed: 0.015 },
  { name: "Earth", color: "#4a90d9", size: 0.38, distance: 4.5, speed: 0.012 },
  { name: "Mars", color: "#d4652f", size: 0.25, distance: 5.5, speed: 0.01 },
  { name: "Jupiter", color: "#d4a574", size: 0.8, distance: 7.5, speed: 0.006 },
  {
    name: "Saturn",
    color: "#f4d58d",
    size: 0.7,
    distance: 9.5,
    speed: 0.004,
    hasRing: true,
  },
  { name: "Uranus", color: "#7dd3c0", size: 0.5, distance: 11.5, speed: 0.003 },
  {
    name: "Neptune",
    color: "#4b70dd",
    size: 0.48,
    distance: 13.5,
    speed: 0.002,
  },
];

// Random generated planets
const generateRandomPlanets = (count = 5) => {
  const planets = [];
  const colors = [
    "#ff6b6b",
    "#4ecdc4",
    "#ffe66d",
    "#a855f7",
    "#00d9ff",
    "#f472b6",
    "#34d399",
  ];

  for (let i = 0; i < count; i++) {
    planets.push({
      name: `Planet ${i + 1}`,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 0.4 + 0.2,
      distance: Math.random() * 4 + 14.5, // Beyond Neptune
      speed: Math.random() * 0.002 + 0.001,
      isRandom: true,
    });
  }

  return planets;
};

function Planet({ color, size, distance, speed, hasRing = false, angle = 0 }) {
  const meshRef = useRef();
  const ringRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const currentAngle = angle + time * speed;

    if (meshRef.current) {
      meshRef.current.position.x = Math.cos(currentAngle) * distance;
      meshRef.current.position.z = Math.sin(currentAngle) * distance;
      meshRef.current.rotation.y += 0.005;
    }

    if (ringRef.current && hasRing) {
      ringRef.current.rotation.x = Math.PI / 2.5;
      ringRef.current.rotation.y = currentAngle;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} roughness={0.7} metalness={0.3} />

        {/* Saturn-like ring */}
        {hasRing && (
          <mesh ref={ringRef} rotation={[Math.PI / 2.5, 0, 0]}>
            <ringGeometry args={[size * 1.4, size * 2.2, 64]} />
            <meshStandardMaterial
              color="#c9b896"
              side={THREE.DoubleSide}
              transparent
              opacity={0.7}
            />
          </mesh>
        )}
      </mesh>
    </group>
  );
}

export default function Planets() {
  const allPlanets = useRef(generateRandomPlanets(5)).current;

  return (
    <>
      {/* Solar System inspired planets */}
      {solarSystemPlanets.map((planet, index) => (
        <Planet
          key={planet.name}
          color={planet.color}
          size={planet.size}
          distance={planet.distance}
          speed={planet.speed}
          hasRing={planet.hasRing}
          angle={(index * Math.PI * 2) / solarSystemPlanets.length}
        />
      ))}

      {/* Random generated planets */}
      {allPlanets.map((planet, index) => (
        <Planet
          key={planet.name}
          color={planet.color}
          size={planet.size}
          distance={planet.distance}
          speed={planet.speed}
          angle={(index * Math.PI * 2) / allPlanets.length}
        />
      ))}
    </>
  );
}
