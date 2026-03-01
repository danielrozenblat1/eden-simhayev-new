import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import styles from "./eighthScreen.module.css";

const EighthScreen = ({ onCtaClick }) => {
  useEffect(() => {
    const sr = ScrollReveal({ reset: false });

    sr.reveal(`.${styles.sectionHeader}`, {
      origin: "bottom",
      distance: "30px",
      duration: 800,
      opacity: 0,
      easing: "ease-out",
    });

    sr.reveal(`.${styles.optionsSubtitle}`, {
      origin: "bottom",
      distance: "25px",
      duration: 700,
      opacity: 0,
      scale: 0.95,
      easing: "ease-out",
    });

    sr.reveal(`.${styles.pathRow}`, {
      origin: "bottom",
      distance: "35px",
      duration: 700,
      opacity: 0,
      interval: 150,
      easing: "ease-out",
    });

    sr.reveal(`.${styles.pathDivider}`, {
      origin: "bottom",
      distance: "15px",
      duration: 500,
      opacity: 0,
      easing: "ease-out",
    });

    sr.reveal(`.${styles.closingSection}`, {
      origin: "bottom",
      distance: "30px",
      duration: 800,
      opacity: 0,
      easing: "ease-out",
    });
  }, []);

  const handleCtaClick = () => {
    const form = document.getElementById('טופס');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
            אז למה שנדבר <span className={styles.titleAccent}>דווקא עכשיו</span><span className={styles.titleAccentQuestion}>..?</span>
          </h2>
          <div className={styles.sectionDescription}>
            <p>את לא הגעת לכאן במקרה. <span className={styles.boldDiscovery}>את יודעת בפנים שמגיע לך יותר!</span></p>
            <p>
              יותר מעבודה שלא ממלאת אותך, יותר ממשכורת שנגמרת באמצע החודש, יותר מהתחושה שאת דורכת במקום בזמן שהחיים רצים קדימה.
            </p>
            <p>
              בנות שהיו בדיוק במצב שאת עכשיו ופעלו - כבר עובדות בתחום, כבר מרוויחות, כבר חיות את מה שפעם רק חלמו עליו.
            </p>
            <p>
              ובמקום לתת תירוצים של "אחרי החגים", "כשיהיה זמן", "כשירגע קצת" - הן פשוט החליטו שמספיק לחכות.
            </p>
          </div>
        </header>

        {/* Options Subtitle */}
        <div className={styles.optionsSubtitle}>
          <div className={styles.optionsFrame}>
            <div className={styles.optionsFrameInner}>
              <h3>עכשיו יש לך 2 אפשרויות:</h3>
            </div>
          </div>
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
                עוד שנה מהיום את עדיין באותה עבודה, עם <strong>אותה תחושה שמשהו חסר</strong>. אותה משכורת שנגמרת מהר מדי, אותם ימים שחולפים ונראים אותו דבר. את אומרת לעצמך "יום אחד אני אתחיל", רואה בנות אחרות שכבר עושות את זה ואומרת בשקט: <strong>גם אני יכולה להיות שם</strong> והחלומות שלך? הם עדיין שם, רק נדחפים הצידה. שוב.
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
                את מתעוררת כל בוקר עם <strong>מקצוע שבאמת מדליק אותך</strong>. לקוחות שמחכות לך, יומן מלא, וביטחון אמיתי בידיים. את קובעת לעצמך את השעות ומחליטה כמה את מרוויחה. <strong>עוד כמה חודשים מהיום את כבר אומרת "כמה טוב שהתחלתי"</strong> - רואה את חשבון הבנק גדל וסוף סוף מרגישה שאת בונה משהו שהוא באמת שלך.
              </p>
            </div>
          </div>
        </div>

        {/* Closing Section */}
        <div className={styles.closingSection}>
          <p className={styles.closingText}>
            בעוד כמה חודשים את יכולה להסתכל אחורה ולחייך - <strong>"כמה טוב שלקחתי את הצעד"</strong>. או לשבת עם אותה שאלה שקטה - <strong>"למה לא התחלתי כשיכולתי?"</strong>
          </p>
          <p className={styles.closingSubtext}>אז הבחירה הראשונה שלך מתחילה כאן</p>
          <p className={styles.closingMini}>בלי התחייבות - רק בדיקת התאמה ראשונית</p>
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
