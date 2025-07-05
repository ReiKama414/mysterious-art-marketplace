import { FC } from "react";
import { Shield, Eye, Lock, Database, Users, Globe, FileText, AlertCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import PageTitle from "../components/Layout/PageTitle";

const Privacy: FC = () => {
	const { language } = useLanguage();

	const content = {
		en: {
			title: "Privacy Policy",
			lastUpdated: "Last updated: July 2025",
			sections: {
				introduction: {
					title: "Introduction",
					content:
						"At Mystic Gallery, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our art marketplace platform.",
				},
				dataCollection: {
					title: "Information We Collect",
					content:
						"We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us. This may include your name, email address, shipping address, payment information, and preferences.",
					items: [
						"Personal identification information (name, email, phone number)",
						"Billing and shipping addresses",
						"Payment information (processed securely through third-party providers)",
						"Artwork preferences and browsing history",
						"Communication records and customer service interactions",
					],
				},
				dataUsage: {
					title: "How We Use Your Information",
					content:
						"We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.",
					items: [
						"Process and fulfill your orders",
						"Provide customer support and respond to inquiries",
						"Send important updates about your account or orders",
						"Personalize your experience and recommend artworks",
						"Improve our platform and develop new features",
						"Comply with legal obligations and prevent fraud",
					],
				},
				dataSharing: {
					title: "Information Sharing",
					content:
						"We do not sell, trade, or rent your personal information to third parties. We may share your information only in specific circumstances:",
					items: [
						"With artists when you purchase their artwork (shipping information only)",
						"With payment processors to complete transactions",
						"With shipping companies to deliver your orders",
						"When required by law or to protect our rights",
						"With your explicit consent",
					],
				},
				dataSecurity: {
					title: "Data Security",
					content:
						"We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
					items: [
						"SSL encryption for all data transmission",
						"Secure payment processing through certified providers",
						"Regular security audits and updates",
						"Limited access to personal data on a need-to-know basis",
						"Secure data storage with backup and recovery procedures",
					],
				},
				cookies: {
					title: "Cookies and Tracking",
					content:
						"We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content.",
					items: [
						"Essential cookies for site functionality",
						"Analytics cookies to understand user behavior",
						"Preference cookies to remember your settings",
						"Marketing cookies for personalized recommendations",
					],
				},
				rights: {
					title: "Your Rights",
					content: "You have certain rights regarding your personal information, including:",
					items: [
						"Access to your personal data",
						"Correction of inaccurate information",
						"Deletion of your data (subject to legal requirements)",
						"Portability of your data",
						"Objection to processing for marketing purposes",
						"Withdrawal of consent at any time",
					],
				},
				contact: {
					title: "Contact Us",
					content:
						"If you have any questions about this Privacy Policy or our data practices, please contact us at privacy@mysticgallery.com or through our customer support channels.",
				},
			},
		},
		zh: {
			title: "隱私權政策",
			lastUpdated: "最後更新：2025年7月",
			sections: {
				introduction: {
					title: "簡介",
					content:
						"在神秘畫廊，我們致力於保護您的隱私並確保您個人資訊的安全。本隱私權政策說明我們在您使用我們的藝術品交易平台時如何收集、使用和保護您的資料。",
				},
				dataCollection: {
					title: "我們收集的資訊",
					content:
						"我們收集您直接提供給我們的資訊，例如當您創建帳戶、進行購買或聯繫我們時。這可能包括您的姓名、電子郵件地址、送貨地址、付款資訊和偏好設定。",
					items: [
						"個人識別資訊（姓名、電子郵件、電話號碼）",
						"帳單和送貨地址",
						"付款資訊（通過第三方提供商安全處理）",
						"藝術品偏好和瀏覽歷史",
						"通訊記錄和客戶服務互動",
					],
				},
				dataUsage: {
					title: "我們如何使用您的資訊",
					content: "我們使用收集的資訊來提供、維護和改進我們的服務，處理交易，並與您溝通。",
					items: [
						"處理和履行您的訂單",
						"提供客戶支援並回應詢問",
						"發送有關您帳戶或訂單的重要更新",
						"個性化您的體驗並推薦藝術品",
						"改進我們的平台並開發新功能",
						"遵守法律義務並防止欺詐",
					],
				},
				dataSharing: {
					title: "資訊共享",
					content: "我們不會向第三方出售、交易或出租您的個人資訊。我們只會在特定情況下共享您的資訊：",
					items: [
						"當您購買藝術品時與藝術家分享（僅限送貨資訊）",
						"與付款處理商完成交易",
						"與運輸公司配送您的訂單",
						"法律要求或保護我們的權利時",
						"經您明確同意",
					],
				},
				dataSecurity: {
					title: "資料安全",
					content: "我們實施適當的技術和組織措施，保護您的個人資訊免受未經授權的存取、更改、披露或破壞。",
					items: [
						"所有資料傳輸的SSL加密",
						"通過認證提供商進行安全付款處理",
						"定期安全審計和更新",
						"基於需要知道的原則限制對個人資料的存取",
						"具有備份和恢復程序的安全資料存儲",
					],
				},
				cookies: {
					title: "Cookie 和追蹤",
					content: "我們使用 Cookie 和類似技術來增強您的瀏覽體驗、分析網站流量並個性化內容。",
					items: [
						"網站功能必需的 Cookie",
						"用於了解用戶行為的分析 Cookie",
						"記住您設定的偏好 Cookie",
						"個性化推薦的行銷 Cookie",
					],
				},
				rights: {
					title: "您的權利",
					content: "您對您的個人資訊擁有某些權利，包括：",
					items: [
						"存取您的個人資料",
						"更正不準確的資訊",
						"刪除您的資料（受法律要求限制）",
						"資料可攜性",
						"反對行銷目的的處理",
						"隨時撤回同意",
					],
				},
				contact: {
					title: "聯繫我們",
					content:
						"如果您對本隱私權政策或我們的資料處理實務有任何疑問，請通過privacy@mysticgallery.com或我們的客戶支援管道聯繫我們。",
				},
			},
		},
		ja: {
			title: "プライバシーポリシー",
			lastUpdated: "最終更新：2025年7月",
			sections: {
				introduction: {
					title: "はじめに",
					content:
						"ミスティックギャラリーでは、お客様のプライバシーを保護し、個人情報のセキュリティを確保することをお約束いたします。このプライバシーポリシーでは、お客様が当社のアートマーケットプレイスプラットフォームをご利用いただく際に、当社がどのようにデータを収集、使用、保護するかについて説明いたします。",
				},
				dataCollection: {
					title: "収集する情報",
					content:
						"アカウント作成、購入、お問い合わせの際など、お客様が直接当社に提供する情報を収集いたします。これには、お名前、メールアドレス、配送先住所、支払い情報、設定などが含まれる場合があります。",
					items: [
						"個人識別情報（氏名、メール、電話番号）",
						"請求先および配送先住所",
						"支払い情報（第三者プロバイダーを通じて安全に処理）",
						"アートワークの好みと閲覧履歴",
						"コミュニケーション記録とカスタマーサービスのやり取り",
					],
				},
				dataUsage: {
					title: "情報の使用方法",
					content:
						"収集した情報は、サービスの提供、維持、改善、取引の処理、お客様とのコミュニケーションのために使用いたします。",
					items: [
						"ご注文の処理と履行",
						"カスタマーサポートの提供とお問い合わせへの対応",
						"アカウントやご注文に関する重要な更新の送信",
						"エクスペリエンスのパーソナライズとアートワークの推奨",
						"プラットフォームの改善と新機能の開発",
						"法的義務の遵守と詐欺の防止",
					],
				},
				dataSharing: {
					title: "情報の共有",
					content:
						"お客様の個人情報を第三者に販売、取引、賃貸することはありません。特定の状況でのみ情報を共有する場合があります：",
					items: [
						"アートワーク購入時のアーティストとの共有（配送情報のみ）",
						"取引完了のための決済処理業者との共有",
						"ご注文配送のための配送会社との共有",
						"法律で要求される場合または当社の権利を保護する場合",
						"お客様の明示的な同意がある場合",
					],
				},
				dataSecurity: {
					title: "データセキュリティ",
					content:
						"お客様の個人情報を不正アクセス、改変、開示、破壊から保護するため、適切な技術的および組織的措置を実施しています。",
					items: [
						"すべてのデータ送信のSSL暗号化",
						"認定プロバイダーによる安全な決済処理",
						"定期的なセキュリティ監査と更新",
						"必要最小限の原則に基づく個人データへのアクセス制限",
						"バックアップと復旧手順を備えた安全なデータストレージ",
					],
				},
				cookies: {
					title: "Cookie と追跡",
					content:
						"ブラウジング体験の向上、サイトトラフィックの分析、コンテンツのパーソナライズのために、Cookie と類似の技術を使用しています。",
					items: [
						"サイト機能に必要な Cookie",
						"ユーザー行動を理解するための分析 Cookie",
						"設定を記憶する設定 Cookie",
						"パーソナライズされた推奨のためのマーケティング Cookie",
					],
				},
				rights: {
					title: "お客様の権利",
					content: "お客様の個人情報に関して、以下の権利をお持ちです：",
					items: [
						"個人データへのアクセス",
						"不正確な情報の訂正",
						"データの削除（法的要件に従う）",
						"データの可搬性",
						"マーケティング目的の処理への異議申し立て",
						"いつでも同意の撤回",
					],
				},
				contact: {
					title: "お問い合わせ",
					content:
						"このプライバシーポリシーまたは当社のデータ取り扱いについてご質問がございましたら、privacy@mysticgallery.comまたはカスタマーサポートチャンネルを通じてお問い合わせください。",
				},
			},
		},
	};

	const text = content[language];

	return (
		<div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
			<PageTitle customTitle={text.title} />
			<div className="max-w-4xl mx-auto">
				{/* Header */}
				<div className="text-center mb-12">
					<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
						<Shield className="h-8 w-8 text-white" />
					</div>
					<h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{text.title}</h1>
					<p className="text-gray-600 dark:text-gray-400">{text.lastUpdated}</p>
				</div>

				{/* Content */}
				<div className="space-y-12">
					{/* Introduction */}
					<section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
						<div className="flex items-center space-x-3 mb-4">
							<Eye className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white">{text.sections.introduction.title}</h2>
						</div>
						<p className="text-gray-600 dark:text-gray-400 leading-relaxed">{text.sections.introduction.content}</p>
					</section>

					{/* Data Collection */}
					<section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
						<div className="flex items-center space-x-3 mb-4">
							<Database className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white">{text.sections.dataCollection.title}</h2>
						</div>
						<p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
							{text.sections.dataCollection.content}
						</p>
						<ul className="space-y-2">
							{text.sections.dataCollection.items.map((item, index) => (
								<li key={index} className="flex items-start space-x-2">
									<div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
									<span className="text-gray-600 dark:text-gray-400">{item}</span>
								</li>
							))}
						</ul>
					</section>

					{/* Data Usage */}
					<section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
						<div className="flex items-center space-x-3 mb-4">
							<Users className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white">{text.sections.dataUsage.title}</h2>
						</div>
						<p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{text.sections.dataUsage.content}</p>
						<ul className="space-y-2">
							{text.sections.dataUsage.items.map((item, index) => (
								<li key={index} className="flex items-start space-x-2">
									<div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
									<span className="text-gray-600 dark:text-gray-400">{item}</span>
								</li>
							))}
						</ul>
					</section>

					{/* Data Sharing */}
					<section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
						<div className="flex items-center space-x-3 mb-4">
							<Globe className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white">{text.sections.dataSharing.title}</h2>
						</div>
						<p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{text.sections.dataSharing.content}</p>
						<ul className="space-y-2">
							{text.sections.dataSharing.items.map((item, index) => (
								<li key={index} className="flex items-start space-x-2">
									<div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
									<span className="text-gray-600 dark:text-gray-400">{item}</span>
								</li>
							))}
						</ul>
					</section>

					{/* Data Security */}
					<section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
						<div className="flex items-center space-x-3 mb-4">
							<Lock className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white">{text.sections.dataSecurity.title}</h2>
						</div>
						<p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
							{text.sections.dataSecurity.content}
						</p>
						<ul className="space-y-2">
							{text.sections.dataSecurity.items.map((item, index) => (
								<li key={index} className="flex items-start space-x-2">
									<div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
									<span className="text-gray-600 dark:text-gray-400">{item}</span>
								</li>
							))}
						</ul>
					</section>

					{/* Cookies */}
					<section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
						<div className="flex items-center space-x-3 mb-4">
							<AlertCircle className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white">{text.sections.cookies.title}</h2>
						</div>
						<p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{text.sections.cookies.content}</p>
						<ul className="space-y-2">
							{text.sections.cookies.items.map((item, index) => (
								<li key={index} className="flex items-start space-x-2">
									<div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
									<span className="text-gray-600 dark:text-gray-400">{item}</span>
								</li>
							))}
						</ul>
					</section>

					{/* Rights */}
					<section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
						<div className="flex items-center space-x-3 mb-4">
							<FileText className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white">{text.sections.rights.title}</h2>
						</div>
						<p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{text.sections.rights.content}</p>
						<ul className="space-y-2">
							{text.sections.rights.items.map((item, index) => (
								<li key={index} className="flex items-start space-x-2">
									<div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
									<span className="text-gray-600 dark:text-gray-400">{item}</span>
								</li>
							))}
						</ul>
					</section>

					{/* Contact */}
					<section className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-indigo-200 dark:border-indigo-700">
						<div className="flex items-center space-x-3 mb-4">
							<Shield className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white">{text.sections.contact.title}</h2>
						</div>
						<p className="text-gray-600 dark:text-gray-400 leading-relaxed">{text.sections.contact.content}</p>
					</section>
				</div>
			</div>
		</div>
	);
};

export default Privacy;
