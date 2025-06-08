import { GiftIcon } from "@heroicons/react/24/outline";

export default function Registry() {
  return (
    <section className="py-20 bg-rose-50" id="registry">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-serif text-4xl text-rose-700 mb-6">Registry</h2>
        <GiftIcon className="w-16 h-16 mx-auto text-rose-500 mb-6" />
        <p className="text-lg text-gray-700 mb-4">
          Your presence is the greatest gift of all. If you would like to honour
          us with a present, we’ve registered at the stores below.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="https://www.thebay.com/registry"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white shadow-lg rounded-full px-8 py-3 text-rose-700 hover:bg-rose-100 transition"
          >
            Hudson’s Bay
          </a>
          <a
            href="https://www.williams-sonoma.ca/registry"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white shadow-lg rounded-full px-8 py-3 text-rose-700 hover:bg-rose-100 transition"
          >
            Williams‑Sonoma
          </a>
        </div>
      </div>
    </section>
  );
}