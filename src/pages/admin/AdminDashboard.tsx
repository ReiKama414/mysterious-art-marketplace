import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	BarChart3,
	Package,
	Users,
	ShoppingCart,
	Plus,
	Edit,
	Trash2,
	Eye,
	Upload,
	X,
	CheckCircle,
	Calendar,
	DollarSign,
	Star,
	MapPin,
	User,
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { mockArtworks, mockArtists, mockOrders } from "../../data/mockData";
import CustomSelect from "../../components/UI/CustomSelect";
import PageTitle from "../../components/Layout/PageTitle";

const AdminDashboard: FC = () => {
	const navigate = useNavigate();
	const { language } = useLanguage();
	const [activeTab, setActiveTab] = useState("overview");
	const [showAddArtwork, setShowAddArtwork] = useState(false);
	const [showAddArtist, setShowAddArtist] = useState(false);
	const [showOrderDetail, setShowOrderDetail] = useState(false);
	const [selectedOrder, setSelectedOrder] = useState<any>(null);
	const [showToast, setShowToast] = useState(false);
	const [toastMessage, setToastMessage] = useState("");
	const [uploadedImages, setUploadedImages] = useState<string[]>([]);

	const titles = {
		en: "Admin Dashboard",
		zh: "管理後台",
		ja: "管理ダッシュボード",
	};

	useEffect(() => {
		const loggedInDate = localStorage.getItem("adminLoggedInDate");
		const today = new Date().toISOString().split("T")[0];

		const isLoggedIn = loggedInDate === today;
		if (!isLoggedIn) {
			navigate("/admin");
		}
	}, [navigate]);

	const showToastMessage = (message: string) => {
		setToastMessage(message);
		setShowToast(true);
		setTimeout(() => setShowToast(false), 3000);
	};

	const handleLogout = () => {
		localStorage.removeItem("adminLoggedInDate");
		navigate("/admin");
	};

	const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;
		if (files) {
			const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
			setUploadedImages((prev) => [...prev, ...newImages]);
		}
	};

	const removeImage = (index: number) => {
		setUploadedImages((prev) => prev.filter((_, i) => i !== index));
	};

	const handleAddArtwork = (e: FormEvent) => {
		e.preventDefault();
		setShowAddArtwork(false);
		setUploadedImages([]);
		const messages = {
			en: "🎨 Demo: Artwork added successfully!",
			zh: "🎨 演示：藝術品新增成功！",
			ja: "🎨 デモ：アートワークが正常に追加されました！",
		};
		showToastMessage(messages[language]);
	};

	const handleAddArtist = (e: FormEvent) => {
		e.preventDefault();
		setShowAddArtist(false);
		const messages = {
			en: "👨‍🎨 Demo: Artist added successfully!",
			zh: "👨‍🎨 演示：藝術家新增成功！",
			ja: "👨‍🎨 デモ：アーティストが正常に追加されました！",
		};
		showToastMessage(messages[language]);
	};

	const handleViewOrder = (order: any) => {
		setSelectedOrder(order);
		setShowOrderDetail(true);
	};

	const handleArtworkClick = (artworkId: string) => {
		navigate(`/artwork/${artworkId}`);
	};

	const handleArtistClick = (artistId: string) => {
		navigate(`/artist/${artistId}`);
	};

	const handleEditArtwork = () => {
		const messages = {
			en: "✏️ Demo: Edit artwork feature simulated!",
			zh: "✏️ 演示：編輯藝術品功能模擬！",
			ja: "✏️ デモ：アートワーク編集機能をシミュレート！",
		};
		showToastMessage(messages[language]);
	};

	const handleDeleteArtwork = () => {
		const messages = {
			en: "🗑️ Demo: Delete artwork feature simulated!",
			zh: "🗑️ 演示：刪除藝術品功能模擬！",
			ja: "🗑️ デモ：アートワーク削除機能をシミュレート！",
		};
		showToastMessage(messages[language]);
	};

	const handleEditArtist = () => {
		const messages = {
			en: "✏️ Demo: Edit artist feature simulated!",
			zh: "✏️ 演示：編輯藝術家功能模擬！",
			ja: "✏️ デモ：アーティスト編集機能をシミュレート！",
		};
		showToastMessage(messages[language]);
	};

	const handleDeleteArtist = () => {
		const messages = {
			en: "🗑️ Demo: Delete artist feature simulated!",
			zh: "🗑️ 演示：刪除藝術家功能模擬！",
			ja: "🗑️ デモ：アーティスト削除機能をシミュレート！",
		};
		showToastMessage(messages[language]);
	};

	const handleEditOrder = () => {
		const messages = {
			en: "✏️ Demo: Edit order feature simulated!",
			zh: "✏️ 演示：編輯訂單功能模擬！",
			ja: "✏️ デモ：注文編集機能をシミュレート！",
		};
		showToastMessage(messages[language]);
	};

	const translations = {
		en: {
			dashboard: "Admin Dashboard",
			overview: "Overview",
			artworks: "Artworks",
			artists: "Artists",
			orders: "Orders",
			analytics: "Analytics",
			logout: "Logout",
			addArtwork: "Add Artwork",
			addArtist: "Add Artist",
			title: "Title",
			artist: "Artist",
			price: "Price",
			category: "Category",
			status: "Status",
			actions: "Actions",
			view: "View",
			edit: "Edit",
			delete: "Delete",
			name: "Name",
			email: "Email",
			artworkCount: "Artworks",
			joinDate: "Join Date",
			verified: "Verified",
			orderId: "Order ID",
			customer: "Customer",
			total: "Total",
			orderStatus: "Status",
			date: "Date",
			pending: "Pending",
			processing: "Processing",
			shipped: "Shipped",
			delivered: "Delivered",
			totalRevenue: "Total Revenue",
			totalOrders: "Total Orders",
			totalArtworks: "Total Artworks",
			totalArtists: "Total Artists",
			recentOrders: "Recent Orders",
			topArtworks: "Top Artworks",
			description: "Description",
			dimensions: "Dimensions",
			medium: "Medium",
			year: "Year",
			colors: "Colors",
			uploadImages: "Upload Images",
			dragDrop: "Drag and drop images here, or click to select",
			bio: "Bio",
			portfolio: "Portfolio URL",
			phone: "Phone",
			location: "Location",
			cancel: "Cancel",
			save: "Save",
			orderDetails: "Order Details",
			customerInfo: "Customer Information",
			orderItems: "Order Items",
			shippingAddress: "Shipping Address",
			quantity: "Quantity",
			subtotal: "Subtotal",
		},
		zh: {
			dashboard: "管理後台",
			overview: "總覽",
			artworks: "藝術品",
			artists: "藝術家",
			orders: "訂單",
			analytics: "分析",
			logout: "登出",
			addArtwork: "新增藝術品",
			addArtist: "新增藝術家",
			title: "標題",
			artist: "藝術家",
			price: "價格",
			category: "分類",
			status: "狀態",
			actions: "操作",
			view: "查看",
			edit: "編輯",
			delete: "刪除",
			name: "姓名",
			email: "電子郵件",
			artworkCount: "作品數",
			joinDate: "加入日期",
			verified: "已驗證",
			orderId: "訂單編號",
			customer: "客戶",
			total: "總計",
			orderStatus: "狀態",
			date: "日期",
			pending: "待處理",
			processing: "處理中",
			shipped: "已出貨",
			delivered: "已送達",
			totalRevenue: "總收入",
			totalOrders: "總訂單",
			totalArtworks: "總藝術品",
			totalArtists: "總藝術家",
			recentOrders: "最近訂單",
			topArtworks: "熱門藝術品",
			description: "描述",
			dimensions: "尺寸",
			medium: "媒材",
			year: "年份",
			colors: "顏色",
			uploadImages: "上傳圖片",
			dragDrop: "拖拽圖片到此處，或點擊選擇",
			bio: "簡介",
			portfolio: "作品集網址",
			phone: "電話",
			location: "地點",
			cancel: "取消",
			save: "保存",
			orderDetails: "訂單詳情",
			customerInfo: "客戶資訊",
			orderItems: "訂單項目",
			shippingAddress: "配送地址",
			quantity: "數量",
			subtotal: "小計",
		},
		ja: {
			dashboard: "管理ダッシュボード",
			overview: "概要",
			artworks: "アートワーク",
			artists: "アーティスト",
			orders: "注文",
			analytics: "分析",
			logout: "ログアウト",
			addArtwork: "アートワーク追加",
			addArtist: "アーティスト追加",
			title: "タイトル",
			artist: "アーティスト",
			price: "価格",
			category: "カテゴリー",
			status: "ステータス",
			actions: "アクション",
			view: "表示",
			edit: "編集",
			delete: "削除",
			name: "名前",
			email: "メール",
			artworkCount: "作品数",
			joinDate: "参加日",
			verified: "認証済み",
			orderId: "注文ID",
			customer: "顧客",
			total: "合計",
			orderStatus: "ステータス",
			date: "日付",
			pending: "保留中",
			processing: "処理中",
			shipped: "発送済み",
			delivered: "配達済み",
			totalRevenue: "総収入",
			totalOrders: "総注文数",
			totalArtworks: "総アートワーク数",
			totalArtists: "総アーティスト数",
			recentOrders: "最近の注文",
			topArtworks: "人気アートワーク",
			description: "説明",
			dimensions: "寸法",
			medium: "媒体",
			year: "年",
			colors: "色",
			uploadImages: "画像アップロード",
			dragDrop: "画像をここにドラッグ＆ドロップするか、クリックして選択",
			bio: "経歴",
			portfolio: "ポートフォリオURL",
			phone: "電話",
			location: "場所",
			cancel: "キャンセル",
			save: "保存",
			orderDetails: "注文詳細",
			customerInfo: "顧客情報",
			orderItems: "注文アイテム",
			shippingAddress: "配送先住所",
			quantity: "数量",
			subtotal: "小計",
		},
	};

	const text = translations[language];

	const categoryOptions = [
		{ value: "Abstract", label: "Abstract" },
		{ value: "Landscape", label: "Landscape" },
		{ value: "Modern", label: "Modern" },
		{ value: "Seascape", label: "Seascape" },
		{ value: "Nature", label: "Nature" },
	];

	const tabs = [
		{ id: "overview", label: text.overview, icon: BarChart3 },
		{ id: "artworks", label: text.artworks, icon: Package },
		{ id: "artists", label: text.artists, icon: Users },
		{ id: "orders", label: text.orders, icon: ShoppingCart },
	];

	const renderOverview = () => (
		<div className="space-y-6 animate-fade-in-up">
			{/* Stats Cards */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-600 dark:text-gray-400">{text.totalRevenue}</p>
							<p className="text-2xl font-bold text-gray-900 dark:text-white">$125,430</p>
						</div>
						<div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
							<DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
						</div>
					</div>
				</div>

				<div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-600 dark:text-gray-400">{text.totalOrders}</p>
							<p className="text-2xl font-bold text-gray-900 dark:text-white">{mockOrders.length}</p>
						</div>
						<div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
							<ShoppingCart className="h-6 w-6 text-blue-600 dark:text-blue-400" />
						</div>
					</div>
				</div>

				<div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-600 dark:text-gray-400">{text.totalArtworks}</p>
							<p className="text-2xl font-bold text-gray-900 dark:text-white">{mockArtworks.length}</p>
						</div>
						<div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
							<Package className="h-6 w-6 text-purple-600 dark:text-purple-400" />
						</div>
					</div>
				</div>

				<div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-600 dark:text-gray-400">{text.totalArtists}</p>
							<p className="text-2xl font-bold text-gray-900 dark:text-white">{mockArtists.length}</p>
						</div>
						<div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
							<Users className="h-6 w-6 text-orange-600 dark:text-orange-400" />
						</div>
					</div>
				</div>
			</div>

			{/* Recent Orders & Top Artworks */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
					<div className="p-6 border-b border-gray-200 dark:border-gray-700">
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white">{text.recentOrders}</h3>
					</div>
					<div className="p-6">
						<div className="space-y-4">
							{mockOrders.slice(0, 3).map((order) => (
								<div
									key={order.id}
									className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
									onClick={() => handleViewOrder(order)}>
									<div>
										<p className="font-medium text-gray-900 dark:text-white">{order.id}</p>
										<p className="text-sm text-gray-600 dark:text-gray-400">{order.customerName}</p>
									</div>
									<div className="text-right">
										<p className="font-medium text-gray-900 dark:text-white">${order.total.toLocaleString()}</p>
										<span
											className={`inline-flex px-2 py-1 text-xs rounded-full ${
												order.status === "delivered"
													? "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200"
													: order.status === "shipped"
													? "bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200"
													: order.status === "processing"
													? "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200"
													: "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
											}`}>
											{text[order.status as keyof typeof text] || order.status}
										</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
					<div className="p-6 border-b border-gray-200 dark:border-gray-700">
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white">{text.topArtworks}</h3>
					</div>
					<div className="p-6">
						<div className="space-y-4">
							{mockArtworks.slice(0, 3).map((artwork) => (
								<div
									key={artwork.id}
									className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
									onClick={() => handleArtworkClick(artwork.id)}>
									<img src={artwork.image} alt={artwork.title} className="w-12 h-12 rounded-lg object-cover" />
									<div className="flex-1">
										<p className="font-medium text-gray-900 dark:text-white">{artwork.title}</p>
										<p className="text-sm text-gray-600 dark:text-gray-400">{artwork.artist}</p>
									</div>
									<div className="text-right">
										<p className="font-medium text-gray-900 dark:text-white">${artwork.price.toLocaleString()}</p>
										<div className="flex items-center">
											<Star className="h-3 w-3 text-yellow-400 fill-current" />
											<span className="text-xs text-gray-600 dark:text-gray-400 ml-1">4.9</span>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);

	const renderArtworks = () => (
		<div className="space-y-6 animate-fade-in-up">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-bold text-gray-900 dark:text-white">{text.artworks}</h2>
				<button
					onClick={() => setShowAddArtwork(true)}
					className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105">
					<Plus className="h-4 w-4" />
					<span>{text.addArtwork}</span>
				</button>
			</div>

			<div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
				<div className="overflow-x-auto">
					<table className="w-full">
						<thead className="bg-gray-50 dark:bg-gray-700">
							<tr>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
									{text.title}
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
									{text.artist}
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
									{text.price}
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
									{text.category}
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
									{text.status}
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
									{text.actions}
								</th>
							</tr>
						</thead>
						<tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
							{mockArtworks.map((artwork) => (
								<tr key={artwork.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="flex items-center">
											<img src={artwork.image} alt={artwork.title} className="w-10 h-10 rounded-lg object-cover mr-3" />
											<div>
												<div className="text-sm font-medium text-gray-900 dark:text-white">{artwork.title}</div>
											</div>
										</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
										{artwork.artist}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
										${artwork.price.toLocaleString()}
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<span className="px-2 py-1 text-xs rounded-full bg-indigo-100 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-200">
											{artwork.category}
										</span>
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<span
											className={`px-2 py-1 text-xs rounded-full ${
												artwork.isAvailable
													? "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200"
													: "bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200"
											}`}>
											{artwork.isAvailable ? "Available" : "Sold"}
										</span>
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
										<div className="flex space-x-2">
											<button
												onClick={() => handleArtworkClick(artwork.id)}
												className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300 transition-colors duration-200 hover:scale-110">
												<Eye className="h-4 w-4" />
											</button>
											<button
												onClick={handleEditArtwork}
												className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 transition-colors duration-200 hover:scale-110">
												<Edit className="h-4 w-4" />
											</button>
											<button
												onClick={handleDeleteArtwork}
												className="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300 transition-colors duration-200 hover:scale-110">
												<Trash2 className="h-4 w-4" />
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);

	const renderArtists = () => (
		<div className="space-y-6 animate-fade-in-up">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-bold text-gray-900 dark:text-white">{text.artists}</h2>
				{/* <button
					onClick={() => setShowAddArtist(true)}
					className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105">
					<Plus className="h-4 w-4" />
					<span>{text.addArtist}</span>
				</button> */}
			</div>

			<div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
				<div className="overflow-x-auto">
					<table className="w-full">
						<thead className="bg-gray-50 dark:bg-gray-700">
							<tr>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
									{text.name}
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
									{text.email}
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
									{text.artworkCount}
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
									{text.joinDate}
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
									{text.status}
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
									{text.actions}
								</th>
							</tr>
						</thead>
						<tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
							{mockArtists.map((artist) => (
								<tr key={artist.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="flex items-center">
											<img src={artist.avatar} alt={artist.name} className="size-10 min-w-10 rounded-full object-cover mr-3" />
											<div>
												<div className="text-sm font-medium text-gray-900 dark:text-white">{artist.name}</div>
											</div>
										</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
										{artist.name.toLowerCase().replace(" ", ".")}@email.com
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
										{artist.artworks.length}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
										{new Date(artist.joinDate).toLocaleDateString()}
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<span
											className={`px-2 py-1 text-xs rounded-full ${
												artist.isVerified
													? "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200"
													: "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200"
											}`}>
											{artist.isVerified ? text.verified : "Pending"}
										</span>
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
										<div className="flex space-x-2">
											<button
												onClick={() => handleArtistClick(artist.id)}
												className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300 transition-colors duration-200 hover:scale-110">
												<Eye className="h-4 w-4" />
											</button>
											<button
												onClick={handleEditArtist}
												className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 transition-colors duration-200 hover:scale-110">
												<Edit className="h-4 w-4" />
											</button>
											<button
												onClick={handleDeleteArtist}
												className="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300 transition-colors duration-200 hover:scale-110">
												<Trash2 className="h-4 w-4" />
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);

	const renderOrders = () => (
		<div className="space-y-6 animate-fade-in-up">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-bold text-gray-900 dark:text-white">{text.orders}</h2>
			</div>

			<div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
				<div className="overflow-x-auto">
					<table className="w-full">
						<thead className="bg-gray-50 dark:bg-gray-700">
							<tr>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
									{text.orderId}
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
									{text.customer}
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
									{text.total}
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
									{text.orderStatus}
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
									{text.date}
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
									{text.actions}
								</th>
							</tr>
						</thead>
						<tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
							{mockOrders.map((order) => (
								<tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
									<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
										{order.id}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
										{order.customerName}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
										${order.total.toLocaleString()}
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<span
											className={`px-2 py-1 text-xs rounded-full ${
												order.status === "delivered"
													? "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200"
													: order.status === "shipped"
													? "bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200"
													: order.status === "processing"
													? "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200"
													: "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
											}`}>
											{text[order.status as keyof typeof text] || order.status}
										</span>
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
										{new Date(order.date).toLocaleDateString()}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
										<div className="flex space-x-2">
											<button
												onClick={() => handleViewOrder(order)}
												className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300 transition-colors duration-200 hover:scale-110">
												<Eye className="h-4 w-4" />
											</button>
											<button
												onClick={handleEditOrder}
												className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 transition-colors duration-200 hover:scale-110">
												<Edit className="h-4 w-4" />
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);

	return (
		<div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
			<PageTitle titleKey={titles[language]} />
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="flex justify-between items-center mb-8">
					<h1 className="text-3xl font-bold text-gray-900 dark:text-white">{text.dashboard}</h1>
					<button
						onClick={handleLogout}
						className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105">
						{text.logout}
					</button>
				</div>

				{/* Tabs */}
				<div className="mb-8">
					<div className="border-b border-gray-200 dark:border-gray-700 overflow-x-auto overflow-y-hidden">
						<nav className="-mb-px flex space-x-3 min-w-max">
							{tabs.map((tab) => {
								const Icon = tab.icon;
								return (
									<button
										key={tab.id}
										onClick={() => setActiveTab(tab.id)}
										className={`relative flex items-center space-x-1 py-2 px-8 border-b-2 font-medium text-sm whitespace-nowrap transition-all duration-300 ${
											activeTab === tab.id
												? "border-indigo-500 text-indigo-600 dark:text-indigo-400 transform scale-105"
												: "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 hover:scale-102"
										}`}>
										<Icon
											className={`h-4 w-4 transition-transform duration-300 ${
												activeTab === tab.id ? "animate-bounce-gentle" : ""
											}`}
										/>
										<span>{tab.label}</span>
										{activeTab === tab.id && (
											<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg -z-10 animate-pulse" />
										)}
									</button>
								);
							})}
						</nav>
					</div>
				</div>

				{/* Content with transition */}
				<div className="relative">
					{activeTab === "overview" && renderOverview()}
					{activeTab === "artworks" && renderArtworks()}
					{activeTab === "artists" && renderArtists()}
					{activeTab === "orders" && renderOrders()}
				</div>

				{/* Add Artwork Modal */}
				{showAddArtwork && (
					<div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
						<div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col animate-scale-in">
							<div className="p-6 border-b border-gray-200 dark:border-gray-700">
								<div className="flex items-center justify-between">
									<h2 className="text-xl font-bold text-gray-900 dark:text-white">{text.addArtwork}</h2>
									<button
										onClick={() => setShowAddArtwork(false)}
										className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200 hover:scale-110">
										<X className="h-6 w-6" />
									</button>
								</div>
							</div>

							<div className="flex-1 overflow-y-auto p-6">
								<form onSubmit={handleAddArtwork} className="space-y-4">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div>
											<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
												{text.title}
											</label>
											<input
												type="text"
												required
												className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
											/>
										</div>

										<div>
											<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
												{text.artist}
											</label>
											<input
												type="text"
												required
												className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
											/>
										</div>
									</div>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div>
											<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
												{text.price}
											</label>
											<input
												type="number"
												required
												className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
											/>
										</div>

										<div>
											<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
												{text.category}
											</label>
											<CustomSelect
												value=""
												onChange={() => {}}
												options={categoryOptions}
												placeholder="Select category"
											/>
										</div>
									</div>

									<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
										<div>
											<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
												{text.dimensions}
											</label>
											<input
												type="text"
												placeholder="60 x 80 cm"
												className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
											/>
										</div>

										<div>
											<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
												{text.medium}
											</label>
											<input
												type="text"
												placeholder="Oil on Canvas"
												className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
											/>
										</div>

										<div>
											<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
												{text.year}
											</label>
											<input
												type="number"
												min="1900"
												max="2024"
												className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
											/>
										</div>
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											{text.description}
										</label>
										<textarea
											rows={3}
											className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
										/>
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											{text.uploadImages}
										</label>
										<div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-700">
											<Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
											<p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{text.dragDrop}</p>
											<input
												type="file"
												multiple
												accept="image/*"
												onChange={handleImageUpload}
												className="hidden"
												id="image-upload"
											/>
											<label
												htmlFor="image-upload"
												className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm transition-all duration-200 hover:scale-105">
												Choose Files
											</label>
										</div>

										{uploadedImages.length > 0 && (
											<div className="mt-4 grid grid-cols-3 gap-2">
												{uploadedImages.map((image, index) => (
													<div key={index} className="relative group">
														<img
															src={image}
															alt={`Upload ${index + 1}`}
															className="w-full h-20 object-cover rounded-lg transition-transform duration-200 group-hover:scale-105"
														/>
														<button
															type="button"
															onClick={() => removeImage(index)}
															className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600 transition-all duration-200 hover:scale-110">
															×
														</button>
													</div>
												))}
											</div>
										)}
									</div>
								</form>
							</div>

							<div className="p-6 border-t border-gray-200 dark:border-gray-700 rounded-b-2xl">
								<div className="flex space-x-4">
									<button
										onClick={handleAddArtwork}
										className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105">
										{text.save}
									</button>
									<button
										onClick={() => setShowAddArtwork(false)}
										className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-105">
										{text.cancel}
									</button>
								</div>
							</div>
						</div>
					</div>
				)}

				{/* Add Artist Modal */}
				{showAddArtist && (
					<div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
						<div className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full max-h-[90vh] flex flex-col animate-scale-in">
							<div className="p-6 border-b border-gray-200 dark:border-gray-700">
								<div className="flex items-center justify-between">
									<h2 className="text-xl font-bold text-gray-900 dark:text-white">{text.addArtist}</h2>
									<button
										onClick={() => setShowAddArtist(false)}
										className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200 hover:scale-110">
										<X className="h-6 w-6" />
									</button>
								</div>
							</div>

							<div className="flex-1 overflow-y-auto p-6">
								<form onSubmit={handleAddArtist} className="space-y-4">
									<div>
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											{text.name}
										</label>
										<input
											type="text"
											required
											className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
										/>
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											{text.email}
										</label>
										<input
											type="email"
											required
											className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
										/>
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											{text.phone}
										</label>
										<input
											type="tel"
											className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
										/>
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											{text.location}
										</label>
										<input
											type="text"
											className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
										/>
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											{text.portfolio}
										</label>
										<input
											type="url"
											className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
										/>
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											{text.bio}
										</label>
										<textarea
											rows={4}
											className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
										/>
									</div>
								</form>
							</div>

							<div className="p-6 border-t border-gray-200 dark:border-gray-700 rounded-b-2xl">
								<div className="flex space-x-4">
									<button
										onClick={handleAddArtist}
										className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105">
										{text.save}
									</button>
									<button
										onClick={() => setShowAddArtist(false)}
										className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-105">
										{text.cancel}
									</button>
								</div>
							</div>
						</div>
					</div>
				)}

				{/* Order Detail Modal */}
				{showOrderDetail && selectedOrder && (
					<div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
						<div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col animate-scale-in">
							<div className="p-6 border-b border-gray-200 dark:border-gray-700">
								<div className="flex items-center justify-between">
									<h2 className="text-xl font-bold text-gray-900 dark:text-white">
										{text.orderDetails} - {selectedOrder.id}
									</h2>
									<button
										onClick={() => setShowOrderDetail(false)}
										className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200 hover:scale-110">
										<X className="h-6 w-6" />
									</button>
								</div>
							</div>

							<div className="flex-1 overflow-y-auto p-6">
								<div className="space-y-6">
									{/* Customer Info */}
									<div>
										<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{text.customerInfo}</h3>
										<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 space-y-2">
											<div className="flex items-center space-x-2">
												<User className="h-4 w-4 text-gray-400" />
												<span className="text-gray-900 dark:text-white">{selectedOrder.customerName}</span>
											</div>
											<div className="flex items-center space-x-2">
												<Calendar className="h-4 w-4 text-gray-400" />
												<span className="text-gray-600 dark:text-gray-400">
													{new Date(selectedOrder.date).toLocaleDateString()}
												</span>
											</div>
											<div className="flex items-center space-x-2">
												<span
													className={`px-2 py-1 text-xs rounded-full ${
														selectedOrder.status === "delivered"
															? "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200"
															: selectedOrder.status === "shipped"
															? "bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200"
															: selectedOrder.status === "processing"
															? "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200"
															: "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
													}`}>
													{text[selectedOrder.status as keyof typeof text] || selectedOrder.status}
												</span>
											</div>
										</div>
									</div>

									{/* Order Items */}
									<div>
										<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{text.orderItems}</h3>
										<div className="space-y-3">
											{selectedOrder.items.map((item: any, index: number) => (
												<div
													key={index}
													className="flex items-center space-x-4 bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200">
													<img
														src={item.artwork.image}
														alt={item.artwork.title}
														className="w-16 h-16 rounded-lg object-cover"
													/>
													<div className="flex-1">
														<h4 className="font-medium text-gray-900 dark:text-white">{item.artwork.title}</h4>
														<p className="text-sm text-gray-600 dark:text-gray-400">by {item.artwork.artist}</p>
														<p className="text-sm text-gray-600 dark:text-gray-400">
															{text.quantity}: {item.quantity}
														</p>
													</div>
													<div className="text-right">
														<p className="font-medium text-gray-900 dark:text-white">
															${(item.artwork.price * item.quantity).toLocaleString()}
														</p>
													</div>
												</div>
											))}
										</div>
									</div>

									{/* Shipping Address */}
									<div>
										<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{text.shippingAddress}</h3>
										<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
											<div className="flex items-start space-x-2">
												<MapPin className="h-4 w-4 text-gray-400 mt-1" />
												<span className="text-gray-900 dark:text-white">{selectedOrder.shippingAddress}</span>
											</div>
										</div>
									</div>

									{/* Order Summary */}
									<div>
										<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Order Summary</h3>
										<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
											<div className="flex justify-between items-center">
												<span className="text-lg font-semibold text-gray-900 dark:text-white">{text.total}</span>
												<span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
													${selectedOrder.total.toLocaleString()}
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="p-6 border-t border-gray-200 dark:border-gray-700 rounded-b-2xl">
								<button
									onClick={() => setShowOrderDetail(false)}
									className="w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-105">
									Close
								</button>
							</div>
						</div>
					</div>
				)}

				{/* Toast Notification */}
				{showToast && (
					<div className="fixed top-24 right-4 z-50 animate-slide-in-right">
						<div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 max-w-sm animate-bounce-gentle">
							<div className="flex items-center space-x-3">
								<div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center animate-scale-in">
									<CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
								</div>
								<div className="flex-1">
									<p className="text-sm font-medium text-gray-900 dark:text-white">{toastMessage}</p>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default AdminDashboard;
