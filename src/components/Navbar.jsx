// Navbar.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css' // Import your custom stylesheet

function Navbar() {
  return (
    <nav className="navbar bg-primary fixed top-0 shadow-lg border-b border-base-content">
      <div className="flex-1">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl flex items-center gap-2"
        >
          <img src="/daisyui-logo.png" alt="DaisyUI Logo" className="h-8 w-8" />
          Wilson Szeto
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
