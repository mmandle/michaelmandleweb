import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';

const slider1 = [
    {
        color: "#c05a9a",
        src: "FramerLogo.png"
    },
    {
        color: "#404040",
        src: "NextLogo.png"
    },
    {
        color: "#6AA937",
        src: "GSAPLogo.png"
    },
    {
        color: "#404040",
        src: "JavaLogo.png"
    },
]

const slider2 = [
    {
        color: "#404040",
        src: "TailwindLogo.png"
    },
    {
        color: "#123456",
        src: "ReactLogo.png"
    },
    {
        color: "#404040",
        src: "JavascriptLogo.png"
    },
    {
        color: "#c05a9a",
        src: "SCSSWhiteLogo.png"
    }
]

export default function Index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [-100, 150])
    const x2 = useTransform(scrollYProgress, [0, 1], [100, -150])
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

    return (
        <div ref={container} className={styles.slidingImages}>
            {/* <h1 className={styles.tools}>My Tools.</h1>
            <motion.div style={{x: x1}} className={styles.slider}>
                    {
                        slider1.map( (project, index) => {
                            return <div key={index} className={styles.project} style={{backgroundColor: project.color}} >
                                <div className={styles.imageContainer}>
                                    <Image 
                                    fill={true}
                                    alt={"logo"}
                                    draggable={false}
                                    src={`/logos/${project.src}`}
                                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
                                    />
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{x: x2}} className={styles.slider}>
                    {
                        slider2.map( (project, index) => {
                            return <div key={index} className={styles.project} style={{backgroundColor: project.color}} >
                                <div key={index} className={styles.imageContainer}>
                                    <Image 
                                    fill={true}
                                    alt={"logo"}
                                    draggable={false}
                                    src={`/logos/${project.src}`}
                                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
                                    />
                                </div>
                            </div>
                        })
                    }
                </motion.div> */}
                <div className={styles.text}>
                    Want to work together<span className={styles.questionMark}>?</span>
                </div>
                <svg className={styles.svg} width="122" height="100" viewBox="0 0 122 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M111 60L66.8926 78.9513C63.6382 80.3496 58.3618 80.3496 55.1074 78.9513L11 60" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>


                <motion.div style={{height}} className={styles.circleContainer}>
                    <div className={styles.circle}></div>
                </motion.div>
        </div>
    )
}