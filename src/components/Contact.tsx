import { site } from '../data/portfolio';
import styles from './Contact.module.css';

export function Contact() {
  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className="container">
        <p className="section-label">Contact</p>
        <h2 className="section-title">연락하기</h2>
        <div className={styles.panel}>
          <p className={styles.lead}>
            프로젝트·협업·채용 관련 문의는 이메일 또는 GitHub으로 보내 주세요.
          </p>
          <div className={styles.links}>
            <a href={`mailto:${site.email}`} className="btn btn-primary">
              {site.email}
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              GitHub
            </a>
            {site.linkedin ? (
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                LinkedIn
              </a>
            ) : null}
            <a
              href={site.notionSource}
              target="_blank"
              rel="noreferrer"
              className={styles.notion}
            >
              Notion 원본 보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
