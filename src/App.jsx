import './App.css'
import SideBar from "./components/SideBar";
import Hero from "./components/Hero"
import About from "./components/About"
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import { Suspense, lazy } from 'react'

const Career = lazy(() => import('./components/Career'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))

function App() {

  return (
    <>
      <SideBar />

      <MobileNav />

      <main>

        <Hero />

        <About />

        <Suspense fallback={<div className="sr-only">Caricamento...</div>}>
          <Skills />
        </Suspense>

        <Suspense fallback={<div className="sr-only">Caricamento...</div>}>
          <Projects />
        </Suspense>

        <Suspense fallback={<div className="sr-only">Caricamento...</div>}>
          <Career />
        </Suspense>

      </main>

      <Footer />
    </>
  )
}

export default App
