import { FC } from "react";
import { FileText, Scale, AlertTriangle, Users, ShoppingCart, Palette, Globe, Mail } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import PageTitle from "../components/Layout/PageTitle";

const Terms: FC = () => {
	const { language } = useLanguage();

	const content = {
		en: {
			title: "Terms of Service",
			lastUpdated: "Last updated: July 2025",
			sections: {
				introduction: {
					title: "Introduction",
					content:
						'Welcome to Mystic Gallery. These Terms of Service ("Terms") govern your use of our art marketplace platform and services. By accessing or using our platform, you agree to be bound by these Terms.',
				},
				acceptance: {
					title: "Acceptance of Terms",
					content:
						"By creating an account, making a purchase, or using our services in any way, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.",
					items: [
						"You must be at least 18 years old to use our services",
						"You must provide accurate and complete information",
						"You are responsible for maintaining account security",
						"You agree to comply with all applicable laws and regulations",
					],
				},
				platform: {
					title: "Platform Services",
					content:
						"Mystic Gallery provides an online marketplace connecting artists and art collectors. Our services include:",
					items: [
						"Artwork discovery and browsing",
						"Secure payment processing",
						"Artist verification and curation",
						"Customer support and dispute resolution",
						"Shipping and delivery coordination",
						"Community features and recommendations",
					],
				},
				userAccounts: {
					title: "User Accounts",
					content: "To access certain features, you must create an account. You are responsible for:",
					items: [
						"Maintaining the confidentiality of your account credentials",
						"All activities that occur under your account",
						"Notifying us immediately of any unauthorized use",
						"Providing accurate and up-to-date information",
						"Complying with our community guidelines",
					],
				},
				purchases: {
					title: "Purchases and Payments",
					content: "When you make a purchase through our platform:",
					items: [
						"All sales are final unless otherwise specified",
						"Prices are subject to change without notice",
						"Payment must be made in full before shipping",
						"We accept major credit cards and secure payment methods",
						"Additional fees may apply for international shipping",
						"Taxes are calculated based on your location",
					],
				},
				artistTerms: {
					title: "Artist Terms",
					content: "Artists using our platform agree to:",
					items: [
						"Provide accurate descriptions and images of artworks",
						"Ensure all artworks are original and authentic",
						"Respect intellectual property rights",
						"Fulfill orders promptly and professionally",
						"Maintain high quality standards",
						"Comply with our artist verification process",
					],
				},
				intellectualProperty: {
					title: "Intellectual Property",
					content: "All content on our platform is protected by intellectual property laws:",
					items: [
						"Artists retain ownership of their artwork",
						"Mystic Gallery owns the platform and its technology",
						"Users may not reproduce or distribute platform content",
						"Artwork images are used with artist permission",
						"Trademark and copyright infringement is prohibited",
					],
				},
				prohibited: {
					title: "Prohibited Activities",
					content: "The following activities are strictly prohibited:",
					items: [
						"Selling counterfeit or stolen artwork",
						"Fraudulent or deceptive practices",
						"Harassment or abusive behavior",
						"Violation of intellectual property rights",
						"Circumventing platform security measures",
						"Spam or unsolicited communications",
					],
				},
				shipping: {
					title: "Shipping and Returns",
					content: "Our shipping and return policies include:",
					items: [
						"Secure packaging and insured shipping",
						"Tracking information provided for all orders",
						"30-day return policy for damaged items",
						"Buyer responsible for return shipping costs",
						"Refunds processed within 5-10 business days",
						"International shipping available to select countries",
					],
				},
				liability: {
					title: "Limitation of Liability",
					content:
						"To the maximum extent permitted by law, Mystic Gallery shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our platform or services.",
				},
				termination: {
					title: "Termination",
					content:
						"We reserve the right to suspend or terminate your account at any time for violation of these Terms or for any other reason at our sole discretion. Upon termination, your right to use our services will cease immediately.",
				},
				changes: {
					title: "Changes to Terms",
					content:
						"We may update these Terms from time to time. We will notify users of significant changes via email or platform notifications. Continued use of our services after changes constitutes acceptance of the new Terms.",
				},
				contact: {
					title: "Contact Information",
					content:
						"If you have any questions about these Terms of Service, please contact us at legal@mysticgallery.com or through our customer support channels.",
				},
			},
		},
		zh: {
			title: "服務條款",
			lastUpdated: "最後更新：2025年7月",
			sections: {
				introduction: {
					title: "簡介",
					content:
						"歡迎來到神秘畫廊。這些服務條款規範您對我們藝術品交易平台和服務的使用。通過訪問或使用我們的平台，您同意受這些條款的約束。",
				},
				acceptance: {
					title: "條款接受",
					content:
						"通過創建帳戶、進行購買或以任何方式使用我們的服務，您確認已閱讀、理解並同意受這些條款和我們的隱私權政策約束。",
					items: [
						"您必須年滿18歲才能使用我們的服務",
						"您必須提供準確和完整的資訊",
						"您有責任維護帳戶安全",
						"您同意遵守所有適用的法律法規",
					],
				},
				platform: {
					title: "平台服務",
					content: "神秘畫廊提供連接藝術家和藝術收藏家的線上市場。我們的服務包括：",
					items: [
						"藝術品發現和瀏覽",
						"安全付款處理",
						"藝術家驗證和策劃",
						"客戶支援和爭議解決",
						"運輸和配送協調",
						"社群功能和推薦",
					],
				},
				userAccounts: {
					title: "用戶帳戶",
					content: "要訪問某些功能，您必須創建帳戶。您有責任：",
					items: [
						"維護您帳戶憑證的機密性",
						"您帳戶下發生的所有活動",
						"立即通知我們任何未經授權的使用",
						"提供準確和最新的資訊",
						"遵守我們的社群準則",
					],
				},
				purchases: {
					title: "購買和付款",
					content: "當您通過我們的平台進行購買時：",
					items: [
						"除非另有說明，所有銷售均為最終銷售",
						"價格可能會在不通知的情況下更改",
						"必須在運輸前全額付款",
						"我們接受主要信用卡和安全付款方式",
						"國際運輸可能需要額外費用",
						"稅費根據您的位置計算",
					],
				},
				artistTerms: {
					title: "藝術家條款",
					content: "使用我們平台的藝術家同意：",
					items: [
						"提供藝術品的準確描述和圖像",
						"確保所有藝術品都是原創和真實的",
						"尊重智慧財產權",
						"及時和專業地履行訂單",
						"維持高品質標準",
						"遵守我們的藝術家驗證流程",
					],
				},
				intellectualProperty: {
					title: "智慧財產權",
					content: "我們平台上的所有內容都受智慧財產權法保護：",
					items: [
						"藝術家保留其藝術品的所有權",
						"神秘畫廊擁有平台及其技術",
						"用戶不得複製或分發平台內容",
						"藝術品圖像經藝術家許可使用",
						"禁止商標和版權侵權",
					],
				},
				prohibited: {
					title: "禁止活動",
					content: "以下活動嚴格禁止：",
					items: [
						"銷售偽造或被盜的藝術品",
						"欺詐或欺騙性做法",
						"騷擾或辱罵行為",
						"違反智慧財產權",
						"規避平台安全措施",
						"垃圾郵件或未經請求的通訊",
					],
				},
				shipping: {
					title: "運輸和退貨",
					content: "我們的運輸和退貨政策包括：",
					items: [
						"安全包裝和保險運輸",
						"為所有訂單提供追蹤資訊",
						"損壞物品30天退貨政策",
						"買方負責退貨運費",
						"退款在5-10個工作日內處理",
						"國際運輸可用於選定國家",
					],
				},
				liability: {
					title: "責任限制",
					content:
						"在法律允許的最大範圍內，神秘畫廊不對因您使用我們的平台或服務而產生的任何間接、偶然、特殊或後果性損害承擔責任。",
				},
				termination: {
					title: "終止",
					content:
						"我們保留隨時因違反這些條款或出於我們自行決定的任何其他原因暫停或終止您帳戶的權利。終止後，您使用我們服務的權利將立即停止。",
				},
				changes: {
					title: "條款變更",
					content:
						"我們可能會不時更新這些條款。我們將通過電子郵件或平台通知告知用戶重大變更。在變更後繼續使用我們的服務即表示接受新條款。",
				},
				contact: {
					title: "聯繫資訊",
					content: "如果您對這些服務條款有任何疑問，請通過 legal@mysticgallery.com 或我們的客戶支援管道聯繫我們。",
				},
			},
		},
		ja: {
			title: "利用規約",
			lastUpdated: "最終更新：2025年7月",
			sections: {
				introduction: {
					title: "はじめに",
					content:
						"ミスティックギャラリーへようこそ。この利用規約（「規約」）は、当社のアートマーケットプレイスプラットフォームおよびサービスのご利用を規定します。当社のプラットフォームにアクセスまたは使用することにより、お客様はこれらの規約に拘束されることに同意したものとみなされます。",
				},
				acceptance: {
					title: "規約の承諾",
					content:
						"アカウントの作成、購入、またはいかなる方法でも当社のサービスを使用することにより、お客様はこれらの規約および当社のプライバシーポリシーを読み、理解し、これらに拘束されることに同意したことを認めるものとします。",
					items: [
						"当社のサービスを使用するには18歳以上である必要があります",
						"正確で完全な情報を提供する必要があります",
						"アカウントのセキュリティを維持する責任があります",
						"適用されるすべての法律および規制を遵守することに同意します",
					],
				},
				platform: {
					title: "プラットフォームサービス",
					content:
						"ミスティックギャラリーは、アーティストとアートコレクターを結ぶオンラインマーケットプレイスを提供します。当社のサービスには以下が含まれます：",
					items: [
						"アートワークの発見と閲覧",
						"安全な決済処理",
						"アーティストの認証とキュレーション",
						"カスタマーサポートと紛争解決",
						"配送と配達の調整",
						"コミュニティ機能と推奨",
					],
				},
				userAccounts: {
					title: "ユーザーアカウント",
					content:
						"特定の機能にアクセスするには、アカウントを作成する必要があります。お客様は以下について責任を負います：",
					items: [
						"アカウント認証情報の機密性の維持",
						"お客様のアカウントで発生するすべての活動",
						"不正使用の即座の通知",
						"正確で最新の情報の提供",
						"当社のコミュニティガイドラインの遵守",
					],
				},
				purchases: {
					title: "購入と支払い",
					content: "当社のプラットフォームを通じて購入を行う場合：",
					items: [
						"特に明記されていない限り、すべての販売は最終的なものです",
						"価格は予告なく変更される場合があります",
						"配送前に全額の支払いが必要です",
						"主要なクレジットカードと安全な支払い方法を受け付けます",
						"国際配送には追加料金が適用される場合があります",
						"税金はお客様の所在地に基づいて計算されます",
					],
				},
				artistTerms: {
					title: "アーティスト規約",
					content: "当社のプラットフォームを使用するアーティストは以下に同意します：",
					items: [
						"アートワークの正確な説明と画像の提供",
						"すべてのアートワークがオリジナルで本物であることの保証",
						"知的財産権の尊重",
						"迅速かつ専門的な注文の履行",
						"高品質基準の維持",
						"当社のアーティスト認証プロセスの遵守",
					],
				},
				intellectualProperty: {
					title: "知的財産",
					content: "当社のプラットフォーム上のすべてのコンテンツは知的財産法によって保護されています：",
					items: [
						"アーティストは自分のアートワークの所有権を保持します",
						"ミスティックギャラリーはプラットフォームとその技術を所有します",
						"ユーザーはプラットフォームコンテンツを複製または配布してはいけません",
						"アートワーク画像はアーティストの許可を得て使用されます",
						"商標および著作権侵害は禁止されています",
					],
				},
				prohibited: {
					title: "禁止行為",
					content: "以下の行為は厳格に禁止されています：",
					items: [
						"偽造品または盗品のアートワークの販売",
						"詐欺的または欺瞞的な行為",
						"ハラスメントまたは虐待的行為",
						"知的財産権の侵害",
						"プラットフォームセキュリティ対策の回避",
						"スパムまたは迷惑な通信",
					],
				},
				shipping: {
					title: "配送と返品",
					content: "当社の配送および返品ポリシーには以下が含まれます：",
					items: [
						"安全な梱包と保険付き配送",
						"すべての注文に追跡情報を提供",
						"破損品に対する30日間の返品ポリシー",
						"返品送料は購入者負担",
						"返金は5-10営業日以内に処理",
						"選択された国への国際配送が利用可能",
					],
				},
				liability: {
					title: "責任の制限",
					content:
						"法律で許可される最大限の範囲で、ミスティックギャラリーは、お客様の当社プラットフォームまたはサービスの使用から生じる間接的、偶発的、特別、または結果的損害について責任を負いません。",
				},
				termination: {
					title: "終了",
					content:
						"当社は、これらの規約の違反またはその他の理由により、当社の独自の裁量でいつでもお客様のアカウントを停止または終了する権利を留保します。終了時、当社のサービスを使用するお客様の権利は直ちに停止します。",
				},
				changes: {
					title: "規約の変更",
					content:
						"当社は随時これらの規約を更新する場合があります。重要な変更については、メールまたはプラットフォーム通知を通じてユーザーに通知します。変更後の当社サービスの継続使用は、新しい規約の受諾を構成します。",
				},
				contact: {
					title: "連絡先情報",
					content:
						"この利用規約についてご質問がございましたら、legal@mysticgallery.com または当社のカスタマーサポートチャンネルを通じてお問い合わせください。",
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
					<div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
						<Scale className="h-8 w-8 text-white" />
					</div>
					<h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{text.title}</h1>
					<p className="text-gray-600 dark:text-gray-400">{text.lastUpdated}</p>
				</div>

				{/* Content */}
				<div className="space-y-12">
					{/* Introduction */}
					<section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
						<div className="flex items-center space-x-3 mb-4">
							<FileText className="h-6 w-6 text-purple-600 dark:text-purple-400" />
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white">{text.sections.introduction.title}</h2>
						</div>
						<p className="text-gray-600 dark:text-gray-400 leading-relaxed">{text.sections.introduction.content}</p>
					</section>

					{/* Acceptance */}
					<section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
						<div className="flex items-center space-x-3 mb-4">
							<Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white">{text.sections.acceptance.title}</h2>
						</div>
						<p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{text.sections.acceptance.content}</p>
						<ul className="space-y-2">
							{text.sections.acceptance.items.map((item, index) => (
								<li key={index} className="flex items-start space-x-2">
									<div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 flex-shrink-0" />
									<span className="text-gray-600 dark:text-gray-400">{item}</span>
								</li>
							))}
						</ul>
					</section>

					{/* Platform Services */}
					<section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
						<div className="flex items-center space-x-3 mb-4">
							<Globe className="h-6 w-6 text-purple-600 dark:text-purple-400" />
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white">{text.sections.platform.title}</h2>
						</div>
						<p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{text.sections.platform.content}</p>
						<ul className="space-y-2">
							{text.sections.platform.items.map((item, index) => (
								<li key={index} className="flex items-start space-x-2">
									<div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 flex-shrink-0" />
									<span className="text-gray-600 dark:text-gray-400">{item}</span>
								</li>
							))}
						</ul>
					</section>

					{/* User Accounts */}
					<section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
						<div className="flex items-center space-x-3 mb-4">
							<Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white">{text.sections.userAccounts.title}</h2>
						</div>
						<p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
							{text.sections.userAccounts.content}
						</p>
						<ul className="space-y-2">
							{text.sections.userAccounts.items.map((item, index) => (
								<li key={index} className="flex items-start space-x-2">
									<div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 flex-shrink-0" />
									<span className="text-gray-600 dark:text-gray-400">{item}</span>
								</li>
							))}
						</ul>
					</section>

					{/* Purchases */}
					<section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
						<div className="flex items-center space-x-3 mb-4">
							<ShoppingCart className="h-6 w-6 text-purple-600 dark:text-purple-400" />
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white">{text.sections.purchases.title}</h2>
						</div>
						<p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{text.sections.purchases.content}</p>
						<ul className="space-y-2">
							{text.sections.purchases.items.map((item, index) => (
								<li key={index} className="flex items-start space-x-2">
									<div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 flex-shrink-0" />
									<span className="text-gray-600 dark:text-gray-400">{item}</span>
								</li>
							))}
						</ul>
					</section>

					{/* Artist Terms */}
					<section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
						<div className="flex items-center space-x-3 mb-4">
							<Palette className="h-6 w-6 text-purple-600 dark:text-purple-400" />
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white">{text.sections.artistTerms.title}</h2>
						</div>
						<p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{text.sections.artistTerms.content}</p>
						<ul className="space-y-2">
							{text.sections.artistTerms.items.map((item, index) => (
								<li key={index} className="flex items-start space-x-2">
									<div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 flex-shrink-0" />
									<span className="text-gray-600 dark:text-gray-400">{item}</span>
								</li>
							))}
						</ul>
					</section>

					{/* Intellectual Property */}
					<section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
						<div className="flex items-center space-x-3 mb-4">
							<FileText className="h-6 w-6 text-purple-600 dark:text-purple-400" />
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white">
								{text.sections.intellectualProperty.title}
							</h2>
						</div>
						<p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
							{text.sections.intellectualProperty.content}
						</p>
						<ul className="space-y-2">
							{text.sections.intellectualProperty.items.map((item, index) => (
								<li key={index} className="flex items-start space-x-2">
									<div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 flex-shrink-0" />
									<span className="text-gray-600 dark:text-gray-400">{item}</span>
								</li>
							))}
						</ul>
					</section>

					{/* Prohibited Activities */}
					<section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
						<div className="flex items-center space-x-3 mb-4">
							<AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" />
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white">{text.sections.prohibited.title}</h2>
						</div>
						<p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{text.sections.prohibited.content}</p>
						<ul className="space-y-2">
							{text.sections.prohibited.items.map((item, index) => (
								<li key={index} className="flex items-start space-x-2">
									<div className="w-2 h-2 bg-red-600 dark:bg-red-400 rounded-full mt-2 flex-shrink-0" />
									<span className="text-gray-600 dark:text-gray-400">{item}</span>
								</li>
							))}
						</ul>
					</section>

					{/* Shipping */}
					<section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
						<div className="flex items-center space-x-3 mb-4">
							<ShoppingCart className="h-6 w-6 text-purple-600 dark:text-purple-400" />
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white">{text.sections.shipping.title}</h2>
						</div>
						<p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{text.sections.shipping.content}</p>
						<ul className="space-y-2">
							{text.sections.shipping.items.map((item, index) => (
								<li key={index} className="flex items-start space-x-2">
									<div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 flex-shrink-0" />
									<span className="text-gray-600 dark:text-gray-400">{item}</span>
								</li>
							))}
						</ul>
					</section>

					{/* Liability */}
					<section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
						<div className="flex items-center space-x-3 mb-4">
							<Scale className="h-6 w-6 text-purple-600 dark:text-purple-400" />
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white">{text.sections.liability.title}</h2>
						</div>
						<p className="text-gray-600 dark:text-gray-400 leading-relaxed">{text.sections.liability.content}</p>
					</section>

					{/* Termination */}
					<section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
						<div className="flex items-center space-x-3 mb-4">
							<AlertTriangle className="h-6 w-6 text-purple-600 dark:text-purple-400" />
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white">{text.sections.termination.title}</h2>
						</div>
						<p className="text-gray-600 dark:text-gray-400 leading-relaxed">{text.sections.termination.content}</p>
					</section>

					{/* Changes */}
					<section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
						<div className="flex items-center space-x-3 mb-4">
							<FileText className="h-6 w-6 text-purple-600 dark:text-purple-400" />
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white">{text.sections.changes.title}</h2>
						</div>
						<p className="text-gray-600 dark:text-gray-400 leading-relaxed">{text.sections.changes.content}</p>
					</section>

					{/* Contact */}
					<section className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-8 border border-purple-200 dark:border-purple-700">
						<div className="flex items-center space-x-3 mb-4">
							<Mail className="h-6 w-6 text-purple-600 dark:text-purple-400" />
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white">{text.sections.contact.title}</h2>
						</div>
						<p className="text-gray-600 dark:text-gray-400 leading-relaxed">{text.sections.contact.content}</p>
					</section>
				</div>
			</div>
		</div>
	);
};

export default Terms;
