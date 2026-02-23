import { useState, useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import styles from './nav.module.css';

gsap.registerPlugin(ScrollToPlugin);

const NAV_ITEMS = [
  { number: '1', label: 'בית', targetId: 'hero' },
  { number: '2', label: 'אודותי', targetId: 'about-me' },
  { number: '3', label: 'שירותים', targetId: 'services' },
  { number: '4', label: 'קורסים', targetId: 'projects' },
  { number: '5', label: 'שאלות נפוצות', targetId: 'faq' },
  {
    number: '6',
    label: 'צרי קשר',
    external: true,
    href: `https://wa.me/972543414939?text=${encodeURIComponent('היי עדן, הגעתי מהאתר שלך ואשמח לשמוע עוד..')}`,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const menuRef = useRef(null);
  const navLinksRef = useRef([]);
  const contactInfoRef = useRef(null);
  const legalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const frameRefs = useRef([]);
  const timelineRef = useRef(null);

  const handleScroll = useCallback(() => {
    setVisible(window.scrollY > 300);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    timelineRef.current = gsap.timeline({ paused: true });
    const tl = timelineRef.current;

    tl.set(menuRef.current, { display: 'flex' })
      .fromTo(
        menuRef.current,
        { clipPath: 'inset(0 100% 0 0)' },
        { clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power4.inOut' }
      )
      .fromTo(
        frameRefs.current,
        { opacity: 0 },
        { opacity: 1, stagger: 0.08, duration: 0.5, ease: 'power2.out' },
        '-=0.3'
      )
      .fromTo(
        navLinksRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, duration: 0.6, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        contactInfoRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
        '-=0.3'
      )
      .fromTo(
        legalRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' },
        '-=0.2'
      )
      .fromTo(
        closeButtonRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' },
        '-=0.3'
      );

    return () => {
      if (timelineRef.current) timelineRef.current.kill();
    };
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && isOpen) closeMenu();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  const openMenu = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
    timelineRef.current.play();
  };

  const closeMenu = () => {
    timelineRef.current.reverse();
    setTimeout(() => {
      setIsOpen(false);
      document.body.style.overflow = '';
    }, 800);
  };

  const scrollToSection = (targetId) => {
    closeMenu();
    setTimeout(() => {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: `#${targetId}`, offsetY: 80 },
        ease: 'power3.inOut',
      });
    }, 850);
  };

  return (
    <>
      {/* Fixed Top Bar */}
      <nav
        className={`${styles.topBar} ${visible || isOpen ? styles.topBarVisible : ''}`}
        dir="rtl"
      >
        <button
          className={styles.menuButton}
          onClick={openMenu}
          aria-label="פתח תפריט"
        >
          <span className={styles.menuLabel}>תפריט</span>
          <span className={styles.menuIcon}>
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
          </span>
        </button>
      </nav>

      {/* Full Screen Menu */}
      <div
        ref={menuRef}
        className={styles.fullscreenMenu}
        style={{ display: isOpen ? 'flex' : 'none' }}
      >
        {/* Pink Frame Decoration */}
        <div ref={(el) => (frameRefs.current[0] = el)} className={styles.frameTop} />
        <div ref={(el) => (frameRefs.current[1] = el)} className={styles.frameBottom} />
        <div ref={(el) => (frameRefs.current[2] = el)} className={styles.frameLeft} />
        <div ref={(el) => (frameRefs.current[3] = el)} className={styles.frameRight} />

        <div className={styles.menuContent}>
          {/* Navigation Links */}
          <div className={styles.navSection}>
            <nav className={styles.navLinks}>
              {NAV_ITEMS.map((item, index) =>
                item.external ? (
                  <a
                    key={item.number}
                    ref={(el) => (navLinksRef.current[index] = el)}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.navLink}
                    onClick={closeMenu}
                  >
                    <span className={styles.navLabel}>{item.label}</span>
                    <span className={styles.navNumber}>({item.number})</span>
                  </a>
                ) : (
                  <button
                    key={item.number}
                    ref={(el) => (navLinksRef.current[index] = el)}
                    onClick={() => scrollToSection(item.targetId)}
                    className={styles.navLink}
                  >
                    <span className={styles.navLabel}>{item.label}</span>
                    <span className={styles.navNumber}>({item.number})</span>
                  </button>
                )
              )}
            </nav>
          </div>

          {/* Contact Information */}
          <div ref={contactInfoRef} className={styles.contactSection}>
            <div className={styles.contactGroup}>
              <span className={styles.contactLabel}>טלפון</span>
              <a href="tel:+972543414939" className={styles.contactValue}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                054-341-4939
              </a>
            </div>

            <div className={styles.contactGroup}>
              <span className={styles.contactLabel}>וואטסאפ</span>
              <a
                href={`https://wa.me/972543414939?text=${encodeURIComponent('היי עדן, הגעתי מהאתר שלך ואשמח לשמוע עוד..')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactValue}
              >
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                שלחי הודעה
              </a>
            </div>

            <div className={styles.contactGroup}>
              <span className={styles.contactLabel}>עקבי אחריי</span>
              <div className={styles.socialLinks}>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                  </svg>
                  אינסטגרם
                </a>
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <div ref={legalRef} className={styles.legalSection} />

          {/* Close Button */}
          <button
            ref={closeButtonRef}
            className={styles.closeButton}
            onClick={closeMenu}
            aria-label="סגור תפריט"
          >
            סגור
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
