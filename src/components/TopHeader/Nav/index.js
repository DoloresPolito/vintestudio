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
    href: "/",
    src: "decimal.jpg"
  },
  {
    title: "Shop",
    href: "/shop",
    src: "background3.png"
  },
  {
    title: "About Us",
    href: "/about",
    src: "decimal.jpg"
  },
  {
    title: "Lookbook",
    href: "/lookbook",
    src: "background3.png"
  },
  {
    title: "Contact",
    href: "/contact",
    src: "decimal.jpg"
  }
]

export default function Index() {

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
          <Footer />
        </div>
        <Image src={links[selectedLink.index].src} isActive={selectedLink.isActive}/>
      </div>
    </motion.div>
  )
}