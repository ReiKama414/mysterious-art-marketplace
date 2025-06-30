export interface Artwork {
	id: string;
	title: string;
	artist: string;
	price: number;
	category: string;
	style: string;
	colors: string[];
	image: string;
	images: string[];
	description: string;
	dimensions: string;
	medium: string;
	year: number;
	isAvailable: boolean;
	isFeatured: boolean;
}

export interface Artist {
	id: string;
	name: string;
	bio: string;
	avatar: string;
	artworks: string[];
	isVerified: boolean;
	joinDate: string;
}

export interface CartItem {
	artwork: Artwork;
	quantity: number;
	packaging?: string;
	shipping?: string;
}

export interface Order {
	id: string;
	customerName: string;
	items: CartItem[];
	total: number;
	status: "pending" | "processing" | "shipped" | "delivered";
	date: string;
	shippingAddress: string;
}

export type Language = "en" | "zh" | "ja";
export type Theme = "light" | "dark";
