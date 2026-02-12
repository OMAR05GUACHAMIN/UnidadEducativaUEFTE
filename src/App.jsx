import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Inicio from './pages/Inicio'
import Nosotros from './pages/Nosotros'
import OfertaAcademica from './pages/OfertaAcademica'
import Noticias from './pages/Noticias'
import Contacto from './pages/Contacto'

import Rectora from './pages/autoridades/Rectora'
import Vicerrector from './pages/autoridades/Vicerrector'
import Inspectora from './pages/autoridades/Inspectora'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/oferta-academica" element={<OfertaAcademica />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/contacto" element={<Contacto />} />

        <Route path="/autoridades/rectora" element={<Rectora />} />
        <Route path="/autoridades/vicerrector" element={<Vicerrector />} />
        <Route path="/autoridades/inspectora" element={<Inspectora />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
