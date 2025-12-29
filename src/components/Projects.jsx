import ProjectCard from "./ProjectCard"

function Projects() {
    const projects = [
        {
            name: "Gioiosa Futsal", 
            preview: "/images/gioiosa-futsal-preview.jpg", 
            descritpion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veniam magnam, et nobis deserunt fugiat?", 
            gitHubLink: "https://github.com/FrancescoSpinella3/Gioiosa_Futsal.git", 
            webSiteLink: "https://gioiosafutsal.it/"
        }
    ];

    return (
        <div id="projects" className="relative ml-80 w-[calc(100%-320px)] bg-[#151515] flex flex-col items-center p-24 gap-20">
            {/* Heading projects */}
            <div className="heading-skills text-center">
                <h2 className="text-white font-bold text-4xl mb-4">Progetti</h2>
                <p className="text-gray-300">Alcuni dei miei progetti</p>

                {/* Projects container */}
                <div className="projects-container grid grid-cols-3 gap-5">
                    {projects.map((p) => (
                        <ProjectCard key={p.name} {...p} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;