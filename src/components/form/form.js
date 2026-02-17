import React, { useRef, useState } from 'react';
import styles from './form.module.css';
import PrivacyPolicy from '../privacy/privacy';


const ContactForm = () => {
  // State for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  // Refs for form fields
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  // Server settings
  const serverUrl = "https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLead";
  const reciver = "eden@example.com"; // Update with Eden's email

  const handleTermsClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsPrivacyModalOpen(true);
  };

  const handlePrivacyClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsPrivacyModalOpen(true);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    
    setIsSubmitting(true);
    
    // Server data object
    const serverData = {
      name: name,
      phone: phone,
      email: email,
      reciver: reciver
    };

    try {
      // Send to server
      const serverResponse = await fetch(serverUrl, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(serverData)
      });

      if (serverResponse.ok) {
        setIsSubmitting(false);
        setSubmitted(true);
        
        // הפעלת פיקסל Lead
        if (typeof window.fbq === 'function') {
          window.fbq('track', 'Lead');
        }
        
        // Reset form after successful submission
        setTimeout(() => {
          nameRef.current.value = "";
          emailRef.current.value = "";
          phoneRef.current.value = "";
          setSubmitted(false);
        }, 3000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      alert("התרחשה שגיאה, אנא נסו שוב מאוחר יותר");
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formContainer} id="טופס">
      <h2 className={styles.title}>לשריון שיחת התאמה לתוכנית</h2>
      <p className={styles.subtitle}>מלאי את הטופס ואחזור אלייך בהקדם</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="שם מלא"
          ref={nameRef}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="מספר פלאפון"
          className={styles.phoneInput}
          ref={phoneRef}
          required
        />
      

        {isPrivacyModalOpen && (
          <PrivacyPolicy
            ownerName="עדן שמחייב"
            email="eden@example.com" // Update with Eden's email
            phone="054-341-4939"
            domain=""
            isOpen={isPrivacyModalOpen}
            onClose={() => setIsPrivacyModalOpen(false)}
            showButton={false}
          />
        )}

        <button type="submit" className={styles.submitButton} disabled={isSubmitting || submitted}>
          {isSubmitting ? 'שולח...' : submitted ? 'נשלח בהצלחה!' : 'כן, אני רוצה שתחזרי אליי!'}
        </button>

        {/* תיבת האישור למדיניות הפרטיות */}
      
      </form>

      {/* תמונה מטושטשת מתחת לכפתור */}
      <div className={styles.imageWrapper}>
      
      </div>
    </div>
  );
};

export default ContactForm;