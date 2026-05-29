import type { CSSProperties } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PhotoCarousel } from '../components/PhotoCarousel';
import { projects } from '../data/portfolio';
import styles from './ProjectPage.module.css';

export function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className={`container ${styles.wrap}`}>
        <p>프로젝트를 찾을 수 없습니다.</p>
        <Link to="/">← 홈으로</Link>
      </div>
    );
  }

  return (
    <article
      className={styles.page}
      style={{ '--accent': project.accent } as CSSProperties}
    >
      <div className={`container ${styles.wrap}`}>
        <Link to="/#projects" className={styles.back}>
          ← 프로젝트 목록
        </Link>

        <header className={styles.header}>
          <p className={styles.eyebrow}>{project.subtitle}</p>
          <h1>{project.title}</h1>
          <div className={styles.meta}>
            {project.role && <span>{project.role}</span>}
            {project.period && <span>{project.period}</span>}
          </div>
          <div className={styles.tags}>
            {project.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </header>

        <section className={styles.block}>
          <h2>Overview</h2>
          <p>{project.summary}</p>
        </section>

        {project.videoEmbedUrl && (
          <section className={styles.block}>
            <h2>Video</h2>
            <div className={styles.videoEmbed}>
              <iframe
                src={project.videoEmbedUrl}
                title={`${project.title} 영상`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </section>
        )}

        {project.images && project.images.length > 0 && (
          <section className={styles.block}>
            <h2>Photos</h2>
            <PhotoCarousel images={project.images} />
          </section>
        )}

        <section className={styles.block}>
          <h2>Contributions</h2>
          <ul>
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {project.detailSections && project.detailSections.length > 0 && (
          <section className={styles.block}>
            <h2>자세한 설명</h2>
            <div className={styles.details}>
                {project.detailSections.map((section) => (
                  <details key={section.title} className={styles.detail}>
                    <summary>{section.title}</summary>
                    <div className={styles.detailBody}>
                      {section.paragraphs.map((paragraph, index) => (
                        <p key={`${section.title}-${index}`}>{paragraph}</p>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
          </section>
        )}

        {project.links && project.links.length > 0 && (
          <section className={styles.block}>
            <h2>Links</h2>
            <ul className={styles.links}>
              {project.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </article>
  );
}
