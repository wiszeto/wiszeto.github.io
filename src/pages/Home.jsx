import React from 'react'
import ThemeReference from '../components/ThemeReference'
import DaisyUIShowcase from '../components/DaisyUIShowcase'

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <p>Welcome to my portfolio home page!</p>
      <ThemeReference />
      <DaisyUIShowcase />
    </div>
  )
}

export default Home
