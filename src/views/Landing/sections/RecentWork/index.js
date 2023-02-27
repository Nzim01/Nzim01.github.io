import React, { useState } from 'react';
import webCover from "../../../../images/Webspase - Cover.png";
import espCover from "../../../../images/EventSpase - Cover.png";
import almaCover from "../../../../images/Almanac - Cover.png";
import { styles } from './styles';
import ImageWithOverlay from './ImageWithOverlay';
const {container, stripContainer, quad1, quad2, quad3} = styles;

const recentWorkCopy = {
  header: "Recent Work",
  text: "I began my journey as a designer & engineer over 5 years ago. I have since taken on a diverse range of challenging projects including: freelance product design, collaborating with young companies to create digital products, creating and selling enterprise software to medium-sized institutions, and consulting for startups. My journey as a designer is a constant drive to improve my skills, to be naturally curious, and to be the best version of myself, one design problem at a time."
};

function RecentWork({children}) {
  const [recentWorkStyle, setStyle] = useState(styles);

  return (
    <div style={container}>
    <h1 style={recentWorkStyle.headerText}>{recentWorkCopy.header}</h1>
      <div style={stripContainer}>
        <ImageWithOverlay
          src={webCover}
          alt={''}
          style={quad1}
          transformInt={2}
          url={'https://drive.google.com/file/d/11U2b_0MK-bSYBwmRm7uoYhgvI52r7Pru/view?usp=sharing'}
        />
        <ImageWithOverlay
          src={espCover}
          alt={''}
          style={quad2}
          transformInt={-2}
          url={'https://eventspase.com'}
        />
        <ImageWithOverlay
          src={almaCover}
          alt={''}
          style={quad3}
          transformInt={2}
          url={'https://drive.google.com/file/d/1FHHz5jCjPyotYSwqhNkIK79CYYCG5cJ5/view?usp=sharing'}
        />
      </div>
    </div>
  )
}

export default RecentWork;