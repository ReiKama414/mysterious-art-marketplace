import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Users, Award } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { mockArtworks } from "../data/mockData";
import ArtworkCard from "../components/UI/ArtworkCard";
import BackgroundAnimation from "../components/UI/BackgroundAnimation";
import { useInView } from "react-intersection-observer";

import AOS from "aos";
import "aos/dist/aos.css";

const Home: FC = () => {
	const { t } = useLanguage();
	const featuredArtworks = mockArtworks.filter((artwork: any) => artwork.isFeatured);

	useEffect(() => {
		AOS.init({
			duration: 800,
			easing: "ease-out-cubic",
			once: false,
		});
	}, []);

	return (
		<div className="min-h-screen">
			<BackgroundAnimation />

			{/* Hero Section */}
			<section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
				<div className="max-w-7xl mx-auto">
					<div className="text-center">
						<h1 className="text-4xl sm:text-6xl font-bold mb-6">
							<span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
								{t("home.title")}
							</span>
						</h1>
						<p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
							{t("home.subtitle")}
						</p>

						<div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
							<Link
								to="/explore"
								className="group flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
								<Sparkles className="h-5 w-5" />
								<span>{t("home.exploreArt")}</span>
								<ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
							</Link>

							<Link
								to="/artists"
								className="group flex items-center space-x-2 bg-white/10 dark:bg-gray-800/50 backdrop-blur-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 dark:hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
								<Users className="h-5 w-5" />
								<span>{t("home.becomeArtist")}</span>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="py-16 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<AnimatedStat
							icon={<Sparkles className="h-8 w-8 text-white" />}
							fromColor="from-indigo-500"
							toColor="to-purple-600"
							target={500}
							label="Unique Artworks"
							suffix="+"
						/>
						<AnimatedStat
							icon={<Users className="h-8 w-8 text-white" />}
							fromColor="from-teal-500"
							toColor="to-cyan-600"
							target={150}
							label="Verified Artists"
							suffix="+"
						/>
						<AnimatedStat
							icon={<Award className="h-8 w-8 text-white" />}
							fromColor="from-yellow-500"
							toColor="to-orange-600"
							target={98}
							label="Customer Satisfaction"
							suffix="%"
						/>
					</div>
				</div>
			</section>

			{/* Featured Artworks */}
			<section className="py-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-12" data-aos="fade-up">
						<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t("home.featuredWorks")}</h2>
						<p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
							Handpicked masterpieces from our most talented artists
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{featuredArtworks.map((artwork: any, index: any) => (
							<div
								key={artwork.id}
								className="opacity-0 animate-fade-in-up"
								style={{ animationDelay: `${index * 0.2}s` }}>
								<ArtworkCard artwork={artwork} />
							</div>
						))}
					</div>

					<div className="text-center mt-12" data-aos="fade-up">
						<Link
							to="/explore"
							className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
							<span>View All Artworks</span>
							<ArrowRight className="h-5 w-5" />
						</Link>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
					<div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 dark:from-indigo-900/40 dark:to-purple-900/40 backdrop-blur-md rounded-2xl p-12 border border-indigo-200/20 dark:border-indigo-700/30">
						<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Ready to Start Your Art Journey?</h2>
						<p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
							Join thousands of art lovers and discover your next favorite piece
						</p>
						<Link
							to="/explore"
							className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 shadow-lg">
							<span>Start Exploring</span>
							<ArrowRight className="h-5 w-5" />
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;

interface AnimatedStatProps {
	icon: JSX.Element;
	fromColor: string;
	toColor: string;
	target: number;
	label: string;
	suffix?: string;
}

const AnimatedStat: FC<AnimatedStatProps> = ({ icon, fromColor, toColor, target, label, suffix = "+" }) => {
	const [ref, inView] = useInView({ triggerOnce: true }); // for one-time animation
	const [count, setCount] = useState<number>(0);

	useEffect(() => {
		let raf: number;
		const duration = 1000;
		const startTime = performance.now();

		const animate = (time: number) => {
			const progress = Math.min((time - startTime) / duration, 1);
			const value = Math.floor(progress * target);
			setCount(value);
			if (progress < 1) raf = requestAnimationFrame(animate);
			else setCount(target);
		};

		if (inView) raf = requestAnimationFrame(animate);
		else setCount(0);

		return () => cancelAnimationFrame(raf);
	}, [inView, target]);

	return (
		<div ref={ref} className="text-center group">
			<div
				className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${fromColor} ${toColor} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
				{icon}
			</div>
			<h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
				{count}
				{suffix}
			</h3>
			<p className="text-gray-600 dark:text-gray-400">{label}</p>
		</div>
	);
};
