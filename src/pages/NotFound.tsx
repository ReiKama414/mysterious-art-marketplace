import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, Search, Palette, ArrowLeft } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

import "aos/dist/aos.css";
import AOS from "aos";

const NotFound: FC = () => {
	const { language } = useLanguage();

	useEffect(() => {
		AOS.init({
			duration: 800,
			easing: "ease-out-cubic",
			once: false,
		});
	}, []);

	const content = {
		en: {
			title: "404",
			subtitle: "Page Not Found",
			description: "The artwork you're looking for seems to have vanished into the mysterious void.",
			suggestion: "Perhaps it's hiding in our gallery waiting to be discovered?",
			backHome: "Back to Home",
			exploreGallery: "Explore Gallery",
			searchArt: "Search Artworks",
		},
		zh: {
			title: "404",
			subtitle: "頁面未找到",
			description: "您尋找的藝術品似乎消失在神秘的虛空中。",
			suggestion: "也許它正躲在我們的畫廊中等待被發現？",
			backHome: "返回首頁",
			exploreGallery: "探索畫廊",
			searchArt: "搜尋藝術品",
		},
		ja: {
			title: "404",
			subtitle: "ページが見つかりません",
			description: "お探しのアートワークは神秘的な虚空に消えてしまったようです。",
			suggestion: "もしかすると、私たちのギャラリーで発見されるのを待っているかもしれません？",
			backHome: "ホームに戻る",
			exploreGallery: "ギャラリーを探索",
			searchArt: "アートワークを検索",
		},
	};

	const text = content[language];

	return (
		<div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
			<div className="max-w-2xl mx-auto text-center">
				{/* Animated 404 */}
				<div className="relative mb-8">
					<h1 className="text-9xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent animate-pulse">
						{text.title}
					</h1>

					{/* Floating art elements */}
					<div className="absolute inset-0 pointer-events-none">
						<div
							className="absolute top-4 left-8 w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-60 animate-float"
							style={{ animationDelay: "0s" }}
						/>
						<div
							className="absolute top-12 right-12 w-6 h-6 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full opacity-60 animate-float"
							style={{ animationDelay: "1s" }}
						/>
						<div
							className="absolute bottom-8 left-16 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-60 animate-float"
							style={{ animationDelay: "2s" }}
						/>
						<div
							className="absolute bottom-4 right-8 w-10 h-10 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-60 animate-float"
							style={{ animationDelay: "0.5s" }}
						/>
					</div>
				</div>

				{/* Content */}
				<div className="space-y-6" data-aos="fade-up">
					<h2 className="text-3xl font-bold text-gray-900 dark:text-white">{text.subtitle}</h2>

					<div className="space-y-4">
						<p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{text.description}</p>
						<p className="text-sm text-gray-500 dark:text-gray-500 italic">{text.suggestion}</p>
					</div>

					{/* Mysterious art palette icon */}
					<div className="flex justify-center my-8">
						<div className="relative">
							<div className="w-24 h-24 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-full flex items-center justify-center animate-bounce-gentle">
								<Palette className="h-12 w-12 text-indigo-600 dark:text-indigo-400 animate-wiggle" />
							</div>

							{/* Sparkle effects */}
							<div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-75" />
							<div
								className="absolute -bottom-1 -left-1 w-3 h-3 bg-pink-400 rounded-full animate-ping opacity-75"
								style={{ animationDelay: "0.5s" }}
							/>
						</div>
					</div>

					{/* Action buttons */}
					<div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
						<Link
							to="/"
							className="group flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
							<Home className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
							<span>{text.backHome}</span>
						</Link>

						<Link
							to="/explore"
							className="group flex items-center space-x-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105">
							<Search className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
							<span>{text.exploreGallery}</span>
						</Link>
					</div>

					{/* Back link */}
					<div className="pt-8">
						<button
							onClick={() => window.history.back()}
							className="group inline-flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200">
							<ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
							<span className="text-sm">Go back to previous page</span>
						</button>
					</div>
				</div>

				{/* Background decoration */}
				<div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
					<div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 dark:from-indigo-800/10 dark:to-purple-800/10 rounded-full blur-3xl animate-float-slow" />
					<div
						className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-teal-200/20 to-cyan-200/20 dark:from-teal-800/10 dark:to-cyan-800/10 rounded-full blur-3xl animate-float-slow"
						style={{ animationDelay: "3s" }}
					/>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
