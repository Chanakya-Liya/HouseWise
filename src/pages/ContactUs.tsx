import React from 'react';
import ContactForm from '../components/ContactForm';
import styles from './ContactUs.module.css';

const ContactUsPage: React.FC = () => {
  const handleFormSubmit = (formData: { name: string; email: string; message: string }) => {
    console.log('Form Submitted:', formData);
    alert(`Thank you, ${formData.name}. We will get back to you soon!`);
  };

  return (
    <div className={styles.contactUsPage}>
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us!</p>
      <ContactForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default ContactUsPage;
