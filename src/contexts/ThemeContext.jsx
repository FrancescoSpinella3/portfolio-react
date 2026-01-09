import { createContext, useContext, useEffect, useState } from "react";

// Theme context
const ThemeContext = createContext();

// Theme Provider
export function ThemeProvider({ children }) {
    const [theme, setTheme ] = useState(() => {
        try {
            const savedTheme = localStorage.getItem('theme');

            if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
                return savedTheme;
            }

            // If there is not a saved theme, check system preferences
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            }

            return 'dark';
        } catch (error) {
            return 'dark';
        }
    });

    useEffect(() => {
        // Save theme on localStorage
        try {
            localStorage.setItem('theme', theme);
        } catch (error) {
            console.error("Errore nel salvare il tema: ", error);
        }

        // Apply/remove class dark to the document
        const htmlElement = document.documentElement;

        if (theme === 'light') {
            htmlElement.classList.add('light');
        } else {
            htmlElement.classList.remove('light');
        }

    }, [theme]);

    function toggleTheme() {
        setTheme(prevTheme => {
            const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return newTheme;
        });
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// Custom hook to use theme context
export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme deve essere usato all'interno di un ThemeProvider");
    
    }

    return context;
}