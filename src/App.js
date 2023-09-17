import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import SingleProductPage from "./pages/SingleProductPage";
import ServicesPage from "./pages/ServicesPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/services" element={<ServicesPage />} />
        <Route exact path="/product" element={<ProductPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/product/:id" element={<SingleProductPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
