"use client";
import styles from "./style.module.scss";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

export default function MovingTitle({ title }) {
  const textWrapper = useRef(null);

  useLayoutEffect(() => {
    const textElement = textWrapper.current;

    gsap.to(textElement, {
      x: "-100%",
      duration: 8, // Adjust this value to control the speed
      repeat: -1, // Repeat indefinitely
      ease: "linear", // Ensures constant speed
    });
  }, []);

  return (
    <div className={styles.landing}>
      <div className={styles.sliderContainer}>
        <div ref={textWrapper} className={styles.textWrapper}>
          {Array.from({ length: 10 }).map((_, index) => (
            <p key={index}>
              {title}
              <span className={styles.dot}></span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}