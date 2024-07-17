"use client";

import Double from "@/components/Double";

import { projects } from "../../data2";
import styles from "./style.module.scss";

export default function Projects2() {
  return (
    <>
      <div className={styles.section} id="projects">
        <h1>
    PROJECTS
        </h1>

        <p>
        We use design and technology to create brands and products that
          perform, delight, and scale.
        </p>
        <div
        // className={styles.gallery}
        >
          <Double projects={[projects[0], projects[1]]} />
          <Double projects={[projects[2], projects[3]]} reversed={true} />
          {/* <Double projects={[projects[4], projects[5]]} />
 <Double projects={[projects[6], projects[7]]} reversed={true} /> */}
        </div>
      </div>
    </>
  );
}
