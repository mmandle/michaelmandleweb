import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { menuSlide } from '../animation';
import Curve from './Curve';
import Footer from './Footer';

const navItems = [
  {
    title: "Home",
    href: "/", // Home page
  },
  {
    title: "Work",
    href: "/work", // Work page
  },
  {
    title: "About",
    href: "/about", // About page
  },
  {
    title: "Contact",
    href: "/contact", // Contact page
  },
];

export default function Navigation() {
  const router = useRouter(); // Use Next.js router
  const [selectedIndicator, setSelectedIndicator] = useState("/");

  const handleNavItemClick = (href) => {
    router.push(href); // Navigate to the selected page
    setSelectedIndicator(href);
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
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Where to?</p>
          </div>
          {navItems.map(({ title, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                handleNavItemClick(href); // Navigate using Next.js router
              }}
              className={selectedIndicator === href ? styles.active : ""}
            >
              {title}
            </a>
          ))}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
