"use client";
import styles from "./style.module.scss";
import { slideUp, opacity, slideUp2 } from "./animation";
import { useInView, motion, useSpring, useScroll,useTransform } from "framer-motion";
import React, { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import AnimatedDiv from "../AnimatedDiv";
import { Link } from "react-scroll";
import styled from "styled-components";
// const Earth = dynamic(() => import("@/components/Earth"), {
//   ssr: false,

//   // loading: () =>
//   // <img src="/assets/placeholder.png"></img>
//   // ,
// });

export default function LandingV2() {
  const phrase = "We are crafters of new generations websites.";
  const home = useRef(null);
  const isInView = useInView(home);

  const paths = useRef([]);

  // Configura la rotación constante
  const rotationSpeed = 2; // Ajusta la velocidad de rotación constante
  const rotate = useSpring(0, {
    stiffness: 140,
    damping: 30,
  });

  // Actualiza la rotación continuamente
  useEffect(() => {
    const updateRotation = () => {
      rotate.set(rotate.get() + rotationSpeed);
      requestAnimationFrame(updateRotation);
    };

    updateRotation();
  }, [rotate]);


  const container = useRef();
  const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <>
      <div className={styles.section} ref={home} id="home">


      <motion.div style={{ y }} className={styles.motionDiv}>


      <motion.div
          variants={slideUp}
          initial="initial"
          animate="enter"
          className={styles.textcontainer}
        >
          <p className={styles.results}>
            The results are digital experiences lovingly hand coded by combining
            business strategy, identity, UX/UI, and content.
          </p>

          <div className={styles.bottombuttons}>
          {/* <Link to="description" spy={true} smooth={true} offset={-100} duration={800}>
            <div className={styles.buttoncontainer}>
              <h6>know us better</h6>
            </div>
            </Link>
            <Link to="projects" spy={true} smooth={true} offset={-100} duration={800}>
            <div className={styles.buttoncontainer}>
              <h6>featured projects</h6>
            </div>
            </Link> */}
          </div>
        </motion.div>    


        <div
        className={styles.circlecontainer}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
          }}
        >
          <motion.svg
          className={styles.circlesvg}
            style={{ rotate: rotate}}
            viewBox="0 0 100 100"
          >
            <path
              fill="none"
              id="circle"
              d="M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0"
            />
            <text className={styles.circletext}>
              {[...Array(1)].map((_, i) => (
                <textPath
                  key={i}
                  ref={(ref) => (paths.current[i] = ref)}
                  startOffset={i * 40 + "%"}
                  href="#circle"
                >
                  crafters of new generation websites :) .
                </textPath>
              ))}
            </text>
          </motion.svg>
        </div>

       
        </motion.div>    </div>
   
    </>
  );
}

{
  /* <motion.div
          className={styles.slider}
          variants={opacity}
          initial="initial"
          animate="enter"
        >
          <h1>We are crafters of new generations websites.</h1>


        </motion.div> */
}

{
  /* 
        <h1 >
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp2}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </h1> */
}
{
  /* <motion.div
          className={styles.earthcontainer}
          variants={opacity}
          initial="initial"
          animate="enter"
        >
          <Earth />
        </motion.div> */
}

// import React, { useRef, useEffect } from "react";
// import { motion, useSpring, useTransform } from "framer-motion";

// export default function Index() {
//   const paths = useRef([]);

//   // Configura la rotación constante
//   const rotationSpeed = 2; // Ajusta la velocidad de rotación constante
//   const rotate = useSpring(0, {
//     stiffness: 300,
//     damping: 30,
//   });

//   // Actualiza la rotación continuamente
//   useEffect(() => {
//     const updateRotation = () => {
//       rotate.set(rotate.get() + rotationSpeed);
//       requestAnimationFrame(updateRotation);
//     };

//     updateRotation();
//   }, [rotate]);

//   return (
// <div
//   style={{
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//   }}
// >
//   <motion.svg
//     style={{ rotate: rotate, width: "400px", height: "400px" }}
//     viewBox="0 0 100 100"
//   >
//     <path
//       fill="none"
//       id="circle"
//       d="M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0"
//     />
//     <text className="text-[2px] uppercase" style={{ fill: "red" }}>
//       {[...Array(1)].map((_, i) => (
//         <textPath
//           key={i}
//           ref={(ref) => (paths.current[i] = ref)}
//           startOffset={i * 40 + "%"}
//           href="#circle"
//         >
//           crafters of new generation - crafters of new generation -
//         </textPath>
//       ))}
//     </text>
//   </motion.svg>
// </div>
//   );
// }
