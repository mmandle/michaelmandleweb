import styles from "./style.module.scss";
import Magnetic from "../../../../../common/Magnetic";

export default function index() {
  const Resume = "2024.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.footer}>
      <div>
        <Magnetic>
          <a
            href="https://www.linkedin.com/in/michael-mandle-2b04751b4/"
            target="_blank">
            LinkedIn
          </a>
        </Magnetic>

        <Magnetic>
          <a
            href="https://profile.indeed.com/?hl=en_US&co=US&from=gnav-homepage&_ga=2.79344148.1497318481.1707660312-1835322286.1707660312"
            target="_blank">
            Indeed
          </a>
        </Magnetic>
        <Magnetic>
          <a href={Resume} onClick={handleDownload} target="_blank">
            Resume
          </a>
        </Magnetic>
        <Magnetic>
          <a href="https://usajobs.com/" target="_blank">
            USAJobs
          </a>
        </Magnetic>
      </div>
    </div>
  );
}
