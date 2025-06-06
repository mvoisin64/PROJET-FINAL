import React from 'react'
import ReactLogo from '../../assets/react-icon.png'
function Worktools() {
  return (
    <section className='w-full  py-10  px:0 bg-gray-100 '>

      <div className='max-w-20xl py-10 mx-auto flex items-center container sm:flex-row flex-col'>
        <div className='w-[300px] shrink-0 px-8 text-pink-300 border-l-4 border-pink-300  py-2 z-10 sm:text-base text-xl font-semibold text-left'> I work with
        </div>
        <div className=' whitespace-nowrap flex flex-wrap space-x-15 items-center w-full sm:flex-row flex-col'>
          <div className='flex font-bold relative'><img className=' h-30 w-20 object-contain ' src={ReactLogo} />
            <span className="absolute top-25 ml-2">React.js</span>
          </div>
          <span>JAVASCRIPT</span>
          <span>TAILWIND</span>
          <span>GitHub</span>
          <span>Git</span>
          <span>Sass</span>          
        </div>

      </div>
    </section>
  )
}

export default Worktools 