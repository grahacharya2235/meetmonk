import { useState, useEffect, useRef } from 'react'

const rollingTexts = [
  'One broadcast. One panel. Every language - On demand!!',
  'Real-time voice translation',
  'Multilingual meeting intelligence',
  'Video & Live-TV Broadcast',
  'Context-aware search engine across 105+ languages'
]

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rollingTexts.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center text-center bg-gray-950">

      {/* Heading + Rolling text ABOVE video */}
      <div className="w-full bg-gray-950 py-12 px-6 flex flex-col items-center">
        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          MeetMonk <span className="text-orange-500">AI Powered Suite</span>
        </h1>

        {/* Rolling text */}
        <div className="h-10 flex items-center justify-center px-4">
          <p
            key={currentIndex}
            className="text-lg md:text-2xl text-gray-300 font-medium transition-all duration-500"
          >
            {rollingTexts[currentIndex]}
          </p>
        </div>
      </div>

      {/* Video below heading */}
      <div className="w-full relative">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full object-contain max-h-[60vh] bg-gray-950"
        >
          <source src="/meetmonk_vdo_3.mp4" type="video/mp4" />
        </video>

        {/* Mute/Unmute button */}
        <button
          onClick={toggleMute}
          className="absolute top-4 right-4 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-black/80 transition backdrop-blur-sm"
        >
          {isMuted ? '🔇 Unmute' : '🔊 Mute'}
        </button>
      </div>

    </section>
  )
}

export default HeroSection
