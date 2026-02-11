import React from "react";
import styles from "./eighthScreen.module.css";

const EighthScreen = ({ onCtaClick }) => {
  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      // Scroll to lead form in firstScreen
      const form = document.querySelector("form");
      if (form) {
        form.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  return (
    <section className={styles.section} dir="rtl">
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />

      <div className={styles.container}>
        {/* Header */}
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            אז למה <span className={styles.titleAccent}>דווקא עכשיו</span>?
          </h2>
          <div className={styles.sectionDescription}>
            <p>את לא נכנסת לדף הזה במקרה.</p>
            <p>
              משהו בפנים כבר יודע שמגיע לך יותר - יותר מהעבודה הנוכחית, יותר
              מהמשכורת הזו, יותר מהתחושה שאת דורכת במקום.
            </p>
            <p>
              כל יום שעובר - הבנות שהתחילו לפניך כבר עובדות, כבר מרוויחות,
              כבר בונות לעצמן חיים אחרים.
            </p>
            <p>
              ו"אחרי החגים" או "כשיהיה זמן"? שנינו יודעות שזה לא באמת יגיע.
            </p>
          </div>
        </header>

        {/* Options Subtitle */}
        <div className={styles.optionsSubtitle}>
          <h3>עכשיו יש לך 2 אפשרויות:</h3>
        </div>

        {/* Options Cards */}
        <div className={styles.optionsContainer}>
          {/* Stay Option */}
          <div className={`${styles.optionCard} ${styles.stay}`}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>❌</div>
              <h4 className={styles.cardTitle}>להישאר במקום</h4>
            </div>
            <p className={styles.cardText}>
              עוד 3 חודשים באותה עבודה שמתישה אותך, עם{" "}
              <strong>אותו בוס על הראש</strong> ואותה משכורת שלא סוגרת את
              החודש. עוד 3 חודשים של "אולי בשנה הבאה", של להסתכל על אחרות
              שמצליחות ולשאול את עצמך <strong>למה לא אני?</strong>. אותה
              תחושה של תקיעות, אותם חלומות שנדחים, אותו מקום בדיוק.
            </p>
          </div>

          {/* Start Option */}
          <div className={`${styles.optionCard} ${styles.start}`}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>✓</div>
              <h4 className={styles.cardTitle}>לעשות את הצעד</h4>
            </div>
            <p className={styles.cardText}>
              עוד 3 חודשים עם <strong>מקצוע חדש שאת אוהבת</strong>, עם לקוחות
              קבועות וביטחון אמיתי בידיים. את הבוסית של עצמך, מחליטה על השעות
              שלך, על ההכנסה שלך.{" "}
              <strong>עוד 3 חודשים של "טוב שהתחלתי"</strong>, של לראות את
              החשבון גדל, של להרגיש שסוף סוף את בונה משהו משלך. חיים אחרים
              לגמרי.
            </p>
          </div>
        </div>

        {/* Closing Section */}
        <div className={styles.closingSection}>
          <p className={styles.closingText}>
            בעוד 3 חודשים את יכולה להסתכל אחורה ולהגיד{" "}
            <strong>טוב שהתחלתי</strong> - או לשאול את עצמך{" "}
            <strong>למה חיכיתי?</strong>
          </p>
          <p className={styles.closingHighlight}>את בוחרת.</p>
          <button className={styles.ctaButton} onClick={handleCtaClick}>
            אני בוחרת להתחיל
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EighthScreen;
