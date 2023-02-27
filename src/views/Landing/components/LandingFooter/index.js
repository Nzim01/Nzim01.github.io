import React from 'react';
import { styles } from './styles';

const LandingFooter = () => {
  function openGmailWindow() {
    const email = "nkanyiso_nzimande@alumni.brown.edu"; // replace with your email
    // const url = `https://mail.google.com/mail/u/0/#compose?to=${email}`;
    const url = `mailto:${email}`;

    window.open(url, "_blank");
  }

  return (
    <footer style={styles.footer}>
      <div style={styles.left}>
        <span style={styles.title}>Nkanyiso Nzimande</span>
      </div>
      <div style={styles.right}>
        <button style={styles.button} onClick={openGmailWindow}>email</button>
      </div>
    </footer>
  );
};

export default LandingFooter;