const steps = [
  {
    number: "01",
    icon: "🔌",
    title: "Connect",
    description:
      "Integrate MeetMonk via API. No infrastructure, no hardware, no setup time.",
  },
  {
    number: "02",
    icon: "🎤",
    title: "Speak",
    description:
      "Your speaker presents naturally in their native language. No earpieces, no preparation, no constraints.",
  },
  {
    number: "03",
    icon: "⚡",
    title: "Interpret",
    description:
      "Real-time speech-to-speech in 70+ languages — preserving tone, context, and natural style.",
  },
  {
    number: "04",
    icon: "🎧",
    title: "Hear",
    description:
      "Each listener selects their language and hears a natural, human-grade voice interpretation — in real time.",
  },
];

function EntHowItWorks() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <p className="text-orange-500 font-semibold text-sm tracking-widest uppercase mb-4 text-center">
          How It Works
        </p>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-4">
          Just four steps without friction.
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">
          From integration to real-time voice, the process is simple.
        </p>

        {/* 4 cards */}
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-gray-900 rounded-2xl p-6 flex flex-col gap-4"
            >
              {/* Number */}
              <span className="text-orange-500 text-2xl font-black">
                {step.number}
              </span>

              {/* Icon */}
              <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center text-xl">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-lg">{step.title}</h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EntHowItWorks;
