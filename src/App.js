import React from 'react';
import './css/App.css';
import { BrowserRouter as Router} from 'react-router-dom';

import Navbar from './components/Navbar';
import ProjectGrid from './components/ProjectGrid.js';
import Skills from './components/Skills';
import FrontPage from './components/FrontPage';
import Tabs from './components/Tab';
import Experience from './components/Experience';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';

function App() {
  return (
        <Router>

        <p id='smallpage'>page width is too small</p>

        <div id='page'>

          <Navbar />
          <FrontPage />

          <div id='projectsection'></div>

          <div id='section'>
            <ProjectGrid />
          </div>

          <div id='skillsection'></div>

          <div id='section'>
            <Tabs />
          </div>

          <div id='experiencesection'></div>

          <div id='section'>
            <Experience />
          </div>

          <div id='aboutsection'></div>

          <div id='section'>

          </div>

        </div>
        </Router>
  );
}

export default App;
