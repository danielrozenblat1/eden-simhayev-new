import React from 'react';
import styles from './privacy.module.css';

const PrivacyPolicy = ({ ownerName, email, phone, domain, isOpen, onClose, showButton = true }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <h2>מדיניות פרטיות</h2>
        <div className={styles.content}>
          <p>פרטי מדיניות הפרטיות של {ownerName || 'עדן שמחייב'} יועלו כאן.</p>
          {email && <p>אימייל: {email}</p>}
          {phone && <p>טלפון: {phone}</p>}
          {domain && <p>דומיין: {domain}</p>}
        </div>
        {showButton && (
          <button className={styles.closeBtn} onClick={onClose}>
            סגור
          </button>
        )}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
