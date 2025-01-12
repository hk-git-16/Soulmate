import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/core/Navbar'
import Home from './pages/Home'
import Footer from './components/core/Footer'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {

  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Login />} />
        <Route path='/login' element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
