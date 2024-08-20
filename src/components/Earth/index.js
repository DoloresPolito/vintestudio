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
    const baseSpeed = 0.1
    const scrollSpeed = scrollYProgress.get() * 2;
    const rotationSpeed = baseSpeed + scrollSpeed;

    if (meshRef.current) {
      // Rotación en el eje Y
      meshRef.current.rotation.y += rotationSpeed * delta;

      // Movimiento en el eje Y (hacia arriba y hacia abajo)
      const scrollY = scrollYProgress.get() * -30; // Ajusta este valor para controlar la velocidad del desplazamiento hacia abajo
      meshRef.current.position.y = scrollY;
      meshRef.current.position.x = scrollY;

    }
  });

  return (
    <motion.mesh ref={meshRef} scale={4.5}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#ffffff"
        opacity={0.8} 
        transparent={true}

        roughness={0.3} // Reduce la rugosidad para reflejar más luz
        metalness={0.1} //
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
    {/* Incrementa la intensidad de la luz ambiental */}
    <ambientLight intensity={0.5} /> 
    
    {/* Ajusta la luz direccional */}
    <directionalLight 
      intensity={5} // Incrementa la intensidad
      position={[2, 2, -1]} // Cambia la posición para iluminar desde otro ángulo
    />
    
    {/* Renderiza la esfera con materiales más claros */}
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
