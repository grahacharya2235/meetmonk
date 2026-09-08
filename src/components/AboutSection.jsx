import { useState } from "react";

const sectors = {
  Manufacturing: [
    {
      title: "Meeting Translation",
      subtitle:
        "Effortless Multilingual Communication for Faster, Smarter Decision-Making",
      description:
        "Meetings between teams—internal multi-country employees or external suppliers and partners—are as seamless as if everyone spoke the same language, leading to faster, more informed decisions.",
    },
    {
      title: "Document Translation",
      subtitle:
        "Achieve Process Adherence, Regulatory Compliance, and Global Sales Success",
      description:
        "AI-powered document translation enables teams across countries to follow SOPs and ensure regulatory compliance in their native languages, while delivering consistent marketing messaging worldwide.",
    },
  ],
  Healthcare: [
    {
      title: "Language-line and Nurse-line",
      subtitle: "Enhance Patient Care with Instant Translation",
      description:
        "Real-time translation bridges language barriers between patients and medical staff, ensuring clearer understanding, faster diagnoses, and more accurate treatments.",
    },
    {
      title: "Document Translation",
      subtitle: "Simplify Life for Patients with Clear, Accessible Information",
      description:
        "Easily translate essential materials like pre- and post-procedure care instructions and dietary guidelines, helping patients understand their treatments.",
    },
  ],
  Legal: [
    {
      title: "Meeting Translation",
      subtitle:
        "Seamless Multilingual Communication for Faster, More Accurate Legal Decisions",
      description:
        "Meetings between attorneys, paralegals, and clients—regardless of language—enable faster, more precise decision-making, streamlining legal processes.",
    },
    {
      title: "Document Translation",
      subtitle:
        "Effortlessly Create Contracts and Legal Documents in Multiple Languages",
      description:
        "AI-powered document translation seamlessly delivers legal documents to international clients in any language, ensuring clarity and accuracy across borders.",
    },
  ],
  Entertainment: [
    {
      title: "Instant Dubbing – Live TV and Streaming",
      subtitle:
        "Expand Global Reach and Boost Revenue by Making Content Accessible Worldwide",
      description:
        "Real-time translation engine syncs seamlessly with any video, matching pace and tone, cutting out the need for costly manual dubbing.",
    },
    {
      title: "Cognitive Search",
      subtitle: "Uncover Hidden Gems and Keep Subscribers Engaged",
      description:
        "Instant, in-video keyword capabilities help users find exactly what they want, keeping them engaged and loyal.",
    },
  ],
  Government: [
    {
      title: "Sessions Translation",
      subtitle: "Accelerate Bill Passing, Achieve Consensus Faster",
      description:
        "AI-generated simultaneous interpretation enables members to communicate seamlessly in their preferred language during proceedings.",
    },
    {
      title: "Meeting Translation",
      subtitle:
        "Seamless Multilingual Communication for Faster, More Accurate Decision-Making",
      description:
        "Makes meetings between officials speaking different languages as smooth as those in a common language.",
    },
    {
      title: "Cognitive Search",
      subtitle:
        "Expedite Administrative Processes with Instant Access to Key Discussions",
      description:
        "Converts keywords into multiple languages for true multilingual search across videos and documents, saving time and boosting efficiency.",
    },
    {
      title: "Hansard and Document Translation",
      subtitle: "Track Agenda Progress in Any Language",
      description:
        "Instantly generates session transcripts and digitizes agreements, contracts, and documents in multiple languages.",
    },
    {
      title: "Live TV Translation",
      subtitle:
        "Provide All Citizens Access to Proceedings in Their Preferred Language",
      description:
        "Real-time translation engine seamlessly syncs with video, matching pace and tone for an optimal listening experience.",
    },
  ],
  Departments: [
    {
      title: "Judiciary",
      subtitle:
        "Unlock Instant Research and Precedent Discovery in Over 80 Languages",
      description:
        "AI audio engine accurately analyzes arguments and judgments, digitizes archived documents, and searches decades of case history.",
    },
    {
      title: "Citizen Services",
      subtitle: "Bridge Language Barriers to Serve Every Resident",
      description:
        "Real-time voice and text translation ensures faster, accurate, cost-effective services for driver's licenses, healthcare access, and immigration.",
    },
    {
      title: "Defense and International Exercises",
      subtitle: "Make International Joint Exercises as Seamless as Local Ones",
      description:
        "Delivers time-sensitive conversations in real time with precision, enabling collaboration during defense and humanitarian operations.",
    },
    {
      title: "Summits, Conferences and Tradeshows",
      subtitle: "Boost Collaboration at Large Gatherings",
      description:
        "Allows people from any country to communicate directly, accelerating understanding and fostering meaningful collaboration.",
    },
  ],
};

function AboutSection() {
  const sectorNames = Object.keys(sectors);
  const [activeTab, setActiveTab] = useState(sectorNames[0]);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Trusted Across Industries
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From enterprise to government, our AI-powered translation solutions
            are built for every sector.
          </p>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {sectorNames.map((name) => (
            <button
              key={name}
              onClick={() => setActiveTab(name)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeTab === name
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="grid md:grid-cols-2 gap-6">
          {sectors[activeTab].map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-800 font-medium mb-2">
                {service.subtitle}
              </p>
              <p className="text-gray-500 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
