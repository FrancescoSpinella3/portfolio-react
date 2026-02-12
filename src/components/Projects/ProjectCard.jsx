function ProjectCard( {name, preview, alt, description, type, webSiteLink, gitHubLink }) {
    return (
        <div className="bg-[#1b1b1b] rounded-md border border-zinc-800 shadow-lg h-auto max-w-110 cursor-pointer hover:shadow-zinc-800 hover:border-zinc-700 duration-300 ease-in-out group overflow-hidden light:bg-zinc-100 light:border-zinc-400 light:hover:shadow-zinc-400 light:hover:border-zinc-500">
            <a href={webSiteLink || gitHubLink} target="_blank" rel="noopener">
                <img 
                    src={preview} 
                    alt={name || alt} 
                    loading="lazy"
                    draggable="false"
                    className="rounded-t-md w-full h-auto group-hover:scale-103 duration-300 ease-in-out"

                />

                <div className="flex flex-col gap-4 p-5">
                    <span className="text-sm text-zinc-400 font-semibold flex items-center gap-2 light:text-zinc-500">{type}</span>
                    <h3 className="text-2xl text-white font-bold flex items-center gap-2 light:text-zinc-900">{name}</h3>
                    <div className="bg-zinc-50 h-px w-1/2 rounded light:bg-zinc-800"></div>
                    <p className="text-zinc-300 light:text-zinc-700">{description}</p>
                </div>
            </a>
        </div>
    );
}

export default ProjectCard;