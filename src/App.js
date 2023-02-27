// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './views/Landing/index.js';
import Almanac from './views/Almanac/index.js';
import Webspase from './views/Webspase/index.js';
import About from './views/Landing/sections/About/index.js';
import RecentWork from './views/Landing/sections/RecentWork/index.js';
import ContactMe from './views/Landing/sections/ContactMe/index.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/almanac" element={<Almanac />} />
        <Route path="/webspase" element={<Webspase />} />
        {
        //   <Route path="/about" element={<About />} />
        // <Route path="/work" element={<RecentWork />} />
        // <Route path="/contact" element={<ContactMe />} />
        }

      </Routes>
    </Router>
  );
}

export default App;

