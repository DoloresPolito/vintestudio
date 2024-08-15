"use client";
import styles from "./style.module.scss";
import { useRef, useLayoutEffect, useState, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { slideUp } from "./animation";

import AnimatedButton from "../AnimatedButton";

import svgvideo from "../../../public/svgvideo.svg";
import Image from "next/image";

export default function Home() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.04 * direction;
  };

  useLayoutEffect(() => {
    const textElement = slider.current;

    gsap.to(textElement, {
      x: "-100%",
      duration: 25, // Adjust this value to control the speed
      repeat: -1, // Repeat indefinitely
      ease: "linear", // Ensures constant speed
    });
  }, []);

  return (
    <motion.main className={styles.landing}>
      <div className={styles.sliderContainer}>
        <motion.div variants={slideUp} initial="initial" animate="enter">
          <h2>
            Explore our portfolio to gain insights into our diverse projects,
            drawing inspiration for your own architectural aspirations.
          </h2>
        </motion.div>
        {/* <Image src={svgvideo} alt="svg video"/> */}

        <h3>
          Our mission is to Build Dreams by fostering transparent
          collaborations. Explore our services and experience the fusion of
          imagination and structural brilliance
        </h3>
        {/* <AnimatedButton>Hover over me</AnimatedButton> */}
        {/* <AnimatedButton initialText="Hover over me" hoverText="Hovered!" /> */}
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>
            {" "}
            {/* We are <span>crafters</span>  */}
            of new generations websites.
          </p>

          <p ref={secondText}>
            {" "}
            {/* We are <span>crafters</span>  */}
            of new generations websites.{" "}
          </p>
        </div>
      </div>
      <div data-scroll data-scroll-speed={0.1} className={styles.description}>
        <svg
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" />
        </svg>
        <p>Design & Development</p>
      </div>
    </motion.main>
  );
}
