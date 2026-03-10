import React, { useState, useRef, useEffect } from "react";
import { Player } from '@lordicon/react';
import { X as XIcon } from 'lucide-react';
import {
  BookOpen, Microscope, Calendar, AlertTriangle, ClipboardList,
  Droplets, User, MessageCircle, Heart, Scissors, Palette, Wrench,
  Eye, Sparkles, Star, RefreshCw, Search, FileText, Hammer,
  GraduationCap, Shapes, Briefcase, Clock, Target, MapPin,
  CircleCheck, Timer, Ban, Scale, Ruler, XCircle, FlaskConical, Users
} from 'lucide-react';
import ScrollReveal from "scrollreveal";
import styles from "./thirdScreen.module.css";
import { WorksCarousel } from "../secondScreen/secondScreen";
import pinkClockIcon from "../../icons/pinkclock.json";
import pinkChatIcon from "../../icons/pinkchat.json";
import pinkNotebookIcon from "../../icons/pinknotebook.json";
import pinkHeartIcon from "../../icons/pinkheart.json";

const EDEN_PHONE = "972543414939";

const courses = [
  {
    id: "eyelash-extension",
    title: "קורס הדבקת ריסים בשיטה החדשנית – שיטת ES",
    type: "קורס אישי",
    meetings: "יום אחד",
    hours: "יום מלא",
    location: "תל אביב",
    time: "יום אחד בלבד",
    price: "2,300₪",
    days: [
      {
        day: 1,
        title: "חלק עיוני – ידע מקצועי מקיף",
        items: [
          { text: "מהי הדבקת ריסים בשיטה החדשנית ES ומה מייחד אותה", icon: BookOpen },
          { text: "מבנה הריס ושלבי צמיחתו", icon: Microscope },
          { text: "תיאום תור והכנת הלקוחה לטיפול", icon: Calendar },
          { text: "מקרים חריגים – מתי לא נטפל ומהי חלופה מומלצת", icon: AlertTriangle },
          { text: "שאלון רפואי וחשיבותו לפני טיפול", icon: ClipboardList },
          { text: "כלי עבודה, סטריליות, חיטוי ושמירה על היגיינה", icon: Droplets },
          { text: "התאמת טיפול – למי מתאימה הדבקת ריסים ולמי לא", icon: User },
          { text: "תיאום ציפיות והתאמת סגנון הדבקה ללקוחה", icon: MessageCircle },
          { text: "הוראות תחזוקה ושימור הריסים לאחר הטיפול", icon: Heart },
          { text: "הסרה נכונה ובריאה של ריסים – ללא גרימת נזק", icon: Scissors },
          { text: "סוגי ריסים וסוגי דבקים – התאמה נכונה לעבודה מקצועית", icon: Palette },
          { text: "חיזוק ההדבקה וניקוי שאריות דבק", icon: Wrench },
          { text: "סגנונות הדבקה, התאמת אורכים ומבנה העין", icon: Eye },
          { text: "תיקוני עיניים ואיזון מראה", icon: Sparkles },
          { text: "סוגי אפקטים נפוצים", icon: Star },
          { text: "עבודה על לקוחה עם הדבקה קיימת ממטפלת אחרת", icon: RefreshCw },
          { text: "הבדלים בין הדבקה להלחמה", icon: Search },
          { text: "שלבי עבודה נכונה – מהכנה ועד סיום", icon: FileText },
          { text: "ציוד ומוצרים חובה לעבודה מקצועית", icon: Hammer },
        ],
      },
      {
        day: 2,
        title: "חלק מעשי – פרקטיקה מלאה",
        items: [
          { text: "הדגמה מלאה שלי על מודליסטית", icon: GraduationCap },
          { text: "תרגול מעשי על בובה", icon: Shapes },
          { text: "עבודה על 2 מודליסטיות לצורך בניית תיק עבודות מקצועי", icon: Briefcase },
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
  },
  {
    id: "eyelash-extension-premium",
    title: "קורס הדבקת ריסים פרימיום – מסלול מתקדמות בשיטת ES",
    type: "מסלול פרימיום",
    meetings: "שני מפגשים",
    hours: "יומיים מלאים",
    location: "דרום תל אביב",
    time: "יומיים אינטנסיביים",
    price: "3,600₪",
    days: [
      {
        day: 1,
        title: "העמקה מקצועית – דיוק ותוצאות פרימיום",
        items: [
          { text: "חידוד יסודות העבודה לרמת דיוק גבוהה", icon: BookOpen },
          { text: "העמקה בשיטת ES וטכניקות מתקדמות", icon: Microscope },
          { text: "תיקון טעויות נפוצות של מדביקות ריסים", icon: AlertTriangle },
          { text: "שיפור מהירות העבודה והדיוק", icon: Timer },
          { text: "התאמת סגנון הדבקה לפי מבנה העין", icon: Eye },
          { text: "יצירת תוצאות טבעיות ויוקרתיות", icon: Star },
          { text: "איזון ותיקוני עיניים מורכבים", icon: Sparkles },
          { text: "עבודה על לקוחה עם הדבקה קיימת ממטפלת אחרת", icon: RefreshCw },
          { text: "שיפור גימור העבודה לרמת פרימיום", icon: Wrench },
        ],
      },
      {
        day: 2,
        title: "חלק מעשי – תרגול מתקדם",
        items: [
          { text: "עבודה על 4 מודליסטיות", icon: Users },
          { text: "תרגול מעשי אינטנסיבי לבניית ביטחון מקצועי", icon: Briefcase },
          { text: "דגש על שיפור איכות וגימור העבודה לרמת פרימיום", icon: Target },
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
  },
  {
    id: "eyelash-lift",
    title: "קורס הרמת ריסים בשיטה המקסימלית",
    type: "קורס אישי",
    meetings: "יום אחד",
    hours: "יום מלא",
    location: "תל אביב",
    time: "יום אחד בלבד",
    price: "3,600₪",
    days: [
      {
        day: 1,
        title: "חלק עיוני – ידע יסודי ומקצועי",
        items: [
          { text: "מבנה הריס ותפקידו", icon: Microscope },
          { text: "מחזורי צמיחת הריסים ופרקי זמן", icon: Clock },
          { text: "עקרונות בסיס בטיפול הרמת ריסים", icon: BookOpen },
          { text: "סוגי ריסים וכיווני צמיחתם", icon: Eye },
          { text: "מצבים מורכבים ואתגרים בהרמת ריסים", icon: AlertTriangle },
          { text: "סוגי הרמות ריסים והתאמה ללקוחה", icon: Target },
          { text: "אפקס – מה זה, למה זה חשוב ואיך מאתרים נכון", icon: MapPin },
          { text: "מיקום ובחירת שתל (סיליקון) בהתאם למבנה העין והריס", icon: Search },
          { text: "מריחת חומרים – דיוק, מינונים וטכניקה נכונה", icon: Palette },
          { text: "אבחון מוכנות הריס לטיפול", icon: CircleCheck },
          { text: "הוראות לפני טיפול והנחיות ללקוחה לאחריו", icon: ClipboardList },
          { text: "תיקון הרמת ריסים – מתי, איך ובטוח", icon: Wrench },
          { text: "שלבי עבודה מלאים לטיפול הרמת ריסים", icon: FileText },
          { text: "זמני עבודה נכונים לכל שלב", icon: Timer },
          { text: "איסורים, רגישויות והתוויות נגד", icon: Ban },
          { text: "יתרונות וחסרונות בטיפול הרמת ריסים", icon: Scale },
        ],
      },
      {
        day: 2,
        title: "חלק מעשי – פרקטיקה מקצועית",
        items: [
          { text: "הדגמה מלאה שלי על מודליסטית", icon: GraduationCap },
          { text: "תרגול מעשי מלא על 2 מודליסטיות", icon: Briefcase },
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
  },
  {
    id: "brow-lift",
    title: "קורס הרמת גבות",
    type: "קורס אישי",
    meetings: "יום אחד",
    hours: "יום מלא",
    location: "תל אביב",
    time: "יום אחד בלבד",
    price: "2,600₪ (כולל ערכה)",
    priceWithoutKit: "1,900₪ (ללא ערכה)",
    days: [
      {
        day: 1,
        title: "חלק עיוני – יסודות ודיוק מקצועי",
        items: [
          { text: "היכרות עם טיפול הרמת גבות – מטרות ותוצאות", icon: BookOpen },
          { text: "מבנה השערה והעור באזור הגבה", icon: Microscope },
          { text: "ציוד נדרש לביצוע טיפול מקצועי", icon: Hammer },
          { text: "חומרים להרמת גבות – היכרות, שימוש והתאמה", icon: FlaskConical },
          { text: "איסורים, רגישויות ואלרגיות – בטיחות מעל הכול", icon: AlertTriangle },
          { text: "התאמת הטיפול ללקוחה ואבחון מקדים", icon: User },
          { text: "הוראות ללקוחה לפני טיפול", icon: ClipboardList },
          { text: "הוראות ללקוחה לאחר הטיפול", icon: Heart },
          { text: "שלבי העבודה לאורך טיפול הרמת גבות – משלב ההכנה ועד סיום", icon: FileText },
          { text: "טעויות נפוצות ואיך להימנע מהן", icon: XCircle },
        ],
      },
      {
        day: 2,
        title: "חלק מעשי – פרקטיקה מלאה",
        items: [
          { text: "הדגמה מלאה שלי על מודליסטית", icon: GraduationCap },
          { text: "עבודה מעשית על 2 מודליסטיות", icon: Briefcase },
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
  },
  {
    id: "natural-brows",
    title: "קורס עיצוב ושיקום הגבה הטבעית",
    type: "קורס אישי",
    meetings: "4-5 שעות",
    hours: "יום אחד",
    location: "תל אביב",
    time: "יום אחד בלבד",
    price: "2,200₪",
    days: [
      {
        day: 1,
        title: "חלק עיוני – יסודות ודיוק בעבודה",
        items: [
          { text: "היכרות עם עולם עיצוב ושיקום הגבה הטבעית", icon: BookOpen },
          { text: "מבנה הגבה, צמיחה והשפעת הטיפול על מראה הפנים", icon: Microscope },
          { text: "עבודה נכונה עם שעווה, פינצטה ומספריים", icon: Hammer },
          { text: "שיטת הסרטוט המקצועית – נקודות A | B | C", icon: Ruler },
          { text: "התאמת מבנה הגבה למבנה הפנים", icon: User },
          { text: "גזירה נכונה ומריטה מדויקת – ללא פגיעה בצמיחה", icon: Scissors },
          { text: "עבודה אחידה, סימטרית ומקצועית", icon: Sparkles },
          { text: "צביעת גבות – התאמת גוון, עבודה בטוחה ותוצאה טבעית", icon: Palette },
          { text: "טעויות נפוצות בעיצוב גבות ואיך להימנע מהן", icon: XCircle },
          { text: "הוראות ללקוחה לפני ואחרי טיפול", icon: ClipboardList },
        ],
      },
      {
        day: 2,
        title: "חלק מעשי – פרקטיקה מלאה",
        items: [
          { text: "תרגול מעשי מקצועי", icon: Briefcase },
          { text: "עבודה על 2 מודליסטיות", icon: Users },
          { text: "דגש על בניית ביטחון, יד יציבה ותוצאה מדויקת", icon: Target },
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
    certificate: "קבלת תעודת הסמכה מקצועית מטעמי - הכנה ליציאה לעבודה מידית בתחום",
  },
];

const benefits = [
  {
    icon: pinkClockIcon,
    title: "לימוד מעשי אמיתי",
    description: "כל תלמידה שלי מתרגלת כבר מולי על מודליסטיות אמיתיות, מקבלת תיקונים בזמן אמת עד שהכל מושלם - כדי שבסוף הקורס תצאי מוכנה!",
  },
  {
    icon: pinkChatIcon,
    title: "ליווי גם אחרי הקורס",
    description: "הקורס אולי נגמר, אבל אני לא נעלמת - את תמיד תוכלי לפנות אלי להתייעץ, לשאול שאלות ולקבל מענה מקצועי. אני כאן בשבילך גם אחרי",
  },
  {
    icon: pinkNotebookIcon,
    title: "תמיכה גם בפן השיווקי",
    description: "אצלי לא תלמדי רק מקצוע - תלמדי גם איך להביא לקוחות ולבנות עסק רווחי",
  },
  {
    icon: pinkHeartIcon,
    title: "יחס אישי",
    description: "אני יודעת כמה חשוב שכל תלמידה תבין את החומר באמת ותקבל את תשומת הלב שהיא צריכה - ולכן כל תלמידה אצלי מקבלת יחס אישי ומלא",
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
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Scroll reveal animations
  useEffect(() => {
    const sr = ScrollReveal({ reset: false });

    sr.reveal(`.${styles.headerBlock}`, {
      origin: "bottom",
      distance: "30px",
      duration: 700,
      opacity: 0,
      easing: "ease-out",
    });

    sr.reveal(`.${styles.courseCard}`, {
      origin: "bottom",
      distance: "40px",
      duration: 700,
      opacity: 0,
      scale: 0.96,
      interval: 100,
      easing: "ease-out",
    });

    sr.reveal(`.${styles.benefitsTitle}`, {
      origin: "bottom",
      distance: "25px",
      duration: 700,
      opacity: 0,
      easing: "ease-out",
    });

    sr.reveal(`.${styles.benefitCard}`, {
      origin: "bottom",
      distance: "35px",
      duration: 700,
      opacity: 0,
      interval: 100,
      easing: "ease-out",
    });

    sr.reveal(`.${styles.worksSection}`, {
      origin: "bottom",
      distance: "20px",
      duration: 600,
      opacity: 0,
      easing: "ease-out",
    });

    sr.reveal(`.${styles.bottomCta}`, {
      origin: "bottom",
      distance: "25px",
      duration: 700,
      opacity: 0,
      easing: "ease-out",
    });
  }, []);

  // Lock body scroll and hide nav when modal is open
  useEffect(() => {
    if (selectedCourse) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("modal-open");
    };
  }, [selectedCourse]);

  const handleWhatsApp = (courseName) => {
    const message = encodeURIComponent(
      `היי עדן הגעתי מהדף שלך, אשמח לשמוע על ${courseName}`
    );
    window.open(`https://wa.me/${EDEN_PHONE}?text=${message}`, "_blank");
  };

  const scrollToForm = () => {
    const form = document.getElementById('טופס');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <>
    <section className={styles.section} dir="rtl" id="courses">
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />

      <div className={styles.container}>
        {/* ===== Title ===== */}
        <div className={styles.headerBlock}>
          <h2 className={styles.sectionTitle}>
            וכולן, אבל כולן עברו את אחת מהדרכים הבאות
          </h2>
          <p className={styles.sectionDescription}>ריכזתי עבורך את כל המסלולים שאני מציעה וכל מה שכלול בהם</p>
        </div>

        {/* ===== Course Cards ===== */}
        <div className={styles.courseList}>
          {courses.map((course) => (
            <div
              key={course.id}
              className={styles.courseCard}
              onClick={() => setSelectedCourse(course)}
            >
              <div className={styles.courseCardInner}>
                <h3 className={styles.courseName}>{course.title}</h3>
                <div className={styles.courseMetaRow}>
                  <span className={styles.courseMetaTag}>
                    <Calendar size={14} strokeWidth={1.5} />
                    {course.meetings}
                  </span>
                  <span className={styles.courseMetaTag}>
                    <MapPin size={14} strokeWidth={1.5} />
                    {course.location}
                  </span>
                  <span className={styles.courseMetaTag}>
                    <User size={14} strokeWidth={1.5} />
                    {course.type}
                  </span>
                </div>
                <span className={styles.courseHint}>לחצי כדי לראות הסילבוס המלא ←</span>
              </div>
            </div>
          ))}
        </div>

        {/* ===== Course Modal ===== */}
        {selectedCourse && (
          <div className={styles.modalOverlay} onClick={() => setSelectedCourse(null)}>
            <button className={styles.modalClose} onClick={(e) => { e.stopPropagation(); setSelectedCourse(null); }}>
              <XIcon size={22} strokeWidth={2} />
            </button>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>

              {/* Modal Header */}
              <div className={styles.modalHeader}>
                <h2 className={styles.modalTitle}>{selectedCourse.title}</h2>
                <div className={styles.modalMeta}>
                  <span className={styles.modalMetaTag}>
                    <Calendar size={15} strokeWidth={1.5} />
                    {selectedCourse.meetings}
                  </span>
                  <span className={styles.modalMetaTag}>
                    <MapPin size={15} strokeWidth={1.5} />
                    {selectedCourse.location}
                  </span>
                  <span className={styles.modalMetaTag}>
                    <User size={15} strokeWidth={1.5} />
                    {selectedCourse.type}
                  </span>
                </div>
              </div>

              {/* Modal Body */}
              <div className={styles.modalBody}>
                {/* Daily sessions */}
                {selectedCourse.days.map((day) => (
                  <div key={day.day} className={styles.dayBlock}>
                    <div className={styles.dayHeader}>
                      <span className={styles.dayNumber}>
                        {String(day.day).padStart(2, "0")}
                      </span>
                      <span className={styles.dayTitle}>{day.title}</span>
                    </div>
                    <div className={styles.dayItems}>
                      {day.items.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <div key={idx} className={styles.dayItem}>
                            <span className={styles.dayItemIcon}>
                              <Icon size={18} strokeWidth={1.5} />
                            </span>
                            <span className={styles.dayItemText}>{item.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {/* Kit — Gift style */}
                {selectedCourse.kit && selectedCourse.kit.length > 0 && (
                  <div className={styles.kitGift}>
                    <div className={styles.kitRibbon}>
                      <span>ערכה במתנה</span>
                    </div>
                    <div className={styles.kitGiftInner}>
                      <h4 className={styles.kitTitle}>
                        ערכה מקצועית מלאה (כלולה בקורס)
                      </h4>
                      <ul className={styles.kitList}>
                        {selectedCourse.kit.map((item, idx) => (
                          <li key={idx} className={styles.kitItem}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Certificate */}
                {selectedCourse.certificate && (
                  <div className={styles.framedCard}>
                    <div className={styles.framedCardInnerHighlight}>
                      <h4 className={styles.infoCardTitle}>🎓 תעודה והסמכה</h4>
                      <p className={styles.infoCardText}>{selectedCourse.certificate}</p>
                    </div>
                  </div>
                )}

                {/* CTA */}
                <button
                  className={styles.courseCtaBtn}
                  onClick={() => handleWhatsApp(selectedCourse.title)}
                >
                  נשמע לי הכי מתאים עבורי!
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ===== Benefits ===== */}
        <div className={styles.benefitsSection}>
          <h3 className={styles.benefitsTitle}>בכל הקורסים כל תלמידה מקבלת:</h3>
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

        {/* ===== Works Title ===== */}
        <div className={styles.worksSection}>
          <h3 className={styles.worksTitle}>ואם תהית איך העבודות של התלמידות שלי נראות עוד בזמן הקורס - זה נראה ככה:</h3>
        </div>
      </div>
    </section>

    <WorksCarousel />

    <section className={styles.section} dir="rtl">
      <div className={styles.container}>
        {/* ===== Bottom CTA ===== */}
        <div className={styles.bottomCta}>
          <p className={styles.bottomCtaText}>
            לא בטוחה מה מתאים לך? אני כאן בשבילך
          </p>
          <button className={styles.ctaButton} onClick={scrollToForm}>
            לשיחת ייעוץ חינם לחצי כאן
          </button>
        </div>
      </div>
    </section>
    </>
  );
};

export default ThirdScreen;
