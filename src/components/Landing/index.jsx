"use client";
import styles from "./style.module.scss";
import { useRef, useLayoutEffect, useState, useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "../../../node_modules/gsap/ScrollTrigger";
import { slideUp } from "./animation";
import { motion } from "framer-motion";
import useMousePosition from "../../utils/useMousePosition";
import NewHeader from "../NewHeader"
import Image from "next/image";

export default function Home() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  const [width, setWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <motion.main
      variants={slideUp}
      initial="initial"
      animate="enter"
      className={styles.landing}
    >
      {/* <main className={styles.main}>
             
        <NewHeader />
        <motion.div
          className={styles.mask}
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
          <p
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
       We use the latest technologies and create incredible responsive websites, adapted to any size of screen. 
          </p>
        </motion.div>

        <div className={styles.body}>
          <p>

          We are <span>crafters</span> of new generations websites.
     
          </p>
        </div>
      </main> */}
     <NewHeader />
      <Image src={width > 800 ? "/images/background5.png" : "/images/background-mobile.png"} fill={true} alt="background" />
      <div className={styles.sliderContainer}>

      <div ref={slider} className={styles.slider}>
          <p ref={firstText}>  We are <span>crafters</span> of new generations websites.</p>
          <p ref={secondText}>  We are <span>crafters</span> of new generations websites. </p>
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
          <path
            d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
            fill="#ec4e39"
          />
        </svg>
        <p>Design & Development</p>
      </div>
    </motion.main>
  );
}
