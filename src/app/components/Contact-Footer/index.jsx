import styles from "./style.module.scss";
import Image from "next/image";
import Rounded from "../../../common/RoundedButton";
import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import Magnetic from "../../../common/Magnetic";

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-400, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  const Resume = "2024.pdf";

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div style={{ y }} ref={container} className={styles.contact}>
      <div className={styles.body}>
        <div className={styles.title}>
          <span>
            <h2>Lets talk.</h2>
          </span>
          {/* <h2>together.</h2> */}
          <motion.div id="contact" style={{ x }} className={styles.buttonContainer}>
            <Rounded
              backgroundColor={"rgb(109, 109, 95)"}
              className={styles.button}>
              <a href="mailto:m1mandle1@gmail.com">
                <p>Get in touch</p>
              </a>
            </Rounded>
          </motion.div>
        </div>
        <div className={styles.nav}>
          <Rounded>
            <a href="mailto:m1mandle1@gmail.com">
              <p>m1mandle1@gmail.com</p>
            </a>
          </Rounded>
          <Rounded>
            <a href="tel:+17702628126">
              <p>+1 (770) 262-8126</p>
            </a>
          </Rounded>
        </div>
        <div className={styles.info}>
          <div>
            <span>
              <h3>Version</h3>
              <p>2024 © Edition</p>
            </span>
          </div>
          <div>
            <span>
              <h3>socials</h3>
              <Magnetic>
                <a href="https://www.linkedin.com/in/michael-mandle-2b04751b4/" target="_blank">LinkedIn</a>
              </Magnetic>
            </span>
            <Magnetic>
              <a href="https://profile.indeed.com/?hl=en_US&co=US&from=gnav-homepage&_ga=2.79344148.1497318481.1707660312-1835322286.1707660312" target="_blank">Indeed</a>
            </Magnetic>
            <Magnetic>
              <a href={Resume} onClick={handleDownload} target="_blank">Resume</a>
            </Magnetic>
            <Magnetic>
              <a href="https://usajobs.com/" target="_blank">USAJobs</a>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
