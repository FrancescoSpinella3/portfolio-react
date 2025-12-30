function ExperienceItem({ work, place, dates, site }) {
    return (
        <div className="experience flex justify-between items-start gap-48 py-7 border-t border-zinc-800 last:pb-0">
            <p className="text-gray-300 w-40">{dates}</p>
            <div className="flex-1">
                <p className="text-2xl font-semibold">{work}</p>
                <p className="text-gray-300">{place}, <span className="text-white font-semibold">{site}</span></p>
            </div>
        </div>
    );
}

export default ExperienceItem;