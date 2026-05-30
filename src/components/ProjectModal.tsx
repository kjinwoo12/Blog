import { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { projects } from '../data/portfolio';
import { ProjectDetail } from './ProjectDetail';
import styles from './ProjectModal.module.css';

export function ProjectModal() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const project = projects.find((p) => p.id === id);
  const background = (location.state as { background?: typeof location } | null)?.background;

  const closeModal = useCallback(() => {
    if (background) {
      navigate(-1);
      return;
    }
    navigate('/#projects', { replace: true });
  }, [background, navigate]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [id]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [closeModal]);

  return createPortal(
    <div className={styles.overlay} onClick={closeModal} role="presentation">
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby={project ? 'project-title' : undefined}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className={styles.close}
          onClick={closeModal}
          aria-label="닫기"
        >
          ×
        </button>

        <div className={styles.scroll}>
          {project ? (
            <ProjectDetail project={project} />
          ) : (
            <div className={styles.notFound}>
              <p>프로젝트를 찾을 수 없습니다.</p>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
