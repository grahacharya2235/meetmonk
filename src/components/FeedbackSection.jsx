const testimonials = [
  {
    name: "Alejandro Ramirez",
    role: "Member of Parliament, Chile",
    feedback:
      "MeetMonk transformed our parliamentary sessions. Members can now speak in their native language and be understood instantly. It is a game changer for democracy.",
    avatar: "AR",
  },
  {
    name: "Sarah Mitchell",
    role: "Healthcare Director, US",
    feedback:
      "Our nurse-line now serves patients in 30+ languages without hiring additional interpreters. The accuracy and speed is remarkable.",
    avatar: "SM",
  },
  {
    name: "Hiroshi Tanaka",
    role: "Manufacturing Lead, Japan",
    feedback:
      "Cross-border supplier meetings used to take weeks to coordinate with interpreters. MeetMonk made it instant and natural.",
    avatar: "HT",
  },
  {
    name: "Priya Nair",
    role: "Legal Counsel, India",
    feedback:
      "Translating legal documents used to be a bottleneck. MeetMonk delivers accurate multilingual contracts in minutes.",
    avatar: "PN",
  },
  {
    name: "Carlos Mendez",
    role: "G20 Summit Coordinator, Brazil",
    feedback:
      "We powered communication between officials from 20 countries at the P20 G20 summit. MeetMonk handled it flawlessly.",
    avatar: "CM",
  },
  {
    name: "Emily Chen",
    role: "Entertainment Producer, US",
    feedback:
      "Live dubbing for our streaming platform used to cost a fortune. MeetMonk cut our localization costs by 70% with better quality.",
    avatar: "EC",
  },
];

function TestimonialCard({ name, role, feedback, avatar }) {
  return (
    <div className="min-w-[300px] max-w-[300px] bg-white rounded-2xl shadow-md p-6 mx-4 flex flex-col gap-4">
      <p className="text-gray-600 text-sm leading-relaxed">{feedback}</p>
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
          {avatar}
        </div>
        <div>
          <p className="text-gray-800 font-semibold text-sm">{name}</p>
          <p className="text-gray-400 text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
}

function FeedbackSection() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="text-center mb-12 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What People Are Saying
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Trusted by governments, enterprises, and healthcare leaders across the
          globe.
        </p>
      </div>
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
          {testimonials.map((t, i) => (
            <TestimonialCard key={`dup-${i}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeedbackSection;
