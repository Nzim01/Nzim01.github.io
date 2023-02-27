import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import {styles} from './styles';
const {nameStyle, navStyle, stickyNavStyle, navLinkStyle, liStyle} = styles;

function NavHeader() {

  const location = useLocation();
  useEffect(() => {
    const hash = location.hash;
    if (hash !== '') {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  

  return (
    <nav style={navStyle}>
      <ul style={stickyNavStyle}>
        <li style={liStyle}><p style={nameStyle}>Nkanyiso Nzimande</p></li>
        <li style={liStyle}><Link style={navLinkStyle} to="/#about">About</Link></li>
        <li style={liStyle}><Link style={navLinkStyle} to="/#recent-work">Work</Link></li>
        <li style={liStyle}><Link style={navLinkStyle} to="/#contact-me">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default (NavHeader);