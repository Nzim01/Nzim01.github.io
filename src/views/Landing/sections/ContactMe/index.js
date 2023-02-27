import React, { useState } from 'react';
import ContactButtons from './ContactButtons';
import { styles } from './styles';

const contactCopy = {
  header: "Contact Me",
  text: "I am always open to exploring new and exciting opportunities. Please don't hesitate to reach out to me if you have any questions or if you think there might be a good fit for us to work together. I look forward to hearing from you!"
};

function ContactMe() {
  const [contactStyle, setStyle] = useState(styles);

  return (
    <div style={styles.container}>
    <h1 style={contactStyle.headerText}>{contactCopy.header}</h1>
    <p style={contactStyle.bodyText}>
    {contactCopy.text}
    </p>
    <ContactButtons />
    </div>
  )
}

export default ContactMe;