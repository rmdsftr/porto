import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './pages/landing'
import NotFound from './pages/not-found'
import './App.css'

const ProjectPage = lazy(() => import('./pages/project'))

function Grain() {
  return (
    <svg className="grain" aria-hidden="true">
      <filter id="grain-noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves={2} stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain-noise)" />
    </svg>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route index element={<Landing />} />
            <Route path="projects/:slug" element={<ProjectPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <Grain />
    </BrowserRouter>
  )
}

export default App
