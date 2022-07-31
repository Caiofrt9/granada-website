import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './App.css'

// Components
import Footer from './components/Footer'
import Navbar from './components/Navbar'

//Pages
import Home from './Pages/Home/Home'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Home />
      </div>
      <Footer />
    </div>
  )
}

export default App
