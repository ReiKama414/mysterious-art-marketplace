import { FC } from "react";

interface CheckoutModalProps {
	onClose: () => void;
	onContinue: () => void;
}

const CheckoutModal: FC<CheckoutModalProps> = ({ onClose, onContinue }) => {
	return (
		<div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
			<div className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full flex flex-col animate-scale-in">
				<div className="p-8 text-center">
					<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Checkout Complete!</h2>
					<div className="mb-6">
						<div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-gentle">
							<div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
								<div className="w-3 h-3 bg-white rounded-full"></div>
							</div>
						</div>
						<p className="text-gray-600 dark:text-gray-400">
							Thank you for your purchase! Your order has been processed successfully.
						</p>
					</div>
				</div>

				<div className="p-6 border-t border-gray-200 dark:border-gray-700 rounded-b-2xl">
					<div className="space-y-3">
						<button
							onClick={onContinue}
							className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105">
							Continue Shopping
						</button>
						<button
							onClick={onClose}
							className="w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CheckoutModal;
