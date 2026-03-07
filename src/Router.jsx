import { Routes, Route } from 'react-router-dom'
import App from './App'
import CiudadPage from './pages/CiudadPage'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/ciudades/:slug" element={<CiudadPage />} />
    </Routes>
  )
}
