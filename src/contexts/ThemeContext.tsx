import React, { createContext, useContext, useState, useEffect } from "react";
import { Theme } from "../types";

interface ThemeContextType {
	theme: Theme;
	toggleTheme: () => void;
	setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = "theme";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [theme, setThemeState] = useState<Theme>("light");
	const [isInitialized, setIsInitialized] = useState<boolean>(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;

		// restore saved theme
		if (savedTheme === "dark" || savedTheme === "light") {
			setThemeState(savedTheme);
			applyThemeClass(savedTheme);
		} else {
			// fallback：by default, use system preference
			const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
			const systemTheme: Theme = prefersDark ? "dark" : "light";
			setThemeState(systemTheme);
			applyThemeClass(systemTheme);
		}

		setIsInitialized(true);
	}, []);

	useEffect(() => {
		if (!isInitialized) return;
		localStorage.setItem(THEME_STORAGE_KEY, theme);
		applyThemeClass(theme);
	}, [theme]);

	const applyThemeClass = (theme: Theme) => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	};

	const setTheme = (newTheme: Theme) => {
		setThemeState(newTheme);
	};

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	if (!isInitialized) return null;

	return <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
