import React from 'react';
import { styles } from './styles';
import comic from "../../../../videos/comic-intro-short.mp4";
import space from "../../../../videos/space-trippy.mov";
import closeHacker from "../../../../videos/closeup-hacker.mp4";
import HeadlineTypeWriterText from './HeadlineTypeWriterText';
// import {TypeWriterText} from "";



const {container, typeWriterGeneral, videoContainer, videoContainerOverlay, videoTextOverlay, videoPlayer} = styles;

function Headline({children}) {
  return (
    <div style={container}>
      
      {
        <div style={videoContainer}>
          <video style={videoPlayer} src={closeHacker} autoPlay muted loop />
          <div style={videoContainerOverlay}>
          </div>
          <div style={videoTextOverlay}>
              <HeadlineTypeWriterText />
            </div>
        </div>
      }
    </div>
  )
}

export default Headline