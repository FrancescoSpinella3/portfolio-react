import './App.css'
import SideBar from "./components/SideBar";
import Hero from "./components/Hero"

function App() {


  return (
    <>
      <main className='flex'>
        <SideBar />

        <Hero />
      </main>
    </>
  )
}

export default App
