"use client";
import styles from "./style.module.scss";
import { slideUp, opacity, slideUp2 } from "./animation";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export default function LandingV2() {
  const phrase = "We are crafters of new generations websites.";
  const home = useRef(null);
  const isInView = useInView(home);

  return (
    <>
      <div className={styles.section} ref={home} id="home">
        {/* <motion.div
          className={styles.slider}
          variants={opacity}
          initial="initial"
          animate="enter"
        >
          <h1>We are crafters of new generations websites.</h1>
        </motion.div> */}

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
        </h1>
        <motion.div variants={slideUp} initial="initial" animate="enter">
          <p>
            The results are digital experiences lovingly hand coded by combining
            business strategy, identity, UX/UI, and content.
          </p>
        </motion.div>
      </div>
    </>
  );
}
