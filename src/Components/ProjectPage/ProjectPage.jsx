import { useParams } from 'react-router-dom';
import { projects } from './../../data/projects';



function ProjectPage() {
    let id = useParams().id
    let project = null
    console.log(id)

    projects.forEach(Project => {
        if (Project.id == id) {
            project = Project

        }

    }
    )
    console.log(project)

    if (project === null) {
        return <Navigate to={"/ce-chemin-nexiste-pas"} />

    }


    return (
        <main className='relative min-h-screen overflow-x-hidden'>
            <div className='absolute -top-28 -left-28 w-[500px] h-[1000px] bg-gradient-to-tr from-emerald-400/40 to-pink-500/20 rounded-full blur-[50px] -z-10'></div>
            <div className='overflow-hidden px-11'>

                <div>
                    <img src={project.cover} alt="cover project" className=" object-contain w-120 h-120 rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300" />
                </div>
                <div>
                    <h2 className='text-1xl mb-4 text-center font-bold pb-14'>{project.description}</h2>
                    <p className='text-pink-300 text-center font-bold'>{project.technologies}</p>
                </div>



            </div>
        </main>
    );
}

export default ProjectPage;