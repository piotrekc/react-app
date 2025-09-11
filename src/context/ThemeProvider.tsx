import React, { createContext, useContext, useState, ReactNode } from "react";

// 1. Definiujemy typy dla kontekstu
type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// 2. Tworzymy Context z typem lub undefined (jeśli brak providera)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. Provider z logiką
interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 4. Custom hook dla bezpieczeństwa typów
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside a ThemeProvider");
  }
  return context;
}

// 5. Komponent Navbar
export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const styles: React.CSSProperties = {
    padding: "1rem",
    background: theme === "light" ? "#f0f0f0" : "#333",
    color: theme === "light" ? "#000" : "#fff",
  };

  return (
    <nav style={styles}>
      <span>Current theme: {theme}</span>
      <button onClick={toggleTheme} style={{ marginLeft: "1rem" }}>
        Change theme
      </button>
    </nav>
  );
}