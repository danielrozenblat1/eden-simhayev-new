import React, { useState } from 'react';
import styles from './Footer.module.css';
import ByMe from '../ByMe/ByMe';

const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrivacyClick = () => {
    setShowPrivacy(true);
  };

  return (
    <footer className={styles.footer} dir="rtl">
      <div className={styles.inner}>
        {/* Logo */}
        <div className={styles.logoWrap}>
          <h2 className={styles.logoText}>עדן שמחייב</h2>
        </div>

        {/* Navigation */}
        <nav className={styles.nav}>
          <button onClick={() => scrollToSection('שאלות תשובות')} className={styles.navLink}>
            שאלות תשובות
          </button>
          <button onClick={handlePrivacyClick} className={styles.navLink}>
            מדיניות פרטיות
          </button>
        </nav>

        {/* Contact */}
        <div className={styles.contact}>
          <a href="tel:+972543414939" className={styles.contactLink}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.icon}>
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            <span>054-341-4939</span>
          </a>
          <a
            href={`https://wa.me/972543414939?text=${encodeURIComponent('היי עדן, הגעתי מהדף שלך')}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Copyright */}
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} עדן שמחייב. כל הזכויות שמורות.
        </p>

        {/* ByMe */}
        <div className={styles.byMeWrapper}>
          <ByMe />
        </div>
      </div>

      {/* Privacy Policy Modal - can be added later */}
      {showPrivacy && (
        <div className={styles.privacyModal} onClick={() => setShowPrivacy(false)}>
          <div className={styles.privacyContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setShowPrivacy(false)}>
              ×
            </button>
            <h2>מדיניות פרטיות</h2>
            <p>פרטי מדיניות הפרטיות של עדן שמחייב יועלו כאן.</p>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
