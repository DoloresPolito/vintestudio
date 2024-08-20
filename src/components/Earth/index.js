"use client";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { motion } from "framer-motion-3d";

function RotatingEarth() {
  const meshRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const [color, normal, aoMap] = useLoader(TextureLoader, [
    "/assets/color.jpg",
    "/assets/normal.png",
    "/assets/occlusion.jpg",
  ]);

  useFrame((state, delta) => {
    const baseSpeed = 0.1;
    const scrollSpeed = scrollYProgress.get() * 15;
    const rotationSpeed = baseSpeed + scrollSpeed;
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed * delta;
    }
  });

  return (
    <motion.mesh ref={meshRef} scale={2.5}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="var(--text)"
        opacity={0.8} 
        transparent={true}
        roughness={0.5}
        metalness={0.7}
        map={color}
        normalMap={normal}
        aoMap={aoMap}
      />
    </motion.mesh>
  );
}

export default function Earth() {
  return (
    <Canvas orthographic camera={{ position: [0, 0, 200], zoom: 100 }}>
      <ambientLight intensity={0.1} />
      <directionalLight intensity={3.5} position={[1, 0, -0.25]} />
      <RotatingEarth />
    </Canvas>
  );
}

// export default function Earth() {
//     const scene = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: scene,
//         offset: ['start end', 'end start']
//     });

//     const [color, normal, aoMap] = useLoader(TextureLoader, [
//         '/assets/color.jpg',
//         '/assets/normal.png',
//         '/assets/occlusion.jpg'
//     ]);

//     return (
//         <Canvas ref={scene} orthographic camera={{ position: [0, 0, 200], zoom: 100 }}>
//             <ambientLight intensity={0.1} />
//             <directionalLight intensity={3.5} position={[1, 0, -.25]} />

//             {/* Esfera interna para el fondo */}
//             <motion.mesh scale={2.6} rotation-y={scrollYProgress}>
//                 <sphereGeometry args={[1, 64, 64]} />
//                 <meshStandardMaterial
//                     color="#ff69b4"  // Color de fondo de la esfera
//                     opacity={0.8}  // Opacidad para un efecto más sutil
//                     transparent={true}
//                     roughness={0.5}
//                     metalness={0.1}
//                     map={color}
//                     normalMap={normal}
//                     aoMap={aoMap}
//                 />
//             </motion.mesh>
//         </Canvas>
//     );
// }
