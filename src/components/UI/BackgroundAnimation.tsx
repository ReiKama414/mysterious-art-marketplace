import React, { FC, useEffect, useRef } from "react";
import { useTheme } from "../../contexts/ThemeContext";

interface Star {
	x: number;
	y: number;
	vx: number;
	vy: number;
	size: number;
	baseOpacity: number;
	opacity: number;
	opacityDir: number;
}

const STAR_COUNT = 45;

const BackgroundAnimation: FC = () => {
	const { theme } = useTheme();
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const starsRef = useRef<Star[]>([]);
	const halosRef = useRef<{ x: number; y: number; radius: number; color: string }[]>([]);
	const mouseRef = useRef({ x: -9999, y: -9999 });
	const animationFrameId = useRef<number>();

	useEffect(() => {
		if (theme !== "dark") return;

		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		// Initialize canvas size
		const resize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
		resize();
		window.addEventListener("resize", resize);

		// Initialize stars
		starsRef.current = Array.from({ length: STAR_COUNT }).map(() => ({
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			vx: (Math.random() - 0.5) * 0.1, // Floating speed -0.05 ~ 0.05
			vy: (Math.random() - 0.5) * 0.1,
			size: Math.random() * 2 + 1.5, // Star size 1.5 ~ 3.5 px
			baseOpacity: Math.random() * 0.3 + 0.2, // Base opacity 0.2 ~ 0.5
			opacity: 0,
			opacityDir: Math.random() > 0.5 ? 1 : -1,
		}));

		// Initialize background halos
		halosRef.current = Array.from({ length: 8 }).map(() => ({
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			radius: 100 + Math.random() * 100, // 100 ~ 200
			color: "rgba(67, 56, 202, 0.1)",
		}));

		// Update mouse position
		const onMouseMove = (e: MouseEvent) => {
			mouseRef.current = { x: e.clientX, y: e.clientY };
		};
		window.addEventListener("mousemove", onMouseMove);

		const clearCanvas = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
		};

		const drawStar = (star: Star) => {
			ctx.save();

			// Apply shadow for glowing effect
			ctx.shadowBlur = 20;
			ctx.shadowColor = `rgba(255, 255, 255, ${star.opacity * 0.8})`;

			// Create radial gradient for twinkling effect
			const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 4);
			gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
			gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

			ctx.fillStyle = gradient;
			ctx.beginPath();
			ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
			ctx.fill();

			ctx.restore();
		};

		// Animation loop
		const animate = () => {
			clearCanvas();

			starsRef.current.forEach((star) => {
				// Update star position
				star.x += star.vx;
				star.y += star.vy;

				// Check boundaries and wrap around
				if (star.x < 0) star.x = canvas.width;
				else if (star.x > canvas.width) star.x = 0;
				if (star.y < 0) star.y = canvas.height;
				else if (star.y > canvas.height) star.y = 0;

				// Update opacity for twinkling effect
				star.opacity += 0.002 * star.opacityDir;
				if (star.opacity > star.baseOpacity) {
					star.opacity = star.baseOpacity;
					star.opacityDir = -1;
				} else if (star.opacity < star.baseOpacity * 0.6) {
					star.opacity = star.baseOpacity * 0.6;
					star.opacityDir = 1;
				}

				// Mouse interaction
				const dx = star.x - mouseRef.current.x;
				const dy = star.y - mouseRef.current.y;
				const dist = Math.sqrt(dx * dx + dy * dy);
				if (dist < 120) {
					const force = (120 - dist) / 120; // Power 0 ~ 1
					const angle = Math.atan2(dy, dx);
					const accel = force * 0.15; // Acceleration factor

					star.vx += Math.cos(angle) * accel;
					star.vy += Math.sin(angle) * accel;

					// Limit speed to prevent excessive acceleration
					const maxSpeed = 0.3;
					star.vx = Math.max(-maxSpeed, Math.min(maxSpeed, star.vx));
					star.vy = Math.max(-maxSpeed, Math.min(maxSpeed, star.vy));
				} else {
					// Apply friction to slow down stars
					star.vx *= 0.98;
					star.vy *= 0.98;
				}

				drawStar(star);
			});

			// Draw static background halos
			halosRef.current.forEach((halo) => {
				const gradient = ctx.createRadialGradient(halo.x, halo.y, 0, halo.x, halo.y, halo.radius);
				gradient.addColorStop(0, halo.color);
				gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

				ctx.fillStyle = gradient;
				ctx.beginPath();
				ctx.arc(halo.x, halo.y, halo.radius, 0, Math.PI * 2);
				ctx.fill();
			});

			animationFrameId.current = requestAnimationFrame(animate);
		};

		animate();

		return () => {
			window.removeEventListener("mousemove", onMouseMove);
			if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
		};
	}, [theme]);

	return (
		<>
			{theme === "dark" ? (
				// Dark theme - Starry night with flowing particles
				<canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
			) : (
				// Light theme - Soft paper texture with gentle floating elements
				<div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
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
				</div>
			)}
		</>
	);
};

export default BackgroundAnimation;
