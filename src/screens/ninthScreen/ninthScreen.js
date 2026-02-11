import React, { useState } from "react";
import styles from "./ninthScreen.module.css";
import FAQItem from "../../components/questions/Questions";

const NinthScreen = ({ onCtaClick }) => {
  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      // Scroll to lead form in firstScreen
      const form = document.querySelector("form");
      if (form) {
        form.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  const faqData = [
    {
      question: "אין לי ניסיון בכלל - זה בשבילי?",
      answer:
        "בהחלט. אני מלמדת מאפס מוחלט, שלב אחרי שלב. רוב התלמידות שלי התחילו בדיוק ככה - בלי רקע, בלי ניסיון, רק עם רצון ללמוד. זה בדיוק בשביל מה הקורס בנוי.",
    },
    {
      question: "מה אם אני לא אצליח?",
      answer:
        "זו בדיוק הסיבה שאני מלווה גם אחרי הקורס. את לא לבד בזה. אם משהו לא עובד, אם יש שאלות, אם את צריכה עזרה - אני שם. המטרה שלי היא שתצליחי, לא סתם לתת לך תעודה.",
    },
    {
      question: "אני צריכה לקנות ציוד?",
      answer:
        "במהלך הקורס את מקבלת ממני את כל מה שצריך כדי ללמוד ולתרגל. אחרי הקורס אדריך אותך בדיוק מה לקנות, מאיפה, ואיך לא לבזבז כסף על ציוד מיותר.",
    },
    {
      question: "מה קורה אם יש לי שאלות אחרי הקורס?",
      answer:
        "אני לא נעלמת אחרי התעודה. הליווי שלי ממשיך גם אחרי - שאלות, תמונות לבדיקה, התייעצויות. אני רוצה שתצליחי בשטח, לא רק שתסיימי קורס.",
    },
    {
      question: "איך אני יודעת איזה קורס מתאים לי?",
      answer:
        "זה בדיוק למה יש שיחת ייעוץ. נדבר על מה מעניין אותך, מה המטרות שלך, ואני אעזור לך לבחור את המסלול הנכון בשבילך. בלי לחץ, בלי התחייבות.",
    },
  ];

  return (
    <section className={styles.section} dir="rtl">
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />

      <div className={styles.container}>
        {/* Header */}
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>שאלות תשובות</h2>
          <p className={styles.sectionDescription}>
            אני בטוחה שאחת מהשאלות הבאות עלתה לך לא פעם ולא פעמיים ואני כאן
            לענות על כולן
          </p>
          <p className={styles.instructionText}>
            לחצי על כל שאלה והתשובה תיפתח
          </p>
        </header>

        {/* FAQ Items */}
        <div className={styles.faqContainer}>
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={`${index + 1}. ${faq.question}`}
              answer={faq.answer}
            />
          ))}
        </div>

        {/* CTA Button */}
        <button className={styles.ctaButton} onClick={handleCtaClick}>
          לעוד שאלות לחצי כאן
        </button>
      </div>
    </section>
  );
};

export default NinthScreen;
