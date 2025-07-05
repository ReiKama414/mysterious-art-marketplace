import { FC, useEffect, useState } from "react";
import { Filter, Search, Grid, List } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { mockArtworks } from "../data/mockData";
import ArtworkCard from "../components/UI/ArtworkCard";
import CustomSelect from "../components/UI/CustomSelect";
import { Artwork } from "../types";
import PageTitle from "../components/Layout/PageTitle";

const Explore: FC = () => {
	const { t } = useLanguage();
	const [filteredArtworks, setFilteredArtworks] = useState<Artwork[]>(mockArtworks);
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [selectedCategory, setSelectedCategory] = useState<string>("all");
	const [selectedStyle, setSelectedStyle] = useState<string>("all");
	const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
	const [sortBy, setSortBy] = useState<string>("newest");
	const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
	const [showFilters, setShowFilters] = useState<boolean>(false);

	const categories = [
		{ value: "all", label: "All Categories" },
		{ value: "Abstract", label: "Abstract" },
		{ value: "Landscape", label: "Landscape" },
		{ value: "Modern", label: "Modern" },
		{ value: "Seascape", label: "Seascape" },
		{ value: "Nature", label: "Nature" },
	];

	const styles = [
		{ value: "all", label: "All Styles" },
		{ value: "Contemporary", label: "Contemporary" },
		{ value: "Realistic", label: "Realistic" },
		{ value: "Street Art", label: "Street Art" },
		{ value: "Impressionist", label: "Impressionist" },
	];

	const sortOptions = [
		{ value: "newest", label: t("explore.newest") },
		{ value: "oldest", label: t("explore.oldest") },
		{ value: "priceLowHigh", label: t("explore.priceLowHigh") },
		{ value: "priceHighLow", label: t("explore.priceHighLow") },
	];

	useEffect(() => {
		let filtered = mockArtworks.filter((artwork) => {
			const matchesSearch =
				artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				artwork.artist.toLowerCase().includes(searchTerm.toLowerCase());
			const matchesCategory = selectedCategory === "all" || artwork.category === selectedCategory;
			const matchesStyle = selectedStyle === "all" || artwork.style === selectedStyle;
			const matchesPrice = artwork.price >= priceRange[0] && artwork.price <= priceRange[1];

			return matchesSearch && matchesCategory && matchesStyle && matchesPrice;
		});

		// Sort artworks
		filtered.sort((a, b) => {
			switch (sortBy) {
				case "newest":
					return b.year - a.year;
				case "oldest":
					return a.year - b.year;
				case "priceLowHigh":
					return a.price - b.price;
				case "priceHighLow":
					return b.price - a.price;
				default:
					return 0;
			}
		});

		setFilteredArtworks(filtered);
	}, [searchTerm, selectedCategory, selectedStyle, priceRange, sortBy]);

	return (
		<div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
			<PageTitle titleKey="explore.title" />
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t("explore.title")}</h1>
					<p className="text-lg text-gray-600 dark:text-gray-400">
						Discover amazing artworks from talented artists around the world
					</p>
				</div>

				<div className="flex flex-col lg:flex-row gap-8">
					{/* Filters Sidebar */}
					<div className={`lg:w-80 ${showFilters ? "block" : "hidden lg:block"}`}>
						<div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg sticky top-28 border border-gray-200 dark:border-gray-700">
							<div className="flex items-center justify-between mb-6">
								<h2 className="text-lg font-semibold text-gray-900 dark:text-white">{t("explore.filters")}</h2>
								<button
									onClick={() => setShowFilters(false)}
									className="lg:hidden text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl">
									×
								</button>
							</div>

							<div className="space-y-6">
								{/* Search */}
								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
										{t("common.search")}
									</label>
									<div className="relative">
										<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
										<input
											type="text"
											value={searchTerm}
											onChange={(e) => setSearchTerm(e.target.value)}
											placeholder="Search artworks..."
											className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
										/>
									</div>
								</div>

								{/* Category */}
								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
										{t("explore.category")}
									</label>
									<CustomSelect
										value={selectedCategory}
										onChange={setSelectedCategory}
										options={categories}
										placeholder="Select category"
									/>
								</div>

								{/* Style */}
								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
										{t("explore.style")}
									</label>
									<CustomSelect
										value={selectedStyle}
										onChange={setSelectedStyle}
										options={styles}
										placeholder="Select style"
									/>
								</div>

								{/* Price Range */}
								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
										{t("explore.priceRange")}: ${priceRange[0]} - ${priceRange[1]}
									</label>
									<div className="space-y-3">
										<div className="relative">
											<input
												type="range"
												min="0"
												max="5000"
												step="100"
												value={priceRange[0]}
												onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
												className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
											/>
										</div>
										<div className="relative">
											<input
												type="range"
												min="0"
												max="5000"
												step="100"
												value={priceRange[1]}
												onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
												className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Main Content */}
					<div className="flex-1">
						{/* Controls */}
						<div className="flex items-center justify-between mb-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-700">
							<div className="flex items-center space-x-4">
								<button
									onClick={() => setShowFilters(true)}
									className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-105">
									<Filter className="h-4 w-4" />
									<span>Filters</span>
								</button>

								<span className="text-sm text-gray-600 dark:text-gray-400">
									{filteredArtworks.length} artworks found
								</span>
							</div>

							<div className="flex items-center space-x-4">
								{/* Sort */}
								<CustomSelect value={sortBy} onChange={setSortBy} options={sortOptions} className="min-w-[160px]" />

								{/* View Mode */}
								<div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
									<button
										onClick={() => setViewMode("grid")}
										className={`p-2 rounded transition-all duration-200 hover:scale-105 ${
											viewMode === "grid"
												? "bg-white dark:bg-gray-600 shadow-sm"
												: "hover:bg-gray-200 dark:hover:bg-gray-600"
										}`}>
										<Grid className="h-4 w-4 text-gray-600 dark:text-gray-400" />
									</button>
									<button
										onClick={() => setViewMode("list")}
										className={`p-2 rounded transition-all duration-200 hover:scale-105 ${
											viewMode === "list"
												? "bg-white dark:bg-gray-600 shadow-sm"
												: "hover:bg-gray-200 dark:hover:bg-gray-600"
										}`}>
										<List className="h-4 w-4 text-gray-600 dark:text-gray-400" />
									</button>
								</div>
							</div>
						</div>

						{/* Artworks Grid */}
						{filteredArtworks.length === 0 ? (
							<div className="text-center py-12">
								<div className="text-gray-400 mb-4">
									<Search className="h-12 w-12 mx-auto" />
								</div>
								<h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No artworks found</h3>
								<p className="text-gray-600 dark:text-gray-400">Try adjusting your filters or search terms</p>
							</div>
						) : (
							<div
								className={`grid gap-6 ${
									viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"
								}`}>
								{filteredArtworks.map((artwork, index) => (
									<div
										key={artwork.id}
										className="opacity-0 animate-fade-in-up"
										style={{ animationDelay: `${index * 0.1}s` }}>
										<ArtworkCard artwork={artwork} className={viewMode === "list" ? "flex" : ""} />
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Explore;
