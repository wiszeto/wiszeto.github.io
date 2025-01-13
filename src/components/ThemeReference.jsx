import React from 'react'

/**
 * A small utility array to map each theme color
 * to its corresponding className and hex code.
 */
const colors = [
  {
    name: 'primary',
    className: 'bg-primary text-primary-content',
    hex: '#CABFFA', // from your tailwind.config.js
  },
  {
    name: 'secondary',
    className: 'bg-secondary text-secondary-content',
    hex: '#C9F9FF',
  },
  {
    name: 'accent',
    className: 'bg-accent text-accent-content',
    hex: '#FFB2F6',
  },
  {
    name: 'neutral',
    className: 'bg-neutral text-neutral-content',
    hex: '#F2EEFB',
  },
  {
    name: 'base-100',
    className: 'bg-base-100 text-base-content',
    hex: '#FDF9FF',
  },
  {
    name: 'base-200',
    className: 'bg-base-200 text-base-content',
    hex: '#F2E8FF',
  },
  {
    name: 'base-300',
    className: 'bg-base-300 text-base-content',
    hex: '#EAD9FF',
  },
  {
    name: 'info',
    className: 'bg-info text-info-content',
    hex: '#95CCF4',
  },
  {
    name: 'success',
    className: 'bg-success text-success-content',
    hex: '#BBF1C8',
  },
  {
    name: 'warning',
    className: 'bg-warning text-warning-content',
    hex: '#FFEAB6',
  },
  {
    name: 'error',
    className: 'bg-error text-error-content',
    hex: '#FFB1B9',
  },
]

function ThemeReference() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Theme Reference</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {colors.map((color) => (
          <div
            key={color.name}
            className={`${color.className} rounded p-4 shadow`}
          >
            <p className="font-bold capitalize">{color.name}</p>
            <p>{color.hex}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ThemeReference
