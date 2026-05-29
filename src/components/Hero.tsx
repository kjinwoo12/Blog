import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { featuredProjectId, hero, site } from '../data/portfolio';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero} aria-label="소개">
      <div className="container">
        <motion.p
          className={styles.greeting}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {hero.greeting}
        </motion.p>

        <motion.h1
          className={styles.headline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          {hero.headline.map((line) => (
            <span key={line} className={styles.headlineLine}>
              {line}
            </span>
          ))}
        </motion.h1>

        <motion.p
          className={styles.role}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {site.title}
          <span className={styles.dot}> · </span>
          {site.tagline}
        </motion.p>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.5 }}
        >
          {hero.description}
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38 }}
        >
          <a href="#projects" className="btn btn-primary">
            {hero.cta.projects}
          </a>
          <Link to={`/project/${featuredProjectId}`} className={styles.detailLink}>
            대표 작업 상세 →
          </Link>
        </motion.div>
      </div>

      <div className={styles.scrollHint} aria-hidden>
        <span />
      </div>
    </section>
  );
}
