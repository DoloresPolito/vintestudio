import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { slideUp, opacity } from "./animation";
import Rounded from "../../common/RoundedButton";
import WorkProgress2 from "../WorkProgress";
import Projects from "../Projects";
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
  const medium = 1200;

  const phrase =
    "Vinte is a professional website design and development studio based in Argentina. We create human experience in a digital world; using the best practices and latest web standards guidelines. The results are digital experiences lovingly hand coded by combining business strategy, identity, UX/UI, and content.";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <>
      <div ref={description} className={styles.description} id="services">
        <div className={styles.body}>
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

          {/* {width > 1000 ? (
            <>
              <div data-scroll data-scroll-speed={0.1}>
                <Rounded className={styles.button}>
                  <p>Know us better</p>
                </Rounded>
              </div>
            </>
          ) : (
            <></>
          )} */}
        </div>
      </div>
      <WorkProgress2 />
      <Projects />
    </>
  );
}
