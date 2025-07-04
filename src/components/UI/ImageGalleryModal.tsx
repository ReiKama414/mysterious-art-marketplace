import { FC, useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageGalleryModalProps {
	images: string[];
	initialIndex: number;
	onClose: () => void;
}

const ImageGalleryModal: FC<ImageGalleryModalProps> = ({ images, initialIndex, onClose }) => {
	const [currentIndex, setCurrentIndex] = useState(initialIndex);
	const [scale, setScale] = useState(1);
	const imgRef = useRef<HTMLImageElement>(null);

	// Prevent background scroll
	useEffect(() => {
		const originalOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = originalOverflow;
		};
	}, []);

	// Handle zoom with wheel
	useEffect(() => {
		const img = imgRef.current;
		if (!img) return;

		const handleWheel = (e: WheelEvent) => {
			e.preventDefault();
			const delta = -e.deltaY * 0.001;
			const newScale = Math.max(1, Math.min(scale + delta, 3));
			setScale(newScale);
		};

		img.addEventListener("wheel", handleWheel, { passive: false });
		return () => img.removeEventListener("wheel", handleWheel);
	}, [scale]);

	const resetScale = () => setScale(1);

	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			resetScale();
			onClose();
		}
	};

	const handlePrev = () => {
		resetScale();
		setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
	};

	const handleNext = () => {
		resetScale();
		setCurrentIndex((prev) => (prev + 1) % images.length);
	};

	const handleDotClick = (index: number) => {
		resetScale();
		setCurrentIndex(index);
	};

	const toggleScale = () => {
		setScale((prev) => (prev === 1 ? 2 : 1));
	};

	return (
		<div
			onClick={handleOverlayClick}
			className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
			<div className="relative max-w-5xl w-full rounded-2xl overflow-hidden select-none">
				{/* Close */}
				<button
					onClick={() => {
						resetScale();
						onClose();
					}}
					className="absolute top-4 right-4 z-10 text-white hover:text-gray-200 text-2xl transition-transform hover:scale-110">
					<X />
				</button>

				{/* Prev / Next */}
				{images.length > 1 && (
					<>
						<button
							onClick={handlePrev}
							className="absolute z-20 left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-transform hover:scale-110">
							<ChevronLeft className="h-6 w-6" />
						</button>
						<button
							onClick={handleNext}
							className="absolute z-20 right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-transform hover:scale-110">
							<ChevronRight className="h-6 w-6" />
						</button>
					</>
				)}

				{/* Image */}
				<div className="overflow-hidden flex justify-center items-center">
					<img
						ref={imgRef}
						src={images[currentIndex]}
						alt={`Artwork ${currentIndex + 1}`}
						onClick={toggleScale}
						style={{
							width: "600px",
							height: "600px",
							objectFit: "contain",
							transform: `scale(${scale})`,
							transition: "transform 0.3s ease",
							cursor: scale > 1 ? "zoom-out" : "zoom-in",
						}}
						className="mx-auto"
					/>
				</div>

				{/* Indicators */}
				{images.length > 1 && (
					<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 bg-black/50 p-2 rounded-lg z-10">
						{images.map((_, idx) => (
							<div
								key={idx}
								onClick={() => handleDotClick(idx)}
								className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-200 ${
									idx === currentIndex ? "bg-white" : "bg-gray-500 hover:bg-gray-300"
								}`}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default ImageGalleryModal;
