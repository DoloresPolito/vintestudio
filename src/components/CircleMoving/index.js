import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

export default function Index() {
  const container = useRef();
  const paths = useRef([]);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  // Animación de rotación lenta continua
  const continuousRotation = useSpring(scrollYProgress, {
    stiffness: 2,  // Controla la velocidad continua
    // damping: 2,
  });

  // Combinar la rotación continua con la velocidad aumentada por scroll
  const rotate = useTransform(
    continuousRotation,
    (value) => value * 360 + scrollYProgress.get() * 120
  );

  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      paths.current.forEach((path, i) => {
        path.setAttribute(
          "startOffset",
          -40 + i * 40 + e * 40 + "%"
        );
      });
    });
  }, [scrollYProgress]);

  return (
    <div
      ref={container}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <motion.svg
        style={{ rotate, width: "400px", height: "400px" }}
        viewBox="0 0 100 100"
      >
        <path
          fill="none"
          id="circle"
          d="M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0"
        />
        <text className="text-[2px] uppercase" style={{ fill: "red" }}>
          {[...Array(1)].map((_, i) => (
            <textPath
              key={i}
              ref={(ref) => (paths.current[i] = ref)}
              startOffset={i * 40 + "%"}
              href="#circle"
            >
              crafters of new generation - crafters of new generation -
            </textPath>
          ))}
        </text>
      </motion.svg>
    </div>
  );
}