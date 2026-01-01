function MobileNav() {
    return (
        <nav className="fixed w-full flex items-center justify-between p-5 lg:hidden z-50 bg-[#151515]/70 backdrop-blur-xs border-b border-zinc-800">
            {/* Logo */}
            <a href="#home">
                <img
                    className="h-8" 
                    src="/logo.png" 
                    alt="Logo Francesco Spinella" 
                />
            </a>

            {/* Burger menu */}
            <div className="burger-menu flex flex-col items-end gap-2">
                <span className="h-0.5 w-7 bg-white rounded"></span>
                <span className="h-0.5 w-6 bg-white rounded"></span>
                <span className="h-0.5 w-7 bg-white rounded"></span>
            </div>
        </nav>
    );
}

export default MobileNav;