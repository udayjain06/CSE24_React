import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './src/Pages/Home'
import About from './src/Pages/About'
import Contact from './src/Pages/Contact'
import Notfound from './src/Pages/Notfound'
import Navbar from './Component/navbar'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />

          {/* 404 error page */}
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
