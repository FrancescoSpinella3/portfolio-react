import ThemeSwitcher from '../components/ThemeSwitcher';
import { useTheme } from '../contexts/ThemeContext';

const navLinks = [
    {href: "#home", label: "Home"},
    {href: "#about", label: "Chi sono"},
    {href: "#skills", label: "Skills"},
    {href: "#projects", label: "Progetti"},
    {href: "#career", label: "Carriera"},
];

function SideBar() {
    const { theme } = useTheme()
    const logoSrc = theme === "light" ? "/dark-logo.png" : "/logo.webp" 

    return (
        <aside className="hidden bg-[#101010] h-screen w-80 p-5 lg:flex items-center fixed border-r border-zinc-800 light:border-zinc-400/50 light:bg-zinc-300">
            <div className="container-sidebar flex flex-col items-start justify-between gap-12 pl-12 h-full">
                {/* Logo */}
                <a href="#home">
                    <img
                        className="h-16 w-auto mt-10"
                        src={logoSrc}
                        alt="Logo Francesco Spinella"
                    />
                </a>

                {/* Links */}
                <ul className="nav-links text-white font-medium text-lg leading-12 *:hover:text-zinc-400 *:duration-300 *:ease-out light:text-zinc-900 *:light:hover:text-zinc-600">
                    {navLinks.map(link => (
                        <li key={link.href}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>

                <ThemeSwitcher />
            </div>

        </aside>
    );
}

export default SideBar;