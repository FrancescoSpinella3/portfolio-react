import { createContext, useContext, useEffect, useState } from "react";

// Theme context
const ThemeContext = createContext();

// Theme Provider
export function ThemeProvider({ children }) {
    const [theme, setTheme ] = useState(() => {
        try {
            const savedTheme = localStorage.getItem('theme');
            console.log("Tema salvato nel localStorage: ", savedTheme);

            if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
                return savedTheme;
            }

            // If there is not a saved theme, check system preferences
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                console.log("Sistema operativo preferisce dark mode");
                return 'light';
            }

            console.log("Default: light mode");
            return 'dark';
        } catch (error) {
            console.error("Errore nel recupero del tema: ", error);
            return 'dark';
        }
    });

    useEffect(() => {
        console.log("Applicando tema: ", theme);

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
            console.log("Classe dark aggiunta");
        } else {
            htmlElement.classList.remove('light');
            console.log("Classe dark rimossa");
        }

        // Debug: show current classes
        console.log("Classi HTML attuali: ", htmlElement.className);

    }, [theme]);

    function toggleTheme() {
        console.log("Toggle tema da: ", theme);
        setTheme(prevTheme => {
            const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
            console.log("Nuovo tema: ", newTheme);
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