import React from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar';
import ProjectGrid from './components/ProjectGrid.js';
import Skills from './components/Skills';
import FrontPage from './components/FrontPage';
import Tabs from './components/Tab';
import Experience from './components/Experience';
import Cards from './components/test';
import About from './components/About';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import Footer from './components/footer';

function App() {
  return (
        <Router>
          <p id='smallpage'>page width is too small</p>
          <div id='page'>
              <Navbar />
              <FrontPage />
              
              <div id='aboutsection'></div>
              <div id='section'>
                <About />
              </div>
              
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
              
              <div id='experiencesection'></div>
              <div id='section'>
                <Cards />
              </div>

              <div id='xperiencesection'></div>
              <div id='section'>
              <Footer />
              </div>

          </div>
        </Router>
  );
}

export default App;
