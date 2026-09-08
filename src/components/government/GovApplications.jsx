import { useState } from "react";

const applications = [
  {
    title: "Immigration & Border Control",
    description:
      "Reduce processing time at checkpoints with instant two-way communication between officers and travellers across any language.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
  },
  {
    title: "Citizen Service Centres",
    description:
      "Enable seamless multilingual service delivery at government help desks and public service windows.",
    image:
      "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&q=80",
  },
  {
    title: "Grievance & RTI Systems",
    description:
      "Process and respond to citizen grievances in any language with automated translation of documents and responses.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
  },
  {
    title: "Government Meetings",
    description:
      "Real-time interpretation for inter-state and international government meetings with full transcript support.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
  },
  {
    title: "Parliament & Committees",
    description:
      "Live multilingual translation for parliamentary sessions, committee hearings and legislative proceedings.",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80",
  },
  {
    title: "Documents & Records",
    description:
      "Multilingual search, translation, and archival of government records, policy documents, and legal texts.",
    image:
      "https://images.unsplash.com/photo-1568234928966-359c35dd8327?w=800&q=80",
  },
  {
    title: "Defense & Field Operations",
    description:
      "Secure communication across languages in defense and field operations with zero external data transfer.",
    image:
      "https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?w=800&q=80",
  },
  {
    title: "Public Broadcasts",
    description:
      "Live and recorded broadcast translation for government press conferences, emergency announcements, and public communications.",
    image:
      "https://images.unsplash.com/photo-1478737270197-f0a8c23e4db8?w=800&q=80",
  },
];

function GovApplications() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="applications" className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <p className="text-orange-500 font-semibold text-sm tracking-widest uppercase mb-4">
          Applications
        </p>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-black text-black leading-tight mb-4">
          Where MeetMonk serves government,{" "}
          <span className="text-orange-500">in practice.</span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-500 mb-16 max-w-xl">
          Every use case identified from real government deployments. Live
          within 48 hours — no hardware, no interpreter contracts.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Accordion */}
          <div className="flex flex-col gap-2">
            {applications.map((app, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`rounded-xl p-5 cursor-pointer transition border ${
                  activeIndex === index
                    ? "bg-gray-900 border-gray-700"
                    : "bg-white border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs transition ${
                      activeIndex === index
                        ? "border-orange-500 text-orange-500"
                        : "border-gray-400 text-gray-400"
                    }`}
                  >
                    {activeIndex === index ? "−" : "+"}
                  </span>
                  <h3
                    className={`font-bold text-sm ${
                      activeIndex === index ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {app.title}
                  </h3>
                </div>
                {activeIndex === index && (
                  <p className="text-gray-400 text-sm leading-relaxed mt-3 ml-9">
                    {app.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right: Image */}
          <div className="sticky top-24 rounded-2xl overflow-hidden h-80 md:h-96 relative">
            <img
              src={applications[activeIndex].image}
              alt={applications[activeIndex].title}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-6">
              <h3 className="text-white font-bold text-lg">
                {applications[activeIndex].title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GovApplications;
