import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './pages/About.jsx'
import Cert from './pages/Cert.jsx'
import Contact from './pages/Contact.jsx'
import Resume from './pages/Resume.jsx'
import AOS from "aos"
import "aos/dist/aos.css"
import Skills from './pages/Skills.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import NavBar from './companents/NavBar.jsx'

AOS.init()

// 🔄 Loading sahifa
function Loader() {
  return (
    <div
      className="loading-screen d-flex justify-content-center align-items-center"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        color: "white",
        fontSize: "1.8rem",
        fontFamily: "monospace",
        transition: "opacity .5s ease"
      }}
    >
      Loading...
    </div>
  )
}

// 🔥 Root App (500ms delay bilan)
function RootApp() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const start = Date.now()

    const finishLoading = () => {
      const elapsed = Date.now() - start
      const remaining = Math.max(500 - elapsed, 0) // kamida 500ms kutish
      setTimeout(() => setLoaded(true), remaining)
    }

    if (document.readyState === "complete") {
      finishLoading()
    } else {
      window.addEventListener("load", finishLoading)
      return () => window.removeEventListener("load", finishLoading)
    }
  }, [])

  return loaded ? (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/cert" element={<Cert />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  ) : (
    <Loader />
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootApp />
  </StrictMode>
)
