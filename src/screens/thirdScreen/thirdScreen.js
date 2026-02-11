import React, { useState } from "react";
import styles from "./thirdScreen.module.css";

const EDEN_PHONE = "972543414939";

const courses = [
  {
    id: "lips",
    title: "קורס איפור קבוע - שפתיים",
    meetings: "6 מפגשים",
    hours: "כ-3 שעות כל מפגש",
    location: "עפולה",
    time: "10:00 - 16:00",
    days: [
      {
        day: 1,
        title: "מפגש יומי",
        items: [
          { text: "הכרות ראשונה - תאוריה עיונית", icon: "📋" },
          { text: "עקרונות בסיסיים של צורת השפה, צבע ומרקם העור", icon: "✨" },
          { text: "הבנת הטכניקות והשיטות השונות", icon: "🔍" },
          { text: "שיטות לשיקום שפתיים ולטיפול בגבולות השפה", icon: "🎯" },
          { text: "מה זה המשחק הנכון בצורה ובצבע", icon: "🎨" },
          { text: "סוגי העור ושינויים והשפעותיהם", icon: "🧬" },
        ],
      },
      {
        day: 2,
        title: "מפגש יומי",
        items: [
          { text: "שעה ראשונה - שרטוט ומדידה", icon: "📐" },
          { text: "שעה שנייה - תרגול על דפי עבודה", icon: "✏️" },
          { text: "שעה שלישית - שרטוט ומדידה", icon: "📏" },
          { text: "שעה רביעית - למידה בחומרים / פיגמנטציה ממספר ימי השתלמות", icon: "🔬" },
          { text: "שעה חמישית - שיטות ברשימות רלוונטי ודיוקים נוספים", icon: "📸" },
          { text: "שעה שישית - מעשי על מודל/סטיסטית", icon: "💄" },
        ],
      },
    ],
  },
  {
    id: "brows",
    title: "קורס מיקרופיגמנטציה - גבות",
    meetings: "6 מפגשים",
    hours: "כ-3 שעות כל מפגש",
    location: "עפולה",
    time: "10:00 - 16:00",
    days: [
      {
        day: 1,
        title: "מפגש יומי",
        items: [
          { text: "שנוריות ראשונות - תאור קצר ועיונית", icon: "📋" },
          { text: "עקרונות בסיסיים של צורת הגבה, צבע ומרקם העור", icon: "✨" },
          { text: "הבנת הטכניקות והשיטות השונות", icon: "🔍" },
          { text: "שיטות לשיקום גבות ולטיפול בגבולות הגבה", icon: "🎯" },
          { text: "מה זה המשחק הנכון בצורה ובצבע", icon: "🎨" },
          { text: "סוגי העור ושינויים והשפעותיהם", icon: "🧬" },
          { text: "שעה שלישית - שרטוט ומדידה", icon: "📐" },
          { text: "שעה רביעית - למידה בחומרים / פיגמנטציה ממספר ימי השתלמות", icon: "🔬" },
          { text: "שעה חמישית - שיטות ברשימות רלוונטי ודיוקים נוספים", icon: "📸" },
          { text: "שעה שישית - מעשי על מודל/סטיסטית", icon: "💄" },
        ],
      },
    ],
  },
  {
    id: "natural-brows",
    title: "קורס עיצוב ושיקום גבות טבעיות",
    meetings: "2 מפגשים",
    hours: "6 שעות כל מפגש",
    location: "עפולה",
    time: "10:00 - 16:00",
    days: [
      {
        day: 1,
        title: "מפגש יומי",
        items: [
          { text: "שנוריות ראשונות - תאור קצר ועיונית", icon: "📋" },
          { text: "עקרונות בסיסיים של צורת הגבה, צבע ומרקם העור", icon: "✨" },
          { text: "הבנת הטכניקות והשיטות השונות", icon: "🔍" },
          { text: "שיטות לשיקום גבות ולטיפול בגבולות הגבה", icon: "🎯" },
          { text: "מה זה המשחק הנכון בצורה ובצבע", icon: "🎨" },
          { text: "סוגי העור ושינויים והשפעותיהם", icon: "🧬" },
          { text: "שעה שלישית - שרטוט ומדידה", icon: "📐" },
          { text: "שעה רביעית - למידה בחומרים / פיגמנטציה ממספר ימי השתלמות", icon: "🔬" },
          { text: "שעה חמישית - שיטות ברשימות רלוונטי ודיוקים נוספים", icon: "📸" },
          { text: "שעה שישית - מעשי על מודל/סטיסטית", icon: "💄" },
        ],
      },
    ],
  },
  {
    id: "eyeliner",
    title: "קורס איפור קבוע - אייליינר",
    meetings: "4 מפגשים",
    hours: "כ-3 שעות כל מפגש",
    location: "עפולה",
    time: "10:00 - 16:00",
    days: [
      {
        day: 1,
        title: "מפגש יומי",
        items: [
          { text: "הכרות ראשונה - תאוריה עיונית", icon: "📋" },
          { text: "עקרונות בסיסיים של צורת העין, צבע ומרקם העור", icon: "✨" },
          { text: "הבנת הטכניקות והשיטות השונות", icon: "🔍" },
          { text: "שיטות לשיקום ולטיפול באזור העיניים", icon: "🎯" },
          { text: "סוגי העור ושינויים והשפעותיהם", icon: "🧬" },
          { text: "שעה שלישית - שרטוט ומדידה", icon: "📐" },
          { text: "שעה רביעית - תרגול מעשי", icon: "✏️" },
        ],
      },
    ],
  },
];

const benefits = [
  {
    icon: "practice",
    title: "לימוד מעשי אמיתי",
    description:
      "תרגול על מודליסטיות אמיתיות, את יוצאת מוכנה לעבוד!",
  },
  {
    icon: "support",
    title: "ליווי גם אחרי הקורס",
    description:
      "אני לא נעלמת אחרי שהקורס נגמר - אני עונה, מתקנת, וזמינה תמיד",
  },
  {
    icon: "marketing",
    title: "חוברת שיווק",
    description:
      "אצלי לא תלמדי רק מקצוע - תלמדי גם איך להביא לקוחות ולבנות עסק רווחי",
  },
  {
    icon: "personal",
    title: "יחס אישי",
    description: "כל תלמידה מקבלת תשומת לב אישית",
  },
];

const benefitIcons = {
  practice: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  support: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  marketing: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  personal: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
};

const ThirdScreen = () => {
  const [openCourse, setOpenCourse] = useState(null);

  const toggleCourse = (id) => {
    setOpenCourse(openCourse === id ? null : id);
  };

  const handleWhatsApp = (courseName) => {
    const message = encodeURIComponent(
      `היי עדן הגעתי מהדף שלך, אשמח לשמוע על ${courseName}`
    );
    window.open(`https://wa.me/${EDEN_PHONE}?text=${message}`, "_blank");
  };

  const handleGeneralWhatsApp = () => {
    const message = encodeURIComponent(
      `היי עדן הגעתי מהדף שלך, אשמח לשמוע עוד פרטים`
    );
    window.open(`https://wa.me/${EDEN_PHONE}?text=${message}`, "_blank");
  };

  return (
    <section className={styles.section} dir="rtl">
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />

      <div className={styles.container}>
        {/* ===== Title ===== */}
        <div className={styles.headerBlock}>
          <h2 className={styles.sectionTitle}>אז מה בעצם לומדים..?</h2>
          <p className={styles.sectionDesc}>
            זיקקתי עבורך את הידע שצברתי בשנים האחרונות ל-4 קורסים מקיפים וסופר
            פרקטיים
          </p>
          <p className={styles.sectionDescSub}>
            לחצי על כל קורס ובחרי את המסלול שהכי מתאים לך:
          </p>
        </div>

        {/* ===== Course Accordions ===== */}
        <div className={styles.accordionList}>
          {courses.map((course) => (
            <div
              key={course.id}
              className={`${styles.accordionItem} ${
                openCourse === course.id ? styles.accordionOpen : ""
              }`}
            >
              {/* Accordion Header */}
              <button
                className={styles.accordionHeader}
                onClick={() => toggleCourse(course.id)}
              >
                <div className={styles.accordionHeaderContent}>
                  <h3 className={styles.courseName}>{course.title}</h3>
                  <p className={styles.courseMeta}>
                    {course.meetings}, {course.hours}
                  </p>
                </div>
                <div
                  className={`${styles.accordionIcon} ${
                    openCourse === course.id ? styles.accordionIconOpen : ""
                  }`}
                >
                  <span />
                  <span />
                </div>
              </button>

              {/* Accordion Body */}
              <div
                className={styles.accordionBody}
                style={{
                  maxHeight:
                    openCourse === course.id
                      ? `${course.days.length * 800 + 200}px`
                      : "0",
                }}
              >
                <div className={styles.accordionInner}>
                  {/* Course meta pills */}
                  <div className={styles.metaPills}>
                    <span className={styles.pill}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {course.location}
                    </span>
                    <span className={styles.pill}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                      {course.time}
                    </span>
                  </div>

                  {/* Daily sessions */}
                  {course.days.map((day) => (
                    <div key={day.day} className={styles.dayBlock}>
                      <div className={styles.dayHeader}>
                        <span className={styles.dayTitle}>מפגש יומי</span>
                        <span className={styles.dayNumber}>
                          {String(day.day).padStart(2, "0")}
                        </span>
                      </div>
                      <div className={styles.dayItems}>
                        {day.items.map((item, idx) => (
                          <div key={idx} className={styles.dayItem}>
                            <span className={styles.dayItemText}>
                              {item.text}
                            </span>
                            <span className={styles.dayItemIcon}>
                              {item.icon}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* WhatsApp CTA per course */}
                  <button
                    className={styles.courseCtaBtn}
                    onClick={() => handleWhatsApp(course.title)}
                  >
                    נשמע לי הכי מתאים עבורי!
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== Benefits Section ===== */}
        <div className={styles.benefitsSection}>
          <h3 className={styles.benefitsTitle}>כל תלמידה אצלי מקבלת:</h3>

          <div className={styles.benefitsGrid}>
            {benefits.map((b, idx) => (
              <div key={idx} className={styles.benefitCard}>
                <div className={styles.benefitIconWrapper}>
                  {benefitIcons[b.icon]}
                </div>
                <h4 className={styles.benefitCardTitle}>{b.title}</h4>
                <p className={styles.benefitCardDesc}>{b.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Bottom CTA ===== */}
        <div className={styles.bottomCta}>
          <p className={styles.bottomCtaText}>לא בטוחה מה מתאים לך? אני כאן בשבילך</p>
          <button
            className={styles.ctaButton}
            onClick={handleGeneralWhatsApp}
          >
            לשיחת ייעוץ חינם לחצי כאן
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThirdScreen;