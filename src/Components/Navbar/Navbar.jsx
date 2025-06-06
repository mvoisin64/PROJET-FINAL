import React from 'react'
import { useState } from 'react'
import { href } from 'react-router'
import { HiMenu, HiX } from 'react-icons/hi'

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('#home')

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#Projects", label: "Projects" },
        { href: "#Instagram", label: "Instagram" }
    ]


    return (

        <nav className='fixed top-0 left-0 right-0 bg-emerald-400 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm' >
            <div className='w-full container mx-auto flex items-center justify-between px-4 sm:px6 lg:px-8 md:h-20 h-16'>
              
                {/*logo*/}
                <div className='w-4 h-4 bg-amber-950 rounded-full opacity-75 hover:opacity-100 transition-opacity'></div>


                {/*Mobile menu button*/}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden p-2'>
                    {isMenuOpen ? <HiX className='size-6' /> : <HiMenu className='size-6' />

                    }
                </button>


                {/* desktop navitems*/}
                <div className='hidden md:flex items-center gap-10'>
                    {
                        navLinks.map((link, index) => (

                            <a key={index} href={link.href}
                                onClick={() => setActiveLink(link.href)}
                                className={`text-sm font-medium relative after:absolute 
                                after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-white after:transition-all ${activeLink === link.href ? "text-white after:w-full" : "text-white after:w-0"}`}>{link.label}</a>
                        ))
                    }
                </div>
                {/* Languages*/}
                {/* <div className='gap-5'>
                        <button> <span className="inline-block border-1 border-black rounded-full w-10 h-8 text-center leading-8 font-bold opacity-30 hover:opacity-100 transition-opacity mr-2">FR</span></button>
                        <button><span className="inline-block border-1 border-black rounded-full w-10 h-8 text-center leading-8 font-bold opacity-30 hover:opacity-100">EN</span></button>
                    </div> */}

            </div>


            {/*Mobile menu button*/}

            {isMenuOpen && (
                <div className='md:hidden bg-white border-t border-gray-100 py-4 flex-col'>
                    <div>
                        <div className='container mx-auto px-4 space-y-3'>
                            {navLinks.map((link, index) => (
                                <a key={index}
                                    onClick={() => {
                                        setActiveLink(link.href)
                                        setIsMenuOpen(false)
                                    }
                                    }
                                    className={`block text-sm font-medium py-2 ${activeLink === link.href ? "text-emerald-300" : "text-black"}`} href={link.href}
                                >{link.label}</a>
                            ))
                            }
                        </div>
                    </div>
                </div>

            )

            }







        </nav >
    )
}


export default Navbar;