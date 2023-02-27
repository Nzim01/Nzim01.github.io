import React, { useState, useEffect } from 'react';

const TypewriterText = ({ style, text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (index < text.length) {
      timeout = setTimeout(() => {
        setDisplayText((prevText) => prevText + text.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [index, text, speed]);

  return <span style={style}>{displayText}</span>;
};

export default TypewriterText;
