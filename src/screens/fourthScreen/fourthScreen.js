import React, { useEffect, useRef } from "react";
import styles from "./fourthScreeen.module.css";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import edenImage from "../../assets/עדן תדמית 1.webp";

gsap.registerPlugin(ScrollTrigger);

const FourthScreen = () => {
  const containerRef = useRef(null);
  const quoteRef = useRef(null);
  const strongTextRefs = useRef([]);

  useEffect(() => {
    if (quoteRef.current) {
      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, scale: 0.8, rotationY: 15 },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: quoteRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
          }
        }
      );
    }

    strongTextRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { opacity: 0, x: -50, scale: 0.9 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
            delay: index * 0.2,
            scrollTrigger: {
              trigger: ref,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const scrollToForm = () => {
    const form = document.getElementById('טופס');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section ref={containerRef} className={styles.section} dir="rtl" id="מי אנחנו">

      {/* ===== Original two-column intro ===== */}
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.mainTitle}>נעים מאוד, עדן שמחייב</h2>

          <div className={styles.quoteContainer} ref={quoteRef}>
            <p className={styles.quote}>
              "עברתי את כל הטעויות, נכשלתי, נכוויתי ושילמתי את המחיר - כדי שאת לא תצטרכי"
            </p>
          </div>

          <div className={styles.textBlock}>
            <p className={styles.paragraph}>
              תמיד אהבתי יופי. מגיל צעיר הייתי קונה מלא איפור, מתאפרת
              לשעות, עושה לעצמי ריסים - פשוט חייתי את זה.
            </p>

            <div className={styles.divider}></div>

            <p className={styles.paragraph}>
              יום אחד נשארו לי ריסים שקניתי לעצמי, ועשיתי לאחותי. חברה שלה
              ראתה ושאלה:{" "}
              <span className={styles.quoteInline}>
                "מי עשה לך את הריסים האלה? אני רוצה בדיוק ככה."
              </span>
            </p>

            <div className={styles.divider}></div>

            <p className={styles.paragraph}>
              ברגע הזה, בלי שבכלל תכננתי - הבנתי שאני רוצה ללמוד את זה
              לעומק. הייתי מוכנה לסוע שעות ולעשות כל מה שצריך כדי ללמוד את
              המקצוע. בלי קליניקה, בלי ניסיון, בלי כלום - רק אהבה ורצון.
            </p>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <div className={styles.imageCard}>
            <div className={styles.imageFrame}>
              <img src={edenImage} alt="עדן שמחייב" className={styles.edenImage} loading="lazy" />
            </div>
            <div className={styles.ribbon}>
              <span>Eden Simhayev</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Framed card: ההתרסקות + rest of story ===== */}
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <p className={styles.crashTitle} ref={(el) => strongTextRefs.current[0] = el}>
            ואז הגיעה ההתרסקות.
          </p>

          <div className={styles.divider}></div>

          <p className={styles.cardParagraph}>
            <span className={styles.highlight}>שילמתי אלפי שקלים</span> על
            קורסים שלימדו אותי לעבוד עם חומרים לא בריאים ולא אמיתיים. אף
            אחד לא הסביר לי למה עושים מה שעושים. אף אחד לא היה שם אחרי
            שהקורס נגמר. יצאתי עם תעודה - ובלי שום ביטחון לגעת בלקוחה
            אמיתית.
          </p>

          <div className={styles.divider}></div>

          <p className={styles.cardParagraph}>
            כמעט ויתרתי.{" "}
            <span className={styles.highlight}>
              אבל משהו בפנים לא נתן לי לעזוב
            </span>
            . המשכתי, עשיתי השתלמויות, עבדתי עם מאות לקוחות, למדתי
            מטעויות - עד שהגעתי למקום שרציתי.
          </p>

          <div className={styles.divider}></div>

          <p className={styles.cardParagraphBold} ref={(el) => strongTextRefs.current[1] = el}>
            הבטחתי לעצמי שאני אהיה המדריכה שהלוואי והייתה לי בהתחלה -
            מישהי שמלמדת באמת, מסבירה עד הסוף, ולא נעלמת ברגע שנותנים
            תעודה.
          </p>

          <div className={styles.divider}></div>

          <p className={styles.cardParagraph}>
            היום אני עוזרת לנשים לעבור את אותו המסע - בלי הטעויות שאני
            עברתי, בלי לבזבז אלפים על קורסים ריקים, ועם ליווי צמוד שמוודא
            שהן יוצאות לא רק עם תעודה, אלא עם{" "}
            <span className={styles.highlight}>
              קריירה רווחית ומקצועיות שיא
            </span>
            .
          </p>

          <div className={styles.divider}></div>

          <p className={styles.closingLine} ref={(el) => strongTextRefs.current[2] = el}>
            כי בעיניי? תעודה בלי ביטחון בידיים - לא שווה את הנייר שהיא
            מודפסת עליו.
          </p>

          <button className={styles.ctaButton} onClick={scrollToForm}>
            בואי נדבר, אני כאן בשבילך
          </button>
        </div>
      </div>

    </section>
  );
};

export default FourthScreen;
