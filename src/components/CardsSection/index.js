"use client";
import styles from "./style.module.scss";
import { projects } from "../../data";
import Card from "../Cards";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import MovingTitle from "../MovingTitle";
import WorkProgressV2 from "../../components/WorkProgressV2";
export default function CardsSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <>
  
    <main ref={container} className={styles.main} id="work">
    <MovingTitle title="WORK PROGRESS"/>

<WorkProgressV2/>
      {/* {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.02;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })} */}
    </main>
    </>
  );
}
