import React from "react";
import styles from "./seventhScreen.module.css";

const EDEN_PHONE = "972543414939";

const fitItems = [
  "את מוכנה להשקיע בעצמך ולהתאמץ",
  "יש לך תשוקה אמיתית לתחום היופי",
  "את מבינה שמקצוע אמיתי דורש למידה לעומק",
  "את רוצה לבנות קריירה לטווח ארוך",
  "את מוכנה לצאת מאזור הנוחות ולהתמיד כדי להצליח",
];

const notFitItems = [
  "את מחפשת קיצור דרך או תעודה מהירה",
  "את מצפה להצליח בלי לתרגל",
  "את מחפשת כסף קל ומהיר",
  "את לא מוכנה להשקיע זמן בתרגול",
];

const SeventhScreen = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "היי עדן הגעתי מהדף שלך, אני מתאימה! אשמח לשמוע עוד"
    );
    window.open(`https://wa.me/${EDEN_PHONE}?text=${message}`, "_blank");
  };

  return (
    <section className={styles.section} dir="rtl">
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />

      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>שנייה לפני שנדבר..</h2>
          <p className={styles.desc}>
            כאן תוכלי להבין האם מתאים לך להיכנס לתחום או שהוא פחות עבורך
          </p>
        </div>

        <div className={styles.columns}>
          {/* ✅ Fit column */}
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <span className={styles.checkIcon}>✓</span>
              <h3 className={styles.columnTitle}>התחום בול בשבילך אם..</h3>
            </div>
            <div className={styles.itemsList}>
              {fitItems.map((item, idx) => (
                <div key={idx} className={styles.itemCard}>
                  <span className={styles.itemCheck}>✓</span>
                  <p className={styles.itemText}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ❌ Not fit column */}
          <div className={styles.column}>
            <div className={`${styles.columnHeader} ${styles.columnHeaderNot}`}>
              <span className={styles.xIcon}>✕</span>
              <h3 className={styles.columnTitle}>פחות מתאים לך אם..</h3>
            </div>
            <div className={styles.itemsList}>
              {notFitItems.map((item, idx) => (
                <div key={idx} className={`${styles.itemCard} ${styles.itemCardNot}`}>
                  <span className={styles.itemX}>✕</span>
                  <p className={styles.itemText}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button className={styles.ctaButton} onClick={handleWhatsApp}>
          עדן, אני מתאימה!
        </button>
      </div>
    </section>
  );
};

export default SeventhScreen;