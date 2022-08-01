import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './App.css'

// Components
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './Pages/About/About'

//Pages
import Home from './Pages/Home/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
