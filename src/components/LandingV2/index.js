"use client";
import styles from "./style.module.scss";
import { slideUp } from "./animation";
import { motion } from "framer-motion";

export default function LandingV2() {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.slider}>
          <h1>We are crafters of new generations websites.</h1>
        </div>
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
