import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { Artwork } from "../../types";
import { useCart } from "../../contexts/CartContext";
import { useLanguage } from "../../contexts/LanguageContext";
import CartSuccessToast from "./CartSuccessToast";

interface ArtworkCardProps {
	artwork: Artwork;
	className?: string;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork, className = "" }) => {
	const { addToCart } = useCart();
	const { t } = useLanguage();
	const [isHovered, setIsHovered] = React.useState(false);
	const [isLiked, setIsLiked] = React.useState(false);
	const [showSuccessToast, setShowSuccessToast] = React.useState(false);

	const handleAddToCart = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		addToCart(artwork);
		setShowSuccessToast(true);
	};

	const handleLike = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setIsLiked(!isLiked);
	};

	return (
		<>
			<Link
				to={`/artwork/${artwork.id}`}
				className={`group block ${className}`}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}>
				<div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
					{/* Image Container */}
					<div className="relative aspect-[4/3] overflow-hidden">
						<img
							src={artwork.image}
							alt={artwork.title}
							className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
						/>

						{/* Overlay */}
						<div
							className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
								isHovered ? "opacity-100" : "opacity-0"
							}`}
						/>

						{/* Action Buttons */}
						<div
							className={`absolute top-4 right-4 flex flex-col space-y-2 transition-all duration-300 ${
								isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
							}`}>
							<button
								onClick={handleLike}
								className={`p-2 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 ${
									isLiked
										? "bg-red-500/80 text-white animate-bounce-gentle"
										: "bg-white/20 text-white hover:bg-white/30"
								}`}>
								<Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
							</button>
							<button
								onClick={handleAddToCart}
								className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:rotate-12">
								<ShoppingCart className="h-4 w-4" />
							</button>
						</div>

						{/* Quick View Button */}
						<div
							className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
								isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
							}`}>
							<div className="flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-lg px-3 py-2 text-white text-sm hover:bg-white/30 transition-colors duration-200">
								<Eye className="h-4 w-4" />
								<span>Quick View</span>
							</div>
						</div>

						{/* Featured Badge */}
						{artwork.isFeatured && (
							<div className="absolute top-4 left-4">
								<span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-medium rounded-full animate-pulse">
									Featured
								</span>
							</div>
						)}
					</div>

					{/* Content */}
					<div className="p-6">
						<div className="flex items-start justify-between mb-2">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
								{artwork.title}
							</h3>
							<span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
								${artwork.price.toLocaleString()}
							</span>
						</div>

						<p className="text-sm text-gray-600 dark:text-gray-400 mb-3">by {artwork.artist}</p>

						<div className="flex items-center justify-between">
							<div className="flex items-center space-x-2">
								<span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
									{artwork.category}
								</span>
								<span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
									{artwork.style}
								</span>
							</div>

							<div className="flex items-center space-x-1">
								{artwork.colors.slice(0, 3).map((color, index) => (
									<div
										key={index}
										className={`w-3 h-3 rounded-full border border-gray-300 dark:border-gray-600 transition-transform duration-200 hover:scale-125 ${
											color === "red"
												? "bg-red-400"
												: color === "blue"
												? "bg-blue-400"
												: color === "green"
												? "bg-green-400"
												: color === "yellow"
												? "bg-yellow-400"
												: color === "purple"
												? "bg-purple-400"
												: color === "orange"
												? "bg-orange-400"
												: color === "pink"
												? "bg-pink-400"
												: color === "teal"
												? "bg-teal-400"
												: color === "brown"
												? "bg-amber-600"
												: color === "black"
												? "bg-gray-800"
												: color === "white"
												? "bg-gray-200"
												: color === "gold"
												? "bg-yellow-500"
												: "bg-gray-400"
										}`}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</Link>

			<CartSuccessToast
				isVisible={showSuccessToast}
				onClose={() => setShowSuccessToast(false)}
				artworkTitle={artwork.title}
			/>
		</>
	);
};

export default ArtworkCard;
