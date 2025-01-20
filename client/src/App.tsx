import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/core/Navbar'
import Home from './pages/Home'
// import Footer from './components/core/Footer'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Therapists from './pages/Therapists'
import Therapist from './pages/Therapist'
import PrivateRoute from './components/core/PrivateRoute'
// import OpenRoute from './components/core/OpenRoute'

function App() {

  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Login />} />
        <Route path='/login' element={<Signup />} />
        <Route path='/therapy' element={<Therapists />} />

        <Route  
          path='/therapy' 
          element={
            <PrivateRoute>
              <Therapists />
            </PrivateRoute>
          }
        />

        <Route  
          path='/therapist/:id' 
          element={
            <PrivateRoute>
              <Therapist />
            </PrivateRoute>
          }
        />

      </Routes>

    </div>
  )
}

export default App
