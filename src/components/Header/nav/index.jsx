import React, { useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../animation';
import Curve from './Curve';
import Footer from './Footer';

const navItems = [
  {
    title: "Home",
    id: "home",
  },
  {
    title: "Work",
    id: "work",
  },
  {
    title: "About",
    id: "about",
  },
  {
    title: "Contact",
    id: "contact",
  },
];

export default function index() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  const handleNavItemClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setSelectedIndicator(id);
  };

  return (
    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className={styles.menu}
    >
      <div className={styles.body}>
        <div onMouseLeave={() => setSelectedIndicator(pathname)} className={styles.nav}>
          <div className={styles.header}>
            <p>Where to?</p>
          </div>
          {navItems.map(({ title, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavItemClick(id);
              }}
              className={selectedIndicator === id ? styles.active : ""}
            >
              {title}
            </a>
          ))}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  )
}
