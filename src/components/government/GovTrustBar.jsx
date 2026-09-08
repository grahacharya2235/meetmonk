const clients = [
  { name: "Government of India", description: "Ministry deployment" },
  { name: "Himachal Pradesh Govt.", description: "State government · Active" },
  { name: "Haryana Government", description: "State government · Active" },
  {
    name: "G20 Brasil 2024",
    description: "20-nation summit · Live interpretation",
  },
  { name: "US Congress / OAS", description: "Washington DC · Multilateral" },
  { name: "TCU Brazil", description: "Federal audit institution" },
];

function GovTrustBar() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <p className="text-center text-gray-400 text-xs font-semibold tracking-widest uppercase mb-10">
          Trusted by Governments & Multilateral Institutions
        </p>

        {/* Client grid */}
        <div className="border border-gray-200 rounded-2xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y divide-gray-200">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center p-6 gap-2"
            >
              <span className="text-2xl">🏛️</span>
              <p className="text-gray-800 font-semibold text-sm">
                {client.name}
              </p>
              <p className="text-gray-400 text-xs">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GovTrustBar;
