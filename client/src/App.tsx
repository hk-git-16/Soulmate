import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/core/Navbar'
import Home from './pages/Home'
import Footer from './components/core/Footer'

function App() {

  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
