import React from "react";
import { useTheme } from "../../contexts/ThemeContext";

const BackgroundAnimation: React.FC = () => {
	const { theme } = useTheme();

	return (
		<div className="fixed inset-0 pointer-events-none overflow-hidden">
			{theme === "dark" ? (
				// Dark theme - Starry night with flowing particles
				<>
					{/* Starfield */}
					<div className="absolute inset-0">
						{[...Array(50)].map((_, i) => (
							<div
								key={i}
								className="absolute w-1 h-1 bg-white rounded-full opacity-70 animate-pulse"
								style={{
									left: `${Math.random() * 100}%`,
									top: `${Math.random() * 100}%`,
									animationDelay: `${Math.random() * 2}s`,
									animationDuration: `${2 + Math.random() * 2}s`,
								}}
							/>
						))}
					</div>

					{/* Flowing ink particles */}
					<div className="absolute inset-0">
						{[...Array(8)].map((_, i) => (
							<div
								key={i}
								className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-xl animate-float"
								style={{
									left: `${Math.random() * 80}%`,
									top: `${Math.random() * 80}%`,
									animationDelay: `${i * 0.5}s`,
									animationDuration: `${8 + Math.random() * 4}s`,
								}}
							/>
						))}
					</div>
				</>
			) : (
				// Light theme - Soft paper texture with gentle floating elements
				<>
					{/* Paper texture overlay */}
					<div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-50" />

					{/* Floating soft elements */}
					<div className="absolute inset-0">
						{[...Array(6)].map((_, i) => (
							<div
								key={i}
								className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-indigo-100/30 to-purple-100/30 blur-2xl animate-float-slow"
								style={{
									left: `${Math.random() * 80}%`,
									top: `${Math.random() * 80}%`,
									animationDelay: `${i * 1}s`,
									animationDuration: `${12 + Math.random() * 6}s`,
								}}
							/>
						))}
					</div>

					{/* Light rays */}
					<div className="absolute inset-0">
						{[...Array(3)].map((_, i) => (
							<div
								key={i}
								className="absolute w-1 h-full bg-gradient-to-b from-transparent via-yellow-200/20 to-transparent transform rotate-12 animate-shimmer"
								style={{
									left: `${20 + i * 30}%`,
									animationDelay: `${i * 2}s`,
									animationDuration: "6s",
								}}
							/>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default BackgroundAnimation;
