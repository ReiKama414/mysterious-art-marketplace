import { FC, useEffect } from "react";
import { CheckCircle, ShoppingCart } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

interface CartSuccessToastProps {
	isVisible: boolean;
	onClose: () => void;
	artworkTitle: string;
}

const CartSuccessToast: FC<CartSuccessToastProps> = ({ isVisible, onClose, artworkTitle }) => {
	const { language } = useLanguage();

	useEffect(() => {
		if (isVisible) {
			const timer = setTimeout(() => {
				onClose();
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [isVisible, onClose]);

	if (!isVisible) return null;

	const messages = {
		en: "Added to cart successfully!",
		zh: "加入購物車成功！",
		ja: "カートに追加されました！",
	};

	return (
		<div className="fixed top-24 right-4 z-50 animate-slide-in-right">
			<div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 max-w-sm animate-bounce-gentle">
				<div className="flex items-center space-x-3">
					<div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center animate-scale-in">
						<CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
					</div>
					<div className="flex-1">
						<h3 className="font-semibold text-gray-900 dark:text-white text-sm">{messages[language]}</h3>
						<p className="text-xs text-gray-600 dark:text-gray-400 truncate">{artworkTitle}</p>
					</div>
					<ShoppingCart className="h-5 w-5 text-indigo-600 dark:text-indigo-400 animate-wiggle" />
				</div>
			</div>
		</div>
	);
};

export default CartSuccessToast;
