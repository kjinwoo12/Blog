import { useCallback, useRef, useState } from 'react';
import type { ProjectImage } from '../data/portfolio';
import { publicUrl } from '../lib/publicUrl';
import styles from './PhotoCarousel.module.css';

const SWIPE_THRESHOLD = 48;

interface Props {
  images: ProjectImage[];
}

export function PhotoCarousel({ images }: Props) {
  const [index, setIndex] = useState(0);
  const swipeStart = useRef<{ x: number; y: number } | null>(null);
  const total = images.length;
  const hasMultiple = total > 1;

  const goPrev = useCallback(() => {
    setIndex((currentIndex) => (currentIndex - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    setIndex((currentIndex) => (currentIndex + 1) % total);
  }, [total]);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!hasMultiple || event.button !== 0) return;
    if ((event.target as HTMLElement).closest('button')) return;

    swipeStart.current = { x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!hasMultiple || !swipeStart.current) return;

    const deltaX = event.clientX - swipeStart.current.x;
    const deltaY = event.clientY - swipeStart.current.y;
    swipeStart.current = null;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) >= SWIPE_THRESHOLD) {
      if (deltaX > 0) goPrev();
      else goNext();
    }
  };

  const onPointerCancel = () => {
    swipeStart.current = null;
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!hasMultiple) return;
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goPrev();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      goNext();
    }
  };

  const current = images[index];

  return (
    <div
      className={styles.carousel}
      role="region"
      aria-roledescription="carousel"
      aria-label="프로젝트 사진"
    >
      <div className={styles.frame}>
        <div
          className={styles.viewport}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
          onKeyDown={onKeyDown}
          tabIndex={hasMultiple ? 0 : undefined}
        >
          <div
            className={styles.track}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((image) => (
              <figure key={image.src} className={styles.slide}>
                <img
                  className={styles.photo}
                  src={publicUrl(image.src)}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </figure>
            ))}
          </div>
        </div>

        {hasMultiple && (
          <>
            <button
              type="button"
              className={`${styles.nav} ${styles.navPrev}`}
              onClick={goPrev}
              aria-label="이전 사진"
            >
              ‹
            </button>
            <button
              type="button"
              className={`${styles.nav} ${styles.navNext}`}
              onClick={goNext}
              aria-label="다음 사진"
            >
              ›
            </button>
          </>
        )}
      </div>

      <figcaption className={styles.caption} aria-live="polite">
        {current.alt}
      </figcaption>

      {hasMultiple && (
        <div className={styles.footer}>
          <div className={styles.dots} role="tablist" aria-label="사진 선택">
            {images.map((image, dotIndex) => (
              <button
                key={image.src}
                type="button"
                role="tab"
                className={`${styles.dot} ${dotIndex === index ? styles.dotActive : ''}`}
                aria-label={`${dotIndex + 1}번째 사진`}
                aria-selected={dotIndex === index}
                onClick={() => setIndex(dotIndex)}
              />
            ))}
          </div>
          <span className={styles.counter}>
            {index + 1} / {total}
          </span>
        </div>
      )}
    </div>
  );
}
