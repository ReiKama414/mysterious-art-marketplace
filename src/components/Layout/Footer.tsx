import React from "react";
import { Link } from "react-router-dom";
import { Palette, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

const Footer: React.FC = () => {
	const { t } = useLanguage();

	return (
		<footer className="bg-gray-900 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Logo and Description */}
					<div className="col-span-1 md:col-span-2">
						<Link to="/" className="flex items-center space-x-2 mb-4">
							<Palette className="h-8 w-8 text-indigo-400" />
							<span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
								Mystic Gallery
							</span>
						</Link>
						<p className="text-gray-400 mb-4 max-w-md">
							Discover extraordinary paintings from talented artists around the world. Experience the mysterious beauty
							of art in our curated collection.
						</p>
						<div className="flex space-x-4">
							<div className="flex items-center space-x-2 text-sm text-gray-400">
								<Mail className="h-4 w-4" />
								<span>info@mysticgallery.com</span>
							</div>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<Link to="/explore" className="text-gray-400 hover:text-white transition-colors duration-200">
									{t("nav.explore")}
								</Link>
							</li>
							<li>
								<Link to="/artists" className="text-gray-400 hover:text-white transition-colors duration-200">
									{t("nav.artists")}
								</Link>
							</li>
							<li>
								<Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
									{t("nav.about")}
								</Link>
							</li>
							<li>
								<Link to="/admin" className="text-gray-400 hover:text-white transition-colors duration-200">
									{t("nav.admin")}
								</Link>
							</li>
							<li>
								<Link to="/414" className="text-gray-400 hover:text-white transition-colors duration-200">
									404 (Demo)
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className="text-lg font-semibold mb-4">Contact</h3>
						<ul className="space-y-3">
							<li className="flex items-center space-x-2 text-gray-400">
								<Phone className="h-4 w-4" />
								<span>+1 (414) 123-4567</span>
							</li>
							<li className="flex items-center space-x-2 text-gray-400">
								<MapPin className="h-4 w-4" />
								<span>New York, NY</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
					<p>
						&copy; {new Date().getFullYear()} Mystic Gallery by{" "}
						<Link
							to="/"
							className="underline underline-offset-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-200">
							ReiKama414
						</Link>
						. All rights reserved.{" "}
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
