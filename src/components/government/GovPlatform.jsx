const capabilities = [
  {
    icon: "👓",
    label: "Interpretation",
    description: "Real-time voice interpretation in Events and Conferences",
  },
  {
    icon: "🖥️",
    label: "Counter Services",
    description: "Face-to-face communication at counters and checkpoints",
  },
  {
    icon: "📁",
    label: "Records",
    description: "Multilingual search across documents and recordings",
  },
  {
    icon: "📡",
    label: "Broadcast",
    description: "Live and recorded broadcast and OTT Streaming translation",
  },
];

function GovPlatform() {
  return (
    <section id="platform" className="bg-gray-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <p className="text-orange-500 font-semibold text-sm tracking-widest uppercase mb-4">
          Platform
        </p>

        {/* Headline */}
        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-16">
          One system across{" "}
          <span className="text-orange-500">all government interactions.</span>
        </h2>

        {/* 4 capability cards */}
        <div className="grid md:grid-cols-4 gap-0 border border-white/10 rounded-2xl overflow-hidden">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className={`p-8 flex flex-col gap-4 ${
                index !== capabilities.length - 1
                  ? "border-r border-white/10"
                  : ""
              }`}
            >
              <span className="text-3xl">{item.icon}</span>
              <p className="text-orange-500 text-xs font-bold tracking-widest uppercase">
                {item.label}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GovPlatform;
