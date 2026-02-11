import React from "react";
import styles from "./fourthScreeen.module.css";

const EDEN_PHONE = "972543414939";

const FourthScreen = () => {
  const handleWhatsApp = () => {    
    const message = encodeURIComponent(
      "היי עדן הגעתי מהדף שלך, אשמח להתחיל את המסע!"
    );
    window.open(`https://wa.me/${EDEN_PHONE}?text=${message}`, "_blank");
  };

  return (
    <section className={styles.section} dir="rtl">
      <div className={styles.bgShape1} />
      <div className={styles.bgShape2} />

      <div className={styles.container}>
        {/* Image placeholder */}
        <div className={styles.imageCol}>
          <div className={styles.imagePlaceholder}>
            <span>תמונה של עדן שמחייכת</span>
          </div>
        </div>

        {/* Story content */}
        <div className={styles.storyCol}>
          <div className={styles.storyContent}>
            <p className={styles.paragraph}>
              תמיד אהבתי יופי. מגיל צעיר הייתי קונה מלא איפור, מתאפרת
              לשעות, עושה לעצמי ריסים - פשוט חייתי את זה.
            </p>

            <p className={styles.paragraph}>
              יום אחד נשארו לי ריסים שקניתי לעצמי, ועשיתי לאחותי. חברה שלה
              ראתה ושאלה:{" "}
              <span className={styles.quote}>
                "מי עשה לך את הריסים האלה? אני רוצה בדיוק ככה."
              </span>
            </p>

            <p className={styles.paragraph}>
              ברגע הזה, בלי שבכלל תכננתי - הבנתי שאני רוצה ללמוד את זה
              לעומק. הייתי מוכנה לסוע שעות ולעשות כל מה שצריך כדי ללמוד את
              המקצוע. בלי קליניקה, בלי ניסיון, בלי כלום - רק אהבה ורצון.
            </p>

            <p className={styles.paragraphBold}>ואז הגיעה ההתרסקות.</p>

            <p className={styles.paragraph}>
              <span className={styles.accent}>(שילמתי אלפי שקלים)</span> על
              קורסים שלימדו אותי לעבוד עם חומרים לא בריאים ולא אמיתיים. אף
              אחד לא הסביר לי למה עושים מה שעושים. אף אחד לא היה שם אחרי
              שהקורס נגמר. יצאתי עם תעודה - ובלי שום ביטחון לגעת בלקוחה
              אמיתית.
            </p>

            <p className={styles.paragraph}>
              כמעט ויתרתי.{" "}
              <span className={styles.accent}>
                (אבל משהו בפנים לא נתן לי לעזוב)
              </span>
              . המשכתי, עשיתי השתלמויות, עבדתי עם מאות לקוחות, למדתי
              מטעויות - עד שהגעתי למקום שרציתי.
            </p>

            <p className={styles.paragraphBold}>
              הבטחתי לעצמי שאני אהיה המדריכה שהלוואי והייתה לי בהתחלה -
              מישהי שמלמדת באמת, מסבירה עד הסוף, ולא נעלמת ברגע שנותנים
              תעודה.
            </p>

            <p className={styles.paragraph}>
              היום אני עוזרת לנשים לעבור את אותו המסע - בלי הטעויות שאני
              עברתי, בלי לבזבז אלפים על קורסים ריקים, ועם ליווי צמוד שמוודא
              שהן יוצאות לא רק עם תעודה, אלא עם{" "}
              <span className={styles.accent}>
                (קריירה רווחית ומקצועיות שיא)
              </span>
              .
            </p>

            <p className={styles.closingLine}>
              כי בעיניי? תעודה בלי ביטחון בידיים - לא שווה את הנייר שהיא
              מודפסת עליו.
            </p>
          </div>

          <button className={styles.ctaButton} onClick={handleWhatsApp}>
            בואי נתחיל את המסע שלך!
          </button>
        </div>
      </div>
    </section>
  );
};

export default FourthScreen;