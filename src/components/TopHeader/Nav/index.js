'use client';
import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Footer from './Footer';
import Image from './Image';


const links = [
  {
    title: "Home",
    href: "home",
    src: "decimal.jpg"
  },
  {
    title: "About",
    href: "description",
    src: "background3.png"
  },
  {
    title: "Work Progress",
    href: "work",
    src: "decimal.jpg"
  },
  {
    title: "Projects",
    href: "projects",
    src: "background3.png"
  },
  {
    title: "Contact",
    href: "contact",
    src: "decimal.jpg"
  }
]

export default function Index({setIsActive}) {

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink} setIsActive={setIsActive} />
          <Footer />
        </div>
        <Image src={links[selectedLink.index].src} isActive={selectedLink.isActive} alt="image"/>
      </div>
    </motion.div>
  )
}