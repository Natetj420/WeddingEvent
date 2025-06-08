import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-rose-700 text-white" id="footer">
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        {/* Brand & Event Details */}
        <div>
          <p className="font-serif text-2xl tracking-wide">Emma &amp; Jack</p>
          <p className="mt-2 text-sm text-white/70">September 20, 2025 · Vancouver, BC</p>
        </div>

        {/* Quick‑link Site Map */}
        <nav className="grid grid-cols-2 gap-4" aria-label="Footer">
          <ul className="flex flex-col space-y-2 text-sm">
            <li>
              <a href="/#story" className="hover:underline">
                Our Story
              </a>
            </li>
            <li>
              <a href="/#schedule" className="hover:underline">
                Schedule
              </a>
            </li>
            <li>
              <a href="/#travel" className="hover:underline">
                Travel &amp; Stay
              </a>
            </li>
          </ul>
          <ul className="flex flex-col space-y-2 text-sm">
            <li>
              <a href="/#registry" className="hover:underline">
                Registry
              </a>
            </li>
            <li>
              <Link to="/rsvp" className="hover:underline">
                RSVP
              </Link>
            </li>
            <li>
              <a href="#top" className="hover:underline">
                Back to Top
              </a>
            </li>
          </ul>
        </nav>

        {/* Legal */}
        <div className="flex items-end md:justify-end">
          <p className="text-xs text-white/60">
            © {year} PinnacleCode. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
