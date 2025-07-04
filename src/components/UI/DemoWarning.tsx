import { FC, useEffect, useState } from "react";
import { AlertTriangle } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

const DemoWarning: FC = () => {
	const [isVisible, setIsVisible] = useState(true);
	const { language } = useLanguage();

	useEffect(() => {
		const hasSeenWarning = localStorage.getItem("hasSeenDemoWarning");
		if (hasSeenWarning) {
			setIsVisible(false);
		}
	}, []);

	const handleClose = () => {
		setIsVisible(false);
		localStorage.setItem("hasSeenDemoWarning", "true");
	};

	if (!isVisible) return null;

	const content = {
		en: {
			title: "Demo Website",
			subtitle: "For demonstration only",
			description1:
				"🎨 This is a simulated art trading website for showcasing frontend technology and user experience design only.",
			description2: "⚠️ All functions are fake: purchases, payments, registrations, etc. will not be executed.",
			description3: "🐱 Please feel free to experience various interactive effects and animations!",
			button: "Got it, start exploring",
		},
		zh: {
			title: "Demo Website",
			subtitle: "純粹展示用途",
			description1: "🎨 這是一個模擬藝術品交易網站，僅供展示前端技術和用戶體驗設計。",
			description2: "⚠️ 所有功能都是假的：購買、付款、註冊等都不會真實執行。",
			description3: "🐱 請盡情體驗各種互動效果和動畫！",
			button: "我知道了，開始體驗",
		},
		ja: {
			title: "Demo Website",
			subtitle: "デモンストレーション専用",
			description1:
				"🎨 これはフロントエンド技術とユーザーエクスペリエンスデザインを展示するためのシミュレートされたアート取引ウェブサイトです。",
			description2: "⚠️ すべての機能は偽物です：購入、支払い、登録などは実行されません。",
			description3: "🐱 さまざまなインタラクティブ効果とアニメーションをお楽しみください！",
			button: "分かりました、探索を開始",
		},
	};

	const text = content[language];

	return (
		<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in">
			<div className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full shadow-2xl animate-scale-in">
				{/* Header */}
				<div className="p-6 border-b border-gray-200 dark:border-gray-700">
					<div className="flex items-center space-x-3">
						<div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center">
							<AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
						</div>
						<div>
							<h2 className="text-xl font-bold text-gray-900 dark:text-white">{text.title}</h2>
							<p className="text-sm text-gray-600 dark:text-gray-400">{text.subtitle}</p>
						</div>
					</div>
				</div>

				{/* Content */}
				<div className="p-6">
					<div className="space-y-4 text-gray-600 dark:text-gray-400">
						<p className="leading-relaxed">{text.description1}</p>
						<p className="leading-relaxed">
							<span className="text-red-600 dark:text-red-400 font-semibold">{text.description2}</span>
						</p>
						<p className="leading-relaxed">{text.description3}</p>
					</div>
				</div>

				{/* Footer */}
				<div className="p-6 border-t border-gray-200 dark:border-gray-700 rounded-b-2xl">
					<button
						onClick={handleClose}
						className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
						{text.button}
					</button>
				</div>
			</div>
		</div>
	);
};

export default DemoWarning;
