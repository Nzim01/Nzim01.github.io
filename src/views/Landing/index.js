import React from 'react';
import { Link } from 'react-router-dom';
import About from './sections/About';
import SectionContainer from './components/SectionContainer';
import Headline from './sections/Headline';
import Qualifications from './sections/Qualifications';
import RecentWork from './sections/RecentWork';
import CurrentWork from './sections/CurrentWork';
import ContactMe from './sections/ContactMe';
import NavHeader from './components/NavHeader';
import LandingFooter from './components/LandingFooter';

function Landing() {
  return (
    <div>
      {
      // <h1>Welcome to my portfolio website!</h1>
      // <p>Check out my latest projects:</p>
      }
      <NavHeader />
      <SectionContainer id="headline">
        <Headline />
      </SectionContainer>
      <SectionContainer id="about">
        <About />
      </SectionContainer>
      <SectionContainer id="qualifications">
        <Qualifications />
      </SectionContainer>
      <SectionContainer id="recent-work">
        <RecentWork />
      </SectionContainer>
      <SectionContainer id="current-gig">
        <CurrentWork />
      </SectionContainer>
      <SectionContainer id="contact-me">
        <ContactMe />
      </SectionContainer>
      <LandingFooter />

     {
      // <ul>
      //   <li><Link to="/almanac">Project 1</Link></li>
      //   <li><Link to="/webspase">Project 2</Link></li>
      // </ul>
     }
    </div>
  );
}

export default Landing;
