import React, { useState } from 'react';
import squad from "../../../../videos/squad-speakers.mp4";
import { styles } from './styles';
const {
  // container, typeWriterGeneral,
  mediaContainer, mediaContainerOverlay, mediaTextOverlay, mediaPlayer,
} = styles;


const currentWorkCopy = {
  header: "Current Work",
  text: "I began my journey as a designer & engineer over 5 years ago. I have since taken on a diverse range of challenging projects including: freelance product design, collaborating with young companies to create digital products, creating and selling enterprise software to medium-sized institutions, and consulting for startups. My journey as a designer is a constant drive to improve my skills, to be naturally curious, and to be the best version of myself, one design problem at a time."
};

function CurrentWork({children}) {
  const [currentWorkStyle, setStyle] = useState(styles);

  return (
    <div style={styles.container}>
      <div style={mediaContainer}>
          <video style={mediaPlayer} src={squad} autoPlay muted loop />
          <div style={mediaContainerOverlay}>
          </div>
          <div style={mediaTextOverlay}>
              <h1 style={currentWorkStyle.headerText}>{currentWorkCopy.header}</h1>
              <p style={currentWorkStyle.bodyText}>
                Product Engineer at <span style={currentWorkStyle.bodyEmphasisText}>EventSpase</span>
              </p>
              <button style={currentWorkStyle.button} onClick={() => window.open("https://eventspase.com")}>Learn more</button>
            </div>
        </div>

    </div>
  )
}

export default CurrentWork