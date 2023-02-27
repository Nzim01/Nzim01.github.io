import React from 'react';
import {styles} from './styles';
const {container, buttonStyle, iconStyle, instagramStyle, gmailStyle, linkedinStyle} = styles;

function ContactButtons() {

  function openGmailWindow() {
    const email = "nkanyiso_nzimande@alumni.brown.edu"; // replace with your email
    // const url = `https://mail.google.com/mail/u/0/#compose?to=${email}`;
    const url = `mailto:${email}`;

    window.open(url, "_blank");
  }

  return (
    <div style={container}>
      <button style={{...buttonStyle, ...instagramStyle}} onClick={() => window.open("https://instagram.com/africanapollo")}>
        <i className="fab fa-instagram" style={iconStyle}></i>
      </button>
      <button style={{...buttonStyle, ...gmailStyle}} onClick={openGmailWindow}>
        <i className="far fa-envelope" style={iconStyle}></i>
      </button>
      <button style={{...buttonStyle, ...linkedinStyle}} onClick={() => window.open("https://www.linkedin.com/in/nkanyiso-nzimande-48648b122/")}>
        <i className="fab fa-linkedin" style={iconStyle}></i>
      </button>
    </div>
  );
}

export default ContactButtons;