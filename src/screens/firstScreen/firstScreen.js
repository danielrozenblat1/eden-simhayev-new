import React, { useState } from "react";
import styles from "./firstScreen.module.css";

const FirstScreen = () => {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section className={styles.hero} dir="rtl">
      {/* Decorative background elements */}
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />
      <div className={styles.bgOrb3} />
      <div className={styles.noiseOverlay} />

      <div className={styles.container}>
        {/* Intro line */}
        <div className={styles.introWrapper}>
          <p className={styles.intro}>
            עבור מי שרוצה לצאת עם מקצוע ביד, לא רק תעודה במגירה
          </p>
        </div>

        {/* Main headline */}
        <h1 className={styles.headline}>
          הדרך להפוך את התשוקה שלך
          <br />
          לעסק רווחי בתחום הביוטי
          <br />
          <span className={styles.highlightWrapper}>
            שמכניס 5 ספרות בחודש
          </span>
        </h1>

        {/* Subtitle */}
        <p className={styles.subtitle}>
          (גם אם אין לך ניסיון בכלל וגם אם אין לך רקע בתחום)
        </p>

        {/* Image placeholder area */}
        <div className={styles.imageSection}>
          <div className={styles.imagePlaceholder}>
            <span className={styles.imagePlaceholderText}>תמונה של עדן / קרוסלה</span>
          </div>
        </div>

        {/* Lead form */}
        <div className={styles.formSection}>
          {!submitted ? (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder="שם מלא"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="מספר טלפון"
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className={styles.spinner} />
                ) : (
                  "אני רוצה להתחיל"
                )}
              </button>
            </form>
          ) : (
            <div className={styles.successMsg}>
              <span className={styles.successIcon}>✓</span>
              <p>הפרטים נשלחו בהצלחה! ניצור איתך קשר בקרוב</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FirstScreen;