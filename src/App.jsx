import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import CursorGlow from './components/CursorGlow'
import ScrollProgressBar from './components/ScrollProgressBar'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <BrowserRouter>
      <Loader show={loading} />
      <ScrollProgressBar />
      <CursorGlow />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </BrowserRouter>
  )
}
