import ProjectItem from "./ProjectCard"

function Projects() {
    return (
        <div id="projects" className="relative ml-80 w-[calc(100%-320px)] bg-[#151515] flex flex-col items-center p-24 gap-20">
            {/* Heading projects */}
            <div className="heading-skills text-center">
                <h2 className="text-white font-bold text-4xl mb-4">Progetti</h2>
                <p className="text-gray-300">Alcuni dei miei progetti</p>

                {/* Projects container */}
                <div className="projects-container grid grid-cols-3 gap-5">

                </div>
            </div>
        </div>
    );
}

export default Projects;