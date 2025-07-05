import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Contexts
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { CartProvider } from "./contexts/CartContext";

// Components
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import ScrollToTop from "./components/Layout/ScrollToTop";
import DemoWarning from "./components/UI/DemoWarning";

// Page
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Explore from "./pages/Explore";
import About from "./pages/About";
import Cart from "./pages/Cart";
import ArtworkDetail from "./pages/ArtworkDetail";
import ArtistProfile from "./pages/ArtistProfile";
import Artists from "./pages/Artists";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function App() {
	return (
		<ThemeProvider>
			<LanguageProvider>
				<CartProvider>
					<Router>
						<ScrollToTop />
						<DemoWarning />
						<div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
							{/* Header */}
							<Header />

							{/* Main Content */}
							<main>
								<Routes>
									{/* Public Routes */}
									<Route path="/" element={<Home />} />
									<Route path="/explore" element={<Explore />} />
									<Route path="/cart" element={<Cart />} />
									<Route path="/artwork/:id" element={<ArtworkDetail />} />
									<Route path="/artists" element={<Artists />} />
									<Route path="/artist/:id" element={<ArtistProfile />} />
									<Route path="/about" element={<About />} />

									{/* Admin Routes */}
									<Route path="/admin" element={<AdminLogin />} />
									<Route path="/admin/dashboard" element={<AdminDashboard />} />

									{/* Additional Pages */}
									<Route path="/privacy" element={<Privacy />} />
									<Route path="/terms" element={<Terms />} />

									{/* Catch-all for 404 Not Found */}
									<Route path="*" element={<NotFound />} />
								</Routes>
							</main>

							{/* Footer */}
							<Footer />
						</div>
					</Router>
				</CartProvider>
			</LanguageProvider>
		</ThemeProvider>
	);
}

export default App;
