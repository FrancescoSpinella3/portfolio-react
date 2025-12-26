function SideBar() {
    return (
        <aside className="bg-[#101010] h-screen w-80 p-5 flex items-center border-r border-zinc-800 relative">
            <div className="container-sidebar flex flex-col items-start justify-center gap-12 pl-12">
                <img
                    className="h-16 w-auto" 
                    src="/logo.png" 
                    alt="Logo Francesco Spinella" />
                
                <ul className="nav-links text-gray-50 font-medium text-lg leading-9 *:hover:text-gray-400 *:duration-300 *:ease-out">
                    <li><a href="">Home</a></li>
                    <li><a href="">Chi sono</a></li>
                    <li><a href="">Servizi</a></li>
                    <li><a href="">Carriera</a></li>
                    <li><a href="">Skills</a></li>
                    <li><a href="">Progetti</a></li>
                </ul>
            </div>
        </aside>
    );
}

export default SideBar;