function Hero() {
    return (
        <section id="home" className="hero relative text-white flex h-screen bg-[url(/images/hero-image.webp)] bg-center bg-cover bg-no-repeat bg-fixed lg:ml-80 lg:w-[calc(100%-320px)] lg:[background-position-x:300px] bg-black/30 bg-blend-darken">
            <div className="container-hero flex flex-col p-7 justify-center gap-8 md:ml-24">
                <p className="text-2xl md:text-3xl -tracking-tighter">Francesco Spinella</p>
                <h1 className="text-5xl md:text-7xl font-semibold">Junior Developer</h1>

                {/* Button */}
                <a 
                    href="mailto:francescospinella76@gmail.com"
                    rel="noopener" 
                    noreferrer="true"
                    className="w-fit border rounded-md px-5 py-2 text-white text-lg hover:bg-white hover:text-black duration-300 ease-in">
                        Contattami
                </a>
            </div>
        </section>
    );
}

export default Hero;