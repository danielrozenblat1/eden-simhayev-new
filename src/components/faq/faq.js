import React, { useState } from 'react';
import styles from './faq.module.css';

const faqs = [
  {
    category: 'כללי',
    questions: [
      { q: 'אין לי ניסיון בכלל - זה בשבילי?', a: 'בהחלט. אני מלמדת מאפס מוחלט, שלב אחרי שלב. רוב התלמידות שלי התחילו בדיוק ככה - בלי רקע, בלי ניסיון, רק עם רצון ללמוד. זה בדיוק בשביל מה הקורס בנוי.' },
      { q: 'מה אם אני לא אצליח?', a: 'זו בדיוק הסיבה שאני מלווה גם אחרי הקורס. את לא לבד בזה. אם משהו לא עובד, אם יש שאלות, אם את צריכה עזרה - אני שם. המטרה שלי היא שתצליחי, לא סתם לתת לך תעודה.' },
      { q: 'איך אני יודעת איזה קורס מתאים לי?', a: 'זה בדיוק למה יש שיחת ייעוץ. נדבר על מה מעניין אותך, מה המטרות שלך, ואני אעזור לך לבחור את המסלול הנכון בשבילך. בלי לחץ, בלי התחייבות.' },
    ]
  },
  {
    category: 'תהליך הלמידה',
    questions: [
      { q: 'כמה זמן נמשך הקורס?', a: 'כל קורס הוא יום אחד בלבד, אבל זה יום אינטנסיבי ומקיף שכולל חלק עיוני מפורט וחלק מעשי מלא. את יוצאת מוכנה לעבוד!' },
      { q: 'מה קורה בקורס?', a: 'הקורס מתחיל בחלק עיוני מקיף שכולל את כל הידע המקצועי שצריך, ואז עוברים לחלק מעשי - אני מדגימה על מודליסטית ואת מתאמנת על מודליסטיות אמיתיות. ככה את בונה תיק עבודות מקצועי כבר מהקורס.' },
      { q: 'מה אני מקבלת בקורס?', a: 'את מקבלת ערכה מקצועית מלאה שכוללת את כל מה שצריך כדי להתחיל לעבוד, תעודת הסמכה מקצועית, וליווי צמוד גם אחרי הקורס. בנוסף, אני נותנת חוברת שיווק שמלמדת איך להביא לקוחות ולבנות עסק רווחי.' },
    ]
  },
  {
    category: 'אחרי הקורס',
    questions: [
      { q: 'מה קורה אם יש לי שאלות אחרי הקורס?', a: 'אני לא נעלמת אחרי התעודה. הליווי שלי ממשיך גם אחרי - שאלות, תמונות לבדיקה, התייעצויות. אני רוצה שתצליחי בשטח, לא רק שתסיימי קורס.' },
      { q: 'אני צריכה לקנות ציוד נוסף?', a: 'במהלך הקורס את מקבלת ממני את כל מה שצריך כדי ללמוד ולתרגל. אחרי הקורס אדריך אותך בדיוק מה לקנות, מאיפה, ואיך לא לבזבז כסף על ציוד מיותר.' },
      { q: 'איך אני מתחילה לעבוד אחרי הקורס?', a: 'אני נותנת לך חוברת שיווק שמלמדת איך להביא לקוחות, איך לשווק את עצמך, ואיך לבנות עסק רווחי. בנוסף, אני זמינה להתייעצויות ולעזרה בכל שלב.' },
    ]
  },
];

const EDEN_PHONE = '972543414939';

const TreatmentsFAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (categoryIdx, questionIdx) => {
    const key = `${categoryIdx}-${questionIdx}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const isOpen = (categoryIdx, questionIdx) => {
    return openItems[`${categoryIdx}-${questionIdx}`];
  };

  return (
    <section className={styles.faqSection} dir="rtl">
      <div className={styles.bgDecoration}>
        <div className={styles.bgGrid} />
        <div className={styles.noise} />
      </div>

      {/* Decorative side elements */}
      <div className={`${styles.sideDeco} ${styles.sideDecoRight}`}>
        <span /><span /><span />
      </div>
      <div className={`${styles.sideDeco} ${styles.sideDecoLeft}`}>
        <span /><span /><span />
      </div>

      <header className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>שאלות תשובות</h2>
        <p className={styles.sectionSubtitle}>אני בטוחה שאחת מהשאלות הבאות עלתה לך לא פעם ולא פעמיים ואני כאן לענות על כולן</p>
      </header>

      <div className={styles.faqContainer}>
        {faqs.map((category, catIdx) => (
          <div key={catIdx} className={styles.categoryBlock}>
            <h3 className={styles.categoryTitle}>{category.category}</h3>
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
