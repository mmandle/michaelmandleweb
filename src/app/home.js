'use client';
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Preloader from './components/Preloader';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Description from './components/Description';
import SlidingImages from './components/SlidingImages';
import Contact from './components/Contact-Footer';
import Mockup from './components/Mockup';
import Cursor from '@/common/Cursor/Cursor';

import Parallax from './components/Parallax'


export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])

  return (
    <main className={styles.main}>
      {/* <Cursor /> */}
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Parallax />
      <Landing />
      <Mockup />
      <Projects />
      <SlidingImages />
      <Contact />
    </main>
  )
}