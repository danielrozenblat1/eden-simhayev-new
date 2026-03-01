import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Sparkles, Heart, BookOpen, Target, Flame,
  Ban, Zap, CircleDollarSign, Clock
} from 'lucide-react';
import styles from './seventhScreen.module.css';

gsap.registerPlugin(ScrollTrigger);

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
        toggleActions: 'play none none none', // animate only once
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

  const scrollToForm = () => {
    const form = document.getElementById('טופס');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const yesItems = [
    { text: 'את מוכנה להשקיע בעצמך ולהתאמץ', icon: Sparkles },
    { text: 'יש לך תשוקה אמיתית לתחום היופי', icon: Heart },
    { text: 'את מבינה שמקצוע אמיתי דורש למידה לעומק', icon: BookOpen },
    { text: 'את רוצה לבנות קריירה לטווח ארוך', icon: Target },
    { text: 'את מוכנה לצאת מאזור הנוחות ולהתמיד כדי להצליח', icon: Flame },
  ];

  const noItems = [
    { text: 'את מחפשת קיצור דרך או תעודה מהירה', icon: Zap },
    { text: 'את מצפה להצליח בלי לתרגל', icon: Ban },
    { text: 'את מחפשת כסף קל ומהיר', icon: CircleDollarSign },
    { text: 'את לא מוכנה להשקיע זמן בתרגול', icon: Clock },
  ];

  return (
    <section className={styles.screen} ref={sectionRef} dir="rtl">
      <div ref={headerRef} className={styles.sectionHeader}>
        <h2>רגע לפני שאנחנו מדברות..</h2>
        <p>כאן תוכלי להבין האם מתאים לך להיכנס לתחום או שהוא פחות עבורך</p>
      </div>

      <div className={styles.columnsWrap}>
        {/* Yes column */}
        <div className={`${styles.col} ${styles.colYes}`}>
          <div className={styles.colInner}>
            <div ref={yesTitleRef} className={styles.colTitle}>
              <span className={styles.iconYes}>✓</span>
              התחום בול בשבילך אם..
            </div>
            <div className={styles.colItems}>
              {yesItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    ref={el => (yesItemsRefs.current[index] = el)}
                    className={`${styles.rowItem} ${styles.rowYes}`}
                  >
                    <span className={styles.rowIcon}><Icon size={18} strokeWidth={1.5} /></span>
                    {item.text}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* No column */}
        <div className={`${styles.col} ${styles.colNo}`}>
          <div className={styles.colInner}>
            <div ref={noTitleRef} className={styles.colTitle}>
              <span className={styles.iconNo}>✗</span>
              פחות מתאים לך אם..
            </div>
            <div className={styles.colItems}>
              {noItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    ref={el => (noItemsRefs.current[index] = el)}
                    className={`${styles.rowItem} ${styles.rowNo}`}
                  >
                    <span className={styles.rowIcon}><Icon size={18} strokeWidth={1.5} /></span>
                    {item.text}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <button ref={ctaRef} className={styles.ctaBtn} onClick={scrollToForm}>
        אני מתאימה, בואי נדבר!
      </button>
    </section>
  );
};

export default SeventhScreen;