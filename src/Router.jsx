import { Routes, Route } from 'react-router-dom'
import App from './App'
import AppEn from './AppEn'
import CiudadPage from './pages/CiudadPage'
import CasasPremiumPage from './pages/CasasPremiumPage'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/en" element={<AppEn />} />
      <Route path="/ciudades/:slug" element={<CiudadPage />} />
      <Route path="/casas-premium" element={<CasasPremiumPage />} />
    </Routes>
  )
}
