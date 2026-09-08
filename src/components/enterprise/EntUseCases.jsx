const useCases = [
  {
    title: "Broadcast & OTT",
    description:
      "Millions watched the Champions League final. Half the world understood nothing. They stayed for the game. MeetMonk can give them the voice they need.",
    image:
      "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=80",
  },
  {
    title: "Conferences & Events",
    description:
      "The keynote begins but a third of the room is trying to use subpar tools to understand what is spoken. We can make your next event truly inclusive.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
  },
  {
    title: "Global Meetings",
    description:
      "Ten people and three languages on one call, and the project is worth millions. Let us help you save weeks of iteration and a lot of money.",
    image:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",
  },
];

function EntUseCases({ activeIndex, setActiveIndex }) {
  return (
    <section id="use-cases" className="bg-gray-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-orange-500 font-semibold text-sm tracking-widest uppercase mb-4">
          Use Cases
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12">
          Where it matters.
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Accordion */}
          <div className="flex flex-col gap-3">
            {useCases.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`rounded-xl p-6 cursor-pointer transition ${
                  activeIndex === index
                    ? "bg-gray-800"
                    : "bg-gray-900 hover:bg-gray-800"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`w-6 h-6 rounded-full border flex items-center justify-center text-sm transition ${
                      activeIndex === index
                        ? "border-orange-500 text-orange-500"
                        : "border-gray-600 text-gray-600"
                    }`}
                  >
                    {activeIndex === index ? "−" : "+"}
                  </span>
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                </div>
                {activeIndex === index && (
                  <p className="text-gray-400 text-sm leading-relaxed ml-9">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right: Image */}
          <div className="rounded-2xl overflow-hidden h-80 md:h-96">
            <img
              src={useCases[activeIndex].image}
              alt={useCases[activeIndex].title}
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EntUseCases;
