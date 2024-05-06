"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Nav from "./nav";
import gsap from "gsap";
import { ScrollTrigger } from "../../../node_modules/gsap/ScrollTrigger";
import Rounded from "../../common/RoundedButton";
import Magnetic from "../../common/Magnetic";
import { Link } from "react-scroll";
import logo from "../../../public/vintestudio.svg";
import Image from "next/image";

export default function Index() {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(
            button.current,
            { scale: 0, duration: 0.25, ease: "power1.out" },
            setIsActive(false)
          );
        },
      },
    });
  }, []);

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

  return (
    <>
      {width > medium ? (
        <>
          <div ref={header} className={styles.header}>
            <div className={styles.logo}>
              <Image
                src={logo}
                alt="logo"
                style={{ height: "32px", width: "350px" }}
              />
            </div>
            <div className={styles.nav}>
              <Magnetic>
                <div className={styles.el}>
                  <Link
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration={800}
                  >
                    <p>services</p>
                  </Link>
                  <div className={styles.indicator}></div>
                </div>
              </Magnetic>
              <Magnetic>
                <div className={styles.el}>
                  <Link
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={10}
                    duration={800}
                  >
                    <p>work</p>
                  </Link>
                  <div className={styles.indicator}></div>
                </div>
              </Magnetic>
              <Magnetic>
                <div className={styles.el}>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={250}
                    duration={800}
                  >
                    <p>contact</p>
                  </Link>
                  <div className={styles.indicator}></div>
                </div>
              </Magnetic>
             
            </div>
          </div>
          <div ref={button} className={styles.headerButtonContainer}>
            <Rounded
              onClick={() => {
                setIsActive(!isActive);
              }}
              className={`${styles.button}`}
            >
              <div
                className={`${styles.burger} ${
                  isActive ? styles.burgerActive : ""
                }`}
              ></div>
            </Rounded>
          </div>
          <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
        </>
      ) : (
        <>
          <>
            <div ref={header} className={styles.header}>
              <div className={styles.headercontainer}>
              <div className={styles.logo}>
              <Image
                src={logo}
                alt="logo"
                style={{ height: "20px", width: "250px" }}
              />
            </div>

                <div ref={button} className={styles.headerButtonContainerMobile}>
                  <Rounded
                    onClick={() => {
                      setIsActive(!isActive);
                    }}
                    className={`${styles.button}`}
                  >
                    <div
                      className={`${styles.burger} ${
                        isActive ? styles.burgerActive : ""
                      }`}
                    ></div>
                  </Rounded>
                </div>
                <AnimatePresence mode="wait">
                  {isActive && <Nav />}
                </AnimatePresence>
              </div>
            </div>
          </>
        </>
      )}
    </>
  );
}
