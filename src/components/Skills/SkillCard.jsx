function SkillCard({ name, icon, description }) {



    return (
        <div className="skill flex flex-col p-7 gap-5 rounded-md bg-[#151515] border border-zinc-800">
            <div className="icon flex items-center border-2 border-zinc-800 w-fit rounded-full p-3">
                {icon}
            </div>

            <h3 className="text-2xl font-bold text-white">{name}</h3>
            <p className="text-zinc-300">{description}</p>
        </div>
    );
}

export default SkillCard;