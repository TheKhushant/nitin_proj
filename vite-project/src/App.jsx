import { useState } from 'react'
import React from 'react'
import "./HeroSection.css";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className="hero-section">
      <div className="overlay" />
      <div className="hero-content">
        <h1>
          The best products <br /> start with Figma
        </h1>
        <p>
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </p>
        <button className="cta-button">Try For Free</button>
      </div>
      <div className="bottom-shape">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path
            d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}

export default App
