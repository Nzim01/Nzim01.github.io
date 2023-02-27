import React, { useState, useEffect } from 'react';
import { styles } from './styles';
const {generalFont, ideasFont, superpowerFont} = styles;

const headlineCopy = {
  header: "Turning ideas into products is my superpower",
  part1: "Turning",
  ideas: "ideas",
  part2: "into products is my",
  superpower: "superpower",
}

const HeadlineTypeWriterText = ({ text = headlineCopy.header, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  const [displayPart1, setDisplayPart1] = useState('');
  const [displayIdeas, setDisplayIdeas] = useState('');
  const [displayPart2, setDisplayPart2] = useState('');
  const [displaySuperpower, setDisplaySuperpower] = useState('');

  useEffect(() => {
    let timeout;

    if (index < text.length) {
      timeout = setTimeout(() => {
        setDisplayText((prevText) => prevText + text.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);

        const part1Length = (headlineCopy.part1).length;
        if (index < part1Length) {
          setDisplayPart1((prevText) => prevText + text.charAt(index));
        }

        const ideasLength = (headlineCopy.ideas).length;
        const max2 = part1Length + ideasLength + 1;
        if (index > part1Length && index < max2) {
          setDisplayIdeas((prevText) => prevText + text.charAt(index));
        }

        const part2Length = (headlineCopy.part2).length;
        const max3 = max2 + part2Length + 1;
        if (index > max2 && index < max3) {
          setDisplayPart2((prevText) => prevText + text.charAt(index));
        }

        const superpowerLength = (headlineCopy.superpower).length;
        const max4 = max3 + superpowerLength + 1;
        if (index > max3 && index < max4) {
          setDisplaySuperpower((prevText) => prevText + text.charAt(index));
        }
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [index, text, speed]);

  return (
    <h1 style={generalFont}>
      {displayPart1}
      <span style={ideasFont}> {displayIdeas} </span>
      {displayPart2}
      <br></br>
      <span style={superpowerFont}> {displaySuperpower}</span>
    </h1>
  );
};

export default HeadlineTypeWriterText;
