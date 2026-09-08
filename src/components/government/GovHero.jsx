function GovHero() {
  return (
    <section className="w-full bg-gray-950 flex flex-col">
      {/* Video on top */}
      <div className="w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full object-cover max-h-[500px]"
        >
          <source src="/Government_Page.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Hero content below */}
      <div className="flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            {/* Badge */}
            <span className="inline-block border border-orange-500/40 bg-orange-500/10 text-orange-500 px-4 py-1 rounded-full text-sm font-semibold mb-6">
              FOR GOVERNMENT
            </span>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Real-time multilingual communication for{" "}
              <span className="text-orange-500">government operations.</span>
            </h1>

            {/* CTAs */}
            <div className="flex gap-4 flex-wrap">
              <button className="bg-orange-500 text-black font-semibold px-8 py-3 rounded-full hover:bg-orange-400 transition">
                Request a Consultation
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-full hover:bg-white/10 transition">
                See Applications
              </button>
            </div>
          </div>

          {/* Right: Live translation mockup */}
          <div className="bg-gray-900 rounded-2xl p-6 border border-white/10">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>🏛️</span>
                <span>Immigration Counter · IGIA</span>
              </div>
              <span className="flex items-center gap-1 bg-red-500/20 text-red-400 text-xs px-2 py-1 rounded-full">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                LIVE
              </span>
            </div>

            {/* Officer side */}
            <div className="mb-4">
              <div className="flex justify-between text-xs text-gray-400 mb-2">
                <span className="font-bold text-white">OFFICER</span>
                <span className="font-bold text-white">TRAVELLER</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>ENGLISH / HINDI</span>
                <span>ARABIC</span>
              </div>
            </div>

            {/* Officer message */}
            <div className="bg-gray-800 rounded-xl p-4 mb-3">
              <p className="text-white text-sm">
                "What is the purpose of your visit to India, and how long do you
                plan to stay?"
              </p>
            </div>

            {/* Traveller message */}
            <div className="bg-gray-700 rounded-xl p-4 mb-4 text-right">
              <p className="text-white text-sm" dir="rtl">
                "انا هنا لزيارة عائلتي. أخطط للبقاء ثلاثة أسابيع"
              </p>
            </div>

            {/* Translation status */}
            <div className="flex items-center justify-between text-xs mb-3">
              <span className="text-orange-500">
                MeetMonk translating live · Arabic to English
              </span>
              <span className="text-gray-500">No interpreter needed</span>
            </div>

            {/* Translated output */}
            <div className="border-t border-white/10 pt-3">
              <p className="text-gray-400 text-xs uppercase mb-1">
                Translation (Visible to Officer)
              </p>
              <p className="text-white text-sm italic">
                "I am here to visit my family. I plan to stay for three weeks."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GovHero;
