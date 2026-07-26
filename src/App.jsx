import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import BoutonHaut from './components/BoutonHaut.jsx'
import Accueil from './pages/Accueil.jsx'
import ReseauxTelecoms from './pages/ReseauxTelecoms.jsx'
import TransformationDigitale from './pages/TransformationDigitale.jsx'
import SupportsAgricole from './pages/SupportsAgricole.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/reseaux-telecoms" element={<ReseauxTelecoms />} />
          <Route path="/transformation-digitale" element={<TransformationDigitale />} />
          <Route path="/supports-agricole" element={<SupportsAgricole />} />
          <Route path="*" element={<Accueil />} />
        </Routes>
      </main>
      <Footer />
      <BoutonHaut />
    </>
  )
}
