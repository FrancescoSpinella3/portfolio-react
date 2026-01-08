import './App.css'
import SideBar from "./components/SideBar";
import MobileNav from './components/MobileNav';
import Hero from "./components/Hero"
import About from "./components/About"
import Footer from './components/Footer';

import { Suspense, lazy } from 'react'
import { ThemeProvider } from './contexts/ThemeContext';

const Career = lazy(() => import('./components/Career/Career'))
const Skills = lazy(() => import('./components/Skills/Skills'))
const Projects = lazy(() => import('./components/Projects/Projects'))


function App() {

  return (
    <ThemeProvider>
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
    </ThemeProvider>
  )
}

export default App
