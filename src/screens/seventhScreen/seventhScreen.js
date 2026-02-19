import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './seventhScreen.module.css';

gsap.registerPlugin(ScrollTrigger);

const EDEN_PHONE = "972543414939";

const SeventhScreen = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const ctaRef = useRef(null);
  const yesTitleRef = useRef(null);
  const noTitleRef = useRef(null);
  const yesItemsRefs = useRef([]);
  const noItemsRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header - fade up (gsap.to because initial state is set in CSS)
      if (headerRef.current) {
        gsap.to(headerRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            once: true,
          }
        });
      }

      // Column titles - fade up (gsap.to because initial state is set in CSS)
      [yesTitleRef, noTitleRef].forEach((ref) => {
        if (ref.current) {
          gsap.to(ref.current, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 85%',
              once: true,
            }
          });
        }
      });

      // Yes items - 3D flip from right (gsap.to because initial state is set in CSS)
      yesItemsRefs.current.forEach((row, index) => {
        if (!row) return;
        gsap.to(row, {
          rotateY: 0,
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          delay: index * 0.1,
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
            once: true,
          }
        });
      });

      // No items - 3D flip from left (gsap.to because initial state is set in CSS)
      noItemsRefs.current.forEach((row, index) => {
        if (!row) return;
        gsap.to(row, {
          rotateY: 0,
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          delay: index * 0.1,
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
            once: true,
          }
        });
      });

      // CTA button - fade up (gsap.to because initial state is set in CSS)
      if (ctaRef.current) {
        gsap.to(ctaRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 85%',
            once: true,
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('היי עדן, אני מתאימה, בואי נדבר!');
    const whatsappUrl = `https://wa.me/${EDEN_PHONE}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const yesItems = [
    'את מוכנה להשקיע בעצמך ולהתאמץ',
    'יש לך תשוקה אמיתית לתחום היופי',
    'את מבינה שמקצוע אמיתי דורש למידה לעומק',
    'את רוצה לבנות קריירה לטווח ארוך',
    'את מוכנה לצאת מאזור הנוחות ולהתמיד כדי להצליח'
  ];

  const noItems = [
    'את מחפשת קיצור דרך או תעודה מהירה',
    'את מצפה להצליח בלי לתרגל',
    'את מחפשת כסף קל ומהיר',
    'את לא מוכנה להשקיע זמן בתרגול'
  ];

  return (
    <section className={styles.screen} ref={sectionRef} dir="rtl">
      <div ref={headerRef} className={styles.sectionHeader}>
        <h2>שנייה לפני שנדבר..</h2>
        <p>כאן תוכלי להבין האם מתאים לך להיכנס לתחום או שהוא פחות עבורך</p>
      </div>

      <div className={styles.columnsWrap}>
        <div className={`${styles.col} ${styles.colYes}`}>
          <div ref={yesTitleRef} className={styles.colTitle}>
            <span className={styles.iconYes}>✓</span>
            התחום בול בשבילך אם..
          </div>
          {yesItems.map((item, index) => (
            <div
              key={index}
              ref={el => yesItemsRefs.current[index] = el}
              className={`${styles.rowItem} ${styles.rowYes}`}
            >
              {item}
            </div>
          ))}
        </div>
        <div className={`${styles.col} ${styles.colNo}`}>
          <div ref={noTitleRef} className={styles.colTitle}>
            <span className={styles.iconNo}>✗</span>
            פחות מתאים לך אם..
          </div>
          {noItems.map((item, index) => (
            <div
              key={index}
              ref={el => noItemsRefs.current[index] = el}
              className={`${styles.rowItem} ${styles.rowNo}`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <button ref={ctaRef} className={styles.ctaBtn} onClick={handleWhatsAppClick}>
        אני מתאימה, בואי נדבר!
      </button>
    </section>
  );
};

export default SeventhScreen;