import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { slideUp } from "./animation";

export default function Index() {
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

  const phrase =
    "Vinte is a professional website design and development studio based in Argentina. We create human experience in a digital world; using the best practices and latest web standards guidelines.";
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <>
      <div ref={description} className={styles.description} id="description">
        <div className={styles.body}>
          {/* <span>who we are</span>
          <p>
            Vinte is a professional website design and development studio based
            in Argentina. We create human experience in a digital world; using
            the best practices and latest web standards guidelines.
          </p> */}

          <p class="styled-paragraph">
  <span class="highlighted">who we are              </span>      Vinte is a professional website design and development studio based
            in Argentina. We create human experience in a digital world; using
            the best practices and latest web standards guidelines.
</p>

          {/* <div className={styles.left}>
            <h2>WHO WE ARE</h2>
          </div>

          <div className={styles.right}>
            <p>
              {phrase.split(" ").map((word, index) => {
                return (
                  <span key={index} className={styles.mask}>
                    <motion.span
                      variants={slideUp}
                      custom={index}
                      animate={isInView ? "open" : "closed"}
                      key={index}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
}
