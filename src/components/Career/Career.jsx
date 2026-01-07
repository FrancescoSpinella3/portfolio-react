import Education from "../Career/Educations";
import Experiences from "../Career/Educations";

function Career() {
    return(
        <section id="career" className="relative bg-[#1b1b1b] flex flex-col items-center py-24 px-5 gap-20 lg:ml-80 lg:w-[calc(100%-320px)]">
            {/* Heading career */}
            <div className="heading-career text-center">
                <h2 className="text-white font-bold text-4xl md:text-5xl mb-4">Carriera</h2>
                <p className="text-zinc-300">La mia formazione ed esperienze lavorative</p>
            </div>

            {/* Education */}
            <Education />


            {/* Work experiences */}
            <Experiences />
        </section>
    );
}

export default Career;