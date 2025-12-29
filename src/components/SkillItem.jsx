function Skill({ name, src, alt }) {
    return (
        <div className="skill flex flex-col items-center gap-2.5">
            <img
                src={src}
                alt={alt || name}
                draggable="false"
                loading="lazy"
                className="h-20"
            />
            
            <p className="text-white font-semibold">{name}</p>
        </div>
    );
}

export default Skill;