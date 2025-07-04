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
									<Route path="/" element={<Home />} />
									<Route path="/explore" element={<Explore />} />
									<Route path="/about" element={<About />} />
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
