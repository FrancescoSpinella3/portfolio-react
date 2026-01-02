import ProjectCard from "./ProjectCard"

function Projects() {
    const projects = [
        {
            name: "Gioiosa Futsal", 
            preview: "/images/gioiosa-futsal-preview.webp", 
            description: "Sito ufficiale dell’A.S.D. Polisportiva Gioiosa Futsal, sezione dedicata al calcio a 5 della società sportiva dilettantistica Polisportiva Gioiosa. Il portale presenta informazioni istituzionali del club, il calendario completo, classifica aggiornata del campionato e la storia della squadra. Il progetto è stato sviluppato in HTLM5, Tailwind CSS e Javascript vanilla, successivamente ospitato su Siteground.", 
            gitHubLink: "https://github.com/FrancescoSpinella3/Gioiosa_Futsal.git",
            webSiteLink: "https://gioiosafutsal.it/",
            type: "Sito web"
        },
        {
            name: "Portfolio", 
            preview: "/images/portfolio-preview.webp", 
            description: "Portfolio personale sviluppato con React e Tailwind CSS, progettato per presentare in modo chiaro e moderno i miei progetti e le mie competenze. L’interfaccia è responsive e performante, con un design essenziale e particolare attenzione alla user experience e alla struttura di componenti riutilizzabili.", 
            gitHubLink: "https://github.com/FrancescoSpinella3/Gioiosa_Futsal.git", 
            webSiteLink: "",
            type: "Sito web"
        }
    ];

    return (
        <div id="projects" className="relative bg-[#151515] flex flex-col items-center py-24 px-5 gap-20 lg:ml-80 lg:w-[calc(100%-320px)]">
            {/* Heading projects */}
            <div className="heading-skills text-center">
                <h2 className="text-white font-bold text-4xl md:text-5xl mb-4">Progetti</h2>
                <p className="text-gray-300">Alcuni dei miei progetti</p>
            </div>

            {/* Projects container */}
            <div className="projects-container grid grid-cols-1 md:grid-cols-2 gap-5">
                {projects.map((p) => (
                    <ProjectCard key={p.name} {...p} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
