import { FC, useEffect, useState } from "react";
import { Heart, Shield, Award, Users, Globe, Palette } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../contexts/LanguageContext";

import "aos/dist/aos.css";
import AOS from "aos";
import PageTitle from "../components/Layout/PageTitle";

const statsData = [
	{ label: "Artworks", target: 500 },
	{ label: "Artists", target: 150 },
	{ label: "Countries", target: 50 },
	{ label: "Satisfaction", target: 98 },
];

const About: FC = () => {
	const { t } = useLanguage();

	useEffect(() => {
		AOS.init({
			duration: 800,
			easing: "ease-out-cubic",
			once: false, // Initialize AOS
		});
	}, []);

	const features = [
		{
			icon: <Palette className="h-8 w-8" />,
			title: "Curated Collection",
			description:
				"Every artwork is carefully selected by our team of art experts to ensure exceptional quality and authenticity.",
		},
		{
			icon: <Shield className="h-8 w-8" />,
			title: "Authenticity Guaranteed",
			description: "All artworks come with certificates of authenticity and detailed provenance documentation.",
		},
		{
			icon: <Users className="h-8 w-8" />,
			title: "Verified Artists",
			description: "Our artists go through a rigorous verification process to ensure they meet our quality standards.",
		},
		{
			icon: <Globe className="h-8 w-8" />,
			title: "Global Reach",
			description: "Connect with artists and collectors from around the world in our international marketplace.",
		},
		{
			icon: <Heart className="h-8 w-8" />,
			title: "Passion for Art",
			description: "We are driven by a genuine love for art and commitment to supporting the artistic community.",
		},
		{
			icon: <Award className="h-8 w-8" />,
			title: "Excellence in Service",
			description: "Premium customer service with white-glove handling and personalized art consulting.",
		},
	];

	return (
		<div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
			<PageTitle titleKey="nav.about" />
			<div className="max-w-7xl mx-auto">
				{/* Hero Section */}
				<div className="text-center mb-16" data-aos="fade-up">
					<h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{t("nav.about")} Mystic Gallery</h1>
					<div className="max-w-3xl mx-auto">
						<p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
							We are a mysterious and enchanting art marketplace that connects passionate collectors with extraordinary
							artists from around the world. Our platform celebrates the magic of creativity and the timeless beauty of
							hand-crafted artworks.
						</p>
					</div>
				</div>

				{/* Story Section */}
				<div className="mb-20">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div data-aos="fade-right">
							<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
							<div className="space-y-4 text-gray-600 dark:text-gray-400">
								<p>
									Founded in the digital age with an appreciation for timeless artistry, Mystic Gallery emerged from a
									vision to create a bridge between traditional art and modern accessibility.
								</p>
								<p>
									We believe that art has the power to transform spaces, inspire minds, and connect souls across
									cultures and continents. Our carefully curated collection showcases works that speak to the
									mysterious, the beautiful, and the profound.
								</p>
								<p>
									Every piece in our gallery tells a story—not just of the artist who created it, but of the journey it
									takes to find its perfect home with collectors who understand its value and beauty.
								</p>
							</div>
						</div>
						<div className="relative" data-aos="fade-left">
							<img
								src="https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg"
								alt="Art gallery interior"
								className="rounded-2xl shadow-2xl"
							/>
							<div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-2xl"></div>
						</div>
					</div>
				</div>

				{/* Features Grid */}
				<div className="mb-20" data-aos="fade-up">
					<h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
						Why Choose Mystic Gallery
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{features.map((feature, index) => (
							<div
								key={index}
								data-aos="zoom-in"
								data-aos-delay={index * 100}
								className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 opacity-0 animate-fade-in-up"
								style={{ animationDelay: `${index * 0.1}s` }}>
								<div className="text-indigo-600 dark:text-indigo-400 mb-4">{feature.icon}</div>
								<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
								<p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
							</div>
						))}
					</div>
				</div>

				{/* Stats Section */}
				<div className="bg-gradient-to-br from-indigo-900/10 to-purple-900/10 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-12 mb-20">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
						{statsData.map((stat, idx) => (
							<AnimatedStat key={idx} label={stat.label} targetNumber={stat.target} delay={idx * 100} />
						))}
					</div>
				</div>

				{/* Mission Section */}
				<div className="text-center mb-16" data-aos="fade-up">
					<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Mission</h2>
					<div className="max-w-4xl mx-auto">
						<p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
							To democratize art collection by making extraordinary artworks accessible to everyone, while providing
							artists with a platform to showcase their creativity and connect with appreciative audiences worldwide. We
							strive to preserve the mystery and magic of art in an increasingly digital world.
						</p>
					</div>
				</div>

				{/* Contact Section */}
				<div className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-lg" data-aos="fade-up">
					<div className="text-center">
						<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h2>
						<p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
							Have questions about our collection or want to learn more about becoming an artist partner?
						</p>
						<div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
							<div className="text-gray-600 dark:text-gray-400">
								<strong>Email:</strong> info@mysticgallery.com
							</div>
							<div className="text-gray-600 dark:text-gray-400">
								<strong>Phone:</strong> +1 (414) 123-4567
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;

interface AnimatedStatProps {
	label: string;
	targetNumber: number;
	delay?: number;
}

const AnimatedStat: FC<AnimatedStatProps> = ({ label, targetNumber, delay = 0 }) => {
	const [count, setCount] = useState<number>(0);
	const { ref, inView } = useInView({ triggerOnce: false });

	useEffect(() => {
		// let start = 0;
		let raf: number;

		const duration = 1200;
		const startTime = performance.now();

		const animate = (time: number) => {
			const progress = Math.min((time - startTime) / duration, 1);
			const current = Math.floor(progress * targetNumber);
			setCount(current);

			if (progress < 1) {
				raf = requestAnimationFrame(animate);
			} else {
				setCount(targetNumber);
			}
		};

		if (inView) {
			raf = requestAnimationFrame(animate);
		} else {
			setCount(0);
		}

		return () => cancelAnimationFrame(raf);
	}, [inView, targetNumber]);

	return (
		<div ref={ref} data-aos="fade-up" data-aos-delay={delay}>
			<div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
				{label === "Satisfaction" ? `${count}%` : `${count}+`}
			</div>
			<div className="text-gray-600 dark:text-gray-400">{label}</div>
		</div>
	);
};
