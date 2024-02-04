import Image from "next/image";
import styles from "./style.module.scss";

export default function index() {

  return (
    <div id="work" className={styles.main}>

      <div className={styles.content}>
        <Image
        
          className={styles.img}
          src={`/images/comp.png`}
          width={1000}
          height={600}
          alt="image"
          draggable="false"
        />
        <div className={styles.text}>
          <div className={styles.h3Inline}>
            <h3 className={styles.h3}> <span>2023</span><span> HTML - CSS - JSX </span></h3>
          </div>
          <h2 className={styles.h2}>OMNI ATHLETICS</h2>
          <h4 className={styles.h4}>WEBDESIGN - FRONTEND DEVELOPMENT</h4>
        </div>
      </div>
    </div>
  );
}
