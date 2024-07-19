import styles from "./style.module.scss";
// import { useRef, useState, useEffect } from "react";
// import { useScroll, useTransform } from "framer-motion";
import MovingTitle from "../MovingTitle";

export default function Index() {
  // const container = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start end", "end end"],
  // });
  // const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  // const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  return (
    <>
      <div className={styles.section}>
        <MovingTitle title="CONTACT" />

        <h2>LET&apos;S WORK TOGHETER</h2>

        <div className={styles.contentcontainer}>
          <div className={styles.left}>
            <p>vintestudio@gmai.com</p>
            <p>+54 3446 584076</p>
            <p>Linkedin</p>
            <p></p>
          </div>
          <div className={styles.right}>{/* <p>contact form</p> */}</div>
        </div>


        <div className={styles.line}></div>
      </div>
    </>
  );
}
