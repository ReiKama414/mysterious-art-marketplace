import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { useLanguage } from "../contexts/LanguageContext";
import CheckoutModal from "../components/UI/CheckoutModal";

const Cart: FC = () => {
	const { items, removeFromCart, updateQuantity, total, clearCart } = useCart();
	const { t } = useLanguage();
	const [showCheckout, setShowCheckout] = useState<boolean>(false);
	const [removingItems, setRemovingItems] = useState<Set<string>>(new Set());

	const handleRemove = (artworkId: string) => {
		setRemovingItems((prev) => new Set(prev).add(artworkId));
		setTimeout(() => {
			removeFromCart(artworkId);
			setRemovingItems((prev) => {
				const newSet = new Set(prev);
				newSet.delete(artworkId);
				return newSet;
			});
		}, 300);
	};

	const handleQuantityChange = (artworkId: string, newQuantity: number) => {
		updateQuantity(artworkId, newQuantity);
	};

	if (items.length === 0) {
		return (
			<div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto text-center py-16">
					<div className="text-gray-400 mb-6 animate-bounce-gentle">
						<ShoppingBag className="h-24 w-24 mx-auto" />
					</div>
					<h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t("cart.empty")}</h1>
					<p className="text-gray-600 dark:text-gray-400 mb-8">Discover amazing artworks and add them to your cart</p>
					<Link
						to="/explore"
						className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
						<span>Start Shopping</span>
						<ArrowRight className="h-5 w-5" />
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<div className="flex items-center justify-between mb-8">
					<h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t("cart.title")}</h1>
					<button
						onClick={clearCart}
						className="text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition duration-200 hover:scale-105">
						Clear Cart
					</button>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Cart Items */}
					<div className="lg:col-span-2 space-y-4">
						{items.map((item) => (
							<div
								key={item.artwork.id}
								className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 ${
									removingItems.has(item.artwork.id)
										? "opacity-0 scale-95 -translate-x-4"
										: "opacity-100 scale-100 translate-x-0"
								}`}>
								<div className="flex items-center space-x-4">
									{/* Artwork Image */}
									<Link to={`/artwork/${item.artwork.id}`} className="flex-shrink-0">
										<img
											src={item.artwork.image}
											alt={item.artwork.title}
											className="w-24 h-24 object-cover rounded-lg hover:scale-105 transition-transform duration-200"
										/>
									</Link>

									{/* Artwork Info */}
									<div className="flex-1 min-w-0">
										<Link to={`/artwork/${item.artwork.id}`} className="block">
											<h3 className="text-lg font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
												{item.artwork.title}
											</h3>
										</Link>
										<p className="text-sm text-gray-600 dark:text-gray-400 mb-4">by {item.artwork.artist}</p>
										<div className="flex items-center space-x-2">
											<span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
												{item.artwork.category}
											</span>
											<span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
												{item.artwork.dimensions}
											</span>
										</div>
									</div>

									{/* Price & Quantity */}
									<div className="flex flex-col items-end gap-4">
										<div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
											${(item.artwork.price * item.quantity).toLocaleString()}
										</div>

										{/* Quantity Controls */}
										<div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
											<button
												onClick={() => handleQuantityChange(item.artwork.id, item.quantity - 1)}
												className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-110">
												<Minus className="h-4 w-4" />
											</button>
											<span className="px-3 py-1 font-medium text-gray-900 dark:text-white min-w-[2rem] text-center">
												{item.quantity}
											</span>
											<button
												onClick={() => handleQuantityChange(item.artwork.id, item.quantity + 1)}
												className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-110">
												<Plus className="h-4 w-4" />
											</button>
										</div>

										{/* Remove Button */}
										<button
											onClick={() => handleRemove(item.artwork.id)}
											className="flex items-center space-x-1.5 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 text-sm transition-all duration-200 hover:scale-105">
											<Trash2 className="h-4 w-4" />
											<span>{t("cart.remove")}</span>
										</button>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Order Summary */}
					<div className="lg:col-span-1">
						<div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 sticky top-28">
							<h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Order Summary</h2>

							<div className="space-y-4 mb-6">
								<div className="flex justify-between text-sm">
									<span className="text-gray-600 dark:text-gray-400">
										Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} items)
									</span>
									<span className="font-medium text-gray-900 dark:text-white">${total.toLocaleString()}</span>
								</div>

								<div className="flex justify-between text-sm">
									<span className="text-gray-600 dark:text-gray-400">Shipping</span>
									<span className="font-medium text-green-600 dark:text-green-400">
										{total > 2000 ? "Free" : "$50"}
									</span>
								</div>

								<div className="flex justify-between text-sm">
									<span className="text-gray-600 dark:text-gray-400">Tax</span>
									<span className="font-medium text-gray-900 dark:text-white">
										${Math.round(total * 0.08).toLocaleString()}
									</span>
								</div>

								<div className="border-t border-gray-200 dark:border-gray-700 pt-4">
									<div className="flex justify-between">
										<span className="text-lg font-semibold text-gray-900 dark:text-white">{t("cart.total")}</span>
										<span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
											${(total + (total > 2000 ? 0 : 50) + Math.round(total * 0.08)).toLocaleString()}
										</span>
									</div>
								</div>
							</div>

							<button
								onClick={() => setShowCheckout(true)}
								className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 mb-4">
								{t("cart.checkout")}
							</button>

							<Link
								to="/explore"
								className="block w-full text-center bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-105">
								Continue Shopping
							</Link>

							{total > 2000 && (
								<div className="mt-4 p-3 text-center bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg animate-pulse">
									<p className="text-sm text-green-800 dark:text-green-200 inline-flex items-center gap-2">
										<span>✓</span>
										<span>You qualify for free shipping!</span>
									</p>
								</div>
							)}
						</div>
					</div>
				</div>

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
			</div>
		</div>
	);
};

export default Cart;
