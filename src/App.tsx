import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './pages/landing'
import NotFound from './pages/not-found'
import './App.css'

const ProjectPage = lazy(() => import('./pages/project'))

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
    </BrowserRouter>
  )
}

export default App
