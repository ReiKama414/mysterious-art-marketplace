import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Palette, ShoppingCart, Moon, Sun, Globe, Menu, X } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useLanguage } from "../../contexts/LanguageContext";
import { useCart } from "../../contexts/CartContext";

const Header: React.FC = () => {
	const { theme, toggleTheme } = useTheme();
	const { language, setLanguage, t } = useLanguage();
	const { itemCount } = useCart();
	const location = useLocation();
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const [isLangMenuOpen, setIsLangMenuOpen] = React.useState(false);

	const isActive = (path: string) => location.pathname === path;

	const languages = [
		{ code: "en", name: "English", flag: "🇺🇸" },
		{ code: "zh", name: "中文", flag: "🇨🇳" },
		{ code: "ja", name: "日本語", flag: "🇯🇵" },
	];

	return (
		<header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-gray-700/50 transition-all duration-300">
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<Link to="/" className="flex items-center space-x-2 group">
						<div className="relative">
							<Palette className="h-8 w-8 text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors duration-200" />
							<div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-600 opacity-0 group-hover:opacity-20 rounded-full blur-sm transition-opacity duration-300" />
						</div>
						<span className="text-base md:text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
							Mystic Gallery
						</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						<Link
							to="/"
							className={`text-sm font-medium transition-colors duration-200 hover:text-indigo-600 dark:hover:text-indigo-400 ${
								isActive("/") ? "text-indigo-600 dark:text-indigo-400" : "text-gray-700 dark:text-gray-300"
							}`}>
							{t("nav.home")}
						</Link>
						<Link
							to="/explore"
							className={`text-sm font-medium transition-colors duration-200 hover:text-indigo-600 dark:hover:text-indigo-400 ${
								isActive("/explore") ? "text-indigo-600 dark:text-indigo-400" : "text-gray-700 dark:text-gray-300"
							}`}>
							{t("nav.explore")}
						</Link>
						<Link
							to="/artists"
							className={`text-sm font-medium transition-colors duration-200 hover:text-indigo-600 dark:hover:text-indigo-400 ${
								isActive("/artists") ? "text-indigo-600 dark:text-indigo-400" : "text-gray-700 dark:text-gray-300"
							}`}>
							{t("nav.artists")}
						</Link>
						<Link
							to="/about"
							className={`text-sm font-medium transition-colors duration-200 hover:text-indigo-600 dark:hover:text-indigo-400 ${
								isActive("/about") ? "text-indigo-600 dark:text-indigo-400" : "text-gray-700 dark:text-gray-300"
							}`}>
							{t("nav.about")}
						</Link>
					</div>

					{/* Actions */}
					<div className="flex items-center space-x-4">
						{/* Language Selector */}
						<div className="relative">
							<button
								onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
								className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
								<Globe className="h-5 w-5 text-gray-700 dark:text-gray-300" />
							</button>

							{isLangMenuOpen && (
								<div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2">
									{languages.map((lang) => (
										<button
											key={lang.code}
											onClick={() => {
												setLanguage(lang.code as any);
												setIsLangMenuOpen(false);
											}}
											className={`w-full px-4 py-2 text-left flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
												language === lang.code
													? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
													: "text-gray-700 dark:text-gray-300"
											}`}>
											<span className="text-lg w-5 text-center -translate-y-px">{lang.flag}</span>
											<span className="text-sm">{lang.name}</span>
										</button>
									))}
								</div>
							)}
						</div>

						{/* Theme Toggle */}
						<button
							onClick={toggleTheme}
							className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105">
							{theme === "light" ? (
								<Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
							) : (
								<Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
							)}
						</button>

						{/* Cart */}
						<Link
							to="/cart"
							className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105">
							<ShoppingCart className="h-5 w-5 text-gray-700 dark:text-gray-300" />
							{itemCount > 0 && (
								<span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
									{itemCount}
								</span>
							)}
						</Link>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
							{isMenuOpen ? (
								<X className="h-5 w-5 text-gray-700 dark:text-gray-300" />
							) : (
								<Menu className="h-5 w-5 text-gray-700 dark:text-gray-300" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
						<div className="flex flex-col space-y-3">
							<Link
								to="/"
								onClick={() => setIsMenuOpen(false)}
								className={`text-sm font-medium px-2 py-1 rounded transition-colors duration-200 ${
									isActive("/")
										? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20"
										: "text-gray-700 dark:text-gray-300"
								}`}>
								{t("nav.home")}
							</Link>
							<Link
								to="/explore"
								onClick={() => setIsMenuOpen(false)}
								className={`text-sm font-medium px-2 py-1 rounded transition-colors duration-200 ${
									isActive("/explore")
										? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20"
										: "text-gray-700 dark:text-gray-300"
								}`}>
								{t("nav.explore")}
							</Link>
							<Link
								to="/artists"
								onClick={() => setIsMenuOpen(false)}
								className={`text-sm font-medium px-2 py-1 rounded transition-colors duration-200 ${
									isActive("/artists")
										? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20"
										: "text-gray-700 dark:text-gray-300"
								}`}>
								{t("nav.artists")}
							</Link>
							<Link
								to="/about"
								onClick={() => setIsMenuOpen(false)}
								className={`text-sm font-medium px-2 py-1 rounded transition-colors duration-200 ${
									isActive("/about")
										? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20"
										: "text-gray-700 dark:text-gray-300"
								}`}>
								{t("nav.about")}
							</Link>
						</div>
					</div>
				)}
			</nav>
		</header>
	);
};

export default Header;
