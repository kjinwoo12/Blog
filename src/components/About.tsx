import { motion } from 'framer-motion';
import { about } from '../data/portfolio';
import { publicUrl } from '../lib/publicUrl';
import styles from './About.module.css';

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-label">About</p>
        <h2 className="section-title">저에 대해</h2>
        <motion.div
          className={styles.layout}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <figure className={styles.photo}>
            <img
              src={publicUrl(about.image.src)}
              alt={about.image.alt}
              width={800}
              height={527}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className={styles.content}>
            {about.paragraphs.map((text) => (
              <p key={text.slice(0, 24)}>{text}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
