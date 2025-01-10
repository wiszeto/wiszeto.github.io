import React from 'react'

function Navbar() {
  return (
    <nav className="navbar bg-base-100 px-4">
      {/* Left section (brand + dropdown for small screens) */}
      <div className="navbar-start">
        {/* Dropdown (hamburger) - only visible on small screens */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          {/* Dropdown menu items */}
          <ul 
            tabIndex={0} 
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        {/* Brand or title */}
        <a className="btn btn-ghost normal-case text-xl" href="#">
          MyWebsite
        </a>
      </div>

      {/* Center section (nav links for larger screens) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      {/* Right section (extra buttons, profile, etc.) */}
      <div className="navbar-end">
        <a className="btn" href="#">Get Started</a>
      </div>
    </nav>
  )
}

export default Navbar
