import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import styles from "./firstScreen.module.css";
import ContactForm from "../../components/form/form";
import edenImage from "../../assets/עדן תדמית 2.webp";

const FirstScreen = ({ onImageLoad }) => {
  useEffect(() => {
    const sr = ScrollReveal({ reset: false });

    sr.reveal(`.${styles.headline}`, {
      origin: "bottom",
      distance: "40px",
      duration: 900,
      delay: 200,
      opacity: 0,
      easing: "ease-out",
    });

    sr.reveal(`.${styles.subtitle}`, {
      origin: "bottom",
      distance: "25px",
      duration: 600,
      delay: 500,
      opacity: 0,
      easing: "ease-out",
    });

    sr.reveal(`.${styles.imageFormBlock}`, {
      origin: "bottom",
      distance: "35px",
      duration: 800,
      delay: 700,
      opacity: 0,
      scale: 0.97,
      easing: "ease-out",
    });
  }, []);

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
          הדרך להפוך את האהבה שלך ליופי
          <br />
          לעסק שמכניס 5 ספרות בחודש
          <br />
          <span className={styles.highlightWrapper}>
            <span className={styles.highlightInner}>
              ולצאת עם מקצוע וביטחון בידיים
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className={styles.subtitle}>
          (ולא רק עם תעודה)
        </p>



        {/* Image + Form connected wrapper */}
        <div className={styles.imageFormBlock}>
          <div className={styles.imageSection}>
            <img src={edenImage} alt="עדן שמחייב" className={styles.heroImage} onLoad={onImageLoad} />
          </div>
          <div className={styles.formSection}>
            <ContactForm />
          </div>
        </div>



      </div>
    </section>
  );
};

export default FirstScreen;
