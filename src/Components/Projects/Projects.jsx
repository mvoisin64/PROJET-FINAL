import React from 'react';
import ProjectVue from '../ProjectVue/ProjectVue';
import KasaImage from "../../assets/KASA-website.png"
import argentBankScreen from "../../assets/ArgentBank-screen.png"

const Projects = () => {
    return (
        <section id="Projects"className='max-w-7xl mx-auto px-4 pt-30 pb-50'>
            {/* heading text */}
            <h2 className='text-3xl mb-4 text-center font-bold'>Projects</h2>

            {/* cards */}
            <div className='grid place-items-center grid-cols-1 md:grid-cols-2 py-30 mx-auto sm: gap-8 '>

                    <ProjectVue titleProject ="KASA" image={KasaImage}/>
                    <ProjectVue titleProject="ARGENTBANK" image={argentBankScreen} />
            </div>

        </section>
    );
};

export default Projects;