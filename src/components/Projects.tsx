import { projects } from '../data/portfolio';
import { ProjectCard } from './ProjectCard';
import styles from './Projects.module.css';

export function Projects() {
  const professional = projects.filter((p) => p.category === 'professional');
  const personal = projects.filter((p) => p.category === 'personal' || p.category === 'web');

  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">작업물</h2>

        {professional.length > 0 && (
          <div className={styles.group}>
            <h3 className={styles.groupTitle}>Professional Projects</h3>
            <div className={styles.grid}>
              {professional.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        )}

        {personal.length > 0 && (
          <div className={styles.group}>
            <h3 className={styles.groupTitle}>Personal work</h3>
            <div className={styles.grid}>
              {personal.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
