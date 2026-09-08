import FeatureCard from "./FeatureCard";

function FeaturesSection() {
  const features = [
    {
      icon: "🎙️",
      title: "Real-time Speech",
      description:
        "Speak naturally and get instant, accurate translations as you talk.",
    },
    {
      icon: "🌐",
      title: "50+ Languages",
      description:
        "Communicate across the globe with support for a wide range of languages.",
    },
    {
      icon: "⚡",
      title: "Low Latency",
      description:
        "Lightning-fast processing keeps conversations smooth and natural.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What MeetMonk Can Do
        </h2>
        <p className="text-gray-500 mb-12 max-w-xl mx-auto">
          Powerful AI-driven features built for seamless real-time
          communication.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
