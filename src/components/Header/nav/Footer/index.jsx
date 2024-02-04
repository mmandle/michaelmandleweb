import styles from './style.module.scss';

export default function index() {
  return (
    <div className={styles.footer}>
        <a>LinkedIn</a>
        <a>Indeed</a>
        <a>Resume</a>
        <a>Jobber</a>
    </div>
  )
}