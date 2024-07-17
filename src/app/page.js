"use client";
import { useEffect, useState } from "react";
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
import Projects2 from "@/components/Projects2";

import Layout from "../structure/ColorLayout";

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
      }, 2000);
    })();
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

  return (
    <>
      <Layout>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        <TopHeader />
        {/* <Landing /> */}
        <Description />
        <CardsSection />
        <Projects2 />

        {width > 800 ? (
          <>
            {" "}
            <GridScroll />
          </>
        ) : (
          <></>
        )}

        <Contact />
      </Layout>
    </>
  );
}
