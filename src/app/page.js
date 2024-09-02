"use client";

import { AnimatePresence } from "framer-motion";
import Preloader from "../components/Preloader";
import LandingV2 from "../components/LandingV2";
import Description from "../components/Description";
// import SlidingImages from "../components/SlidingImages";
import Contact from "../components/Contact";
import GridScroll from "../components/GridScroll";
import "./page.module.scss";
import TopHeader from "../components/TopHeader";
import CardsSection from "@/components/CardsSection";
import ProjectsV2 from "@/components/ProjectsV2";
import { useEffect, useState } from "react";
import Layout from "../structure/ColorLayout";
import Cursor from "../components/Cursor";
import FooterIndex from "@/components/FooterIndex";
import styles from './page.module.scss'
import dynamic from 'next/dynamic';
import SectionPruebas from "@/components/SectionPruebas"

const Earth = dynamic(() => import('@/components/Earth'), {

  ssr: false,

  loading: () => <img src="/assets/placeholder.png"></img>

})

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
        {width > 600 ? <Cursor /> : <></>}

 



        <AnimatePresence mode="wait">
          {isLoading ? (
            <Preloader key="preloader" />
          ) : (
            <div key="content">
              <TopHeader />
              <LandingV2 />
              <Description />
              <ProjectsV2 />
              <CardsSection />
     
              {width > 800 && <GridScroll />}

{/* <SectionPruebas/> */}
              <Contact />
              <FooterIndex/>
            </div>
          )} 
        </AnimatePresence>
      </Layout>
    </>
  );
}
