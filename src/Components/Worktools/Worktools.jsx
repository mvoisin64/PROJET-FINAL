import React from 'react'
import ReactLogo from '../../assets/react-icon.png'
import JavaScriptLogo from '../../assets/JavaScript-logo.png'
import TailWindlogo from '../../assets/tailwind.png'
import Githublogo from '../../assets/github-logo.svg'
import Git from '../../assets/Git_icon.png'
import Sass from '../../assets/sass-logo.png'
function Worktools() {
  return (
    <section className=' flex-col w-full  py-10  px:0 bg-gray-100  '>
      {/* Stuff I Like */}
      <div className='max-w-20xl py-10 mx-auto flex items-center container flex-col md:flex-row'>
        <div className='w-[300px] shrink-0 px-8 text-pink-300 border-l-4 border-pink-300  py-2 z-10 sm:text-base text-xl font-semibold text-left'> I work with
        </div>

        {/* logos */}

        <div className=' flex flex-col items-center md:flex-row whitespace-nowrap justify-around flex-wrap  w-full '>
          <div className='flex flex-col font-bold items-center '>            
            <img className=' h-30 w-20 object-contain ' src={ReactLogo} />
            <span>React.js</span>
          </div>
          <div className='flex flex-col font-bold items-center '>
            <img className=' h-30 w-21 object-contain ' src={JavaScriptLogo} />
            <span>JavaScript</span>
          </div>

          <div className='flex flex-col font-bold items-center '>
            <img className=' h-30 w-21 object-contain ' src={TailWindlogo} />
            <span>Tailwind</span>
          </div>
          <div className='flex flex-col font-bold items-center '>
            <img className='h-30 w-21 object-contain  ' src={Githublogo} />
            <span>GitHub</span>
          </div>

          <div className='flex flex-col font-bold items-center '>
            <img className=' h-30 w-21 object-contain ' src={Git} />
            <span>Git</span>
          </div>

          <div className='flex flex-col font-bold items-center '>
            <img className=' h-30 w-21 object-contain ' src={Sass} />
            <span>Sass</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Worktools 