import './App.css'
import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/home-page/HomePage'
import LandingPage from './pages/landing-page/LandingPage'
import DriversPage from './pages/drivers-page/DriversPage'
import DriverDetailPage from './pages/driver-detail-page/DriverDetailPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route exa path='/' element={<LandingPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/drivers' element={<DriversPage />} />
        <Route path='/drivers/:id' element={<DriverDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
