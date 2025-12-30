import Skill from "./SkillItem";

function Skills() {
    const skills = [
        {name: "HTML", src: "/images/logo-html.png", alt: "HTML"},
        {name: "CSS", src: "/images/logo-css.png", alt: "CSS"},
        {name: "Javascript", src: "/images/logo-js.png", alt: "Javascript"},
        {name: "React JS", src: "/images/logo-react.png", alt: "React JS"},
        {name: "Tailwind CSS", src: "/images/logo-tailwind.png", alt: "Tailwind CSS"},
        {name: "Python", src: "/images/logo-python.png", alt: "Python"},
        {name: "Java", src: "/images/logo-java.png", alt: "Java"},
        {name: "SQL", src: "/images/logo-sql.png", alt: "SQL"},
        {name: "MongoDB", src: "/images/logo-mongodb.png", alt: "MongoDB"},
        {name: "VS Code", src: "/images/logo-vs.png", alt: "Visual Studio Code"},

    ];


    return (
        <section id="skills" className="relative ml-80 w-[calc(100%-320px)] bg-[#1b1b1b] flex flex-col items-center p-24 gap-20">
            {/* Heading skills */}
            <div className="heading-skills text-center">
                <h2 className="text-white font-bold text-5xl mb-4">Skills</h2>
                <p className="text-gray-300">Tecnologie e Tools che utilizzo per sviluppare</p>
            </div>

            {/* Skills container */}
            <div className="skills-container max-w-4xl grid grid-cols-4 gap-32">
                {skills.map((s) => (
                    <Skill key={s.name} {...s} />
                ))}
            </div>
        </section>
    );
}

export default Skills;