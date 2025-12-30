import './App.css'
import SideBar from "./components/SideBar";
import Hero from "./components/Hero"
import About from "./components/About"
import Career from "./components/Career"
import Skills from './components/Skills';
import Projects from './components/Projects';


function App() {

  return (
    <>
      <SideBar />
      
      <main>

        <Hero />

        <About />

        <Career />

        <Skills />

        <Projects />

      </main>
    </>
  )
}

export default App
