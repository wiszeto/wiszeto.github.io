import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css' // your custom stylesheet

function Navbar() {
  return (
    <nav className="navbar bg-primary fixed top-0 left-0 right-0 shadow-lg border-b border-base-content z-50 px-4">
      {/* Left: Branding / Logo */}
      <div className="navbar-start">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl flex items-center gap-2"
        >
          {/* Logo */}
          <img src="/daisyui-logo.png" alt="DaisyUI Logo" className="h-8 w-8" />
          Wilson Szeto
        </Link>
      </div>

      {/* Right: Menu / Hamburger */}
      <div className="navbar-end">
        {/* Hamburger menu (visible on small screens) */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            {/* Hamburger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </label>
          {/* Dropdown menu */}
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
          >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            {/* <li><Link to="/blog">Blog</Link></li> */}
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Horizontal menu (visible on large screens) */}
        <ul className="menu menu-horizontal hidden lg:flex px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          {/* <li><Link to="/blog">Blog</Link></li> */}
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <button type="submit" className="btn">Resume</button>
    </nav>
  )
}

export default Navbar
