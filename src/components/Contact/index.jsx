import styles from "./style.module.scss";
import Rounded from "../../common/RoundedButton";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);


  return (
    <motion.div style={{ y }} ref={container} className={styles.contact}>
      <div className={styles.body}>
        <div className={styles.title}>
          <h2>
            Lets work <span> together </span>
          </h2>

          <p>
            Feel free to send us an e-mail with any question. Wed love to be
            part of your project.
          </p>
          <motion.div style={{ x }} className={styles.buttonContainer}>
            <Rounded backgroundColor={"#334BD3"} className={styles.button}>
              <p>Get in touch</p>
            </Rounded>
          </motion.div>
        </div>
        <div className={styles.nav}>
          <Rounded>
            <p>vintestudio@gmail.com</p>
          </Rounded>
          <Rounded>
            <p>+543446584976</p>
          </Rounded>
        </div>
        <div className={styles.info}>
          <div>
            <span>
          
              <p>2024 © vinte studio | All rights reserved</p>
            </span>
           
          </div>
         
        </div>
      </div>
    </motion.div>
  );
}
