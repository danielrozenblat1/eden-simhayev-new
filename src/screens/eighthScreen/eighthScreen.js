import React from "react";
import styles from "./eighthScreen.module.css";

const EighthScreen = ({ onCtaClick }) => {
  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
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
            <p>את לא הגעת לכאן במקרה.</p>
            <p>
              יש משהו בפנים שכבר מרגיש שמגיע לך יותר -
              יותר מהעבודה שלא ממש ממלאת אותך, יותר מהמשכורת שנגמרת
              באמצע החודש, יותר מהתחושה הזו של דריכה במקום.
            </p>
            <p>
              והאמת? בנות שהיו בדיוק איפה שאת עכשיו כבר עובדות,
              כבר מרוויחות, כבר בונות לעצמן משהו אחר לגמרי.
            </p>
            <p>
              "אחרי החגים", "כשיהיה זמן", "כשירגע קצת" -
              שתינו יודעות שהרגע הזה לא באמת מגיע לבד.
            </p>
          </div>
        </header>

        {/* Options Subtitle */}
        <div className={styles.optionsSubtitle}>
          <h3>עכשיו יש לך 2 אפשרויות:</h3>
        </div>

        {/* Options - Single glass panel with two paths */}
        <div className={styles.pathPanel}>
          {/* Stay Path */}
          <div className={styles.pathRow}>
            <div className={styles.pathIndicator}>
              <div className={`${styles.pathDot} ${styles.dotStay}`}>✕</div>
              <div className={styles.pathLine} />
            </div>
            <div className={styles.pathContent}>
              <h4 className={styles.pathTitle}>להישאר במקום</h4>
              <p className={styles.pathText}>
                את נמצאת עדיין באותה עבודה, עם{" "}
                <strong>אותה תחושה שמשהו חסר</strong>. עם אותה משכורת
                שנגמרת מהר מדי, אותם ימים שנראים אותו דבר.
                את אומרת לעצמך "אולי מתישהו", רואה אחרות
                שעושות את זה ושואלת בשקט <strong>למה לא אני?</strong>{" "}
                ואותם חלומות שלך? נדחפים הצידה, שוב ושוב.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className={styles.pathDivider}>
            <span className={styles.dividerText}>או</span>
          </div>

          {/* Start Path */}
          <div className={styles.pathRow}>
            <div className={styles.pathIndicator}>
              <div className={`${styles.pathDot} ${styles.dotStart}`}>✓</div>
            </div>
            <div className={styles.pathContent}>
              <h4 className={`${styles.pathTitle} ${styles.titleStart}`}>
                לעשות את הצעד
              </h4>
              <p className={styles.pathText}>
                את מתעוררת עם <strong>מקצוע שבאמת מדליק אותך</strong>,
                לקוחות שמחכות לך וביטחון אמיתי בידיים.
                קובעת לעצמך את השעות, מחליטה כמה את מרוויחה.{" "}
                <strong>עוד 3 חודשים את אומרת "כמה טוב שהתחלתי"</strong> -
                רואה את החשבון גדל, מרגישה שסוף סוף
                את בונה משהו שהוא באמת שלך. חיים שנראים אחרת לגמרי.
              </p>
            </div>
          </div>
        </div>

        {/* Closing Section */}
        <div className={styles.closingSection}>
          <p className={styles.closingText}>
            בעוד 3 חודשים את יכולה להסתכל אחורה ולחייך -{" "}
            <strong>"כמה טוב שלקחתי את הצעד"</strong>. או לתהות בשקט{" "}
            <strong>"למה לא התחלתי אז?"</strong>
          </p>
          <p className={styles.closingSubtext}>לשיחת ייעוץ ובדיקת התאמה יחד איתי, לחצי בכפתור שנמצא כאן למטה</p>
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
