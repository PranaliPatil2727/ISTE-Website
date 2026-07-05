import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Team from "./Pages/Team";
import FAQ from "./Pages/FAQ";
import Contact from "./Pages/Contact";

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