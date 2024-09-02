"use client";
import styles from "./style.module.scss";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
export default function MovingTitle({ title, svgColor }) {
  const textWrapper = useRef(null);

  useLayoutEffect(() => {
    const textElement = textWrapper.current;

    // Using gsap.matchMedia to handle different animations based on screen size
    const mm = gsap.matchMedia();

    mm.add("(max-width: 600px)", () => {
      gsap.to(textElement, {
        x: "-100%",
        duration: 8, // Speed for screens <= 600px
        repeat: -1,
        ease: "linear",
      });
    });

    mm.add("(max-width: 1000px)", () => {
      gsap.to(textElement, {
        x: "-100%",
        duration: 10, // Speed for screens <= 1000px
        repeat: -1,
        ease: "linear",
      });
    });

    mm.add("(min-width: 1001px)", () => {
      gsap.to(textElement, {
        x: "-100%",
        duration: 23, // Default speed for larger screens
        repeat: -1,
        ease: "linear",
      });
    });

    return () => mm.revert(); // Cleanup function to remove matchMedia listeners
  }, []);

  return (
    <div className={styles.landing}>
      <div className={styles.sliderContainer}>
        <div ref={textWrapper} className={styles.textWrapper}>
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className={styles.textItem}>
              <span>{title}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 134 134"
                fill="none"
              >
                <line
                  x1="68"
                  y1="0"
                  x2="68"
                  y2="39"
                  stroke={
                    svgColor === "background"
                      ? "var(--background)"
                      : "var(--text)"
                  }
                  strokeWidth="2"
                />
                <line
                  x1="68"
                  y1="95"
                  x2="68"
                  y2="134"
                  stroke={
                    svgColor === "background"
                      ? "var(--background)"
                      : "var(--text)"
                  }
                  strokeWidth="2"
                />
                <line
                  x1="134"
                  y1="68"
                  x2="95"
                  y2="68"
                  stroke={
                    svgColor === "background"
                      ? "var(--background)"
                      : "var(--text)"
                  }
                  strokeWidth="2"
                />
                <line
                  x1="39"
                  y1="68"
                  x2="0"
                  y2="68"
                  stroke={
                    svgColor === "background"
                      ? "var(--background)"
                      : "var(--text)"
                  }
                  strokeWidth="2"
                />
                <circle
                  cx="67.1267"
                  cy="67.1267"
                  r="47.1267"
                  stroke={
                    svgColor === "background"
                      ? "var(--background)"
                      : "var(--text)"
                  }
                  strokeWidth="2"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
