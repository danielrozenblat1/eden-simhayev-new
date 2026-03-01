import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import styles from './faq.module.css';

const faqs = [
  {
    category: 'כללי',
    questions: [
      { q: 'אין לי ניסיון בכלל - זה בשבילי?', a: 'בהחלט. אני מלמדת מאפס מוחלט, שלב אחרי שלב. רוב התלמידות שלי התחילו בדיוק ככה - בלי רקע, בלי ניסיון, רק עם רצון ללמוד. וזו בדיוק המטרה של הקורס.' },
      { q: 'מה אם אני לא אצליח?', a: 'אני מבינה את החשש הזה לגמרי - גם אני הרגשתי ככה בהתחלה. אבל את יודעת מה? הבנות שהכי הצליחו אצלי הן בדיוק אלה שהגיעו עם הפחד הזה ובחרו לעשות את הצעד בכל זאת. אני מלווה אותך לאורך כל הדרך וגם אחרי, כי המטרה שלי היא שתצאי עם ביטחון אמיתי בידיים וקריירה רווחית בתחום - לא סתם עוד תעודה ותחושת החמצה (ותאמיני לי, הייתי שם). לפעמים דווקא הצעדים שמוציאים אותנו מאזור הנוחות הם אלה שהכי משתלמים בסוף.' },
      { q: 'איך אני יודעת איזה קורס מתאים לי?', a: 'את לא צריכה לדעת ישר וגם לא חייבת להבין את זה לבד. בשיחה קצרה ביחד נבין מה מדבר אלייך, מה המטרות שלך ואיזה מסלול יביא אותך לשם הכי מהר. כל בת אדם והדרך שלה, ואני אדאג שתבחרי את מה שבאמת נכון לך. בלי לחץ, בלי התחייבות.' },
    ]
  },
  {
    category: 'אחרי הקורס',
    questions: [
      { q: 'מה קורה אם יש לי שאלות אחרי הקורס?', a: 'אני לא נעלמת אחרי התעודה. הליווי שלי ממשיך גם אחרי - שאלות, תמונות לבדיקה, התייעצויות. אני רוצה שתצליחי בשטח, לא רק שתסיימי קורס.' },
      { q: 'אני צריכה לקנות ציוד נוסף?', a: 'במהלך הקורס את מקבלת ממני את כל מה שצריך כדי ללמוד ולתרגל. אחרי הקורס אדריך אותך בדיוק מה לקנות, מאיפה, ואיך לא לבזבז כסף על ציוד מיותר.' },
    ]
  },
];

const EDEN_PHONE = '972543414939';

const TreatmentsFAQ = () => {
  const [openItems, setOpenItems] = useState({});

  useEffect(() => {
    const sr = ScrollReveal({ reset: false });

    sr.reveal(`.${styles.sectionHeader}`, {
      origin: 'bottom',
      distance: '30px',
      duration: 700,
      opacity: 0,
      easing: 'ease-out',
    });

    sr.reveal(`.${styles.glassWrapper}`, {
      origin: 'bottom',
      distance: '35px',
      duration: 800,
      opacity: 0,
      easing: 'ease-out',
    });

    sr.reveal(`.${styles.faqItem}`, {
      origin: 'bottom',
      distance: '20px',
      duration: 600,
      opacity: 0,
      interval: 80,
      easing: 'ease-out',
    });

    sr.reveal(`.${styles.ctaBox}`, {
      origin: 'bottom',
      distance: '25px',
      duration: 700,
      opacity: 0,
      easing: 'ease-out',
    });
  }, []);

  const toggleItem = (categoryIdx, questionIdx) => {
    const key = `${categoryIdx}-${questionIdx}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const isOpen = (categoryIdx, questionIdx) =>
    !!openItems[`${categoryIdx}-${questionIdx}`];

  return (
    <section className={styles.faqSection} dir="rtl" id="faq">
      {/* Background glow orbs */}
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />
      <div className={styles.bgOrb3} />

      {/* Decorative gold frame lines */}
      <div className={styles.frameTop} />
      <div className={styles.frameBottom} />

      <header className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>שאלות תשובות</h2>
        <p className={styles.sectionSubtitle}>
          אני בטוחה שאחת מהשאלות הבאות עלתה לך לא פעם ולא פעמיים
        </p>
      </header>

      <div className={styles.faqContainer}>
        <div className={styles.glassWrapper}>
          {/* Inner glass shimmer highlight */}
          <div className={styles.glassHighlight} />

          {faqs.map((category, catIdx) => (
            <div key={catIdx} className={styles.categoryBlock}>
              {/* Category divider lines */}
              <div className={styles.categoryBadge}>
                <span className={styles.badgeLine} />
                <span className={styles.badgeLine} />
              </div>

              <div className={styles.questionsList}>
                {category.questions.map((item, qIdx) => (
                  <div
                    key={qIdx}
                    className={`${styles.faqItem} ${isOpen(catIdx, qIdx) ? styles.open : ''}`}
                  >
                    <button
                      className={styles.questionBtn}
                      onClick={() => toggleItem(catIdx, qIdx)}
                      aria-expanded={isOpen(catIdx, qIdx)}
                    >
                      <span className={styles.questionText}>{item.q}</span>
                      <span className={styles.faqToggle}>
                        <span className={styles.toggleLine} />
                        <span className={`${styles.toggleLine} ${styles.toggleLineV}`} />
                      </span>
                    </button>
                    <div className={styles.answerWrapper}>
                      <div className={styles.answer}>
                        <p>{item.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.ctaBox}>
        <p>לא מצאת תשובה לשאלה שלך?</p>
        <a
          href={`https://wa.me/${EDEN_PHONE}?text=${encodeURIComponent('היי עדן, יש לי שאלה לגבי הקורסים')}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          <span>שלחי לי הודעה</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default TreatmentsFAQ;
