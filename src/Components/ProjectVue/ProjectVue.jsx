import React from 'react'
import matal from "../../assets/Matal.png"
function ProjectVue({alt, titleProject, image} ) {
    return (
        <div className='relative'>
            <img src={image} alt={alt} className="w-100 h-100 rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300 object-contain" />
        <span className='absolute'>{titleProject}</span>
        </div>
    )
}

export default ProjectVue