import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import HowToOrder from './pages/HowToOrder';
import Disclaimer from './pages/Disclaimer';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-black font-sans">
        <nav className="bg-white shadow-md p-4 flex justify-center gap-6 text-blue-800 font-semibold">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/how-to-order">How to Order</Link>
          <Link to="/disclaimer">Disclaimer</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-to-order" element={<HowToOrder />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="bg-gray-100 text-center p-4 text-sm text-gray-600 border-t mt-12">
          <p>© {new Date().getFullYear()} Robayo Labs. All rights reserved.</p>
          <p>For Research Use Only / Solo para uso en investigación</p>
        </footer>
      </div>
    </Router>
  );
}
