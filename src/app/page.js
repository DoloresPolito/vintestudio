"use client";

import { AnimatePresence } from "framer-motion";
import Preloader from "../components/Preloader";
import Landing from "../components/Landing";
import Description from "../components/Description";
// import SlidingImages from "../components/SlidingImages";
import Contact from "../components/Contact";
import GridScroll from "../components/GridScroll";
import "./page.module.scss";
import TopHeader from "../components/TopHeader";
import CardsSection from "@/components/CardsSection";
import Projects from "@/components/Projects";
import { useEffect, useState } from "react";
import Layout from "../structure/ColorLayout";
import Cursor from "../components/Cursor";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 500);
    })();
  }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //     document.body.style.cursor = 'default';
  //     window.scrollTo(0, 0);
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, []);

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
    <>
      <Layout>
        {width > 600 ?      <Cursor/> : <></>}
   
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Preloader key="preloader" />
          ) : (
            <div key="content">
      
              <TopHeader />
              {/* <Landing /> */}
              <Description />
              <CardsSection />
              <Projects />
              {width > 800 &&
                <GridScroll />
               }
              
              <Contact />
            </div>
          )}
        </AnimatePresence>
      </Layout>
    </>
  );
}
