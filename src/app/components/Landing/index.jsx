'use client'
import Image from 'next/image'
import styles from './style.module.scss'
import { useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { slideUp } from './animation';
import { motion } from 'framer-motion';

import Description from "../Description";

export default function Home() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const directionRef = useRef(-1);
  const xPercent = useRef(0);

  const animate = useCallback(() => {
    if (xPercent.current < -100) {
      xPercent.current = 0;
    } else if (xPercent.current > 0) {
      xPercent.current = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent.current });
    gsap.set(secondText.current, { xPercent: xPercent.current });
    requestAnimationFrame(animate);
    xPercent.current += .075 * directionRef.current;
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: .25,
        start: 0,
        end: window.innerHeight + 600,
        onUpdate: (e) => {
          directionRef.current = e.direction * -1;
        },
      },
      x: '-300px',
    });
    requestAnimationFrame(animate);
  }, [animate]);

  return (
    <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.landing}>
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Website Developer -</p>
          <p ref={secondText}>Website Developer -</p>
        </div>
      </div>

      <div className={styles.descriptionContainer}>
        <Description />
      </div>
    </motion.main>
  );
}
