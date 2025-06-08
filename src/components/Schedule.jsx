import { CalendarDaysIcon, CakeIcon, SparklesIcon } from "@heroicons/react/24/solid";

const timeline = [
  {
    time: "3:00 PM",
    title: "Ceremony",
    icon: CalendarDaysIcon,
    desc: "Stanley Park Pavilion Garden" ,
  },
  {
    time: "4:30 PM",
    title: "Cocktail Hour",
    icon: SparklesIcon,
    desc: "Heritage Lounge & Terrace",
  },
  {
    time: "6:00 PM",
    title: "Reception & Dinner",
    icon: CakeIcon,
    desc: "Pavilion Ballroom – dancing to follow!",
  },
];

export default function Schedule() {
  return (
    <section className="py-20 bg-rose-50" id="schedule">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="font-serif text-4xl text-rose-700 mb-14">The Day</h2>
        <div className="divide-y divide-rose-200/70">
          {timeline.map(({ time, title, icon: Icon, desc }) => (
            <div
              key={title}
              className="flex flex-col md:flex-row items-center md:items-start gap-6 py-8"
            >
              <Icon className="w-12 h-12 text-rose-500 shrink-0" />
              <div className="text-left md:text-center mx-auto">
                <h3 className="font-medium text-xl text-gray-800 mb-1">{title}</h3>
                <p className="text-sm text-rose-600 mb-1">{time}</p>
                <p className="text-gray-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}