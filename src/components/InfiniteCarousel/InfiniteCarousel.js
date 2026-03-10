import React from 'react';
import styles from './InfiniteCarousel.module.css';

/**
 * InfiniteCarousel — seamless infinite image strip
 *
 * Props:
 *   images       {Array}  — array of image src values (required)
 *   direction    {string} — 'left' (default) | 'right'
 *   speed        {number} — seconds for one full loop (default: 50)
 *   imageWidth   {string} — CSS width  (default: '300px')
 *   imageHeight  {string} — CSS height (default: '450px')
 *   gap          {string} — CSS gap between images (default: '20px')
 *   borderRadius {string} — CSS border-radius on images (default: '16px')
 *   bgColor      {string} — background + fog color (default: '#FFF5F3')
 */
const InfiniteCarousel = ({
  images,
  direction = 'left',
  speed = 50,
  imageWidth = '300px',
  imageHeight = '450px',
  gap = '20px',
  borderRadius = '16px',
  bgColor = '#FFF5F3',
}) => {
  const cssVars = {
    '--ci-bg': bgColor,
    '--ci-img-w': imageWidth,
    '--ci-img-h': imageHeight,
    '--ci-gap': gap,
    '--ci-radius': borderRadius,
    '--ci-speed': `${speed}s`,
  };

  return (
    <div className={styles.container} dir="ltr" style={cssVars}>
      <div
        className={
          direction === 'right'
            ? `${styles.track} ${styles.trackRight}`
            : styles.track
        }
      >
        {/* Set A */}
        <div className={styles.set}>
          {images.map((src, i) => (
            <div key={`a-${i}`} className={styles.imgWrapper}>
              <img src={src} alt={`slide ${i + 1}`} className={styles.img} loading="lazy" />
            </div>
          ))}
        </div>

        {/* Set B — identical clone for the seamless loop */}
        <div className={styles.set} aria-hidden="true">
          {images.map((src, i) => (
            <div key={`b-${i}`} className={styles.imgWrapper}>
              <img src={src} alt="" className={styles.img} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
