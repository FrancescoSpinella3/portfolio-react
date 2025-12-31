function Hero() {
    return (
        <section id="home" className="hero relative ml-80 flex w-[calc(100%-320px)] h-screen bg-[url(/images/hero-image.jpg)] bg-center bg-cover bg-no-repeat bg-fixed [background-position-x:300px] bg-black/30 bg-blend-darken text-white">
            <div className="container-hero flex flex-col justify-center gap-8 ml-24">
                <p className="text-3xl -tracking-tighter">Francesco Spinella</p>
                <h1 className="text-7xl font-semibold">Junior Developer</h1>

                {/* Button */}
                <a 
                    href="/CV Francesco Spinella.pdf"
                    className="w-fit border rounded-md px-5 py-2 text-white text-lg hover:bg-white hover:text-black duration-300 ease-in">
                        Contattami
                </a>
            </div>
        </section>
    );
}

export default Hero;