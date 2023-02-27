import { useState } from 'react';
import {styles} from './styles';
const {imgStyle, viewProjectText} = styles;

function ImageWithOverlay({ src, alt, style, transformInt, url }) {
    const [isHovered, setIsHovered] = useState(false);

    const overlayStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(to top, rgba(0,0,0, 1), rgba(0,0,0, 0.5))',
      backdropFilter: 'blur(2px)', /* adjust blur radius as desired */
      opacity: isHovered ? 1 : 0,
      transition: 'opacity 0.2s ease-in-out',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      fontSize: '24px',
      fontWeight: 'bold',
    //   transform: 'rotate(-2deg)',
      textDecoration: 'none',
    };
  
    return (
      <div
        style={style}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
       {
        <img
            src={src}
            alt={alt}
            style={{
                ...imgStyle,
                borderRadius: style.borderRadius,
            }}
            // style={{ maxWidth: '100%', height: 'auto' }}
        />
       }
        <a
            href={url}
            style={{
                ...overlayStyle,
                transform: `rotate(${(transformInt * (-1))}deg)` ,
            }}
        >
            <p style={viewProjectText}>View Project</p>
        </a>
      </div>
    );
}

export default ImageWithOverlay;