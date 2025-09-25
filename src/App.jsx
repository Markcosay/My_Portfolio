import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SocialSidebar from './components/SocialSidebar'
import ThemeProvider from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="App relative min-h-screen transition-colors duration-300">
        <Navbar />
        <SocialSidebar />
        <main>
          <HeroSection />
          <About />
          {/* <Experience /> */}
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App