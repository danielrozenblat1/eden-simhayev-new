import React from "react";
import styles from "./SplashScreen.module.css";

const SplashScreen = ({ visible }) => {
  return (
    <div className={`${styles.splash} ${!visible ? styles.splashHidden : ""}`}>
      <div className={styles.logoContainer}>
        {/* SVG Logo - Elegant E monogram drawn with lines */}
        <svg
          className={styles.logoSvg}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer decorative curl - top */}
          <path
            d="M 58 12 C 58 12, 70 8, 72 18 C 74 28, 62 30, 55 28"
          />
          {/* Main E vertical stroke */}
          <path
            className={styles.fillPath}
            d="M 42 20 L 42 80"
          />
          {/* E top horizontal */}
          <path
            className={styles.fillPath}
            d="M 42 20 L 62 20"
          />
          {/* E middle horizontal */}
          <path
            className={styles.fillPath}
            d="M 42 48 L 58 48"
          />
          {/* E bottom horizontal */}
          <path
            className={styles.fillPath}
            d="M 42 80 L 62 80"
          />
          {/* Elegant cursive S-curve overlay */}
          <path
            d="M 55 15 C 68 15, 72 25, 60 32 C 48 39, 36 42, 36 52 C 36 62, 48 68, 58 62 C 68 56, 62 45, 52 48"
          />
          {/* Bottom decorative curl */}
          <path
            d="M 50 72 C 50 72, 64 78, 60 86 C 56 94, 42 88, 42 80"
          />
        </svg>

        <span className={styles.nameText}>Eden Simhayev</span>
        <div className={styles.dividerLine} />
        <span className={styles.tagline}>Lashes | Lips | Eyebrows</span>

        <div className={styles.loadingDots}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
