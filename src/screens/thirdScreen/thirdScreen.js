import React, { useState, useRef, useEffect, useCallback } from "react";
import { Player } from '@lordicon/react';
import styles from "./thirdScreen.module.css";
import pinkClockIcon from "../../icons/pinkclock.json";
import pinkChatIcon from "../../icons/pinkchat.json";
import pinkNotebookIcon from "../../icons/pinknotebook.json";
import pinkHeartIcon from "../../icons/pinkheart.json";

const EDEN_PHONE = "972543414939";

const courses = [
  {
    id: "eyelash-extension",
    title: "קורס הדבקת ריסים בשיטה החדשנית – שיטת ES",
    meetings: "יום אחד",
    hours: "יום מלא",
    location: "דרום תל אביב",
    time: "יום אחד בלבד",
    price: "2,300₪",
    deposit: "400₪",
    days: [
      {
        day: 1,
        title: "חלק עיוני – ידע מקצועי מקיף",
        items: [
          { text: "מהי הדבקת ריסים בשיטה החדשנית ES ומה מייחד אותה", icon: "📚" },
          { text: "מבנה הריס ושלבי צמיחתו", icon: "🔬" },
          { text: "תיאום תור והכנת הלקוחה לטיפול", icon: "📅" },
          { text: "מקרים חריגים – מתי לא נטפל ומהי חלופה מומלצת", icon: "⚠️" },
          { text: "שאלון רפואי וחשיבותו לפני טיפול", icon: "📋" },
          { text: "כלי עבודה, סטריליות, חיטוי ושמירה על היגיינה", icon: "🧼" },
          { text: "התאמת טיפול – למי מתאימה הדבקת ריסים ולמי לא", icon: "👤" },
          { text: "תיאום ציפיות והתאמת סגנון הדבקה ללקוחה", icon: "💬" },
          { text: "הוראות תחזוקה ושימור הריסים לאחר הטיפול", icon: "💆" },
          { text: "הסרה נכונה ובריאה של ריסים – ללא גרימת נזק", icon: "✂️" },
          { text: "סוגי ריסים וסוגי דבקים – התאמה נכונה לעבודה מקצועית", icon: "🎨" },
          { text: "חיזוק ההדבקה וניקוי שאריות דבק", icon: "🔧" },
          { text: "סגנונות הדבקה, התאמת אורכים ומבנה העין", icon: "👁️" },
          { text: "תיקוני עיניים ואיזון מראה", icon: "✨" },
          { text: "סוגי אפקטים נפוצים", icon: "🌟" },
          { text: "עבודה על לקוחה עם הדבקה קיימת ממטפלת אחרת", icon: "🔄" },
          { text: "הבדלים בין הדבקה להלחמה", icon: "🔍" },
          { text: "שלבי עבודה נכונה – מהכנה ועד סיום", icon: "📝" },
          { text: "ציוד ומוצרים חובה לעבודה מקצועית", icon: "🛠️" },
        ],
      },
      {
        day: 2,
        title: "חלק מעשי – פרקטיקה מלאה",
        items: [
          { text: "הדגמה מלאה שלי על מודליסטית", icon: "👩‍🏫" },
          { text: "תרגול מעשי על בובה", icon: "🎭" },
          { text: "עבודה על 2 מודליסטיות לצורך בניית תיק עבודות מקצועי", icon: "💼" },
        ],
      },
    ],
    kit: [
      "10 חבילות ריסים לבחירה",
      "דבק שחור + דבק לבן",
      "פינצטה ייעודית להדבקת ריסים",
      "פדים ללא סיבים + פדים קוסמטיים",
      "תחתיות עיניים + פלסטר רפואי",
      "בונדר",
      "רימובר ייעודי",
      "שמפו ריסים + מברשת ייעודית",
      "ספריי אלכוהול",
      "מצמיד ריסים",
      "מיקרובראשים + אפליקטורים",
      "מאוורר",
      "מראה",
    ],
    courseType: "קורס 1 על 1 - יחס אישי, פרטני ומקצועי - ליווי צמוד לאורך כל הדרך – גם אחרי הקורס",
  },
  {
    id: "eyelash-lift",
    title: "קורס הרמת ריסים בשיטה המקסימלית",
    meetings: "יום אחד",
    hours: "יום מלא",
    location: "דרום תל אביב",
    time: "יום אחד בלבד",
    price: "3,600₪",
    deposit: "400₪",
    days: [
      {
        day: 1,
        title: "חלק עיוני – ידע יסודי ומקצועי",
        items: [
          { text: "מבנה הריס ותפקידו", icon: "🔬" },
          { text: "מחזורי צמיחת הריסים ופרקי זמן", icon: "⏱️" },
          { text: "עקרונות בסיס בטיפול הרמת ריסים", icon: "📚" },
          { text: "סוגי ריסים וכיווני צמיחתם", icon: "👁️" },
          { text: "מצבים מורכבים ואתגרים בהרמת ריסים", icon: "⚠️" },
          { text: "סוגי הרמות ריסים והתאמה ללקוחה", icon: "🎯" },
          { text: "אפקס – מה זה, למה זה חשוב ואיך מאתרים נכון", icon: "📍" },
          { text: "מיקום ובחירת שתל (סיליקון) בהתאם למבנה העין והריס", icon: "🔍" },
          { text: "מריחת חומרים – דיוק, מינונים וטכניקה נכונה", icon: "🎨" },
          { text: "אבחון מוכנות הריס לטיפול", icon: "✅" },
          { text: "הוראות לפני טיפול והנחיות ללקוחה לאחריו", icon: "📋" },
          { text: "תיקון הרמת ריסים – מתי, איך ובטוח", icon: "🔧" },
          { text: "שלבי עבודה מלאים לטיפול הרמת ריסים", icon: "📝" },
          { text: "זמני עבודה נכונים לכל שלב", icon: "⏰" },
          { text: "איסורים, רגישויות והתוויות נגד", icon: "🚫" },
          { text: "יתרונות וחסרונות בטיפול הרמת ריסים", icon: "⚖️" },
        ],
      },
      {
        day: 2,
        title: "חלק מעשי – פרקטיקה מקצועית",
        items: [
          { text: "הדגמה מלאה שלי על מודליסטית", icon: "👩‍🏫" },
          { text: "תרגול מעשי מלא על 2 מודליסטיות", icon: "💼" },
        ],
      },
    ],
    kit: [
      "חומרים 1 | 2 | 3",
      "4 סוגי סיליקונים – 2 ליפט + 2 מעוגל",
      "תופסנים",
      "תבנית חומרים",
      "פינצטה ייעודית להרמת ריסים",
      "צבע לריסים + חמצן",
      "כוסית ערבוב + מכחול",
      "דבק נוזלי",
      "תחתיות עיניים + פלסטר רפואי",
      "פדים קוסמטיים",
      "מברשת למריחת החומר",
      "שמפו לניקוי + מקציף",
      "מיקרובראשים + שפתוניות",
      "מסרקונים – 2 סוגים",
    ],
    courseType: "קורס 1 על 1 - יחס אישי, פרטני ומקצועי - ליווי צמוד לאורך כל הדרך – גם לאחר סיום הקורס",
  },
  {
    id: "brow-lift",
    title: "קורס הרמת גבות",
    meetings: "יום אחד",
    hours: "יום מלא",
    location: "דרום תל אביב",
    time: "יום אחד בלבד",
    price: "2,600₪ (כולל ערכה)",
    priceWithoutKit: "1,900₪ (ללא ערכה)",
    deposit: "400₪",
    days: [
      {
        day: 1,
        title: "חלק עיוני – יסודות ודיוק מקצועי",
        items: [
          { text: "היכרות עם טיפול הרמת גבות – מטרות ותוצאות", icon: "📚" },
          { text: "מבנה השערה והעור באזור הגבה", icon: "🔬" },
          { text: "ציוד נדרש לביצוע טיפול מקצועי", icon: "🛠️" },
          { text: "חומרים להרמת גבות – היכרות, שימוש והתאמה", icon: "🧪" },
          { text: "איסורים, רגישויות ואלרגיות – בטיחות מעל הכול", icon: "⚠️" },
          { text: "התאמת הטיפול ללקוחה ואבחון מקדים", icon: "👤" },
          { text: "הוראות ללקוחה לפני טיפול", icon: "📋" },
          { text: "הוראות ללקוחה לאחר הטיפול", icon: "💆" },
          { text: "שלבי העבודה לאורך טיפול הרמת גבות – משלב ההכנה ועד סיום", icon: "📝" },
          { text: "טעויות נפוצות ואיך להימנע מהן", icon: "❌" },
        ],
      },
      {
        day: 2,
        title: "חלק מעשי – פרקטיקה מלאה",
        items: [
          { text: "הדגמה מלאה שלי על מודליסטית", icon: "👩‍🏫" },
          { text: "עבודה מעשית על 2 מודליסטיות", icon: "💼" },
        ],
      },
    ],
    kit: [
      "חומרים 1 | 2 | 3",
      "בוטוקס לגבות",
      "צבע לגבות + חמצן",
      "כוסית ערבוב + מכחול",
      "ניילון נצמד לגבות",
      "מברשות סיליקון",
      "שמפו לניקוי",
      "פדים קוסמטיים",
      "אפליקטורים",
      "מסרקונים",
    ],
    courseType: "קורס 1 על 1 - יחס אישי, פרטני ומקצועי - ליווי צמוד לאורך כל הדרך – גם לאחר הקורס",
  },
  {
    id: "natural-brows",
    title: "קורס עיצוב ושיקום הגבה הטבעית",
    meetings: "4-5 שעות",
    hours: "יום אחד",
    location: "תל אביב",
    time: "יום אחד בלבד",
    price: "2,200₪",
    deposit: "400₪",
    days: [
      {
        day: 1,
        title: "חלק עיוני – יסודות ודיוק בעבודה",
        items: [
          { text: "היכרות עם עולם עיצוב ושיקום הגבה הטבעית", icon: "📚" },
          { text: "מבנה הגבה, צמיחה והשפעת הטיפול על מראה הפנים", icon: "🔬" },
          { text: "עבודה נכונה עם שעווה, פינצטה ומספריים", icon: "🛠️" },
          { text: "שיטת הסרטוט המקצועית – נקודות A | B | C", icon: "📐" },
          { text: "התאמת מבנה הגבה למבנה הפנים", icon: "👤" },
          { text: "גזירה נכונה ומריטה מדויקת – ללא פגיעה בצמיחה", icon: "✂️" },
          { text: "עבודה אחידה, סימטרית ומקצועית", icon: "✨" },
          { text: "צביעת גבות – התאמת גוון, עבודה בטוחה ותוצאה טבעית", icon: "🎨" },
          { text: "טעויות נפוצות בעיצוב גבות ואיך להימנע מהן", icon: "❌" },
          { text: "הוראות ללקוחה לפני ואחרי טיפול", icon: "📋" },
        ],
      },
      {
        day: 2,
        title: "חלק מעשי – פרקטיקה מלאה",
        items: [
          { text: "תרגול מעשי מקצועי", icon: "💼" },
          { text: "עבודה על 2 מודליסטיות", icon: "👥" },
          { text: "דגש על בניית ביטחון, יד יציבה ותוצאה מדויקת", icon: "🎯" },
        ],
      },
    ],
    kit: [
      "שעווה תחמוצת אבץ",
      "שפדולות + רצועות שעווה",
      "מחמם שעווה",
      "פינצטה + מספריים",
      "מראה",
      "מקלוני עץ",
      "פדים קוסמטיים",
      "מברשת צבע + כוסית ערבוב",
      "צבע לגבות + חמצן",
      "מסרקונים",
      "עט סרטוט ורוד",
    ],
    courseType: "קורס 1 על 1 - יחס אישי, פרטני ומדויק - ייעוץ, הכוונה וליווי צמוד – גם לאחר סיום הקורס - ערכת ציוד מפוארת לתחילת עבודה מיידית",
    certificate: "קבלת תעודת הסמכה מקצועית מטעמי - הכנה ליציאה לעבודה מידית בתחום",
  },
];

const benefits = [
  {
    icon: pinkClockIcon,
    title: "לימוד מעשי אמיתי",
    description: "תרגול על מודליסטיות אמיתיות, את יוצאת מוכנה לעבוד!",
  },
  {
    icon: pinkChatIcon,
    title: "ליווי גם אחרי הקורס",
    description: "אני לא נעלמת אחרי שהקורס נגמר - אני עונה, מתקנת, וזמינה תמיד",
  },
  {
    icon: pinkNotebookIcon,
    title: "חוברת שיווק",
    description: "אצלי לא תלמדי רק מקצוע - תלמדי גם איך להביא לקוחות ולבנות עסק רווחי",
  },
  {
    icon: pinkHeartIcon,
    title: "יחס אישי",
    description: "כל תלמידה מקבלת תשומת לב אישית",
  },
];

const BenefitCard = ({ icon, title, description }) => {
  const playerRef = useRef(null);
  
  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.playFromBeginning();
    }
  }, []);
  
  return (
    <div className={styles.benefitCard}>
      <div className={styles.benefitIconWrapper}>
        <Player
          ref={playerRef}
          icon={icon}
          size={44}
          colorize="#C4727E"
        />
      </div>
      <h4 className={styles.benefitCardTitle}>{title}</h4>
      <p className={styles.benefitCardDesc}>{description}</p>
    </div>
  );
};

const ThirdScreen = () => {
  const [openCourse, setOpenCourse] = useState(null);
  const bodyRefs = useRef({});

  const toggleCourse = useCallback((id) => {
    setOpenCourse((prev) => (prev === id ? null : id));
  }, []);

  // Scroll the opened accordion into view after it opens
  useEffect(() => {
    if (openCourse && bodyRefs.current[openCourse]) {
      setTimeout(() => {
        const el = bodyRefs.current[openCourse];
        if (el && el.parentElement) {
          el.parentElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 350);
    }
  }, [openCourse]);

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
          <h2 className={styles.sectionTitle}>
            וכולן, אבל כולן עברו את אחת מהדרכים הבאות
          </h2>
          <div className={styles.decorativeLine} />
        </div>

        {/* ===== Course Accordions ===== */}
        <div className={styles.accordionList}>
          {courses.map((course) => {
            const isOpen = openCourse === course.id;
            return (
              <div
                key={course.id}
                className={`${styles.accordionItem} ${isOpen ? styles.accordionOpen : ""}`}
              >
                {/* Accordion Header */}
                <button
                  className={styles.accordionHeader}
                  onClick={() => toggleCourse(course.id)}
                  aria-expanded={isOpen}
                >
                  <div className={styles.accordionHeaderContent}>
                    <h3 className={styles.courseName}>{course.title}</h3>
                    <div className={styles.courseMetaRow}>
                      <span className={styles.courseMetaTag}>{course.meetings}</span>
                      <span className={styles.courseMetaDot}>·</span>
                      <span className={styles.courseMetaTag}>{course.location}</span>
                      {course.price && (
                        <>
                          <span className={styles.courseMetaDot}>·</span>
                          <span className={styles.courseMetaPrice}>{course.price}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div
                    className={`${styles.accordionIcon} ${isOpen ? styles.accordionIconOpen : ""}`}
                  >
                    <span />
                    <span />
                  </div>
                </button>

                {/* Accordion Body - uses scrollHeight for perfect fit */}
                <div
                  ref={(el) => (bodyRefs.current[course.id] = el)}
                  className={styles.accordionBody}
                  style={{
                    maxHeight: isOpen
                      ? `${bodyRefs.current[course.id]?.scrollHeight || 9999}px`
                      : "0",
                  }}
                >
                  <div className={styles.accordionInner}>
                    {/* Deposit */}
                    {course.deposit && (
                      <p className={styles.depositText}>
                        🔒 לשריון תאריך – מקדמה על סך {course.deposit}
                      </p>
                    )}

                    {/* Price without kit */}
                    {course.priceWithoutKit && (
                      <p className={styles.altPriceText}>
                        {course.priceWithoutKit}
                      </p>
                    )}

                    {/* Daily sessions */}
                    {course.days.map((day) => (
                      <div key={day.day} className={styles.dayBlock}>
                        <div className={styles.dayHeader}>
                          <span className={styles.dayNumber}>
                            {String(day.day).padStart(2, "0")}
                          </span>
                          <span className={styles.dayTitle}>{day.title}</span>
                        </div>
                        <div className={styles.dayItems}>
                          {day.items.map((item, idx) => (
                            <div key={idx} className={styles.dayItem}>
                              <span className={styles.dayItemIcon}>{item.icon}</span>
                              <span className={styles.dayItemText}>{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}

                    {/* Kit */}
                    {course.kit && course.kit.length > 0 && (
                      <div className={styles.kitBlock}>
                        <h4 className={styles.kitTitle}>
                          🎁 ערכה מקצועית מלאה (כלולה בקורס)
                        </h4>
                        <ul className={styles.kitList}>
                          {course.kit.map((item, idx) => (
                            <li key={idx} className={styles.kitItem}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Course type */}
                    {course.courseType && (
                      <div className={styles.infoCard}>
                        <h4 className={styles.infoCardTitle}>🤍 אופי הקורס</h4>
                        <p className={styles.infoCardText}>{course.courseType}</p>
                      </div>
                    )}

                    {/* Certificate */}
                    {course.certificate && (
                      <div className={styles.infoCardHighlight}>
                        <h4 className={styles.infoCardTitle}>🎓 תעודה והסמכה</h4>
                        <p className={styles.infoCardText}>{course.certificate}</p>
                      </div>
                    )}

                    {/* CTA */}
                    <button
                      className={styles.courseCtaBtn}
                      onClick={() => handleWhatsApp(course.title)}
                    >
                      נשמע לי הכי מתאים עבורי!
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ===== Benefits ===== */}
        <div className={styles.benefitsSection}>
          <h3 className={styles.benefitsTitle}>כל תלמידה אצלי מקבלת:</h3>
          <div className={styles.benefitsGrid}>
            {benefits.map((b, idx) => (
              <BenefitCard
                key={idx}
                icon={b.icon}
                title={b.title}
                description={b.description}
              />
            ))}
          </div>
        </div>

        {/* ===== Bottom CTA ===== */}
        <div className={styles.bottomCta}>
          <p className={styles.bottomCtaText}>
            לא בטוחה מה מתאים לך? אני כאן בשבילך
          </p>
          <button className={styles.ctaButton} onClick={handleGeneralWhatsApp}>
            לשיחת ייעוץ חינם לחצי כאן
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThirdScreen;