"use client";
import styles from "./style.module.scss";
// import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { opacity, background } from "./anim";
import Nav from "./Nav";

import { Link } from "react-scroll";

export default function Index() {
  const [isActive, setIsActive] = useState(false);

  const navdesktop = [
    { id: "1.", title: "HOME", url: "/", href: "home" },
    { id: "2.", title: "PROJECTS", url: "/", href: "projects" },
    { id: "3.", title: "CONTACT", url: "/", href: "contact" },
  ];
  const underlineVariants = {
    initial: {
      width: 0,
    },
    hover: {
      width: "100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className={styles.header}>
      <div className={styles.bar}>
        <Link to="home" spy={true} smooth={true} offset={-100} duration={800}>
          <div className={styles.logocontainer}>
            <div className={styles.header2}>
              <div className={styles.logo}>
                <p className={styles.copyright}>©</p>
                <div className={styles.name}>
                  <p className={styles.codeBy}>Vinte</p>
                  <p className={styles.dennis}>Studio</p>
                  <p className={styles.snellenberg}>Vinte </p>
                  <p className={styles.snellenberg2}> Studio</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={styles.el}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
          <div className={styles.label}>
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              Menu
            </motion.p>
            <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
              Close
            </motion.p>
          </div>
        </div>
        {/* <motion.div className={styles.hoverText} whileHover="hover">
      Hover over this text
      <motion.div className={styles.underline} variants={underlineVariants} />
    </motion.div> */}

        <div>
          <div className={styles.navcontainerdesktop}>
            {navdesktop.map((link, i) => {
              return (
                <>
                  {/* <Link href={link.url} key={i} > */}

                  <Link
                    key={i}
                    to={link.href}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={800}
                  >
                    <motion.div className={styles.navitem} whileHover="hover">
                      <p class="styled-paragraph">
                        <span class="highlighted">{link.id} </span> {link.title}
                      </p>
                      <motion.div
                        className={styles.underline}
                        variants={underlineVariants}
                      />
                    </motion.div>
                  </Link>
                  <div>
                    {" "}
                    <p>/</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className={styles.background}
      ></motion.div>
      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </AnimatePresence>
    </div>
  );
}
