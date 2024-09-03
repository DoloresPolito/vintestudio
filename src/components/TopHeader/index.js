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
                <p className={styles.copyright}> <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Group 9">
                      <path
                        id="Vector"
                        d="M1.24979 12.6608L5.20923 5.79118C5.20923 5.79118 5.3265 5.56168 5.27844 5.36943C5.21307 5.10772 4.69255 5.03275 4.69255 5.03275C3.95959 4.90394 1.6641 4.89817 1.26998 5.11469C1.02486 5.24927 0.969346 5.38168 0.810497 5.65708C0.447862 6.2646 0.0294733 7.23019 0.000875837 9.22624C-0.0224347 10.8469 0.422629 12.1057 0.969826 12.8576C0.969586 12.8574 1.07292 12.9872 1.24979 12.6608Z"
                        fill="currentColor"
                      ></path>
                      <path
                        id="Vector_2"
                        d="M2.60976 3.8606L10.5387 3.88535C10.5387 3.88535 10.7963 3.8731 10.9393 3.73588C11.134 3.54915 10.9405 3.06011 10.9405 3.06011C10.6884 2.36007 9.55319 0.364738 9.16964 0.13019C8.93101 -0.0156809 8.7885 0.00186209 8.47081 0.000900833C7.76332 -0.0120762 6.71771 0.104236 4.97086 1.07078C3.55276 1.85541 2.68113 2.8669 2.30024 3.71521C2.30024 3.71497 2.23847 3.86901 2.60976 3.8606Z"
                        fill="currentColor"
                      ></path>
                      <path
                        id="Vector_3"
                        d="M10.8932 0.618507L14.7344 7.55496C14.7344 7.55496 14.8704 7.77389 15.06 7.83205C15.3179 7.91111 15.6507 7.50377 15.6507 7.50377C16.1393 6.94264 17.3288 4.97902 17.3466 4.52988C17.3577 4.25063 17.2731 4.13456 17.119 3.85651C16.7857 3.23241 16.1746 2.37593 14.4797 1.32119C13.1036 0.464706 11.7956 0.196514 10.8692 0.27702C10.8692 0.27702 10.7048 0.298408 10.8932 0.618507Z"
                        fill="currentColor"
                      ></path>
                      <path
                        id="Vector_4"
                        d="M17.7536 6.13495L13.7872 13.0005C13.7872 13.0005 13.6697 13.23 13.7175 13.4223C13.7826 13.684 14.3031 13.7597 14.3031 13.7597C15.0359 13.8892 17.3316 13.8971 17.7257 13.6813C17.9708 13.547 18.0266 13.4146 18.1857 13.1394C18.549 12.5321 18.9681 11.567 18.9989 9.57121C19.0239 7.95053 18.58 6.69128 18.0338 5.93885C18.0338 5.93861 17.9309 5.8086 17.7536 6.13495Z"
                        fill="currentColor"
                      ></path>
                      <path
                        id="Vector_5"
                        d="M16.3849 14.9338L8.45599 14.9009C8.45599 14.9009 8.19837 14.9129 8.05538 15.0499C7.86049 15.2364 8.05346 15.7256 8.05346 15.7256C8.30483 16.4259 9.43816 18.4225 9.82146 18.6575C10.0599 18.8036 10.2024 18.7863 10.5203 18.7875C11.2278 18.8012 12.2736 18.6858 14.0212 17.7212C15.4403 16.938 16.3128 15.9275 16.6945 15.0797C16.6945 15.0797 16.7562 14.9256 16.3849 14.9338Z"
                        fill="currentColor"
                      ></path>
                      <path
                        id="Vector_6"
                        d="M8.09783 18.1676L4.26361 11.2273C4.26361 11.2273 4.12783 11.0081 3.93822 10.9499C3.68036 10.8706 3.34704 11.2775 3.34704 11.2775C2.858 11.8382 1.66652 13.8006 1.64802 14.2497C1.63648 14.529 1.72107 14.645 1.87487 14.9233C2.20747 15.5479 2.81787 16.4049 4.51161 17.4613C5.88693 18.319 7.19449 18.5886 8.1209 18.5088C8.12139 18.5091 8.286 18.4879 8.09783 18.1676Z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg></p>
                {/* <div className={styles.name}>
                  <p className={styles.codeBy}>Vinte</p>
                  <p className={styles.dennis}>Studio</p>
                  <p className={styles.snellenberg}>Vinte </p>
                  <p className={styles.snellenberg2}> Studio</p>
                </div> */}
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
