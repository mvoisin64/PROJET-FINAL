import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import matal from "../../assets/Matal.png"
function Hero() {
    return (
        <section id='home' className='container mx-auto flex flex-col md:flex-row justify-between items-center pt-30 pb-6 px-4 sm:px-6 lg:px-8 '>
            {/* left col */}

            <div className='w-full md:w-1/2 space-y-8' >



                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold  leading-tight'>Marin</h1>
                <h2 className='text-2xl md:text-3xl lg:text-4xl relative'>Front-End Software Engineer & Sound Curation
                    <span className='absolute bottom-0 left-0 w-full h-0.5 bg-amber-500'> </span>
                </h2>

                {/* Badge */}
                <button onClick={() => {
                    const section = document.getElementById("AboutMe");
                    section?.scrollIntoView({ behavior: "smooth" });

                }} className='flex items-center gap-2 bg-gray-100 w-fit px-4 py-2 rounded-full hover:bg-gray-200 transition-colors'>
                    <span className='font-bold text-sm'>About me </span>
                    <FaArrowRight className="w-2 h-2" />

                </button>



            </div>
            {/* right col */}
            <div className=' w-full md:w-1/2 space-y-8 mt-16 md:mt-0 pl-0 md:pl-12' >
                <div className='relative'>
                    <img src={matal} alt="Matteo image" className="w-120 h-120 rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300" />
                </div>
                {/* apple music */}
                <div className="w-full max-w-xl mx-auto my-8">
                    <iframe
                        title="Apple Music Playlist"
                        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                        height="450"
                        className="w-full max-w-[500px] overflow-hidden rounded-[10px] hover:scale-[1.02] transition-transform duration-300"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                        src="https://embed.music.apple.com/fr/playlist/curated-by-marin/pl.u-76oNzgMCq26NKd"
                    />

                </div>








            </div>


        </section>
    )
}

export default Hero