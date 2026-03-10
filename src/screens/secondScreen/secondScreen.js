import React, { useRef, useEffect } from "react";
import { Player } from '@lordicon/react';
import ScrollReveal from "scrollreveal";
import styles from "./secondScreen.module.css";
import IconTextComponent from "../../components/edenCan/can";
import { worksImages } from "../../components/works/worksImages";
import heartIcon from "../../icons/heart.json";
import sunriseIcon from "../../icons/sunrise.json";
import suitcaseIcon from "../../icons/wired-outline-187-suitcase-hover-pinch (1).json";
import pinIcon from "../../icons/wired-outline-1567-bobby-pin-hover-pinch.json";
import balanceIcon from "../../icons/wired-outline-2534-work-life-balance-hover-pinch.json";
import wandIcon from "../../icons/wired-outline-2844-magic-wand-hover-pinch.json";

const timelineItems = [
  { icon: pinIcon, title: "מתמידה גם כשקשה", text: "לא מוותרת אחרי הפעם הראשונה שהדברים לא הולכים לפי התוכניות שלה, אלא מבינה שמקצוע אמיתי דורש תרגול, סבלנות והשקעה" },
  { icon: balanceIcon, title: "מתרגלת כל הזמן", text: "מי שיודעת שביטחון עצמי מגיע מתרגול אמיתי שוב ושוב בכל הזדמנות עד שהעבודה נהיית חלק ממך" },
  { icon: wandIcon, title: "מבינה שזה לא קסם", text: "הלקוחות לא יגיעו לבד - צריך לפרסם, לשווק את עצמך ולמשוך אליך לקוחות. מי שמבינה את זה ופועלת - מצליחה" },
];

const TimelineIcon = ({ icon }) => {
  const playerRef = useRef(null);
  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.playFromBeginning();
    }
  }, []);
  return (
    <Player ref={playerRef} icon={icon} size={30} colorize="#ffffff" />
  );
};

const TimelineSection = () => (
  <div className={styles.timeline}>
    {timelineItems.map((item, idx) => (
      <React.Fragment key={idx}>
        {idx > 0 && (
          <div className={styles.timelineDivider}>
            <span className={styles.timelineDividerDot} />
          </div>
        )}
        <div className={styles.timelineItem}>
          <div className={styles.timelineDot}>
            <TimelineIcon icon={item.icon} />
          </div>
          <div className={styles.timelineCard}>
            <h3 className={styles.timelineTitle}>{item.title}</h3>
            <p className={styles.timelineText}>{item.text}</p>
          </div>
        </div>
      </React.Fragment>
    ))}
  </div>
);

const SecondScreen = ({ onCtaClick }) => {
  useEffect(() => {
    const sr = ScrollReveal({ reset: false });

    sr.reveal(`.${styles.dreamSection} .${styles.sectionTitle}`, {
      origin: "bottom",
      distance: "30px",
      duration: 700,
      opacity: 0,
      easing: "ease-out",
    });

    sr.reveal(`.${styles.dreamSection} .${styles.signText}`, {
      origin: "bottom",
      distance: "20px",
      duration: 600,
      delay: 100,
      opacity: 0,
      easing: "ease-out",
    });

    sr.reveal(`.${styles.canItem}`, {
      origin: "bottom",
      distance: "35px",
      duration: 700,
      opacity: 0,
      interval: 120,
      easing: "ease-out",
    });

    sr.reveal(`.${styles.dreamSection} .${styles.possibleText}`, {
      origin: "bottom",
      distance: "20px",
      duration: 700,
      opacity: 0,
      scale: 0.95,
      easing: "ease-out",
    });

    sr.reveal(`.${styles.storySection} .${styles.storyText}`, {
      origin: "bottom",
      distance: "25px",
      duration: 700,
      opacity: 0,
      easing: "ease-out",
    });

    sr.reveal(`.${styles.storySection} .${styles.signText}`, {
      origin: "bottom",
      distance: "20px",
      duration: 600,
      opacity: 0,
      easing: "ease-out",
    });

    sr.reveal(`.${styles.storySection} .${styles.sectionTitle}`, {
      origin: "bottom",
      distance: "25px",
      duration: 700,
      opacity: 0,
      easing: "ease-out",
    });

    sr.reveal(`.${styles.timelineItem}`, {
      origin: "right",
      distance: "50px",
      duration: 700,
      opacity: 0,
      interval: 150,
      easing: "ease-out",
    });

    sr.reveal(`.${styles.storySection} .${styles.possibleText}`, {
      origin: "bottom",
      distance: "20px",
      duration: 600,
      opacity: 0,
      easing: "ease-out",
    });
  }, []);

  const canItems = [
    {
      text: "את קמה כל בוקר\nעם תחושה שמגיע לך\nיותר כסף, חופש וסיפוק",
      icon: sunriseIcon,
    },
    {
      text: "את חולמת על עסק משלך,\nעם שעות עבודה גמישות\nוהכנסה שתלויה רק בך",
      icon: suitcaseIcon,
    },
    {
      text: "את אוהבת יופי ויודעת שעבורך זה יכול להפוך להיות הרבה יותר מתחביב",
      icon: heartIcon,
    },
  ];

  return (
    <>
      <section className={styles.section} dir="rtl">
        <div className={styles.bgOrb1} />
        <div className={styles.bgOrb2} />

        <div className={styles.container}>
          {/* ===== PART 1: Dream Section ===== */}
          <div className={styles.dreamSection}>
            <h2 className={styles.sectionTitle}>
              לא הגעת לכאן סתם
            </h2>
            <p className={styles.signText}>את כאן מכמה סיבות פשוטות</p>

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
                  colors="primary:#C4727E,secondary:#C4727E"
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
            <p className={styles.storyText}>
              הייתי בדיוק במקום שאת נמצאת בו היום! התאהבתי בתחום, הבנתי שאני יכולה להגשים את עצמי דרכו והלכתי ללמוד במקום שקיבלתי הבטחה{" "}
              <span className={styles.strikethrough}>לחלום הורוד שכולנו מכירות</span>{" "}
              <span className={styles.storySubfont}>שתוך כמה ימים אני אצא מפוצצת לקוחות עם טכניקה מטורפת וביטחון בעצמי</span>
            </p>

            <p className={styles.signText}>
              והיום - בתור מדריכה שהובילה עשרות תלמידות אני רוצה לשקף לך את האמת כבר מעכשיו:
            </p>

            <h2 className={styles.sectionTitle}>
              מי שמצליחה בתחום היא מי ש..
            </h2>

            {/* ===== Timeline Boxes ===== */}
            <TimelineSection />

            <p className={styles.possibleText}>
              ושנייה לפני שנדבר על הכלללל...
            </p>

          </div>
        </div>
      </section>
    </>
  );
};

export const WorksCarousel = () => {
  const trackRef = useRef(null);
  const set1Ref = useRef(null);
  const posRef = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const SPEED = 0.5;

    const loop = () => {
      if (trackRef.current && set1Ref.current) {
        const loopWidth = set1Ref.current.offsetWidth;
        posRef.current -= SPEED;
        if (posRef.current <= -loopWidth) {
          posRef.current += loopWidth;
        }
        trackRef.current.style.transform = `translateX(${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className={styles.worksContainer}>
      <div ref={trackRef} className={styles.worksScrollTrack}>
        <div ref={set1Ref} className={styles.worksScrollContainer}>
          {worksImages.map((img, index) => (
            <div key={`a-${index}`} className={styles.worksImageWrapper}>
              <img src={img} alt={`עבודה ${index + 1}`} className={styles.worksImage} loading="lazy" />
            </div>
          ))}
        </div>
        <div className={styles.worksScrollContainer}>
          {worksImages.map((img, index) => (
            <div key={`b-${index}`} className={styles.worksImageWrapper}>
              <img src={img} alt={`עבודה ${index + 1}`} className={styles.worksImage} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondScreen;
