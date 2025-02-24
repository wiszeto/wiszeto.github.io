// src/components/Footer.jsx
import React, { useState, useEffect } from 'react'
import linkedInLogo from '../media/linkedin.png'
import gitHubLogo from '../media/github.png'
import emailLogo from '../media/email.png'

function Footer() {
  const [lastModified, setLastModified] = useState('')

  useEffect(() => {
    // Grab the date/time the document was last modified
    setLastModified(new Date(document.lastModified).toLocaleString())
  }, [])

  return (
    <footer className="w-full bg-primary text-primary-content p-10 text-center mt-auto border-t border-primary-focus">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <aside className="mb-4">
          <p>Last modified: {lastModified}</p>
          <p>Built with React.js x DaisyUI. Deployed with GitHub Pages.</p>
          <p>© {new Date().getFullYear()} by Wilson Szeto.</p>
        </aside>

        {/* New nav with the same icons from Home.jsx */}
        <nav>
          <div className="flex items-center justify-center gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/wiszeto/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedInLogo}
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/wiszeto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={gitHubLogo}
                alt="GitHub"
                className="w-6 h-6"
              />
            </a>

            {/* Email */}
            <a
              href="mailto:your.wilsonszerto99@gmail.com"
            >
              <img
                src={emailLogo}
                alt="Email"
                className="w-6 h-6"
              />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
