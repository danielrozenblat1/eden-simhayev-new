import React, { useState } from "react";
import styles from "./firstScreen.module.css";
import ContactForm from "../../components/form/form";

const FirstScreen = () => {

  return (
    <section className={styles.hero} dir="rtl">
      {/* Decorative background elements */}
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />
      <div className={styles.bgOrb3} />
      <div className={styles.noiseOverlay} />

      <div className={styles.container}>
        {/* Intro bar */}
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

        {/* Video / Image area */}
        <div className={styles.imageSection}>
          <div className={styles.imagePlaceholder}>
            <span className={styles.imagePlaceholderText}>תמונה של עדן / קרוסלה</span>
          </div>
        </div>

    
  
        {/* Form Component */}
        <div className={styles.formSection}>
          <ContactForm />
        </div>
      </div>

    
    </section>
  );
};

export default FirstScreen;