import { motion } from 'framer-motion';
import { skillGroups } from '../data/portfolio';
import styles from './Skills.module.css';

export function Skills() {
  return (
    <section id="skills" className={`section ${styles.section}`}>
      <div className="container">
        <p className="section-label">Skills</p>
        <h2 className="section-title">기술 스택</h2>
        <div className={styles.grid}>
          {skillGroups.map((group, i) => (
            <motion.article
              key={group.label}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
            >
              <h3 className={styles.label}>{group.label}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
