import { Routes, Route } from 'react-router-dom'
import App from './App'
import AppEn from './AppEn'
import CiudadPage from './pages/CiudadPage'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/en" element={<AppEn />} />
      <Route path="/ciudades/:slug" element={<CiudadPage />} />
    </Routes>
  )
}
