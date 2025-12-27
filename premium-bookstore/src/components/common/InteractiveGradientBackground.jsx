import { useEffect, useRef } from 'react';
import styles from './InteractiveGradientBackground.module.css';

export default function InteractiveGradientBackground({ intensity = 0.28, blend = 'overlay' }) {
  const ref = useRef(null);
  const rafRef = useRef(null);
  const targetPos = useRef({ x: 0.5, y: 0.4 });
  const currentPos = useRef({ x: 0.5, y: 0.4 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Listen on the parent container (overlay has pointer-events: none)
    const container = el.parentElement;
    if (!container) return;

    const onMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      targetPos.current.x = Math.min(1, Math.max(0, x));
      targetPos.current.y = Math.min(1, Math.max(0, y));
    };

    const onLeave = () => {
      targetPos.current.x = 0.5;
      targetPos.current.y = 0.4;
    };

    const tick = () => {
      // Faster interpolation for snappy response
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.25;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.25;
      el.style.setProperty('--mx', `${(currentPos.current.x * 100).toFixed(2)}%`);
      el.style.setProperty('--my', `${(currentPos.current.y * 100).toFixed(2)}%`);
      el.style.setProperty('--intensity', intensity);
      el.style.setProperty('--blend-mode', blend);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    container.addEventListener('mousemove', onMove);
    container.addEventListener('mouseleave', onLeave);

    return () => {
      container.removeEventListener('mousemove', onMove);
      container.removeEventListener('mouseleave', onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [intensity, blend]);

  return <div ref={ref} className={styles.interactiveBg} aria-hidden="true" />;
}
