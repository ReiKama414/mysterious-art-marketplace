import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Star, Calendar, Palette, UserPlus, UserCheck } from "lucide-react";
import { mockArtists, mockArtworks } from "../data/mockData";
import { useLanguage } from "../contexts/LanguageContext";
import FileUpload from "../components/UI/FileUpload";

const Artists: FC = () => {
	const { t } = useLanguage();
	const [showApplication, setShowApplication] = useState(false);
	const [followedArtists, setFollowedArtists] = useState<Set<string>>(new Set());
	const [toastMessage, setToastMessage] = useState<string | null>(null);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		portfolio: "",
		bio: "",
		image: null as File | null,
	});
	const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

	const handleFollow = (artistId: string) => {
		setFollowedArtists((prev) => {
			const newSet = new Set(prev);
			if (newSet.has(artistId)) {
				newSet.delete(artistId);
			} else {
				newSet.add(artistId);
			}
			return newSet;
		});
	};

	const handleSubmit = () => {
		const errors: any = {};
		if (!formData.name) errors.name = "Required";
		if (!formData.email) errors.email = "Required";
		if (!formData.portfolio) errors.portfolio = "Required";
		if (!formData.bio) errors.bio = "Required";
		if (!formData.image) errors.image = "Please upload artwork";

		setFormErrors(errors);

		if (Object.keys(errors).length > 0) return;

		resetForm();
		setToastMessage("Demo submission successful!");
		setTimeout(() => setToastMessage(null), 3000);
	};

	const resetForm = () => {
		setFormData({
			name: "",
			email: "",
			portfolio: "",
			bio: "",
			image: null,
		});
		setFormErrors({});
		setShowApplication(false);
	};

	return (
		<div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="text-center mb-12">
					<h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t("nav.artists")}</h1>
					<p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
						Meet our talented community of verified artists
					</p>
					<button
						onClick={() => setShowApplication(true)}
						className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
						{t("home.becomeArtist")}
					</button>
				</div>

				{/* Artists Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{mockArtists.map((artist, index) => {
						const artistArtworks = mockArtworks.filter((artwork) => artwork.artist === artist.name);
						const isFollowed = followedArtists.has(artist.id);

						return (
							<div
								key={artist.id}
								className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 opacity-0 animate-fade-in-up"
								style={{ animationDelay: `${index * 0.1}s` }}>
								{/* Artist Header */}
								<div className="relative p-6 bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
									<div className="flex items-center space-x-4">
										<img
											src={artist.avatar}
											alt={artist.name}
											className="w-16 h-16 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg"
										/>
										<div>
											<h3 className="text-xl font-bold text-gray-900 dark:text-white">{artist.name}</h3>
											{artist.isVerified && (
												<div className="flex items-center space-x-1">
													<span className="text-sm text-indigo-600 dark:text-indigo-400">✓ Verified</span>
												</div>
											)}
											<div className="flex items-center space-x-1 mt-1">
												{[...Array(5)].map((_, i) => (
													<Star key={i} className="h-3 w-3 fill-current text-yellow-400" />
												))}
												<span className="text-sm text-gray-600 dark:text-gray-400 ml-1">(4.9)</span>
											</div>
										</div>
									</div>
								</div>

								{/* Artist Info */}
								<div className="p-6">
									<p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{artist.bio}</p>

									<div className="space-y-2 mb-4">
										<div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
											<Calendar className="h-4 w-4" />
											<span>Joined {new Date(artist.joinDate).getFullYear()}</span>
										</div>
										<div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
											<Palette className="h-4 w-4" />
											<span>{artist.artworks.length} artworks</span>
										</div>
									</div>

									{/* Recent Artworks */}
									{artistArtworks.length > 0 && (
										<div>
											<h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Recent Works</h4>
											<div className="grid grid-cols-3 gap-2">
												{artistArtworks.slice(0, 3).map((artwork) => (
													<div key={artwork.id} className="aspect-square rounded-lg overflow-hidden">
														<img
															src={artwork.image}
															alt={artwork.title}
															className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
														/>
													</div>
												))}
											</div>
										</div>
									)}
								</div>

								{/* Action Buttons */}
								<div className="px-6 pb-6">
									<div className="flex space-x-2">
										<Link
											to={`/artist/${artist.id}`}
											className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 text-center hover:scale-105">
											View Profile
										</Link>
										<button
											onClick={() => handleFollow(artist.id)}
											className={`group flex-1 flex items-center justify-center space-x-1 py-2 px-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
												isFollowed
													? "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/30"
													: "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
											}`}>
											{isFollowed ? (
												<>
													<UserCheck className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
													<span>Following</span>
												</>
											) : (
												<>
													<UserPlus className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
													<span>Follow</span>
												</>
											)}
										</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				{/* Artist Application Modal */}
				{showApplication && (
					<div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
						<div className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full max-h-[90vh] flex flex-col animate-scale-in">
							{/* Modal Header */}
							<div className="p-6 border-b border-gray-200 dark:border-gray-700">
								<h2 className="text-2xl font-bold text-gray-900 dark:text-white">Artist Application</h2>
							</div>

							{/* Modal Content - Scrollable */}
							<div className="flex-1 overflow-y-auto p-6 space-y-4">
								<form className="space-y-4">
									<div>
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
										<input
											type="text"
											value={formData.name}
											onChange={(e) => setFormData({ ...formData, name: e.target.value })}
											className={`w-full px-3 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 outline-none ${
												formErrors.name ? "border-red-500 animate-shake" : "border-gray-300 dark:border-gray-600"
											}`}
											placeholder="Your full name"
										/>
										{formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
										<input
											type="email"
											value={formData.email}
											onChange={(e) => setFormData({ ...formData, email: e.target.value })}
											className={`w-full px-3 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 outline-none ${
												formErrors.name ? "border-red-500 animate-shake" : "border-gray-300 dark:border-gray-600"
											}`}
											placeholder="your@email.com"
										/>
										{formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											Portfolio URL
										</label>
										<input
											type="url"
											value={formData.portfolio}
											onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
											className={`w-full px-3 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 outline-none ${
												formErrors.name ? "border-red-500 animate-shake" : "border-gray-300 dark:border-gray-600"
											}`}
											placeholder="https://your-portfolio.com"
										/>
										{formErrors.portfolio && <p className="text-red-500 text-xs mt-1">{formErrors.portfolio}</p>}
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											Artist Bio
										</label>
										<textarea
											rows={4}
											value={formData.bio}
											onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
											className={`w-full px-3 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 outline-none ${
												formErrors.name ? "border-red-500 animate-shake" : "border-gray-300 dark:border-gray-600"
											}`}
											placeholder="Tell us about your artistic journey..."
										/>
										{formErrors.bio && <p className="text-red-500 text-xs mt-1">{formErrors.bio}</p>}
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											Upload Sample Artwork
										</label>
										<FileUpload
											value={formData.image}
											onFileChange={(file) => setFormData((prev) => ({ ...prev, image: file }))}
											error={formErrors.image}
										/>
									</div>
								</form>
							</div>

							{/* Modal Footer - Fixed at bottom */}
							<div className="p-6 border-t border-gray-200 dark:border-gray-700 rounded-b-2xl">
								<div className="flex space-x-4">
									<button
										onClick={handleSubmit}
										className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105">
										Submit Application
									</button>
									<button
										onClick={resetForm}
										className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
										Cancel
									</button>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
			{toastMessage && (
				<div className="fixed bottom-6 left-4 right-4 text-center bg-black/90 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in-up z-[100]">
					{toastMessage}
				</div>
			)}
		</div>
	);
};

export default Artists;
