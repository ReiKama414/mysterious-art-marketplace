import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { CartProvider } from "./contexts/CartContext";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import ScrollToTop from "./components/Layout/ScrollToTop";

import Home from "./pages/Home";

function App() {
	return (
		<ThemeProvider>
			<LanguageProvider>
				<CartProvider>
					<Router>
						<ScrollToTop />
						<div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
							{/* Header */}
							<Header />

							{/* Main Content */}
							<main>
								<Routes>
									<Route path="/" element={<Home />} />
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
