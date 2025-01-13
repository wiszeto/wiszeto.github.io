// src/pages/DaisyUIShowcase.jsx
import React, { useState } from 'react'

function DaisyUIShowcase() {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <div className="p-4 space-y-12">
      <h1 className="text-4xl font-bold mb-8">DaisyUI Component Showcase</h1>

      {/* 1) Alerts */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Alerts</h2>
        <div className="flex flex-col gap-2">
          <div className="alert alert-info">
            <span>Info: This is an info alert</span>
          </div>
          <div className="alert alert-success">
            <span>Success: This is a success alert</span>
          </div>
          <div className="alert alert-warning">
            <span>Warning: This is a warning alert</span>
          </div>
          <div className="alert alert-error">
            <span>Error: This is an error alert</span>
          </div>
        </div>
      </section>

      {/* 2) Buttons */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <button className="btn">Default Button</button>
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-accent">Accent</button>
          <button className="btn btn-info">Info</button>
          <button className="btn btn-success">Success</button>
          <button className="btn btn-warning">Warning</button>
          <button className="btn btn-error">Error</button>
          <button className="btn btn-outline">Outline</button>
          <button className="btn btn-disabled" disabled>Disabled</button>
          <button className="btn loading">Loading</button>
          <button className="btn btn-circle">O</button>
          <button className="btn btn-square">[]</button>
        </div>
      </section>

      {/* 3) Badges */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Badges</h2>
        <div className="space-x-2">
          <span className="badge">Default</span>
          <span className="badge badge-primary">Primary</span>
          <span className="badge badge-secondary">Secondary</span>
          <span className="badge badge-accent">Accent</span>
          <span className="badge badge-info">Info</span>
          <span className="badge badge-success">Success</span>
          <span className="badge badge-warning">Warning</span>
          <span className="badge badge-error">Error</span>
          <span className="badge badge-outline">Outline</span>
        </div>
      </section>

      {/* 4) Avatars */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Avatar</h2>
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img 
              src="https://api.lorem.space/image/face?hash=3174" 
              alt="Avatar" 
            />
          </div>
        </div>
      </section>

      {/* 5) Cards */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Card</h2>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img 
              src="https://api.lorem.space/image/album?w=400&h=225" 
              alt="Album" 
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              New album is released!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Click the button to listen on your favorite streaming platform.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Music</div>
              <div className="badge badge-outline">Songs</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6) Form Elements (Inputs, Select, Checkbox, Radio) */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Form Inputs</h2>
        <div className="space-y-4 max-w-sm">
          <input 
            type="text" 
            placeholder="Type here" 
            className="input input-bordered w-full" 
          />
          <input 
            type="text" 
            placeholder="Disabled input" 
            className="input input-bordered w-full" 
            disabled 
          />
          <select className="select select-bordered w-full">
            <option disabled selected>Pick a flavor</option>
            <option>Vanilla</option>
            <option>Chocolate</option>
            <option>Strawberry</option>
          </select>
          <label className="label cursor-pointer">
            <span className="label-text">Checkbox</span>
            <input 
              type="checkbox" 
              className="checkbox checkbox-primary" 
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Radio</span>
            <input 
              type="radio" 
              name="radio-example" 
              className="radio radio-accent" 
              checked 
            />
          </label>
        </div>
      </section>

      {/* 7) Progress & Radial Progress */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Progress</h2>
        <progress className="progress w-56" value="10" max="100"></progress>
        <progress className="progress progress-primary w-56" value="40" max="100"></progress>
        <progress className="progress progress-secondary w-56" value="70" max="100"></progress>
        <progress className="progress progress-accent w-56" value="100" max="100"></progress>

        <h3 className="text-xl font-semibold mt-4 mb-2">Radial Progress</h3>
        <div className="flex items-center gap-4">
          <div className="radial-progress" style={{"--value":70}}>70%</div>
          <div className="radial-progress text-primary" style={{"--value":50}}>50%</div>
          <div className="radial-progress text-secondary" style={{"--value":90}}>90%</div>
        </div>
      </section>

      {/* 8) Tooltip */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Tooltip</h2>
        <div className="tooltip tooltip-secondary" data-tip="Hello! I'm a tooltip.">
          <button className="btn">Hover me</button>
        </div>
      </section>

      {/* 9) Collapse (Accordion) */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Collapse</h2>
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <div className="collapse-title text-xl font-medium">
            Click me to show/hide content
          </div>
          <div className="collapse-content">
            <p>Here is some hidden content, revealed by toggling the collapse.</p>
          </div>
        </div>
      </section>

      {/* 10) Modal */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Modal</h2>
        <button 
          className="btn btn-primary"
          onClick={() => setModalOpen(true)}
        >
          Open Modal
        </button>

        {/* The modal itself */}
        {isModalOpen && (
          <div className="modal modal-open">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">This is a DaisyUI modal example.</p>
              <div className="modal-action">
                <button
                  className="btn"
                  onClick={() => setModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 11) Tabs */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Tabs</h2>
        <div className="tabs">
          <a className="tab tab-lifted tab-active">Tab 1</a>
          <a className="tab tab-lifted">Tab 2</a>
          <a className="tab tab-lifted">Tab 3</a>
        </div>
      </section>

      {/* 12) Breadcrumbs */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Breadcrumbs</h2>
        <div className="breadcrumbs">
          <ul>
            <li><a>Home</a></li>
            <li><a>Documents</a></li>
            <li>Add New</li>
          </ul>
        </div>
      </section>

      {/* 13) Stats */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Stats</h2>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Downloads</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>
          <div className="stat">
            <div className="stat-title">New Users</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>
          <div className="stat">
            <div className="stat-title">Sales</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </section>

      {/* 14) Hero Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Hero</h2>
        <div className="hero bg-base-200">
          <div className="hero-content text-center p-10">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">
                This is a hero section with DaisyUI. Perfect for welcoming users to your site.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* 15) Footer */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Footer</h2>
        <footer className="footer p-10 bg-neutral text-neutral-content">
          <div>
            <p className="font-bold">SiteName</p>
            <p>© 2025 - All right reserved</p>
          </div>
          <div>
            <span className="footer-title">Social</span> 
            <div className="grid grid-flow-col gap-4">
              <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                viewBox="0 0 24 24" className="fill-current">
                  <path d="M24 4.557... (icon path omitted)"/>
              </svg></a>
              <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                viewBox="0 0 24 24" className="fill-current">
                  <path d="M24 4.557... (icon path omitted)"/>
              </svg></a>
            </div>
          </div>
        </footer>
      </section>
    </div>
  )
}

export default DaisyUIShowcase
