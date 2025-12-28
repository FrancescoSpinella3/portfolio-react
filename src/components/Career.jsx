import Education from "./Education";
import Experiences from "./Experiences";

function Career() {
    return(
        <section id="career" className="relative ml-80 w-[calc(100%-320px)] bg-[#151515] flex flex-col p-24 gap-14">
            {/* Heading career */}
            <div className="heading-career text-center">
                <h2 className="text-white font-bold text-4xl mb-4">Carriera</h2>
                <p className="text-gray-300">La mia formazione ed esperienze lavorative</p>
            </div>

            {/* Education container  */}
            <Education />


            {/* Work experiences container  */}
            <div className="experience">
                <Experiences />
            </div>
        </section>
    );
}

export default Career;