/**
 * Custom Cursor Component
 * Award-winning cursor effect with smooth follow
 */

import { useState, useEffect } from 'react';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target;
      const isClickable = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.onclick !== null ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(isClickable);
    };

    const hideCursor = () => setIsHidden(true);
    const showCursor = () => setIsHidden(false);

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseenter', showCursor);
    window.addEventListener('mouseleave', hideCursor);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseenter', showCursor);
      window.removeEventListener('mouseleave', hideCursor);
    };
  }, []);

  return (
    <>
      <div
        className={`${styles.cursor} ${isPointer ? styles.cursorPointer : ''} ${isHidden ? styles.cursorHidden : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={`${styles.cursorFollower} ${isPointer ? styles.cursorFollowerPointer : ''} ${isHidden ? styles.cursorHidden : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
}
