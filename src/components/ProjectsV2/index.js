"use client";
import styles from "./style.module.scss";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MovingTitle from "../MovingTitle";

const projects = [
  {
    title: "N1U",
    src: "/work/n1u.2.png",
    color: "#706D63",
    link: "https://n1u.app/",
  },


  //   {
  //     title: "SUKHA TENTS",
  //     src: "sukha.png",
  //     color: "#706D63",
  //     link: "https://sukhanew.vercel.app/",
  //   },
  {
    title: "INES MIGUENS PHOTO",
    src: "/work/ines.1.png",
    color: "black",
    link: "https://inesmiguens.vercel.app/",
  },
  {
    title: "KOIBANX",
    src: "/work/koi.4.png",
    color: "#8C8C8C",
    link: "https://koibanx.com/",
  },
 
 
];

export default function ProjectsV2() {
  return (
    <>
      <div className={styles.section}>
        <MovingTitle title="FEATURED PROJECTS" />

        <div className={styles.projectscontainer}>
          {projects.map((project, i) => {
            return <Item key={i} project={project} />;
          })}
        </div>
      </div>
    </>
  );
}

const Item = ({ project }) => {
  return (
    <>
      <div className={styles.project} id="projects">
        <div className={styles.imagecontainer}>
          <Image
            src={project.src}
            alt="project image"
            width={460}
            height={300}
            // fill
          />
  
        </div>
        <div className={styles.textcontainer}>
        <h4 >{project.title}</h4>
        <p>Development</p>
        </div>
   
      </div>
    </>
  );
};
