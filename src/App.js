import React from 'react';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';
import './css/App.css';

const App = () => {
  return (
    <div className="app-container">
      <div className="side-left">
        <Profile />
        <Navbar />
      </div>
      <div className="side-right">
        <About />
        <Skills />
        <Projects />
        <Experience /> 
        <Footer />
      </div>
    </div>
  );
}

export default App;
