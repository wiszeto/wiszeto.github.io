// src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Import the Navbar
import Navbar from './components/Navbar'

// Import each Page
import Home from './pages/Home'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen pt-16">
      {/* The Navbar stays on every page */}
      <Navbar />

      {/* Route definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
