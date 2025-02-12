// src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { HashRouter as Router } from 'react-router-dom';



// pages
import Home from './pages/Home'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import About from './pages/About'
import Contact from './pages/Contact'
import Acc2024 from './pages/Acc2024'

function App() {
  return (
    // Make the entire screen a flex column
    <div className="flex flex-col min-h-screen">

      {/* The Navbar is fixed, so just include it normally */}
      <Navbar />

      {/* Main content that can grow/shrink */}
      <main className="pt-16 flex-grow p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Acc2024" element={<Acc2024 />} />
        </Routes>
      </main>


      <Footer />
    </div>
  )
}

export default App
