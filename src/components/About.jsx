function About() {
    return (
        <section id="about" className="flex relative w-[calc(100%-320px)] ml-80 bg-[#1b1b1b]">
            <div className="flex mx-auto items-center gap-10 py-24">
                {/* Image */}
                <img src="/images/about-me.jpg" 
                    alt="Foto profilo"
                    loading="lazy"
                    draggable="false"
                    className="h-125 w-auto rounded-md shadow-xl"
                />
                {/* Description */}
                <div className="description max-w-lg flex flex-col gap-7 text-white text-lg">
                    <div class="box-icon bg-white w-fit text-black p-1 rounded-md hover:-translate-y-1 duration-300 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <h2 className="text-4xl font-bold">Chi sono</h2>
                    <p className="text-gray-300 mb-3">Sono un Junior Frontend Developer con la passione per la tecnologia e l’informatica che mi accompagna sin da ragazzino.
                        <br /> <br />  
                        Amo sviluppare siti web moderni e responsive, unendo design accattivanti a prestazioni ottimali
                        e garantendo un'esperienza accessibile per tutti. Ho una solida base in HTML, CSS e JavaScript, 
                        e sono sempre motivato a crescere, affrontare nuove sfide e imparare qualcosa di nuovo ogni giorno.
                    </p>

                    {/* Button */}
                    <a href="/CV Francesco Spinella.pdf"
                        className="w-fit border rounded-md px-5 py-2 text-white hover:bg-white hover:text-black duration-300 ease-in"
                        download="CV Francesco Spinella">
                            Download CV
                    </a>
                </div>
            </div>
        </section>
    );
    
}

export default About;