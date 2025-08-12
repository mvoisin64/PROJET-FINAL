
function Project({ project, onClick }) {

    return (
        <div className=" p-4" onClick={onClick}>
            <div className="thumb-text">
                <div className="w-100 h-25 border-2 border-pink-500 p-2 rounded-lg z-10 hover:scale-[1.02] transition-transform duration-300">
                    <img src={project.cover} className=" w-100 h-20 object-contain" alt="image" />
                </div>
            </div>
        </div>
    );
};



export default Project;