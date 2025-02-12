// src/components/Footer.jsx
import React, { useState, useEffect } from 'react'

function Footer() {
  const [lastModified, setLastModified] = useState('')
  const [toolTipTextEmail, setToolTipTextEmail] = useState('Email📋')
  const [toolTipTextDiscord, setToolTipTextDiscord] = useState('Discord📋')

  useEffect(() => {
    // Grab the date/time the document was last modified
    setLastModified(new Date(document.lastModified).toLocaleString())
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText('wilsonszerto99@gmail.com')
    setToolTipTextEmail('Email copied!')
    setTimeout(() => setToolTipTextEmail('Email📋'), 2000)
  }

  const copyDiscord = () => {
    navigator.clipboard.writeText('willievibes')
    setToolTipTextDiscord('Discord copied!')
    setTimeout(() => setToolTipTextDiscord('Discord📋'), 2000)
  }

  return (
    <footer className="w-full bg-primary text-primary-content p-10 text-center mt-auto border-t border-primary-focus">
      {/* Wrap everything in a container to keep it centered on any screen size */}
      <div className="container mx-auto flex flex-col items-center justify-center">
        <aside className="mb-4">
          <p>Last modified: {lastModified}</p>
          <p>Built with React.js x DaisyUI. Deployed with GitHub Pages.</p>
          <p>© {new Date().getFullYear()} by Wilson Szeto.</p>
        </aside>

        <nav>
          <div className="flex items-center justify-center gap-4">
            {/* LinkedIn link (opens in new tab) */}
            <a
              href="https://www.linkedin.com/in/wilson-szeto-3a4b591aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="tooltip"
              data-tip="LinkedIn"
            >
              <img
                src="https://assets.website-files.com/60bd15d5c073d2b388bdd0a8/60bd30cb3b75756079228059_LinkedIn.svg"
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </a>

            {/* Email (copy to clipboard) */}
            <button
              type="button"
              onClick={copyEmail}
              className="tooltip"
              data-tip={toolTipTextEmail}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 
                    8h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 
                    2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </button>

            {/* Discord (copy to clipboard) */}
            <button
              type="button"
              onClick={copyDiscord}
              className="tooltip"
              data-tip={toolTipTextDiscord}
            >
              <img
                src="https://assets.website-files.com/60bd15d5c073d2b388bdd0a8/60bd30cab4e34dd54b8b5805_Discord.svg"
                alt="Discord"
                className="w-6 h-6"
              />
            </button>
          </div>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
