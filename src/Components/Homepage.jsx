import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar/Navbar.jsx'
import Hero from './Hero/Hero'
import Worktools from './Worktools/Worktools'
import LogoAnimation from './LogoAnimation/LogoAnimation'
import Projects from './Projects/Projects'
import Aboutme from './AboutMe/AboutMe'
import ContactMe from './ContactMe/ContactMe'
import ScrollIndicator from "./ScrollIndicator/ScrollIndicator";
 


function Homepage() {
const navigate = useNavigate();

  const ThumbClick = (id) => {
    console.log(`Thumb clicked: ${id}`);
    navigate('/ProjectPage/'+ id );}
    
    return (
    <main className='relative min-h-screen overflow-x-hidden'>
      <div className='absolute -top-28 -left-28 w-[500px] h-[1000px] bg-gradient-to-tr from-emerald-400/40 to-pink-500/20 rounded-full blur-[50px] -z-10'></div>
      <div className='overflow-hidden px-11'>
        <ScrollIndicator />
        <Navbar />
        <Hero />
        <div className="w-full h-px bg-black"></div>
        {/* <LogoAnimation /> */}
        <div className="w-full h-px bg-black"></div>
        <Worktools />
        <div className="w-full h-px bg-black"></div>
        <Projects onThumbClick={ThumbClick} />
        <div className="w-full h-px bg-black"></div>
        <Aboutme />
        <div className="w-full h-px bg-black"></div>
        <ContactMe />
      </div>
    </main>
    );
}

export default Homepage;