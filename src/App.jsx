import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import CarsPage from "./pages/CarsPage";
import CarDetailPage from "./pages/CarDetailPage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BackToTopButton from "./components/BackToTopButton";

export default function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <div className="content">
        <Routes>
          <Route exact path="/car-rental" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cars" element={<CarsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/cars/:name" element={<CarDetailPage />} />
        </Routes>
      </div>
      <BackToTopButton />
      <Footer />
    </Router>
  );
}
