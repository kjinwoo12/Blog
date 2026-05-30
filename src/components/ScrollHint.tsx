import { useEffect, useState } from 'react';
import styles from './ScrollHint.module.css';

const BOTTOM_THRESHOLD = 32;

function isAtPageBottom() {
  const { scrollY, innerHeight } = window;
  const { scrollHeight } = document.documentElement;
  return scrollY + innerHeight >= scrollHeight - BOTTOM_THRESHOLD;
}

export function ScrollHint() {
  const [visible, setVisible] = useState(() => !isAtPageBottom());

  useEffect(() => {
    const update = () => setVisible(!isAtPageBottom());

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div
      className={`${styles.scrollHint} ${visible ? '' : styles.hidden}`}
      aria-hidden
    >
      <div className={styles.glow} />
    </div>
  );
}
