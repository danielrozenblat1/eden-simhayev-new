import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import ByMe from '../ByMe/ByMe';
import logo from '../../assets/logo.webp';

const NAV_LINKS = [
  { label: 'מי אני', targetId: 'מי אנחנו' },
  { label: 'סילבוסים', targetId: 'courses' },
  { label: 'שאלות נפוצות', targetId: 'faq' },
];

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer} dir="rtl">
      <div className={styles.inner}>

        {/* Logo */}
        <div className={styles.logoWrap}>
          <img src={logo} alt="לוגו" className={styles.logoImage} loading="lazy" />
        </div>

        {/* Navigation */}
        <nav className={styles.nav}>
          {NAV_LINKS.map((item) => (
            <button
              key={item.targetId}
              onClick={() => scrollToSection(item.targetId)}
              className={styles.navLink}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('טופס')}
            className={styles.navLink}
          >
            צרי קשר
          </button>
          <Link to="/privacy" className={styles.navLink}>
            מדיניות פרטיות
          </Link>
        </nav>

        {/* Contact */}
        <div className={styles.contact}>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.icon}>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
            <span>אינסטגרם</span>
          </a>
          <a href="mailto:edensimhayeveden@gmail.com" className={styles.contactLink}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.icon}>
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 4l-10 8L2 4" />
            </svg>
            <span>edensimhayeveden@gmail.com</span>
          </a>
          <a href="tel:+972543414939" className={styles.contactLink}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.icon}>
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            <span>054-341-4939</span>
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

    </footer>
  );
};

export default Footer;
