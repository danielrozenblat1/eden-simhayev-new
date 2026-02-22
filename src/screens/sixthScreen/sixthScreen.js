import React, { useState } from "react";
import styles from "./sixthScreen.module.css";

const PRICE_PER_TREATMENT = 250;
const EDEN_PHONE = "972543414939";

const CalcScreen = () => {
  const [treatments, setTreatments] = useState(50);
  const income = treatments * PRICE_PER_TREATMENT;

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "היי עדן הגעתי מהדף שלך, אשמח לשמוע עוד!"
    );
    window.open(`https://wa.me/${EDEN_PHONE}?text=${message}`, "_blank");
  };

  const formatNumber = (num) => num.toLocaleString("he-IL");

  // Calculate percentage for slider fill
  const min = 10;
  const max = 200;
  const pct = ((treatments - min) / (max - min)) * 100;

  return (
    <section className={styles.section} dir="rtl">
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />

      <div className={styles.container}>
        <p className={styles.subtitle}>והשאלה שבטוח שאלת את עצמך</p>
        <h2 className={styles.title}>כמה אפשר להרוויח מהתחום..?</h2>

        <div className={styles.calcCard}>
          {/* Slider section */}
          <div className={styles.sliderSection}>
            <div className={styles.sliderHeader}>
              <span className={styles.sliderValue}>{treatments}</span>
              <span className={styles.sliderLabel}>מספר טיפולים בחודש</span>
            </div>

            <div className={styles.sliderWrapper}>
              <input
                type="range"
                min={min}
                max={max}
                step={5}
                value={treatments}
                onChange={(e) => setTreatments(Number(e.target.value))}
                className={styles.slider}
                style={{
                  background: `linear-gradient(to left, #C4727E ${pct}%, rgba(196, 114, 126, 0.2) ${pct}%)`,
                }}
              />
              <div className={styles.sliderTicks}>
                <span>200</span>
                <span>150</span>
                <span>100</span>
                <span>50</span>
                <span>10</span>
              </div>
            </div>
          </div>

          {/* Result section */}
          <div className={styles.resultSection}>
            <div className={styles.resultCard}>
              <span className={styles.resultLabel}>הכנסה חודשית</span>
              <div className={styles.resultAmount}>
                <span className={styles.currency}>₪</span>
                <span className={styles.amount}>{formatNumber(income)}</span>
              </div>
            </div>
            <p className={styles.disclaimer}>
              * חישוב על בסיס ממוצע של ₪{PRICE_PER_TREATMENT} לטיפול
            </p>
          </div>
        </div>

        <button className={styles.ctaButton} onClick={handleWhatsApp}>
          עדן, אני רוצה לשמוע עוד
        </button>
      </div>
    </section>
  );
};

export default CalcScreen;