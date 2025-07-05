import { FC, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
	ArrowLeft,
	Star,
	Calendar,
	MapPin,
	Palette,
	UserPlus,
	UserCheck,
	Share2,
	Award,
	Eye,
	Bookmark,
	BookmarkCheck,
	CheckCircle,
} from "lucide-react";
import { mockArtists, mockArtworks } from "../data/mockData";
import ArtworkCard from "../components/UI/ArtworkCard";
import PageTitle from "../components/Layout/PageTitle";

const ArtistProfile: FC = () => {
	const { id } = useParams<{ id: string }>();
	const [isFollowing, setIsFollowing] = useState<boolean>(false);
	const [isSaved, setIsSaved] = useState<boolean>(false);
	const [followCount, setFollowCount] = useState<number>(1247);

	const artist = mockArtists.find((a) => a.id === id);
	const artistArtworks = artist ? mockArtworks.filter((artwork) => artwork.artist === artist.name) : [];

	if (!artist) {
		return (
			<div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
				<PageTitle customTitle="Artist Not Found" />
				<div className="text-center">
					<h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Artist not found</h1>
					<Link
						to="/artists"
						className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">
						Back to artists
					</Link>
				</div>
			</div>
		);
	}

	const handleFollow = () => {
		setIsFollowing(!isFollowing);
		setFollowCount((prev) => (isFollowing ? prev - 1 : prev + 1));
	};

	const handleSave = () => {
		setIsSaved(!isSaved);
	};

	const handleShare = () => {
		const shareData = {
			image: artist.avatar,
			title: artist.name,
			text: `Explore the amazing artworks by ${artist.name}. Follow them to stay updated!`,
			url: window.location.href,
		};
		navigator.share(shareData);
	};

	return (
		<div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
			<PageTitle titleKey={`${artist.name} Profile`} />
			<div className="max-w-7xl mx-auto">
				{/* Back Button */}
				<Link
					to="/artists"
					className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 group">
					<ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
					<span>Back to artists</span>
				</Link>

				{/* Artist Header */}
				<div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8 mb-8">
					<div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
						{/* Avatar */}
						<div className="relative">
							<img
								src={artist.avatar}
								alt={artist.name}
								className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-xl"
							/>
							{artist.isVerified && (
								<div className="absolute -bottom-2 -right-2 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800 animate-pulse">
									<Award className="h-5 w-5 text-white" />
								</div>
							)}
						</div>

						{/* Info */}
						<div className="flex-1 text-center md:text-left">
							<h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{artist.name}</h1>
							{artist.isVerified && (
								<div className="flex items-center justify-center md:justify-start space-x-1 mb-3">
									<span className="inline-flex items-center space-x-1 text-sm text-indigo-600 dark:text-indigo-400">
										<span>
											<CheckCircle className="h-4 w-4" />
										</span>
										<span> Verified Artist</span>
									</span>
								</div>
							)}

							<div className="flex items-center justify-center md:justify-start space-x-1 mb-4">
								{[...Array(5)].map((_, i) => (
									<Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
								))}
								<span className="text-gray-600 dark:text-gray-400 ml-2">(4.9) • 234 reviews</span>
							</div>

							<p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 max-w-2xl">{artist.bio}</p>

							{/* Stats */}
							<div className="grid grid-cols-3 gap-6 mb-6">
								<div className="text-center">
									<div className="text-2xl font-bold text-gray-900 dark:text-white">{artistArtworks.length}</div>
									<div className="text-sm text-gray-600 dark:text-gray-400">Artworks</div>
								</div>
								<div className="text-center">
									<div className="text-2xl font-bold text-gray-900 dark:text-white">{followCount.toLocaleString()}</div>
									<div className="text-sm text-gray-600 dark:text-gray-400">Followers</div>
								</div>
								<div className="text-center">
									<div className="text-2xl font-bold text-gray-900 dark:text-white">12.5k</div>
									<div className="text-sm text-gray-600 dark:text-gray-400">Views</div>
								</div>
							</div>

							{/* Action Buttons */}
							<div className="flex flex-wrap items-center md:justify-start justify-center gap-3">
								<button
									onClick={handleFollow}
									className={`group flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 justify-center sm:w-auto w-full ${
										isFollowing
											? "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/30"
											: "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
									}`}>
									{isFollowing ? (
										<>
											<UserCheck className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
											<span>Following</span>
										</>
									) : (
										<>
											<UserPlus className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
											<span>Follow</span>
										</>
									)}
								</button>

								<button
									onClick={handleSave}
									className={`group flex items-center gap-3 px-6 py-3 rounded-xl font-medium text-gray-900 dark:text-white transition-all duration-300 hover:scale-105 border justify-center sm:w-auto w-full ${
										isSaved
											? "bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/30 border-transparent"
											: "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
									}`}>
									{isSaved ? (
										<>
											<BookmarkCheck className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
											<span>Saved</span>
										</>
									) : (
										<>
											<Bookmark className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
											<span>Save</span>
										</>
									)}
								</button>

								<button
									onClick={handleShare}
									className="group flex items-center gap-3 px-6 py-3 text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 justify-center sm:w-auto w-full">
									<Share2 className={`h-5 w-5 group-hover:scale-110 transition-transform duration-200`} />
									<span>Share</span>
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Artist Details */}
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
					<div className="lg:col-span-1">
						<div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Artist Info</h3>
							<div className="space-y-3">
								<div className="flex items-center space-x-2 text-sm">
									<Calendar className="h-4 w-4 text-gray-400" />
									<span className="text-gray-600 dark:text-gray-400">
										Joined {new Date(artist.joinDate).getFullYear()}
									</span>
								</div>
								<div className="flex items-center space-x-2 text-sm">
									<MapPin className="h-4 w-4 text-gray-400" />
									<span className="text-gray-600 dark:text-gray-400">New York, USA</span>
								</div>
								<div className="flex items-center space-x-2 text-sm">
									<Palette className="h-4 w-4 text-gray-400" />
									<span className="text-gray-600 dark:text-gray-400">Contemporary Art</span>
								</div>
								<div className="flex items-center space-x-2 text-sm">
									<Eye className="h-4 w-4 text-gray-400" />
									<span className="text-gray-600 dark:text-gray-400">12.5k profile views</span>
								</div>
							</div>
						</div>
					</div>

					<div className="lg:col-span-3">
						<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
							Artworks ({artistArtworks.length})
						</h2>

						{artistArtworks.length > 0 ? (
							<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
								{artistArtworks.map((artwork, index) => (
									<div
										key={artwork.id}
										className="opacity-0 animate-fade-in-up"
										style={{ animationDelay: `${index * 0.1}s` }}>
										<ArtworkCard artwork={artwork} />
									</div>
								))}
							</div>
						) : (
							<div className="text-center py-12">
								<Palette className="h-12 w-12 text-gray-400 mx-auto mb-4" />
								<h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No artworks yet</h3>
								<p className="text-gray-600 dark:text-gray-400">This artist hasn't uploaded any artworks yet.</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArtistProfile;
