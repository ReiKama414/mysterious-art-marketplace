import { createContext, useContext, useState, useEffect, ReactNode, FC } from "react";
import { CartItem, Artwork } from "../types";

interface CartContextType {
	items: CartItem[];
	addToCart: (artwork: Artwork, quantity?: number) => void;
	removeFromCart: (artworkId: string) => void;
	updateQuantity: (artworkId: string, quantity: number) => void;
	clearCart: () => void;
	total: number;
	itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [items, setItems] = useState<CartItem[]>([]);

	useEffect(() => {
		const savedCart = localStorage.getItem("cart");
		if (savedCart) {
			setItems(JSON.parse(savedCart));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(items));
	}, [items]);

	const addToCart = (artwork: Artwork, quantity = 1) => {
		setItems((prev) => {
			const existingItem = prev.find((item) => item.artwork.id === artwork.id);
			if (existingItem) {
				return prev.map((item) =>
					item.artwork.id === artwork.id ? { ...item, quantity: item.quantity + quantity } : item
				);
			}
			return [...prev, { artwork, quantity }];
		});
	};

	const removeFromCart = (artworkId: string) => {
		setItems((prev) => prev.filter((item) => item.artwork.id !== artworkId));
	};

	const updateQuantity = (artworkId: string, quantity: number) => {
		if (quantity <= 0) {
			removeFromCart(artworkId);
			return;
		}

		setItems((prev) => prev.map((item) => (item.artwork.id === artworkId ? { ...item, quantity } : item)));
	};

	const clearCart = () => {
		setItems([]);
	};

	const total = items.reduce((sum, item) => sum + item.artwork.price * item.quantity, 0);
	const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

	return (
		<CartContext.Provider
			value={{
				items,
				addToCart,
				removeFromCart,
				updateQuantity,
				clearCart,
				total,
				itemCount,
			}}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
};
