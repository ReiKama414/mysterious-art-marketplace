import { createContext, FC, ReactNode, useContext, useState } from "react";
import { Language } from "../types";
import { translations } from "../utils/translations";

interface LanguageContextType {
	language: Language;
	setLanguage: (lang: Language) => void;
	t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "preferredLanguage";

// Supported languages
const supportedLanguages: Language[] = ["en", "zh", "ja"];

// Detect system language and return a supported language
const detectSystemLanguage = (): Language => {
	const lang = navigator.language.toLowerCase();

	if (lang.startsWith("zh")) return "zh";
	if (lang.startsWith("ja")) return "ja";
	if (lang.startsWith("en")) return "en";

	return "en"; // fallback
};

// initial language: try to get from localStorage, otherwise detect system language
const getInitialLanguage = (): Language => {
	const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
	if (stored && supportedLanguages.includes(stored)) {
		return stored;
	}
	return detectSystemLanguage();
};

export const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [language, setLanguageState] = useState<Language>(getInitialLanguage);

	const setLanguage = (lang: Language) => {
		localStorage.setItem(STORAGE_KEY, lang);
		setLanguageState(lang);
	};

	const t = (key: string): string => {
		const keys = key.split(".");
		let value: any = translations[language];

		for (const k of keys) {
			value = value?.[k];
		}

		return value || key;
	};

	return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
};
