import { FC, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
	Heart,
	ShoppingCart,
	Share2,
	ArrowLeft,
	User,
	Calendar,
	Ruler,
	Palette,
	Plus,
	Minus,
	Star,
	CheckCircle,
} from "lucide-react";
import { mockArtworks, mockArtists } from "../data/mockData";
import { useCart } from "../contexts/CartContext";
import { useLanguage } from "../contexts/LanguageContext";
import CartSuccessToast from "../components/UI/CartSuccessToast";
import CheckoutModal from "../components/UI/CheckoutModal";
import ImageGalleryModal from "../components/UI/ImageGalleryModal";
import PageTitle from "../components/Layout/PageTitle";

const ArtworkDetail: FC = () => {
	const { id } = useParams<{ id: string }>();
	const { addToCart, clearCart } = useCart();
	const { t } = useLanguage();

	const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
	const [quantity, setQuantity] = useState<number>(1);
	const [isLiked, setIsLiked] = useState<boolean>(false);
	const [showArtistPanel, setShowArtistPanel] = useState<boolean>(false);
	const [showSuccessToast, setShowSuccessToast] = useState<boolean>(false);
	const [showCheckout, setShowCheckout] = useState<boolean>(false);
	const [showGallery, setShowGallery] = useState<boolean>(false);

	const artwork = mockArtworks.find((art) => art.id === id);
	const artist = artwork ? mockArtists.find((a) => a.name === artwork.artist) : null;

	if (!artwork) {
		return (
			<div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
				<PageTitle customTitle="Artwork Not Found" />
				<div className="text-center">
					<h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Artwork not found</h1>
					<Link
						to="/explore"
						className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">
						Back to explore
					</Link>
				</div>
			</div>
		);
	}

	const handleAddToCart = () => {
		addToCart(artwork, quantity);
		setShowSuccessToast(true);
	};

	const handleQuantityChange = (delta: number) => {
		const newQuantity = quantity + delta;
		if (newQuantity >= 1 && newQuantity <= 10) {
			setQuantity(newQuantity);
		}
	};

	const handleShare = (artwork: (typeof mockArtworks)[0]) => {
		const shareData = {
			image: artwork.image,
			title: artwork.title,
			text: `Check out this artwork: ${artwork.title} by ${artwork.artist}`,
			url: window.location.href,
		};
		navigator.share(shareData);
	};

	const handleBuyNow = () => {
		setShowCheckout(true);
	};

	return (
		<>
			<div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
				<PageTitle customTitle={artwork.title} />
				<div className="max-w-7xl mx-auto">
					{/* Back Button */}
					<Link
						to="/explore"
						className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 group">
						<ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
						<span>Back to explore</span>
					</Link>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Image Gallery */}
						<div className="space-y-4">
							<div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
								<img
									src={artwork.images[selectedImageIndex]}
									alt={artwork.title}
									className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
									onClick={() => setShowGallery(true)}
								/>
							</div>

							{artwork.images.length > 1 && (
								<div className="flex space-x-2 overflow-x-auto">
									{artwork.images.map((image, index) => (
										<button
											key={index}
											onClick={() => setSelectedImageIndex(index)}
											className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
												selectedImageIndex === index
													? "border-indigo-600 dark:border-indigo-400"
													: "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
											}`}>
											<img
												src={image}
												alt={`${artwork.title} view ${index + 1}`}
												className="w-full h-full object-cover"
											/>
										</button>
									))}
								</div>
							)}
						</div>

						{/* Product Info */}
						<div className="space-y-6">
							{/* Header */}
							<div>
								<div className="flex items-start justify-between mb-2">
									<h1 className="text-3xl font-bold text-gray-900 dark:text-white">{artwork.title}</h1>
									<div className="flex items-center space-x-2">
										<button
											onClick={() => setIsLiked(!isLiked)}
											className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${
												isLiked
													? "bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400"
													: "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
											}`}>
											<Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
										</button>
										<button
											onClick={() => handleShare(artwork)}
											className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110">
											<Share2 className="h-5 w-5" />
										</button>
									</div>
								</div>

								<button
									onClick={() => setShowArtistPanel(true)}
									className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 mb-4 group">
									<User className="h-4 w-4" />
									<span className="font-medium">by {artwork.artist}</span>
									<div className="flex items-center">
										{[...Array(5)].map((_, i) => (
											<Star key={i} className="h-3 w-3 fill-current text-yellow-400" />
										))}
										<span className="text-sm text-gray-600 dark:text-gray-400 ml-1">(4.9)</span>
									</div>
								</button>

								<div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
									${artwork.price.toLocaleString()}
								</div>
							</div>

							{/* Description */}
							<div>
								<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Description</h3>
								<p className="text-gray-600 dark:text-gray-400 leading-relaxed">{artwork.description}</p>
							</div>

							{/* Details */}
							<div className="grid grid-cols-2 gap-4">
								<div className="flex items-center space-x-2 text-sm">
									<Ruler className="h-4 w-4 text-gray-400" />
									<span className="text-gray-600 dark:text-gray-400">
										<strong className="text-gray-900 dark:text-white">{t("artwork.dimensions")}:</strong>{" "}
										{artwork.dimensions}
									</span>
								</div>
								<div className="flex items-center space-x-2 text-sm">
									<Palette className="h-4 w-4 text-gray-400" />
									<span className="text-gray-600 dark:text-gray-400">
										<strong className="text-gray-900 dark:text-white">{t("artwork.medium")}:</strong> {artwork.medium}
									</span>
								</div>
								<div className="flex items-center space-x-2 text-sm">
									<Calendar className="h-4 w-4 text-gray-400" />
									<span className="text-gray-600 dark:text-gray-400">
										<strong className="text-gray-900 dark:text-white">{t("artwork.year")}:</strong> {artwork.year}
									</span>
								</div>
								<div className="flex items-center space-x-2 text-sm">
									<div className="flex space-x-1">
										{artwork.colors.map((color, index) => (
											<div
												key={index}
												className={`w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600 ${
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
									<span className="text-gray-600 dark:text-gray-400">
										<strong className="text-gray-900 dark:text-white">Colors</strong>
									</span>
								</div>
							</div>

							{/* Tags */}
							<div className="flex items-center space-x-2">
								<span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 text-sm rounded-full">
									{artwork.category}
								</span>
								<span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 text-sm rounded-full">
									{artwork.style}
								</span>
								{artwork.isFeatured && (
									<span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 text-sm rounded-full">
										Featured
									</span>
								)}
							</div>

							{/* Quantity & Actions */}
							<div className="space-y-4">
								<div className="flex items-center space-x-4">
									<span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t("cart.quantity")}:</span>
									<div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
										<button
											onClick={() => handleQuantityChange(-1)}
											disabled={quantity <= 1}
											className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200">
											<Minus className="h-4 w-4 dark:text-white" />
										</button>
										<span className="px-4 py-2 font-medium text-gray-900 dark:text-white">{quantity}</span>
										<button
											onClick={() => handleQuantityChange(1)}
											disabled={quantity >= 10}
											className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200">
											<Plus className="h-4 w-4 dark:text-white" />
										</button>
									</div>
								</div>

								<div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
									<button
										onClick={handleAddToCart}
										className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
										<ShoppingCart className="h-5 w-5" />
										<span>{t("artwork.addToCart")}</span>
									</button>
									<button
										onClick={handleBuyNow}
										className="flex-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 hover:scale-105">
										{t("artwork.buyNow")}
									</button>
								</div>
							</div>

							{/* Shipping & Returns */}
							<div className="border-t border-gray-200 dark:border-gray-700 pt-6">
								<div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
									<p>✓ Free shipping on orders over $2000</p>
									<p>✓ Secure packaging and handling</p>
									<p>✓ 30-day return policy</p>
									<p>✓ Certificate of authenticity included</p>
								</div>
							</div>
						</div>
					</div>

					{/* Artist Panel */}
					{showArtistPanel && artist && (
						<div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
							<div className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full max-h-[80vh] flex flex-col animate-scale-in">
								{/* Modal Header */}
								<div className="p-6 border-b border-gray-200 dark:border-gray-700">
									<div className="flex items-center justify-between">
										<h2 className="text-xl font-bold text-gray-900 dark:text-white">About the Artist</h2>
										<button
											onClick={() => setShowArtistPanel(false)}
											className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl leading-none">
											×
										</button>
									</div>
								</div>

								{/* Modal Content - Scrollable */}
								<div className="flex-1 overflow-y-auto p-6">
									<div className="text-center mb-4">
										<img
											src={artist.avatar}
											alt={artist.name}
											className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
										/>
										<h3 className="text-lg font-semibold text-gray-900 dark:text-white">{artist.name}</h3>
										{artist.isVerified && (
											<span className="inline-flex items-center space-x-1 text-sm text-indigo-600 dark:text-indigo-400">
												<span>
													<CheckCircle className="h-4 w-4" />
												</span>
												<span> Verified Artist</span>
											</span>
										)}
									</div>

									<p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{artist.bio}</p>

									<div className="text-sm text-gray-500 dark:text-gray-400">
										<p>Member since: {new Date(artist.joinDate).getFullYear()}</p>
										<p>Artworks: {artist.artworks.length}</p>
									</div>
								</div>

								{/* Modal Footer - Fixed at bottom */}
								<div className="p-6 border-t border-gray-200 dark:border-gray-700 rounded-b-2xl">
									<Link
										to={`/artist/${artist.id}`}
										className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center py-3 rounded-lg font-medium transition-colors duration-200"
										onClick={() => setShowArtistPanel(false)}>
										Detail
									</Link>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>

			<CartSuccessToast
				isVisible={showSuccessToast}
				onClose={() => setShowSuccessToast(false)}
				artworkTitle={artwork.title}
			/>

			{/* Checkout Modal */}
			{showCheckout && (
				<CheckoutModal
					onClose={() => setShowCheckout(false)}
					onContinue={() => {
						setShowCheckout(false);
						clearCart();
					}}
				/>
			)}

			{/* Image Gallery Modal */}
			{showGallery && (
				<ImageGalleryModal
					images={artwork.images}
					initialIndex={selectedImageIndex}
					onClose={() => setShowGallery(false)}
				/>
			)}
		</>
	);
};

export default ArtworkDetail;
