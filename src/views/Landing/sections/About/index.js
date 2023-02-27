import React, { useState } from 'react';
import { styles } from './styles';

const aboutMeCopy = {
  header: "About Me",
  text: "I began my journey as a designer & engineer over 5 years ago. I have since taken on a diverse range of challenging projects including: freelance product design, collaborating with young companies to create digital products, creating and selling enterprise software to medium-sized institutions, and consulting for startups. My journey as a designer is a constant drive to improve my skills, to be naturally curious, and to be the best version of myself, one design problem at a time."
}

// // Media query for mobile devices
// if (window.innerWidth <= 767) {
//   styles.container.height = 'calc(100vh - 56px)';
//   // Subtract the height of the mobile navigation bar if necessary

//   styles.headerText.fontSize = '2em';
//   styles.bodyText.fontSize = '2px';
// };

function About() {

  const [aboutStyle, setStyle] = useState(styles);

  function handleResize() {
    if (window.innerWidth <= 767) {
      setStyle(prevStyle => ({
        ...prevStyle,
        headerText: {
          ...prevStyle.headerText,
          fontSize: '1.5em',
        },
        bodyText: {
          ...prevStyle.bodyText,
          fontSize: '1em',
        },
      }));
    } else {
      setStyle(styles);
    }
    
  }

  window.addEventListener('resize', handleResize);

  return (
    <div style={aboutStyle.container}>
      <h1 style={aboutStyle.headerText}>{aboutMeCopy.header}</h1>
      <p style={aboutStyle.bodyText}>{aboutMeCopy.text}</p>
    </div>
  )
}

export default About;