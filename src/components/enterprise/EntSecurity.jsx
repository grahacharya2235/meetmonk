const certifications = [
  {
    icon: "🛡️",
    title: "GDPR",
    status: "COMPLIANT",
    description: "Full compliance with EU data privacy regulations.",
  },
  {
    icon: "🏅",
    title: "ISO 27001",
    status: "CERTIFIED",
    description: "Information security management certified.",
  },
  {
    icon: "✅",
    title: "ISO 9001:2015",
    status: "CERTIFIED",
    description: "Quality management systems standard.",
  },
  {
    icon: "🔒",
    title: "CCPA",
    status: "COMPLIANT",
    description: "California Consumer Privacy Act compliant.",
  },
  {
    icon: "📄",
    title: "End-to-End",
    status: "ENCRYPTED",
    description: "All audio streams encrypted in transit and at rest.",
  },
  {
    icon: "🌐",
    title: "Zero Data",
    status: "RETENTION",
    description: "No audio or transcript data retained post-session.",
  },
];

function EntSecurity() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <p className="text-orange-500 font-semibold text-sm tracking-widest uppercase mb-4 text-center">
          Security & Compliance
        </p>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-black text-black text-center mb-4">
          Enterprise security by design.
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">
          Accuracy and privacy are standard and your information remains secure.
        </p>

        {/* 6 certification cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-200"
            >
              <div className="text-2xl mb-4">{cert.icon}</div>
              <h3 className="text-black font-bold text-lg">{cert.title}</h3>
              <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-2">
                {cert.status}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote banner */}
        <div className="bg-gray-100 rounded-2xl px-8 py-6 text-center">
          <p className="text-xl md:text-2xl font-bold text-black">
            "MeetMonk achieves up to{" "}
            <span className="text-orange-500">99% accuracy</span> in several
            languages"
          </p>
        </div>
      </div>
    </section>
  );
}

export default EntSecurity;
