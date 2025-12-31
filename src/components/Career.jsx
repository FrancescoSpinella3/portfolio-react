import Education from "./Educations";
import Experiences from "./Experiences";

function Career() {
    return(
        <section id="career" className="relative ml-80 w-[calc(100%-320px)] bg-[#1b1b1b] flex flex-col p-24 gap-14">
            {/* Heading career */}
            <div className="heading-career text-center">
                <h2 className="text-white font-bold text-5xl mb-4">Carriera</h2>
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