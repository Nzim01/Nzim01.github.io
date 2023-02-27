import React, { useState } from 'react';
import { styles } from './styles';
import watercolor from "../../../../images/self-watercolor.png";
import cartoon from "../../../../images/self-cartoonizer.png";

const {
  container, containerOverlay, imagesContainer, image1, image2,
  detailsContainer, detailsSection, detailsSectionHeader, designerSectionHeader, engineerSectionHeader,
  detailsPart1, detailsPart2, designerSectionSubHeader,
} = styles;

const designerQuals = {
  header: "Designer",
  subHeader1: "What I like to design:",
  content1: {
    type: 'text',
    copy: "Mobile & Web Apps",
  },
  subHeader2: "Design Tools:",
  content2: {
    type: 'list',
    copy: ["Figma", "Sketch", "InVision", "Pen & Paper"],
  },
}

const engineerQuals = {
  header: "Engineer",
  subHeader1: "Languages:",
  content1: {
    type: 'list',
    copy: ["Python", "Java", "JavaScript", "HTML/CSS"],
  },
  subHeader2: "Technologies:",
  content2: {
    type: 'list',
    copy: ["React", "React Native", "Firebase", "Bootstrap", "GitHub"],
  },
}


function Qualifications({children}) {
  const [imgStyle, setImgStyle] = useState(image1);
  const [imgStyle2, setImgStyle2] = useState(image2);

  const handleMouseMove = (event) => {
    const x = event.clientX - event.currentTarget.offsetLeft;
    const val = Math.round((x / event.currentTarget.offsetWidth) * 100);
    const newWidth = (100 - val);
    
    setImgStyle(prevStyle => ({
      ...prevStyle,
      maskImage: `linear-gradient(to right, rgba(0, 0, 0, 0) ${val}%, rgba(0, 0, 0, 1) ${val}%)`,
      WebkitMaskImage: `linear-gradient(to right, rgba(0, 0, 0, 0) ${val}%, rgba(0, 0, 0, 1) ${val}%)`,
    }));

    setImgStyle2(prevStyle => ({
      ...prevStyle,
      maskImage: `linear-gradient(to left, rgba(0, 0, 0, 0) ${newWidth}%, rgba(0, 0, 0, 1) ${newWidth}%)`,
      WebkitMaskImage: `linear-gradient(to left, rgba(0, 0, 0, 0) ${newWidth}%, rgba(0, 0, 0, 1) ${newWidth}%)`,
    }));
  };

  return (
    <div style={container} onMouseMove={handleMouseMove}>
      <div style={containerOverlay}>
      </div>
      <div style={detailsContainer}>
        <div style={detailsSection}>
          <h1 style={designerSectionHeader}>{designerQuals.header}</h1>
          <section style={detailsPart1}>
            <h2 style={designerSectionSubHeader}>{designerQuals.subHeader1}</h2>
            {
              ((designerQuals.content1.type === "text") ?
              <p>{designerQuals.content1.copy}</p> :
              <ul>
                {(designerQuals.content1.copy).map(item => <li key={item}>{item}</li>)}
              </ul>
              )
            }
          </section>
          <section style={detailsPart2}>
            <h2 style={designerSectionSubHeader}>{designerQuals.subHeader2}</h2>
            {
              ((designerQuals.content2.type === "text") ?
              <p>{designerQuals.content2.copy}</p> :
              <ul>
                {(designerQuals.content2.copy).map(item => <li key={item}>{item}</li>)}
              </ul>
              )
            }
          </section>
        </div>
        <div style={detailsSection}>
          <h1 style={engineerSectionHeader}>{engineerQuals.header}</h1>
          <section style={detailsPart1}>
          <h2 style={designerSectionSubHeader}>{engineerQuals.subHeader1}</h2>
          {
            ((engineerQuals.content2.type === "text") ?
            <p>{engineerQuals.content2.copy}</p> :
            <ul>
              {(engineerQuals.content2.copy).map(item => <li key={item}>{item}</li>)}
            </ul>
            )
          }
          </section>
          <section style={detailsPart2}>
          <h2 style={designerSectionSubHeader}>{engineerQuals.subHeader2}</h2>
          {
            ((engineerQuals.content2.type === "text") ?
            <p>{engineerQuals.content2.copy}</p> :
            <ul>
              {(engineerQuals.content2.copy).map(item => <li key={item}>{item}</li>)}
            </ul>
            )
          }
          </section>
        </div>
      </div>
      {
        <div style={imagesContainer}>
          <img
            src={watercolor}
            alt={''}
            style={imgStyle}
          />
          <img
            src={cartoon}
            alt={''}
            style={imgStyle2}
          />
        </div>
      }
    </div>
  );
}

export default Qualifications;