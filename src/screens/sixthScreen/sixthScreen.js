import React, { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import styles from "./sixthScreen.module.css";

const PRICE_PER_TREATMENT = 250;
// Import work images for magazine layout
const img1 = require("../../assets/shani_works_11.webp");
const img2 = require("../../assets/shani_works_2.webp");
const img3 = require("../../assets/shani_works_3.webp");
const img4 = require("../../assets/shani_works_4.webp");
const img5 = require("../../assets/shani_works_16.webp");
const img6 = require("../../assets/shani_works_6.webp");

const CalcScreen = () => {
  const [inputValue, setInputValue] = useState("");
  const [income, setIncome] = useState(null);
  const [isCalculated, setIsCalculated] = useState(false);

  useEffect(() => {
    const sr = ScrollReveal({ reset: false });

    sr.reveal(`.${styles.subtitle}`, {
      origin: "bottom",
      distance: "25px",
      duration: 600,
      opacity: 0,
      easing: "ease-out",
    });

    sr.reveal(`.${styles.title}`, {
      origin: "bottom",
      distance: "30px",
      duration: 700,
      delay: 100,
      opacity: 0,
      easing: "ease-out",
    });

    sr.reveal(`.${styles.calcCard}`, {
      origin: "bottom",
      distance: "40px",
      duration: 800,
      opacity: 0,
      scale: 0.96,
      easing: "ease-out",
    });

    sr.reveal(`.${styles.ctaButton}`, {
      origin: "bottom",
      distance: "20px",
      duration: 600,
      opacity: 0,
      easing: "ease-out",
    });
  }, []);

  const handleCalculate = () => {
    const num = parseInt(inputValue);
    if (num && num > 0) {
      setIncome(num * PRICE_PER_TREATMENT);
      setIsCalculated(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleCalculate();
  };

  const scrollToForm = () => {
    const form = document.getElementById('טופס');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const formatNumber = (num) => num.toLocaleString("he-IL");

  return (
    <section className={styles.section} dir="rtl">
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />

      <div className={styles.container}>
        <p className={styles.subtitle}>והשאלה שבטוח שאלת את עצמך</p>
        <h2 className={styles.title}>
          כמה אפשר <span className={styles.titleAccent}><span className={styles.titleAccentInner}>להרוויח</span></span> מהתחום..?
        </h2>

        {/* Magazine layout - images behind calculator */}
        <div className={styles.magazineLayout}>
          {/* Floating images - positioned behind/around the card */}
          <div className={`${styles.floatingImg} ${styles.img1}`}>
            <img src={img1} alt="עבודת ריסים" loading="lazy" />
          </div>
          <div className={`${styles.floatingImg} ${styles.img2}`}>
            <img src={img2} alt="עבודת ריסים" loading="lazy" />
          </div>
          <div className={`${styles.floatingImg} ${styles.img3}`}>
            <img src={img3} alt="עבודת ריסים" loading="lazy" />
          </div>
          <div className={`${styles.floatingImg} ${styles.img4}`}>
            <img src={img4} alt="עבודת ריסים" loading="lazy" />
          </div>
          <div className={`${styles.floatingImg} ${styles.img5}`}>
            <img src={img5} alt="עבודת ריסים" loading="lazy" />
          </div>
          <div className={`${styles.floatingImg} ${styles.img6}`}>
            <img src={img6} alt="עבודת ריסים" loading="lazy" />
          </div>

          {/* Calculator - on top */}
          <div className={styles.calcCard}>
            <div className={styles.calcInner}>
              <label className={styles.inputLabel}>
                הזיני את מספר הטיפולים החודשי
              </label>

              <div className={styles.inputRow}>
                <input
                  type="number"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    setIsCalculated(false);
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="לדוגמה: 50"
                  className={styles.numberInput}
                  min="1"
                  max="500"
                />
                <button
                  className={styles.calcButton}
                  onClick={handleCalculate}
                >
                  חשבי הכנסה פוטנציאלית מהתחום
                </button>
              </div>

              {/* Result */}
              <div
                className={`${styles.resultSection} ${isCalculated ? styles.resultVisible : ""}`}
              >
                <div className={styles.resultDivider} />
                <span className={styles.resultLabel}>ההכנסה החודשית שלך</span>
                <div className={styles.resultAmount}>
                  <span className={styles.currency}>₪</span>
                  <span className={styles.amount}>
                    {income ? formatNumber(income) : "0"}
                  </span>
                </div>
                <span className={styles.resultSub}>בחודש</span>
              </div>

              <p className={styles.disclaimer}>
                * חישוב על בסיס ממוצע של ₪{PRICE_PER_TREATMENT} לטיפול
              </p>
            </div>
          </div>
        </div>

        <button className={styles.ctaButton} onClick={scrollToForm}>
          עדן, אני רוצה לשמוע עוד
        </button>
      </div>
    </section>
  );
};

export default CalcScreen;
