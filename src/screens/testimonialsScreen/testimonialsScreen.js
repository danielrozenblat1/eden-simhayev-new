import React, { useState, useCallback } from "react";
import styles from "./testimonialsScreen.module.css";
import { worksImages } from "../../components/works/worksImages";
import { certificateImages } from "../../components/certificates/certificateImages";

const EDEN_PHONE = "972543414939";

// Import recommendation images (only -1 variants, skip 3 which is duplicate of 2)
const recsImages = [];
for (let i = 1; i <= 28; i++) {
  if (i === 3) continue;
  recsImages.push(require(`../../assets/eden_recs_${i}-1.png`));
}

// Masonry column distribution (with global index tracking for lightbox)
const indexed = recsImages.map((img, i) => ({ img, idx: i }));
const rawCol1 = indexed.filter((_, i) => i % 3 === 0);
const rawCol2 = indexed.filter((_, i) => i % 3 === 1);
const rawCol3 = indexed.filter((_, i) => i % 3 === 2);

// Move first 2 from right column (col1) to middle column, last of middle to right
const middleItems = [...rawCol1.slice(0, 2), ...rawCol2];
const col1 = [...rawCol1.slice(2), middleItems[middleItems.length - 1]];
const col2 = middleItems.slice(0, -1);
const col3 = rawCol3;

const TestimonialsScreen = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = useCallback((globalIndex) => {
    setLightboxIndex(globalIndex);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % recsImages.length);
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + recsImages.length) % recsImages.length);
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goNext();
      if (e.key === "ArrowRight") goPrev();
    },
    [closeLightbox, goNext, goPrev]
  );

  const handleWhatsApp = () => {
    const message = encodeURIComponent("היי עדן הגעתי מהדף שלך, בואי נדבר!");
    window.open(`https://wa.me/${EDEN_PHONE}?text=${message}`, "_blank");
  };

  return (
    <>
      {/* Section background wrapper for title */}
      <div className={styles.sectionBg} dir="rtl">
        <div className={styles.bgOrb1} />
        <div className={styles.bgOrb2} />
        <h2 className={styles.mainTitle}>
          בשנים האחרונות עברו תחתי אלפי נשים
        </h2>
      </div>

      {/* Eden's Works Carousel - directly in app, no wrapper */}
      <div className={styles.worksContainer}>
        <div className={styles.worksScrollTrack}>
          <div className={styles.worksScrollContainer}>
            {worksImages.map((image, idx) => (
              <div key={`eden-1-${idx}`} className={styles.worksImageWrapper}>
                <img src={image} alt={`עבודה של עדן ${idx + 1}`} className={styles.worksImage} />
              </div>
            ))}
          </div>
          <div className={styles.worksScrollContainer}>
            {worksImages.map((image, idx) => (
              <div key={`eden-2-${idx}`} className={styles.worksImageWrapper}>
                <img src={image} alt={`עבודה של עדן ${idx + 1}`} className={styles.worksImage} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Students Title */}
      <div className={styles.sectionBg} dir="rtl">
        <h3 className={styles.studentsTitle}>ועשרות תלמידות</h3>
      </div>

      {/* Certificates Carousel - directly in app, no wrapper */}
      <div className={styles.worksContainer}>
        <div className={styles.worksScrollTrackReverse}>
          <div className={styles.worksScrollContainer}>
            {certificateImages.map((img, index) => (
              <div key={`student-1-${index}`} className={styles.worksImageWrapper}>
                <img src={img} alt={`תעודה ${index + 1}`} className={styles.worksImage} />
              </div>
            ))}
          </div>
          <div className={styles.worksScrollContainer}>
            {certificateImages.map((img, index) => (
              <div key={`student-2-${index}`} className={styles.worksImageWrapper}>
                <img src={img} alt={`תעודה ${index + 1}`} className={styles.worksImage} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Masonry + CTA section */}
      <section className={styles.section} dir="rtl">
        <div className={styles.container}>
          <div className={styles.testimonialsSection}>
            <h3 className={styles.testimonialsTitle}>ככה הן הגיבו כשהן יצאו ממני:</h3>

            <div className={styles.masonryGrid}>
              <div className={styles.masonryCol}>
                {col1.map((item, idx) => (
                  <div
                    key={`m1-${idx}`}
                    className={styles.masonryItem}
                    onClick={() => openLightbox(item.idx)}
                  >
                    <img src={item.img} alt={`המלצה`} className={styles.masonryImage} />
                  </div>
                ))}
              </div>
              <div className={styles.masonryCol}>
                {col2.map((item, idx) => (
                  <div
                    key={`m2-${idx}`}
                    className={styles.masonryItem}
                    onClick={() => openLightbox(item.idx)}
                  >
                    <img src={item.img} alt={`המלצה`} className={styles.masonryImage} />
                  </div>
                ))}
              </div>
              <div className={styles.masonryCol}>
                {col3.map((item, idx) => (
                  <div
                    key={`m3-${idx}`}
                    className={styles.masonryItem}
                    onClick={() => openLightbox(item.idx)}
                  >
                    <img src={item.img} alt={`המלצה`} className={styles.masonryImage} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button className={styles.ctaButton} onClick={handleWhatsApp}>
            עדן בואי נדבר!
          </button>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className={styles.lightboxOverlay}
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          ref={(el) => el && el.focus()}
        >
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.lightboxClose} onClick={closeLightbox}>
              ✕
            </button>

            <button className={styles.lightboxArrow} onClick={goPrev} style={{ right: 0 }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <img
              src={recsImages[lightboxIndex]}
              alt={`המלצה ${lightboxIndex + 1}`}
              className={styles.lightboxImage}
            />

            <button className={styles.lightboxArrow} onClick={goNext} style={{ left: 0 }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className={styles.lightboxCounter}>
              {lightboxIndex + 1} / {recsImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonialsScreen;
