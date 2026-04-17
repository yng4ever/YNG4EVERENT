import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import Home from './pages/Home'
import Store from './pages/Store'
import Collab from './pages/Collab'
import Merch from './pages/Merch'
import Roster from './pages/Roster'
import Sessions from './pages/Sessions'
import './App.css'

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {
  const location = useLocation()
  return (
    <>
      <Cursor />
      <ScrollTop />
      <Nav />
      <main key={location.pathname} className="page-wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/collab" element={<Collab />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/roster" element={<Roster />} />
          <Route path="/sessions" element={<Sessions />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
