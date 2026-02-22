import React from "react";
import styles from "./firstScreen.module.css";
import ContactForm from "../../components/form/form";
import edenImage from "../../assets/עדן תדמית 2.png";

const FirstScreen = () => {
  return (
    <section className={styles.hero} dir="rtl">
      {/* Dark top band with scalloped bottom */}
      <div className={styles.topBand} />

      {/* Decorative background elements */}
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />
      <div className={styles.bgOrb3} />
      <div className={styles.noiseOverlay} />

      <div className={styles.container}>

        {/* Main headline */}
        <h1 className={styles.headline}>
          הדרך להפוך את התשוקה שלך
          <br />
          לעסק רווחי בתחום הביוטי
          <br />
          <span className={styles.highlightWrapper}>
            <span className={styles.highlightInner}>
              שמכניס 5 ספרות בחודש
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className={styles.subtitle}>
          (גם אם אין לך ניסיון בכלל וגם אם אין לך רקע בתחום)
        </p>

    

        {/* Video / Image area */}
        <div className={styles.imageSection}>
          <img src={edenImage} alt="עדן שמחייב" className={styles.heroImage} />
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