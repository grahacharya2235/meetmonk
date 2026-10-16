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

      {/* Heading + Rolling text ABOVE video — reduced spacing and font size */}
      <div className="w-full bg-gray-950 py-6 px-6 flex flex-col items-center">
        {/* Main heading — reduced font size */}
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-3">
          MeetMonk <span className="text-orange-500">AI Powered Suite</span>
        </h1>

        {/* Rolling text — reduced font size */}
        <div className="h-8 flex items-center justify-center px-4">
          <p
            key={currentIndex}
            className="text-sm md:text-lg text-gray-300 font-medium transition-all duration-500"
          >
            {rollingTexts[currentIndex]}
          </p>
        </div>
      </div>

      {/* Video — enlarged but fits screen */}
      <div className="w-full relative px-4 md:px-8">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full object-contain max-h-[75vh] rounded-xl"
        >
          <source src="/BestSoFar.mp4" type="video/mp4" />
        </video>

        {/* Mute/Unmute button */}
        <button
          onClick={toggleMute}
          className="absolute top-4 right-8 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-black/80 transition backdrop-blur-sm"
        >
          {isMuted ? '🔇 Unmute' : '🔊 Mute'}
        </button>
      </div>

    </section>
  )
}

export default HeroSection
