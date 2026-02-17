import React from "react";
import styles from "./testimonialsScreen.module.css";
import { worksImages } from "../../components/works/worksImages";

const EDEN_PHONE = "972543414939";

// Testimonials data
const testimonials = [
  {
    id: 1,
    text: "עדן שינתה לי את החיים! הקורס שלה נתן לי בדיוק את מה שחיפשתי - מקצוע אמיתי שאני אוהבת.",
    author: "שרה כהן",
  },
  {
    id: 2,
    text: "הליווי של עדן לא נגמר אחרי הקורס. היא תמיד שם בשבילי, עונה על כל שאלה ומכוונת אותי.",
    author: "מיכל לוי",
  },
  {
    id: 3,
    text: "תוך חודשיים כבר התחלתי לעבוד! הקורס של עדן נתן לי את כל הכלים והביטחון להתחיל.",
    author: "דנה רוזן",
  },
  {
    id: 4,
    text: "ההבדל בין הקורס של עדן לקורסים אחרים הוא שמיים וארץ. כאן באמת לומדים לעבוד.",
    author: "יעל כהן",
  },
  {
    id: 5,
    text: "עדן לא רק מלמדת - היא מלווה, מכוונת ומוודאת שאת באמת מצליחה. זה מה שעושה את ההבדל.",
    author: "רונית דוד",
  },
  {
    id: 6,
    text: "התחלתי בלי שום ניסיון ויצאתי עם מקצוע ביד. עדן נתנה לי את כל מה שצריך כדי להצליח.",
    author: "נועה אברהם",
  },
];

// Student works carousel data
const studentWorks = [
  { id: 1, src: "/images/student-work-1.jpg", alt: "עבודת תלמידה 1" },
  { id: 2, src: "/images/student-work-2.jpg", alt: "עבודת תלמידה 2" },
  { id: 3, src: "/images/student-work-3.jpg", alt: "עבודת תלמידה 3" },
  { id: 4, src: "/images/student-work-4.jpg", alt: "עבודת תלמידה 4" },
  { id: 5, src: "/images/student-work-5.jpg", alt: "עבודת תלמידה 5" },
  { id: 6, src: "/images/student-work-6.jpg", alt: "עבודת תלמידה 6" },
];

const TestimonialsScreen = () => {

  const handleWhatsApp = () => {
    const message = encodeURIComponent("היי עדן הגעתי מהדף שלך, בואי נדבר!");
    window.open(`https://wa.me/${EDEN_PHONE}?text=${message}`, "_blank");
  };

  return (
    <section className={styles.section} dir="rtl">
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />

      <div className={styles.container}>
        {/* Main Title */}
        <h2 className={styles.mainTitle}>
          בשנים האחרונות עברו תחתי אלפי נשים
        </h2>

        {/* Eden's Works Carousel - Infinite scroll */}
        <div className={styles.worksContainer}>
          <div className={styles.worksScrollTrack}>
            {/* First set */}
            <div className={styles.worksScrollContainer}>
              {worksImages.map((image, idx) => (
                <div key={`eden-1-${idx}`} className={styles.worksImageWrapper}>
                  <div className={styles.worksImagePlaceholder}>
                    <span>עבודה של עדן {idx + 1}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className={styles.worksScrollContainer}>
              {worksImages.map((image, idx) => (
                <div key={`eden-2-${idx}`} className={styles.worksImageWrapper}>
                  <div className={styles.worksImagePlaceholder}>
                    <span>עבודה של עדן {idx + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Students Section */}
        <div className={styles.studentsSection}>
          <h3 className={styles.studentsTitle}>ועשרות תלמידות</h3>
          
          <div className={styles.worksContainer}>
            <div className={styles.worksScrollTrackReverse}>
              {/* First set */}
              <div className={styles.worksScrollContainer}>
                {studentWorks.map((work) => (
                  <div key={`student-1-${work.id}`} className={styles.worksImageWrapper}>
                    <div className={styles.worksImagePlaceholder}>
                      <span>{work.alt}</span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Duplicate for seamless loop */}
              <div className={styles.worksScrollContainer}>
                {studentWorks.map((work) => (
                  <div key={`student-2-${work.id}`} className={styles.worksImageWrapper}>
                    <div className={styles.worksImagePlaceholder}>
                      <span>{work.alt}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className={styles.testimonialsSection}>
          <h3 className={styles.testimonialsTitle}>וזה מה שהיה להן לומר:</h3>
          
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={styles.testimonialCard}>
                <p className={styles.testimonialText}>{testimonial.text}</p>
                <p className={styles.testimonialAuthor}>- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <button className={styles.ctaButton} onClick={handleWhatsApp}>
          עדן בואי נדבר!
        </button>
      </div>
    </section>
  );
};

export default TestimonialsScreen;
