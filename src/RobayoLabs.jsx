import React from "react";
import { FaEnvelope, FaWhatsapp, FaCcPaypal, FaBitcoin, FaMoneyBillWave } from "react-icons/fa";

export default function RobayoLabs() {
  return (
    <div className="min-h-screen bg-gray-50 text-black font-sans">
      {/* Hero Banner */}
      <header className="relative bg-gradient-to-r from-blue-100 to-blue-300 p-8 shadow-md">
        <h1 className="text-4xl font-bold text-center text-blue-900 drop-shadow">Robayo Labs</h1>
        <p className="text-center text-md text-blue-800 mt-2">Premium Research Peptides – For Laboratory Use Only</p>
      </header>

      <main className="p-6 space-y-12 max-w-5xl mx-auto">
        {/* Featured Product */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-center">Featured Product</h2>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Chemical_structure_of_Tirzepatide.svg/1280px-Chemical_structure_of_Tirzepatide.svg.png" alt="Tirzepatide Molecule" className="w-32 h-32 object-contain mb-4" />
            <h3 className="text-xl font-bold">Tirzepatide 10mg</h3>
            <p className="text-gray-700 text-center mt-2 max-w-md">For laboratory research use only. Not for human consumption.</p>
            <p className="text-sm mt-1">Refrigerate after reconstitution.</p>
            <a href="#how-to-order" className="mt-4 inline-block text-blue-600 underline">How to Order</a>
          </div>
        </section>

        {/* How to Order */}
        <section id="how-to-order" className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-2">How to Order</h2>
          <p className="text-gray-700">To place an order, contact us directly and specify the product and quantity. We accept the following payment methods:</p>
          <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700">
            <li><FaMoneyBillWave className="inline mr-2 text-green-500" /> Zelle</li>
            <li><FaMoneyBillWave className="inline mr-2 text-green-500" /> CashApp</li>
            <li><FaCcPaypal className="inline mr-2 text-blue-600" /> PayPal</li>
            <li><FaMoneyBillWave className="inline mr-2 text-pink-500" /> Venmo</li>
            <li><FaBitcoin className="inline mr-2 text-yellow-500" /> Cryptocurrency (Bitcoin, Ethereum, USDT, etc.)</li>
          </ul>
          <p className="mt-4 text-gray-600">Once payment is confirmed, we will ship your order with tracking.</p>
        </section>

        {/* Contact */}
        <section className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p className="mb-1"><FaEnvelope className="inline mr-2 text-blue-600" /> <a href="mailto:robayolabs@gmail.com" className="underline">robayolabs@gmail.com</a></p>
          <p><FaWhatsapp className="inline mr-2 text-green-500" /> WhatsApp: <span className="text-gray-700">281-387-5201</span></p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center p-4 border-t text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Robayo Labs. All rights reserved.</p>
        <p>For Research Use Only / Solo para uso en investigación</p>
      </footer>
    </div>
  );
}
