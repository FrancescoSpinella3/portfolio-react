function About() {
    return (
        <section id="about" className="flex relative bg-[#151515] lg:w-[calc(100%-320px)] lg:ml-80">
            <div className="flex flex-col mx-auto items-center gap-10 py-24 px-5 lg:flex-row">
                {/* Image */}
                <img src="/images/about-me.jpg" 
                    alt="Foto profilo"
                    loading="lazy"
                    draggable="false"
                    className="h-125 w-auto rounded-md shadow-xl"
                />
                {/* Description */}
                <div className="description max-w-lg flex flex-col gap-7 text-white text-lg">
                    <div className="heading-about flex items-center gap-5 lg:flex-col lg:items-start">
                        <div className="box-icon bg-white h-fit text-black p-1 rounded-md hover:-translate-y-1 duration-300 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold">Chi sono</h2>
                    </div>
                    <p className="text-zinc-300 mb-3">Sono un Junior Frontend Developer con la passione per la tecnologia e l’informatica che mi accompagna sin da ragazzino.
                        <br /> <br />  
                        Amo sviluppare siti web moderni e responsive, unendo design accattivanti a prestazioni ottimali
                        e garantendo un'esperienza accessibile per tutti. Ho una solida base in HTML, CSS, JavaScript e React, 
                        e sono sempre motivato a crescere, affrontare nuove sfide e imparare qualcosa di nuovo ogni giorno.
                    </p>

                    {/* Button */}
                    <a href="/cv-francesco-spinella.pdf"
                        className="w-fit border rounded-md px-5 py-2 text-white hover:bg-white hover:text-black duration-300 ease-in"
                        rel="noopener"
                        download="CV Francesco Spinella">
                            Download CV
                    </a>
                </div>
            </div>
        </section>
    );
    
}

export default About;