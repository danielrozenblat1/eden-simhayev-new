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

      // ── Helper: create a toggleActions trigger that resets on scroll-out ──
      const makeTrigger = (trigger, extra = {}) => ({
        trigger,
        start: 'top 85%',
        end: 'top 20%',
        toggleActions: 'play reverse play reverse', // enter / leave / re-enter / re-leave
        ...extra,
      });

      // ── Header ──
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: makeTrigger(headerRef.current),
          }
        );
      }

      // ── Column titles ──
      [yesTitleRef, noTitleRef].forEach((ref) => {
        if (!ref.current) return;
        gsap.fromTo(
          ref.current,
          { y: 25, opacity: 0 },
          {
            y: 0, opacity: 1,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: makeTrigger(ref.current),
          }
        );
      });

      // ── Yes items — 3D flip from right ──
      yesItemsRefs.current.forEach((row, index) => {
        if (!row) return;
        gsap.fromTo(
          row,
          { rotateY: -90, x: 40, opacity: 0 },
          {
            rotateY: 0, x: 0, opacity: 1,
            duration: 0.75,
            ease: 'power2.out',
            delay: index * 0.08,
            scrollTrigger: makeTrigger(row),
          }
        );
      });

      // ── No items — 3D flip from left ──
      noItemsRefs.current.forEach((row, index) => {
        if (!row) return;
        gsap.fromTo(
          row,
          { rotateY: 90, x: -40, opacity: 0 },
          {
            rotateY: 0, x: 0, opacity: 1,
            duration: 0.75,
            ease: 'power2.out',
            delay: index * 0.08,
            scrollTrigger: makeTrigger(row),
          }
        );
      });

      // ── CTA button ──
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: makeTrigger(ctaRef.current),
          }
        );
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
    'את מוכנה לצאת מאזור הנוחות ולהתמיד כדי להצליח',
  ];

  const noItems = [
    'את מחפשת קיצור דרך או תעודה מהירה',
    'את מצפה להצליח בלי לתרגל',
    'את מחפשת כסף קל ומהיר',
    'את לא מוכנה להשקיע זמן בתרגול',
  ];

  return (
    <section className={styles.screen} ref={sectionRef} dir="rtl">
      <div ref={headerRef} className={styles.sectionHeader}>
        <h2>שנייה לפני שנדבר..</h2>
        <p>כאן תוכלי להבין האם מתאים לך להיכנס לתחום או שהוא פחות עבורך</p>
      </div>

      <div className={styles.columnsWrap}>
        {/* Yes column */}
        <div className={`${styles.col} ${styles.colYes}`}>
          <div ref={yesTitleRef} className={styles.colTitle}>
            <span className={styles.iconYes}>✓</span>
            התחום בול בשבילך אם..
          </div>
          {yesItems.map((item, index) => (
            <div
              key={index}
              ref={el => (yesItemsRefs.current[index] = el)}
              className={`${styles.rowItem} ${styles.rowYes}`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* No column */}
        <div className={`${styles.col} ${styles.colNo}`}>
          <div ref={noTitleRef} className={styles.colTitle}>
            <span className={styles.iconNo}>✗</span>
            פחות מתאים לך אם..
          </div>
          {noItems.map((item, index) => (
            <div
              key={index}
              ref={el => (noItemsRefs.current[index] = el)}
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