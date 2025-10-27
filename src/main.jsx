import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './pages/About.jsx'
import Cert from './pages/Cert.jsx'
import Contact from './pages/Contact.jsx'
import AOS from "aos"
import "aos/dist/aos.css"
import Skills from './pages/Skills.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import NavBar from './companents/NavBar.jsx'

AOS.init()

// 🔄 Loader component — dots animatsiyasi ichida
function Loader({ stage }) {
  // ichki dots animatsiyasi (0..3)
  const [dots, setDots] = useState(0)

  useEffect(() => {
    if (stage !== 'analyzing') return

    const t = setInterval(() => {
      setDots(d => (d + 1) % 4) // 0,1,2,3
    }, 400)

    return () => clearInterval(t)
  }, [stage])

  return (
    <div
      className="loading-screen d-flex justify-content-center align-items-center"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000",
        color: "#ffffffff",
        fontSize: "1.6rem",
        fontFamily: "monospace",
        transition: "opacity .4s ease",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {stage === 'analyzing' && (
        <>
          <div className="analyzing-line">
            analyzing{'.'.repeat(dots)}
            <span className="cursor">|</span>
          </div>
        </>
      )}

      {stage === 'granted' && (
        <div className="granted-wrap">
          <div className="granted-line">ACCESS GRANTED</div>
        </div>
      )}
    </div>
  )
}

// 🔥 Root App (loader uchun ketma-ketlik: analyzing → granted → main app)
function RootApp() {
  const [loaded, setLoaded] = useState(false)
  const [stage, setStage] = useState('analyzing') // 'analyzing' | 'granted'

  useEffect(() => {
    const start = Date.now()

    const finishLoading = () => {
      const elapsed = Date.now() - start
      const remaining = Math.max(500 - elapsed, 0) // kamida 500ms kutish

      // avval kichik delay (oldingi xatti-harakatni saqlab)
      setTimeout(() => {
        // Boshlang'ich: analyzing (dots) ko'rsatiladi
        setStage('analyzing')

        // 1.5s analyzing davom etsin (nuqtalar animatsiyasi)
        setTimeout(() => {
          // 2. Grantsga o'tish
          setStage('granted')

          // 0.8s so'ng asosiy sahifaga o'tsin
          setTimeout(() => {
            setLoaded(true)
          }, 800)
        }, 1500)
      }, remaining)
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
        <Route path="/certificates" element={<Cert />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  ) : (
    <Loader stage={stage} />
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootApp />
  </StrictMode>
)
