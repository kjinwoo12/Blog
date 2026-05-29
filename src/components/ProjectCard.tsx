import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../data/portfolio';
import styles from './ProjectCard.module.css';

interface Props {
  project: Project;
  size?: 'default' | 'large';
}

const categoryLabel: Record<Project['category'], string> = {
  professional: 'Professional Projects',
  personal: 'Personal work',
  web: 'Personal work',
};

export function ProjectCard({ project, size = 'default' }: Props) {
  return (
    <Link
      to={`/project/${project.id}`}
      className={`${styles.card} ${size === 'large' ? styles.large : ''}`}
      style={{ '--accent': project.accent } as CSSProperties}
    >
      <div className={styles.glow} aria-hidden />
      <span className={styles.category}>{categoryLabel[project.category]}</span>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.subtitle}>{project.subtitle}</p>
      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <p className={styles.summary}>{project.summary}</p>
      <span className={styles.more}>자세히 보기 →</span>
    </Link>
  );
}
