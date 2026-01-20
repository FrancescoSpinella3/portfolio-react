const tools = [
    { name: "HTML", src: "/images/logo-tools/html.png" },
    { name: "CSS", src: "/images/logo-tools/css.png" },
    { name: "Tailwind CSS", src: "/images/logo-tools/tailwind-css.png" },
    { name: "JavaScript", src: "/images/logo-tools/js.png" },
    { name: "React", src: "/images/logo-tools/react.png" },
    { name: "Java", src: "/images/logo-tools/java.png" },
    { name: "Python", src: "/images/logo-tools/python.png" },
    { name: "SQL", src: "/images/logo-tools/sql.png" },
    { name: "MySql", src: "/images/logo-tools/mysql.png" },
    { name: "MongoDB", src: "/images/logo-tools/mongo-db.png" },
    { name: "VS Code", src: "/images/logo-tools/vscode.png" },
    { name: "Git", src: "/images/logo-tools/git.png" }
];

function Tools() {
    return (
        <div className="relative overflow-hidden max-w-5xl my-10">
            <div className="flex w-max animate-scroll">
                <div className="flex gap-36 pr-36">
                    {tools.map((tool) => (
                        <img 
                            key={tool.name}
                            src={tool.src} 
                            alt={tool.name} 
                            loading="lazy"
                            draggable="false"
                            className="h-14 grayscale-100"
                        />
                    ))}
                </div>
                <div className="flex gap-36 pr-36">
                    {tools.map((tool) => (
                        <img 
                            key={tool.name}
                            src={tool.src} 
                            alt={tool.name} 
                            loading="lazy"
                            draggable="false"
                            className="h-14 grayscale-100"
                        />
                    ))}
                </div>
            </div>

            {/* Left fade */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-linear-to-r from-[#1b1b1b] to-transparent light:from-zinc-50" />

            {/* Right fade */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-linear-to-l from-[#1b1b1b] to-transparent light:from-zinc-50" />
        </div>
    );
}

export default Tools;