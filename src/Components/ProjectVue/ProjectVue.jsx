import React from 'react'
import matal from "../../assets/Matal.png"
function ProjectVue({alt, titleProject} ) {
    return (
        <div className='relative'>
            <img src={matal} alt={alt} className="w-40 h-60 rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300" />
        <span className='absolute'>{titleProject}</span>
        </div>
    )
}

export default ProjectVue