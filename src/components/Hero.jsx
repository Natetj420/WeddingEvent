import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[88vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 to-rose-100">
      <img
        src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1600&q=80"
        alt="Couple embracing"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="font-serif text-6xl md:text-7xl text-rose-700 mb-4 leading-tight">
          Emma <span className="text-rose-500">&</span> Jack
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-6">
          September 20, 2025 · Vancouver, BC
        </p>
        <Link
          to="/rsvp"
          className="inline-block bg-rose-600 hover:bg-rose-700 text-white text-lg px-8 py-3 rounded-full shadow-lg transition-colors"
        >
          RSVP
        </Link>
      </motion.div>
    </section>
  );
}