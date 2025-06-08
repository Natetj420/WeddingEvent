import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="font-serif text-2xl tracking-wider text-rose-700 hover:text-rose-800"
        >
          Emma & Jack
        </Link>
        <div className="space-x-6 font-medium">
          <Link
            to="/"
            className={`hover:text-rose-600 transition-colors ${
              pathname === "/" ? "text-rose-600" : "text-gray-700"
            }`}
          >
            Home
          </Link>
          <Link
            to="/rsvp"
            className={`hover:text-rose-600 transition-colors ${
              pathname === "/rsvp" ? "text-rose-600" : "text-gray-700"
            }`}
          >
            RSVP
          </Link>
        </div>
      </div>
    </nav>
  );
}