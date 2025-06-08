export default function Travel() {
  return (
    <section className="py-20 bg-white" id="travel">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="font-serif text-4xl text-rose-700 mb-8">Travel & Stay</h2>
        <p className="text-lg text-gray-700 mb-12">
          We’ve arranged discounted room blocks at the Fairmont Hotel Vancouver
          and the Blue Horizon Hotel (mention “Emma & Jack Wedding”). Vancouver
          International Airport (YVR) is a 25‑minute taxi ride to downtown.
        </p>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-rose-50 p-6 rounded-xl shadow-sm">
            <h3 className="font-medium text-lg mb-2 text-rose-700">Fairmont Hotel Vancouver</h3>
            <p className="text-gray-600 mb-2">900 W Georgia St, Vancouver</p>
            <p className="text-gray-600 text-sm">Call +1 604‑684‑3131 by Aug 20 to book.</p>
          </div>
          <div className="bg-rose-50 p-6 rounded-xl shadow-sm">
            <h3 className="font-medium text-lg mb-2 text-rose-700">Blue Horizon Hotel</h3>
            <p className="text-gray-600 mb-2">1225 Robson St, Vancouver</p>
            <p className="text-gray-600 text-sm">Book online with code EMMAJACK25.</p>
          </div>
        </div>
      </div>
    </section>
  );
}