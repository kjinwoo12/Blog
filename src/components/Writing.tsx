import { motion } from 'framer-motion';
import { blogPosts } from '../data/portfolio';
import styles from './Writing.module.css';

export function Writing() {
  if (blogPosts.length === 0) return null;

  return (
    <section id="writing" className={`section ${styles.section}`}>
      <div className="container">
        <p className="section-label">Writing</p>
        <h2 className="section-title">기술 글 & 노트</h2>
        <p className={styles.intro}>
          Unreal Tech Blog·nullbus 스타일 — 문제 정의, 접근, 결과 순으로 정리한 글 목록입니다.
        </p>
        <ul className={styles.list}>
          {blogPosts.map((post, i) => (
            <motion.li
              key={post.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <a
                href={post.href}
                target={post.href.startsWith('http') ? '_blank' : undefined}
                rel={post.href.startsWith('http') ? 'noreferrer' : undefined}
                className={styles.article}
              >
                <div className={styles.meta}>
                  <time dateTime={post.date}>{post.date}</time>
                  <span>{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className={styles.tags}>
                  {post.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
