import React from "react";
import styles from "./privacyScreen.module.css";

const PrivacyScreen = () => {
  return (
    <div className={styles.page} dir="rtl">
      <div className={styles.container}>
        <h1 className={styles.title}>מדיניות פרטיות</h1>
        <p className={styles.updated}>עודכן לאחרונה: מרץ 2026</p>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. כללי</h2>
            <p>
              אתר זה מופעל על ידי עדן שמחייב (להלן: "האתר" או "אנחנו"). אנו מכבדים את פרטיותך ומחויבים להגן על המידע האישי שלך. מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע שלך.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. מידע שאנו אוספים</h2>
            <p>אנו עשויים לאסוף את המידע הבא:</p>
            <ul>
              <li>שם מלא</li>
              <li>מספר טלפון</li>
              <li>כל מידע נוסף שתבחרי לשתף איתנו בעת יצירת קשר</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. כיצד אנו משתמשים במידע</h2>
            <p>המידע שנאסף משמש אותנו למטרות הבאות:</p>
            <ul>
              <li>יצירת קשר חוזר לצורך שיחת ייעוץ ובדיקת התאמה</li>
              <li>מתן מידע על הקורסים וההכשרות שלנו</li>
              <li>שיפור השירותים שאנו מציעים</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. שיתוף מידע עם צדדים שלישיים</h2>
            <p>
              אנו לא מוכרים, סוחרים או מעבירים את המידע האישי שלך לצדדים שלישיים, למעט במקרים הנדרשים על פי חוק.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. אבטחת מידע</h2>
            <p>
              אנו נוקטים באמצעי אבטחה סבירים כדי להגן על המידע האישי שלך מפני גישה, שינוי, חשיפה או השמדה בלתי מורשים.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. קבצי Cookie ו-Facebook Pixel</h2>
            <p>
              האתר עשוי להשתמש בקבצי Cookie ובכלי מעקב כגון Facebook Pixel לצורך ניתוח תנועה, שיפור חוויית המשתמש ופרסום ממוקד. באפשרותך לשנות את הגדרות הדפדפן שלך כדי לחסום קבצי Cookie.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. זכויותייך</h2>
            <p>
              את רשאית לבקש לעיין במידע שנאסף אודותייך, לתקן אותו או לבקש את מחיקתו. לכל בקשה ניתן לפנות אלינו באמצעות פרטי הקשר המפורטים להלן.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. יצירת קשר</h2>
            <p>לכל שאלה בנוגע למדיניות הפרטיות, ניתן ליצור קשר:</p>
            <ul>
              <li>עדן שמחייב</li>
              <li>טלפון: 054-341-4939</li>
              <li>אימייל: edensimhayeveden@gmail.com</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>9. שינויים במדיניות</h2>
            <p>
              אנו שומרים לעצמנו את הזכות לעדכן מדיניות פרטיות זו מעת לעת. שינויים יפורסמו בעמוד זה.
            </p>
          </section>
        </div>

        <button className={styles.backButton} onClick={() => window.history.back()}>
          חזרה לאתר
        </button>
      </div>
    </div>
  );
};

export default PrivacyScreen;
