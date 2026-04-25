import React from 'react'
import Hero from './hero'
import Nav from './nav'
import Body from './body'
import Projects from './projects'
import Contactus from './contactus'
import Footer from './footer'
function Home() {
  return (
     <div
        style={{
          minHeight: '100vh',
          width: '100%',
          color: '#fff',
          backgroundColor: '#0a0a0f',
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,

        }}
      >
        <Hero />
        <Nav />

        <div id="bodysection">
          <Body />
        </div>

        <div id="projectsection">
          <Projects />
        </div>

        <div id="Contactussection">
          <Contactus />
        </div>

        <div id="footersection">
          <Footer />
        </div>
      </div>
  )
}

export default Home
