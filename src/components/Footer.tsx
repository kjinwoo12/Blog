import { site } from '../data/portfolio';
import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>
          © {year} {site.name}. Built with React & Vite.
        </p>
        <a href={site.github} target="_blank" rel="noreferrer" className={styles.link}>
          GitHub
        </a>
      </div>
    </footer>
  );
}
