import { useState, useEffect, useRef } from 'react';
import styles from './FloatButton.module.css';

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isStatic, setIsStatic] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setIsVisible(scrollY > 200);
      setIsStatic(scrollY + windowHeight >= documentHeight - 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const form = document.getElementById('טופס');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div
      ref={buttonRef}
      className={`${styles.floatingButton} ${isVisible ? styles.visible : ''} ${isStatic ? styles.static : ''}`}
      onClick={handleClick}
    >
      <div className={styles.shine} />
      <span className={styles.buttonText}>בואי נדבר, אני כאן בשבילך</span>
    </div>
  );
};

export default FloatingButton;
