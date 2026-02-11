import React from "react";
import styles from "./fifthScreen.module.css";

const students = [
  { id: 1, name: "[שם התלמידה]", before: "/images/student1-before.jpg", after: "/images/student1-after.jpg" },
  { id: 2, name: "[שם התלמידה]", before: "/images/student2-before.jpg", after: "/images/student2-after.jpg" },
  { id: 3, name: "[שם התלמידה]", before: "/images/student3-before.jpg", after: "/images/student3-after.jpg" },
  { id: 4, name: "[שם התלמידה]", before: "/images/student4-before.jpg", after: "/images/student4-after.jpg" },
  { id: 5, name: "[שם התלמידה]", before: "/images/student5-before.jpg", after: "/images/student5-after.jpg" },
  { id: 6, name: "[שם התלמידה]", before: "/images/student6-before.jpg", after: "/images/student6-after.jpg" },
];

const FifthScreen = () => {
  return (
    <section className={styles.section} dir="rtl">
      <div className={styles.bgShape1} />

      <div className={styles.container}>
        <h2 className={styles.title}>
          אז איך העבודות של התלמידות שלי נראות כבר בקורס..?
        </h2>

        <div className={styles.grid}>
          {students.map((student) => (
            <div key={student.id} className={styles.card}>
              <p className={styles.studentName}>{student.name}</p>
              <div className={styles.imagesRow}>
                <div className={styles.imageWrapper}>
                  <span className={styles.label}>לפני</span>
                  {/* Replace placeholder with: <img src={student.before} alt="לפני" /> */}
                  <div className={styles.imagePlaceholder} />
                </div>
                <div className={styles.imageWrapper}>
                  <span className={`${styles.label} ${styles.labelAfter}`}>אחרי</span>
                  {/* Replace placeholder with: <img src={student.after} alt="אחרי" /> */}
                  <div className={styles.imagePlaceholder} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FifthScreen;