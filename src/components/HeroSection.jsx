function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center text-center bg-gray-950">
      {/* Video */}
      <div className="w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-cover"
        >
          <source src="/Home_Page_with_text.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content below video */}
      <div className="w-full bg-gray-950 py-16 px-6 flex flex-col items-center">
        <span className="inline-block border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 px-4 py-1 rounded-full text-sm mb-6 backdrop-blur-sm">
          AI Translation Platform
        </span>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-300 to-purple-400 bg-clip-text text-transparent leading-tight max-w-4xl">
          Break Language Barriers in Real Time
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto">
          Real-time AI-powered speech translation for meetings, conversations,
          and everything in between.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
