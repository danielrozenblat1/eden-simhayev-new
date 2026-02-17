import React, { useEffect, useRef, useState } from "react";
import styles from "./secondScreen.module.css";
import IconTextComponent from "../../components/can/can";

// Lordicon icon JSONs - importing from the icons folder
import heartIcon from "../../icons/heart.json"; // אוהבת יופי
import sunriseIcon from "../../icons/sunrise.json"; // קמה כל בוקר
import crownIcon from "../../icons/crown.json"; // חולמת על עסק

const SecondScreen = ({ onCtaClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  // Placeholder student work images - replace with actual paths
  const studentWorks = [
    { id: 1, src: "/images/student-work-1.jpg", alt: "עבודת תלמידה 1" },
    { id: 2, src: "/images/student-work-2.jpg", alt: "עבודת תלמידה 2" },
    { id: 3, src: "/images/student-work-3.jpg", alt: "עבודת תלמידה 3" },
    { id: 4, src: "/images/student-work-4.jpg", alt: "עבודת תלמידה 4" },
    { id: 5, src: "/images/student-work-5.jpg", alt: "עבודת תלמידה 5" },
    { id: 6, src: "/images/student-work-6.jpg", alt: "עבודת תלמידה 6" },
  ];

  const canItems = [
    {
      text: "את קמה כל בוקר עם תחושה שמגיע לך יותר - יותר כסף, יותר סיפוק, יותר חופש",
      icon: sunriseIcon,
    },
    {
      text: "את חולמת על עסק משלך, עם שעות גמישות והכנסה שתלויה רק בך",
      icon: crownIcon,
    },
    {
      text: "את אוהבת יופי, אוהבת לעשות לאחרות טוב - ויודעת שזה יכול להפוך להיות הרבה יותר מתחביב",
      icon: heartIcon,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev >= studentWorks.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev <= 0 ? studentWorks.length - 1 : prev - 1
    );
  };

  // Auto-play carousel with infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev >= studentWorks.length - 1 ? 0 : prev + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [studentWorks.length]);

  return (
    <section className={styles.section} dir="rtl">
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />

      <div className={styles.container}>
        {/* ===== PART 1: Dream Section ===== */}
        <div className={styles.dreamSection}>
          <h2 className={styles.sectionTitle}>
            אם את חולמת על קריירה בתחום הביוטי
          </h2>
          <p className={styles.signText}>סימן ש..</p>

          {/* Can items - 3 in a row on desktop */}
          <div className={styles.canGrid}>
            {/* Right side - "את אוהבת יופי" */}
            <div className={styles.canItem}>
              <IconTextComponent
                text={canItems[2].text}
                icon={canItems[2].icon}
              />
            </div>
            {/* Middle */}
            <div className={styles.canItem}>
              <IconTextComponent
                text={canItems[1].text}
                icon={canItems[1].icon}
              />
            </div>
            {/* Left */}
            <div className={styles.canItem}>
              <IconTextComponent
                text={canItems[0].text}
                icon={canItems[0].icon}
              />
            </div>
          </div>

          <p className={styles.possibleText}>
            וחשוב לי שתדעי ש
            <span className={styles.specialUnderline}>זה אפשרי!</span>
          </p>
        </div>

        {/* ===== PART 2: Eden's Story ===== */}
        <div className={styles.storySection}>
          <h2 className={styles.sectionTitle}>
            כי הייתי בדיוק במקום שאת נמצאת בו עכשיו
          </h2>

          <div className={styles.storyContent}>
            <p className={styles.storyText}>
              הייתי בלי ניסיון, בלי קליניקה, בלי שום דבר מובטח. רק אהבה ליופי
              ורצון לבנות משהו משלי.{" "}
              <span className={styles.storySubfont}>(שילמתי אלפי שקלים)</span>{" "}
              ועברתי קורסים שלא נתנו לי כלום, נכוויתי, כמעט ויתרתי -{" "}
              <span className={styles.storySubfont}>
                (אבל המשכתי עד שהגעתי למקום שרציתי)
              </span>
              .
            </p>
            <p className={styles.storyText}>
              היום אני עוזרת לנשים לעבור את המסע - בלי הטעויות שאני עברתי, ועם
              ליווי שמוודא שהן יוצאות ממני לא רק עם הטייטל, אלא עם{" "}
              <span className={styles.storySubfont}>
                (קריירה רווחית ומקצועיות שיא)
              </span>
            </p>
            <p className={styles.storyHighlight}>
              שיוצאות עם עבודות ברמה הזו:
            </p>
          </div>

          {/* Student work description */}
          <p className={styles.zeroExperience}>
            <span className={styles.storySubfont}>
              (גם כשרובן התחילו עם 0 ניסיון)
            </span>
          </p>

          {/* Student Works Carousel */}
          <div className={styles.carouselSection}>
            <div className={styles.carouselWrapper} ref={carouselRef}>
              {/* Left fade overlay */}
              <div className={styles.carouselFadeLeft} />
              
              <div className={styles.carouselTrack}>
                <div
                  className={styles.carouselSlider}
                  style={{
                    transform: `translateX(${currentSlide * 100}%)`,
                  }}
                >
                  {studentWorks.map((work) => (
                    <div key={work.id} className={styles.carouselSlide}>
                      <div className={styles.slideImageWrapper}>
                        {/* Replace with actual images */}
                        <div className={styles.slidePlaceholder}>
                          <span>{work.alt}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right fade overlay */}
              <div className={styles.carouselFadeRight} />
            </div>

            {/* Dots indicator */}
            <div className={styles.dotsWrapper}>
              {studentWorks.map((_, idx) => (
                <button
                  key={idx}
                  className={`${styles.dot} ${
                    idx === currentSlide ? styles.dotActive : ""
                  }`}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`תמונה ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondScreen;