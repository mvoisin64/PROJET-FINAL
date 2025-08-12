import Project from '../../Project/Project';
import { projects } from './../../data/projects';


const Projects = ({onThumbClick}) => {

    return (
        <section id="Projects" className='max-w-7xl mx-auto px-4 pt-30 pb-50'>
            {/* heading text */}
            <h2 className='text-3xl mb-4 text-center font-bold'>Projects</h2>

            {/* cards */}
            <div className='grid place-items-center grid-cols-1 md:grid-cols-2 py-30 mx-auto sm: gap-8 '>

                {projects.map((project) => {

                    return <Project key={project.id} project={project} onClick={() => { onThumbClick(project.id); }} />

                })}

            </div>

        </section>
    );
};

export default Projects;