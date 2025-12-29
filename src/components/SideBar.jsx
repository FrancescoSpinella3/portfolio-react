function SideBar() {
    return (
        <aside className="bg-[#101010] h-screen w-80 p-5 flex items-center fixed border-r border-zinc-800">
            <div className="container-sidebar flex flex-col items-start justify-center gap-12 pl-12">
                {/* Logo */}
                <img
                    className="h-16 w-auto" 
                    src="/logo.png" 
                    alt="Logo Francesco Spinella" />
                {/* Links */}
                <ul className="nav-links text-white font-medium text-lg leading-9 *:hover:text-gray-400 *:duration-300 *:ease-out">
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">Chi sono</a></li>
                    <li><a href="#career">Carriera</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Progetti</a></li>
                    <li><a href="">Servizi</a></li>
                </ul>
            </div>
        </aside>
    );
}

export default SideBar;