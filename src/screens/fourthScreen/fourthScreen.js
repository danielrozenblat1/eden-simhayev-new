import React, { useEffect, useRef } from "react";
import styles from "./fourthScreeen.module.css";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EDEN_PHONE = "972543414939";

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
            toggleActions: "play none none reverse"
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
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleWhatsApp = () => {    
    const message = encodeURIComponent(
      "היי עדן הגעתי מהדף שלך, אשמח להתחיל את המסע!"
    );
    window.open(`https://wa.me/${EDEN_PHONE}?text=${message}`, "_blank");
  };

  return (
    <section ref={containerRef} className={styles.section} dir="rtl" id="מי אנחנו">
      <div className={styles.container}>
        {/* Content section - left side */}
        <div className={styles.content}>
          <h2 className={styles.mainTitle}>נעים מאוד, עדן שמחייב</h2>

          <div className={styles.quoteContainer} ref={quoteRef}>
            <p className={styles.quote}>
              "אני כאן כדי להפוך את מה שכולם אומרים לך 'את כל כך טובה בזה' – למקצוע שמכניס לך 5 ספרות בחודש"
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

            <div className={styles.divider}></div>

            <p className={styles.paragraphBold} ref={(el) => strongTextRefs.current[0] = el}>
              ואז הגיעה ההתרסקות.
            </p>

            <p className={styles.paragraph}>
              <span className={styles.accent}>(שילמתי אלפי שקלים)</span> על
              קורסים שלימדו אותי לעבוד עם חומרים לא בריאים ולא אמיתיים. אף
              אחד לא הסביר לי למה עושים מה שעושים. אף אחד לא היה שם אחרי
              שהקורס נגמר. יצאתי עם תעודה - ובלי שום ביטחון לגעת בלקוחה
              אמיתית.
            </p>

            <div className={styles.divider}></div>

            <p className={styles.paragraph}>
              כמעט ויתרתי.{" "}
              <span className={styles.accent}>
                (אבל משהו בפנים לא נתן לי לעזוב)
              </span>
              . המשכתי, עשיתי השתלמויות, עבדתי עם מאות לקוחות, למדתי
              מטעויות - עד שהגעתי למקום שרציתי.
            </p>

            <div className={styles.divider}></div>

            <p className={styles.paragraphBold} ref={(el) => strongTextRefs.current[1] = el}>
              הבטחתי לעצמי שאני אהיה המדריכה שהלוואי והייתה לי בהתחלה -
              מישהי שמלמדת באמת, מסבירה עד הסוף, ולא נעלמת ברגע שנותנים
              תעודה.
            </p>

            <div className={styles.divider}></div>

            <p className={styles.paragraph}>
              היום אני עוזרת לנשים לעבור את אותו המסע - בלי הטעויות שאני
              עברתי, בלי לבזבז אלפים על קורסים ריקים, ועם ליווי צמוד שמוודא
              שהן יוצאות לא רק עם תעודה, אלא עם{" "}
              <span className={styles.accent}>
                (קריירה רווחית ומקצועיות שיא)
              </span>
              .
            </p>

            <div className={styles.divider}></div>

            <p className={styles.closingLine} ref={(el) => strongTextRefs.current[2] = el}>
              כי בעיניי? תעודה בלי ביטחון בידיים - לא שווה את הנייר שהיא
              מודפסת עליו.
            </p>
          </div>

          <button className={styles.ctaButton} onClick={handleWhatsApp}>
            <span className={styles.buttonIcon}>💬</span>
            בואי נדבר, אני כאן בשבילך
          </button>
        </div>

        {/* Image section - right side */}
        <div className={styles.imageWrapper}>
          <div className={styles.imagePlaceholder}>
            <span>תמונה של עדן שמחייב</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthScreen;