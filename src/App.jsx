import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
    
      <Navbar />

      <ScrollToTop />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<Team />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

      <Footer />

    </BrowserRouter>
  );
}