function SkillCard({ name, icon, description }) {



    return (
        <div className="skill flex flex-col p-7 gap-5 rounded-md bg-[#151515] border border-zinc-800 shadow-md light:bg-zinc-200 light:border-zinc-400">
            <div className="icon flex items-center border-2 border-zinc-800 w-fit rounded-full p-3 light:border-zinc-400">
                {icon}
            </div>

            <h3 className="text-2xl font-bold text-white light:text-zinc-900">{name}</h3>
            <p className="text-zinc-300 light:text-zinc-700">{description}</p>
        </div>
    );
}

export default SkillCard;