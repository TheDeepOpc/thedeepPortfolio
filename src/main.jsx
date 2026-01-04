import { StrictMode } from 'react'
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

createRoot(document.getElementById('root')).render(
  <StrictMode>
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
  </StrictMode>
)
