import React from "react";

export default function RobayoLabs() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <header className="p-6 border-b shadow-sm">
        <h1 className="text-3xl font-bold">Robayo Labs</h1>
        <p className="text-sm text-gray-600">For Research Use Only / Solo para uso en investigación</p>
      </header>

      <main className="p-6 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Featured Product</h2>
          <div className="border rounded-xl p-4 shadow-md max-w-md">
            <h3 className="text-xl font-bold">Tirzepatide 10mg</h3>
            <p className="text-sm text-gray-700 mt-2">For laboratory research use only. Not for human consumption.</p>
            <p className="text-sm mt-1">Refrigerate after reconstitution.</p>
            <a href="#how-to-order" className="text-blue-600 underline mt-4 inline-block">How to Order</a>
          </div>
        </section>

        <section id="how-to-order">
          <h2 className="text-2xl font-semibold mb-2">How to Order</h2>
          <p className="text-gray-700">To place an order, contact us directly and specify the product and quantity. We accept the following payment methods:</p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Zelle</li>
            <li>CashApp</li>
            <li>PayPal</li>
            <li>Venmo</li>
            <li>Cryptocurrency (Bitcoin, Ethereum, USDT, etc.)</li>
          </ul>
          <p className="mt-4">Once payment is confirmed, we will ship your order with tracking.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p>Email: <a href="mailto:robayolabs@gmail.com" className="text-blue-600 underline">robayolabs@gmail.com</a></p>
          <p>WhatsApp: <span className="text-gray-700">281-387-5201</span></p>
        </section>
      </main>

      <footer className="p-4 border-t text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Robayo Labs. All rights reserved.
      </footer>
    </div>
  );
}
