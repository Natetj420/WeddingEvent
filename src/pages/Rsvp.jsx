// src/pages/Rsvp.jsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Rsvp() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: Connect to backend (EmailJS / Google Sheets) – placeholder only
    setSubmitted(true);
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-rose-50 flex items-center justify-center px-4">
        {submitted ? (
          <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md text-center">
            <h2 className="font-serif text-3xl text-rose-700 mb-4">Thank You!</h2>
            <p className="text-gray-700 mb-6">
              Your response has been recorded. We can’t wait to celebrate with you!
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-lg space-y-6"
          >
            <h2 className="font-serif text-3xl text-rose-700 text-center">RSVP</h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name(s)
              </label>
              <input
                type="text"
                required
                className="w-full border-gray-300 rounded-lg focus:ring-rose-500 focus:border-rose-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                className="w-full border-gray-300 rounded-lg focus:ring-rose-500 focus:border-rose-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Will you attend?
              </label>
              <select
                required
                className="w-full border-gray-300 rounded-lg focus:ring-rose-500 focus:border-rose-500"
              >
                <option value="yes">Joyfully Accept</option>
                <option value="no">Regretfully Decline</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Dietary Restrictions (optional)
              </label>
              <input
                type="text"
                className="w-full border-gray-300 rounded-lg focus:ring-rose-500 focus:border-rose-500"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full shadow-lg transition-colors"
              >
                Send RSVP
              </button>
            </div>
          </form>
        )}
      </main>
      <Footer />
    </>
  );
}
