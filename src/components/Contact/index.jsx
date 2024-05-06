import styles from "./style.module.scss";
import Rounded from "../../common/RoundedButton";
import { useRef, useState, useEffect } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";
export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);

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
    <motion.div
      style={{ y }}
      ref={container}
      className={styles.contact}
      id="contact"
    >
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
            <StyledLink href="mailto:dolores.polito@gmail.com" target="_blank">
              <Rounded backgroundColor={"#7a8aed"} className={styles.button}>
                <p>Get in touch</p>
              </Rounded>
            </StyledLink>
          </motion.div>
        </div>

        {width > 1000 ? (
          <>
            <div className={styles.nav}>
              <StyledLink
                href="mailto:dolores.polito@gmail.com"
                target="_blank"
              >
                <Rounded>
                  <p>dolores.polito@gmail.com</p>
                </Rounded>
              </StyledLink>
              <StyledLink
                href="https://api.whatsapp.com/send/?phone=543446584076"
                target="_blank"
              >
                <Rounded>
                  <p>+543446584976</p>
                </Rounded>
              </StyledLink>
            </div>
          </>
        ) : (
          <></>
        )}

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

const StyledLink = styled(Link)`
  text-decoration: none;
`;
