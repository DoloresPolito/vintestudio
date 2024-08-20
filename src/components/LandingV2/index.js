"use client";
import styles from "./style.module.scss";
import { slideUp, opacity, slideUp2 } from "./animation";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import dynamic from "next/dynamic";
import AnimatedDiv from "../AnimatedDiv";

const Earth = dynamic(() => import("@/components/Earth"), {
  ssr: false,

  // loading: () =>
  // <img src="/assets/placeholder.png"></img>
  // ,
});

export default function LandingV2() {
  const phrase = "We are crafters of new generations websites.";
  const home = useRef(null);
  const isInView = useInView(home);

  return (
    <>
      <div className={styles.section} ref={home} id="home">
        <motion.div
          className={styles.slider}
          variants={opacity}
          initial="initial"
          animate="enter"
        >
          <h1>We are crafters of new generations websites.</h1>

          {/* <p>
            The results are digital experiences lovingly hand coded by combining
            business strategy, identity, UX/UI, and content.
          </p> */}
        </motion.div>
        {/* 
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
        </h1> */}
        <motion.div
          className={styles.earthcontainer}
          variants={opacity}
          initial="initial"
          animate="enter"
        >
          <Earth />
        </motion.div>
        <motion.div variants={slideUp} initial="initial" animate="enter"    className={styles.textcontainer}>
          <p className={styles.results}>
            The results are digital experiences lovingly hand coded by combining
            business strategy, identity, UX/UI, and content.
          </p>

          <div id="description" className={styles.description}>
            <AnimatedDiv>
              <p class="styled-paragraph">
                <span class="highlighted">who we are </span> Vinte is a
                professional website design and development studio based in
                Argentina. We create human experience in a digital world; using
                the best practices and latest web standards guidelines.
              </p>
            </AnimatedDiv>
          </div>
        </motion.div>
      </div>
    </>
  );
}
