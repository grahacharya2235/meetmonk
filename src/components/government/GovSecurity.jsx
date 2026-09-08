const points = [
  {
    number: "01",
    title: "On-premises and air-gapped deployment",
  },
  {
    number: "02",
    title: "No external data transfer",
  },
  {
    number: "03",
    title: "Full audit trail for every interaction",
  },
  {
    number: "04",
    title: "Integration with existing systems",
  },
];

const compliance = [
  "Air-gapped deployment available",
  "Zero external data exposure",
  "Interaction-level audit logging",
  "Compatible with existing AV & IT infrastructure",
  "Deployable in 48 hours, no hardware required",
];

function GovSecurity() {
  return (
    <section id="security" className="bg-gray-950 py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          {/* Label */}
          <p className="text-orange-500 font-semibold text-sm tracking-widest uppercase mb-4">
            Security
          </p>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-12">
            Built for government{" "}
            <span className="text-orange-500">environments.</span>
          </h2>

          {/* Numbered points */}
          <div className="flex flex-col gap-0">
            {points.map((point, index) => (
              <div
                key={index}
                className="flex items-center gap-6 py-5 border-b border-white/10"
              >
                <span className="text-orange-500 font-bold text-sm w-8">
                  {point.number}
                </span>
                <p className="text-white font-semibold">{point.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Compliance card */}
        <div className="bg-gray-900 rounded-2xl p-8 border border-white/10">
          <p className="text-orange-500 font-semibold text-xs tracking-widest uppercase mb-6">
            Compliance & Infrastructure
          </p>
          <div className="flex flex-col gap-4">
            {compliance.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 shrink-0"></span>
                <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GovSecurity;
