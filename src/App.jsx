import './App.css'
import SideBar from "./components/SideBar";
import Hero from "./components/Hero"
import About from "./components/About"
import Career from "./components/Career"
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import MobileMenu from './components/MobileMenu';

function App() {

  return (
    <>
      <SideBar />

      <MobileNav />

      <MobileMenu />

      <main>

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Career />

      </main>

      <Footer />
    </>
  )
}

export default App
