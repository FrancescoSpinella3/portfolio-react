import SkillCard from "../Skills/SkillCard";
import Tools from "./Tools";


function Skills() {
    const skills = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-template-icon lucide-layout-template size-7 text-zinc-500">
                    <rect width="18" height="7" x="3" y="3" rx="1"/><rect width="9" height="7" x="3" y="14" rx="1"/><rect width="5" height="7" x="16" y="14" rx="1"/>
                </svg>
            ),
            name: "Sviluppo Front-end",
            description: "Esperienza nello sviluppo di siti web responsive e moderni con: HTML, CSS, Javascipt, React, Tailwind CSS",
        },

        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-xml-icon lucide-code-xml size-7 text-zinc-500">
                    <path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>
                </svg>
            ),
            name: "Altri linguaggi",
            description: "Esperienza base nei linguaggi di programmazione: Java, Python",
        },

        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database-icon lucide-database size-7 text-zinc-500"><ellipse cx="12" cy="5" rx="9" ry="3"/>
                    <path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>
                </svg>
            ),
            name: "Gestione database",
            description: "Esperienza nella progettazione e gestione di Database relazionali come MySQL, e di database NoSQL come MongoDB a livello base",
        },

    ];


    return (
        <section id="skills" className="relative bg-[#1b1b1b] flex flex-col items-center py-24 px-5 gap-20 lg:ml-80 lg:w-[calc(100%-320px)] light:bg-zinc-50">
            {/* Heading skills */}
            <div className="heading-skills text-center">
                <h2 className="text-white font-bold text-4xl md:text-5xl mb-4 light:text-zinc-900">Skills</h2>
                <p className="text-gray-300 light:text-zinc-700">Tecnologie e Tools che utilizzo per sviluppare</p>
            </div>

            {/* Skills container */}
            <div className="skills-container grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto max-w-5xl">
                {skills.map((s) => (
                    <SkillCard key={s.name} {...s}/>
                ))}
            </div>

            <Tools />
        </section>
    );
}

export default Skills;