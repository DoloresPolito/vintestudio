"use client";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import MovingTitle from "../MovingTitle";
import Link from "next/link";

const projects = [
  {
    title: "N1U",
    src: "/work/n1u.2.png",
    color: "#706D63",
    link: "https://n1u.app/",
    text:"Development"
  },
  {
    title: "INES MIGUENS PHOTO",
    src: "/work/ines.1.png",
    color: "black",
    link: "https://inesmiguens.vercel.app/",
    text:"Development & Design"
  },
  {
    title: "KOIBANX",
    src: "/work/koi.4.png",
    color: "#8C8C8C",
    link: "https://koibanx.com/",
    text:"Development"
  },
];

export default function ProjectsV2() {
  return (
    <div className={styles.section}>
      <MovingTitle title="FEATURED PROJECTS" />
      <div className={styles.projectscontainer}>
        {projects.map((project, i) => (
          
          <Item key={i} project={project} />
        ))}
      </div>
    </div>
  );
}

const Item = ({ project }) => {
  return (
   
    <div className={styles.project} >
      <motion.div
        className={styles.imagecontainer}
        whileHover={{ scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Image src={project.src} alt="project image" width={460} height={300} />
      </motion.div>
      <div className={styles.textcontainer}>
        <div className={styles.left}>
          <p>{project.text}</p>
          <h4>{project.title}</h4>
        </div>
        <Link href={project.link}>
        <div className={styles.right}>
          <p>view more</p>
        </div>
        </Link>
      </div>
    </div>

  );
};
