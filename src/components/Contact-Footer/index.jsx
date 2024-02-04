import styles from "./style.module.scss";
import Image from "next/image";
import Rounded from "../../common/RoundedButton";
import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import Magnetic from "../../common/Magnetic";
import Time from "../../common/Time/Time";

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-400, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <motion.div style={{ y }} ref={container} className={styles.contact}>
      <div className={styles.body}>
        <div className={styles.title}>
          <span>
            {/* <div className={styles.imageContainer}>
                            <Image 
                            fill={true}
                            alt={"image"}
                            src={`/images/self.jpeg`}
                            />
                        </div> */}
            <h2>Let's talk.</h2>
          </span>
          {/* <h2>together.</h2> */}
          <motion.div style={{ x }} className={styles.buttonContainer}>
            <Rounded
              backgroundColor={"rgb(109, 109, 95)"}
              className={styles.button}
            >
              <p>Get in touch</p>
            </Rounded>
          </motion.div>
        </div>
        <div className={styles.nav}>
          <Rounded>
            <p>m1mandle1@gmail.com</p>
          </Rounded>
          <Rounded>
            <p>+1 (770) 262-8126</p>
          </Rounded>
        </div>
        <div className={styles.info}>
          <div>
            <span>
              <h3>Version</h3>
              <p>2024 © Edition</p>
            </span>
            <span>{/* <Time /> */}</span>
          </div>
          <div>
            <span>
              <h3>socials</h3>
              <Magnetic>
                <p>LinkedIn</p>
              </Magnetic>
            </span>
            <Magnetic>
              <p>Indeed</p>
            </Magnetic>
            <Magnetic>
              <p>Resume</p>
            </Magnetic>
            <Magnetic>
              <p>Dribble</p>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
