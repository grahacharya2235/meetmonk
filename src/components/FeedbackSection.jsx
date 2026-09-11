function FeedbackSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What People Are Saying
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Hear directly from our clients about their experience with MeetMonk.
          </p>
        </div>

        {/* YouTube Video */}
        <div className="rounded-2xl overflow-hidden shadow-xl aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ZHtzLjfdTlc"
            title="MeetMonk Client Interviews"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default FeedbackSection;
