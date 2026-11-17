import { lazy, useEffect } from 'react'
import Hero from '../components/sections/Hero'
import Divider from '../components/Divider'
import LazySection from '../components/LazySection'

const Skills = lazy(() => import('../components/sections/Skills'))
const Experience = lazy(() => import('../components/sections/Experience'))
const Projects = lazy(() => import('../components/sections/Projects'))
const Contact = lazy(() => import('../components/sections/Contact'))

export default function Landing() {
  useEffect(() => {
    const target = document.getElementById(location.hash.slice(1))
    if (target) target.scrollIntoView()
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <>
      <Hero />
      <Divider />
      <LazySection id="skills" component={Skills} />
      <Divider />
      <LazySection id="journey" component={Experience} />
      <Divider />
      <LazySection id="projects" component={Projects} />
      <LazySection id="contact" component={Contact} />
    </>
  )
}
