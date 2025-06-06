import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Worktools from './Components/Worktools/Worktools'
import LogoAnimation from './Components/LogoAnimation/LogoAnimation'
import Projects from './Components/Projects/Projects'
import Aboutme from './Components/AboutMe/AboutMe'
import ContactMe from './Components/ContactMe/ContactMe'
function App() {
  return (
    <main className='relative min-h-screen overflow-x-hidden'>
      <div className='absolute -top-28 -left-28 w-[500px] h-[1000px] bg-gradient-to-tr from-emerald-400/40 to-pink-500/20 rounded-full blur-[50px] -z-10'></div>
      <div className='overflow-hidden px-11'>
        <Navbar />
        <Hero />
        <div className="w-full h-px bg-black"></div>
        <LogoAnimation />
        <div className="w-full h-px bg-black"></div>
        <Worktools />
        <div className="w-full h-px bg-black"></div>
        <Projects />
        <div className="w-full h-px bg-black"></div>
        <Aboutme />
        <div className="w-full h-px bg-black"></div>
        <ContactMe />
      </div>
    </main>
  )
}

export default App
