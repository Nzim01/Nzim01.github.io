import React, { useState } from 'react';
import { styles } from './styles';
import image1 from "../../../../images/self-watercolor.png";
import image2 from "../../../../images/self-cartoonizer.png";
// import { GlobalColors } from "../../../../styles/Colors";

const boxStyle = {
  position: 'relative',
  width: '100vw',
  height: '100vh',
  // backgroundColor: `rgb(${255 - sliderValue}, ${0 + sliderValue}, ${255 - sliderValue})`,
  // backgroundColor: 'red',
  // background: `linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,1)), url(${image1})`, 
  // backgroundSize: "cover", 
  // eslint-disable-next-line no-useless-concat
  // backgroundImage: `url(${image1})`,
  // backgroundPosition: 'center',
  // backgroundSize: 'cover',
  // backgroundRepeat: 'no-repeat',
  transition: 'width 0.5s ease-in-out'
};

const imageStyle1 = {
  position: "absolute", 
  top: "0", 
  left: "0", 
  width: "100%", 
  height: "100%", 
  opacity: 100,
  maskImage: `linear-gradient(to right, rgba(0, 0, 0, 0) ${50}%, rgba(0, 0, 0, 1) ${50}%)`,
  WebkitMaskImage: `linear-gradient(to right, rgba(0, 0, 0, 0) ${50}%, rgba(0, 0, 0, 1) ${50}%)`,
  // maskImage: `linear-gradient(to left, transparent, black ${0}%)`, 
  // WebkitMaskImage: `linear-gradient(to left, transparent, black ${0}%)`, 
  maskSize: "100% 100%", 
  WebkitMaskSize: "100% 100%",
  objectFit: 'cover',
};

const imageStyle2 = {
  position: "absolute", 
  top: "0", 
  left: "0", 
  width: "100%", 
  height: "100%", 
  opacity: 100,
  maskImage: `linear-gradient(to left, rgba(0, 0, 0, 0) ${50}%, rgba(0, 0, 0, 1) ${50}%)`,
  WebkitMaskImage: `linear-gradient(to left, rgba(0, 0, 0, 0) ${50}%, rgba(0, 0, 0, 1) ${50}%)`,
  // maskImage: `linear-gradient(to left, transparent, black ${0}%)`, 
  // WebkitMaskImage: `linear-gradient(to left, transparent, black ${0}%)`, 
  maskSize: "100% 100%", 
  WebkitMaskSize: "100% 100%",
  objectFit: 'cover',
};


function Qualifications({children}) {
  const [sliderValue, setSliderValue] = useState(50);
  const [testStyle, setTestStyle] = useState(boxStyle);
  const [imgStyle, setImgStyle] = useState(imageStyle1);
  const [imgStyle2, setImgStyle2] = useState(imageStyle2);



  const handleSliderChange = (event) => {
    // const val = event.target.value;
    // const newWidth = (100 - val);
    // setSliderValue(event.target.value);
    

    // // setTestStyle(prevStyle => ({
    // //   ...prevStyle,
    // //   width: `${newWidth}vw`,
    // // }));
    // setImgStyle(prevStyle => ({
    //   ...prevStyle,
    //   // opacity: newWidth / 100,
    //   // maskImage: `linear-gradient(to right, transparent, black ${val}%)`, 
    //   // WebkitMaskImage: `linear-gradient(to right, transparent, black ${val}%)`, 
    //   maskImage: `linear-gradient(to right, rgba(0, 0, 0, 0) ${val}%, rgba(0, 0, 0, 1) ${val}%)`,
    //   WebkitMaskImage: `linear-gradient(to right, rgba(0, 0, 0, 0) ${val}%, rgba(0, 0, 0, 1) ${val}%)`,
    // }));

    // setImgStyle2(prevStyle => ({
    //   ...prevStyle,
    //   // opacity: newWidth / 100,
    //   // maskImage: `linear-gradient(to right, transparent, black ${val}%)`, 
    //   // WebkitMaskImage: `linear-gradient(to right, transparent, black ${val}%)`, 
    //   maskImage: `linear-gradient(to left, rgba(0, 0, 0, 0) ${newWidth}%, rgba(0, 0, 0, 1) ${newWidth}%)`,
    //   WebkitMaskImage: `linear-gradient(to left, rgba(0, 0, 0, 0) ${newWidth}%, rgba(0, 0, 0, 1) ${newWidth}%)`,
    // }));
  };

  const handleMouseMove = (event) => {
    const x = event.clientX - event.currentTarget.offsetLeft;
    const val = Math.round((x / event.currentTarget.offsetWidth) * 100);

    // const val = event.target.value;
    const newWidth = (100 - val);
    setSliderValue(event.target.value);
    

    // setTestStyle(prevStyle => ({
    //   ...prevStyle,
    //   width: `${newWidth}vw`,
    // }));
    setImgStyle(prevStyle => ({
      ...prevStyle,
      // opacity: newWidth / 100,
      // maskImage: `linear-gradient(to right, transparent, black ${val}%)`, 
      // WebkitMaskImage: `linear-gradient(to right, transparent, black ${val}%)`, 
      maskImage: `linear-gradient(to right, rgba(0, 0, 0, 0) ${val}%, rgba(0, 0, 0, 1) ${val}%)`,
      WebkitMaskImage: `linear-gradient(to right, rgba(0, 0, 0, 0) ${val}%, rgba(0, 0, 0, 1) ${val}%)`,
    }));

    setImgStyle2(prevStyle => ({
      ...prevStyle,
      // opacity: newWidth / 100,
      // maskImage: `linear-gradient(to right, transparent, black ${val}%)`, 
      // WebkitMaskImage: `linear-gradient(to right, transparent, black ${val}%)`, 
      maskImage: `linear-gradient(to left, rgba(0, 0, 0, 0) ${newWidth}%, rgba(0, 0, 0, 1) ${newWidth}%)`,
      WebkitMaskImage: `linear-gradient(to left, rgba(0, 0, 0, 0) ${newWidth}%, rgba(0, 0, 0, 1) ${newWidth}%)`,
    }));
  };

  // const boxStyle = {
  //   width: `(100 - ${sliderValue})vw`,
  //   height: '100vh',
  //   // backgroundColor: `rgb(${255 - sliderValue}, ${0 + sliderValue}, ${255 - sliderValue})`,
  //   backgroundColor: 'red',
  //   transition: 'width 0.5s ease-in-out'
  // };

  const containerStyle = {
    width: '100%',
    height: '100%',
    // backgroundColor: 'yellow',
    // backgroundColor: `rgb(${255 - sliderValue}, ${0 + sliderValue}, ${255 - sliderValue})`,
    // transition: 'background-color 0.5s ease-in-out'
  };

  // const imageStyle0 = {
  //   position: 'relative',
  //   top: "0", 
  //   left: "0", 
  //   width: '100%',
  //   height: '100%',
  //   objectFit: 'none',
  //   // backgroundColor: `rgb(${255 - sliderValue}, ${0 + sliderValue}, ${255 - sliderValue})`,
  //   transition: 'background-color 0.5s ease-in-out',
  //   justifyContent: 'flexStart',
  //   alignItems: 'flexStart',
  // };

  const sliderStyle = {
    width: '100%'
  };

  return (
    <div style={containerStyle} onMouseMove={handleMouseMove}>
      {
        // <input type="range" min="0" max="255" value={sliderValue} onInput={handleSliderChange} style={sliderStyle} />
      }
      <input type="range" min="0" max="100" value={sliderValue} onInput={handleSliderChange} style={sliderStyle} />
      {
        <div style={testStyle}>
          <img
            src={image1}
            alt={''}
            style={imgStyle}
          />
          <img
            src={image2}
            alt={''}
            style={imgStyle2}
          />
        </div>
      }
      {
        // <img
        //   src={image1}
        //   alt={''}
        //   style={imageStyle1}
        // />
      }
    </div>
  );
}

export default Qualifications;