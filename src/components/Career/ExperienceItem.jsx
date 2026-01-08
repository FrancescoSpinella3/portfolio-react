function ExperienceItem({ work, place, dates, site}) {
    return (
        <div className="experience flex flex-col items-start gap-5 pt-7 pb-7 border-t border-zinc-800 last:pb-0 lg:flex-row lg:justify-between lg:gap-12 xl:gap-48 light:border-zinc-400">
            <p className="text-zinc-300 w-40 light:text-zinc-600">{dates}</p>
            <div className="flex-1">
                <p className="text-2xl font-semibold">{work}</p>
                <p className="text-zinc-300 mt-2.5 md:m-0 light:text-zinc-700">{place}, <span className="text-white font-semibold light:text-zinc-900">{site}</span></p>
            </div>
        </div>
    );
}

export default ExperienceItem;