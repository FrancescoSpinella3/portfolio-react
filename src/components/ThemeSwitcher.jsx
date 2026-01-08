import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

function ThemeSwitcher() {
    const {theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="w-fit p-2 rounded-md bg-zinc-800 light:bg-zinc-500 z-50 cursor-pointer duration-200 ease-out"
            aria-label="Switch theme"
        >
            {theme === 'light' ? (
                <Moon className="size-5 text-zinc-900 dark:text-white" />
            ) : (
                <Sun className="size-5 text-zinc-900 dark:text-white" />
            )}
        </button>
    );
}

export default ThemeSwitcher;