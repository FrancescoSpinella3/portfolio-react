import './App.css'
import SideBar from "./components/SideBar";
import Hero from "./components/Hero"
import About from "./components/About"


function App() {


  return (
    <>
      <main className='flex'>
        <SideBar />

        <Hero />

        <About />
      </main>
    </>
  )
}

export default App
