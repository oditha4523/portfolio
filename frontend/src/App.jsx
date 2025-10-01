import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Portfolio from './components/Portfolio/Portfolio'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Hero />
        <Portfolio />
      </main>
      <Footer />
    </div>
  )
}

export default App
