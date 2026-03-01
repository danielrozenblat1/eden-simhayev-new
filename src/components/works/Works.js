import React from 'react';
import styles from './Works.module.css';
import { worksImages } from './worksImages';

const Works = () => {
  const images = worksImages;

  return (
    <>
      <div className={styles.explain}>
        בעשור האחרון עברו תחתי אלפי לקוחות
      </div>

      <div className={styles.worksContainer}>
        <div className={styles.worksScrollTrack}>
          
          {/* Set 1 */}
          <div className={styles.worksScrollContainer}>
            {images.map((img, index) => (
              <div key={`set1-${index}`} className={styles.worksImageWrapper}>
                <img
                  src={img}
                  alt={`עבודה ${index + 1}`}
                  className={styles.worksImage}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Set 2 - duplicate for seamless loop */}
          <div className={styles.worksScrollContainer}>
            {images.map((img, index) => (
              <div key={`set2-${index}`} className={styles.worksImageWrapper}>
                <img
                  src={img}
                  alt={`עבודה ${index + 1}`}
                  className={styles.worksImage}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Works;
