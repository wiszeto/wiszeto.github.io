import React from 'react';
import './css/App.css';
import { BrowserRouter as Router} from 'react-router-dom';

import Navbar from './components/Navbar';
import ProjectGrid from './components/ProjectGrid.js';
import Skills from './components/Skills';
import FrontPage from './components/FrontPage';
import Tabs from './components/Tab';
import Experience from './components/Experience';

function App() {
  return (
        <Router>

        <Navbar />

        <FrontPage />

        <div id='page'>
          <div id='section'>
            <ProjectGrid />
          </div>

          <div id='skillspace'></div>

          <div id='section'>
            <Tabs />
          </div>

          <div id='experiencespace'></div>

          <div id='section'>
            <Experience />
          </div>

        </div>
        </Router>
  );
}

export default App;
