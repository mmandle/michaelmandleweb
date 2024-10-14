import Parallax from "./parallax/parallax";
import styles from './style.module.scss';

export default function Index() {
  return (
    <main id="home" className="main">
      <Parallax />
      <div className={styles.main_container}>
      </div>
    </main>
  );
}