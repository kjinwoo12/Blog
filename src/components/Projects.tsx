import { projects } from '../data/portfolio';
import { ProjectCard } from './ProjectCard';
import styles from './Projects.module.css';

export function Projects() {
  if (projects.length === 0) return null;

  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p.id !== featured.id);

  const professional = rest.filter((p) => p.category === 'professional');
  const personal = rest.filter((p) => p.category === 'personal' || p.category === 'web');

  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">작업물</h2>

        <div className={styles.featured}>
          <h3 className={styles.groupTitle}>Highlighted</h3>
          <ProjectCard project={featured} size="large" />
        </div>

        {professional.length > 0 && (
          <div className={styles.group}>
            <h3 className={styles.groupTitle}>Professional</h3>
            <div className={styles.grid}>
              {professional.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        )}

        {personal.length > 0 && (
          <div className={styles.group}>
            <h3 className={styles.groupTitle}>Personal & Web</h3>
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
