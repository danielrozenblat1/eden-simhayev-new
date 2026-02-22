import React from "react";
import styles from "./secondScreen.module.css";
import IconTextComponent from "../../components/can/can";
import { worksImages } from "../../components/works/worksImages";

// Lordicon icon JSONs - importing from the icons folder
import heartIcon from "../../icons/heart.json"; // אוהבת יופי
import sunriseIcon from "../../icons/sunrise.json"; // קמה כל בוקר
import crownIcon from "../../icons/crown.json"; // חולמת על עסק

const SecondScreen = ({ onCtaClick }) => {

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

          {/* Student Works Carousel - Infinite Scroll */}
          <div className={styles.carouselSection}>
            <div className={styles.worksContainer}>
              <div className={styles.worksScrollTrack}>
                {/* Set 1 */}
                <div className={styles.worksScrollContainer}>
                  {worksImages.map((img, index) => (
                    <div key={`set1-${index}`} className={styles.worksImageWrapper}>
                      <img
                        src={img}
                        alt={`עבודה ${index + 1}`}
                        className={styles.worksImage}
                      />
                    </div>
                  ))}
                </div>
                {/* Set 2 - duplicate for seamless loop */}
                <div className={styles.worksScrollContainer}>
                  {worksImages.map((img, index) => (
                    <div key={`set2-${index}`} className={styles.worksImageWrapper}>
                      <img
                        src={img}
                        alt={`עבודה ${index + 1}`}
                        className={styles.worksImage}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondScreen;