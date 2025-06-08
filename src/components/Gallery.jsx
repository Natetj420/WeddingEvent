// src/components/Gallery.jsx
export default function Gallery() {
  return (
    <section className="relative" id="gallery">
      {/* Background image */}
      <img
      src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=1600&q=80"



        alt="Styled wedding décor"
        className="w-full h-80 sm:h-[28rem] object-cover"
      />

      {/* Dark overlay for legible text */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-900/60 to-rose-800/40" />

      {/* Call-to-action text */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white drop-shadow-lg">
          This could be yours!
          <br />
          <span className="block mt-3 text-lg sm:text-2xl font-medium">
            Contact us today
          </span>
        </h2>
      </div>
    </section>
  );
}
