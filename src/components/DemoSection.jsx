import { useState } from "react";
import ContactPopup from "./enterprise/ContactPopup";

const demos = {
  "Text to Speech": {
    label: "Text to Speech Converter",
    inputLabel: "Type your text",
    inputContent: "Hello, thank you for joining today's meeting.",
    outputLabel: "Audio Output",
    icon: "🔊",
  },
  "Speech to Text": {
    label: "Speech to Text Converter",
    inputLabel: "Speak now",
    inputContent: "🎤 Listening...",
    outputLabel: "Transcribed Text",
    outputContent: '"Hello, thank you for joining today\'s meeting."',
    icon: "📝",
  },
  "Document Translator": {
    label: "Document Translator",
    inputLabel: "Upload document",
    inputContent: "📄 meeting-notes.pdf",
    outputLabel: "Translated Document",
    outputContent: "📄 meeting-notes_spanish.pdf",
    icon: "📁",
  },
};

function DemoSection() {
  const [activeTab, setActiveTab] = useState("Text to Speech");
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const demoNames = Object.keys(demos);
  const active = demos[activeTab];

  return (
    <>
      <section
        id="demo"
        className="py-20 px-6 bg-gradient-to-br from-indigo-50 to-purple-50"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            See It In Action
          </h2>
          <p className="text-gray-500 mb-10 max-w-xl mx-auto">
            Explore our core tools for seamless communication.
          </p>

          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {demoNames.map((name) => (
              <button
                key={name}
                onClick={() => setActiveTab(name)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  activeTab === name
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {demos[name].icon} {name}
              </button>
            ))}
          </div>

          {/* Demo window */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            {/* Fake browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
              <span className="ml-4 text-xs text-gray-400">
                meetmonk.com/demo
              </span>
            </div>

            <div className="p-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-6 text-left">
                {active.label}
              </h3>

              <div className="grid md:grid-cols-2 gap-6 items-center">
                {/* Input side */}
                <div className="bg-gray-50 rounded-xl p-6 text-left">
                  <span className="text-xs font-medium text-gray-400 uppercase">
                    {active.inputLabel}
                  </span>
                  {activeTab === "Speech to Text" ? (
                    <div className="flex items-center gap-2 mt-3 mb-4">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition ${
                          isPlaying ? "bg-red-500" : "bg-blue-600"
                        }`}
                      >
                        {isPlaying ? "■" : "🎤"}
                      </button>
                      <span className="text-sm text-gray-500">
                        {isPlaying ? "Listening..." : "Tap to speak"}
                      </span>
                    </div>
                  ) : activeTab === "Document Translator" ? (
                    <div className="mt-3 mb-4 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-500 text-sm">
                      {active.inputContent}
                    </div>
                  ) : (
                    <div className="mt-3 mb-4 p-4 bg-white border border-gray-200 rounded-lg text-gray-700 text-sm">
                      {active.inputContent}
                    </div>
                  )}
                </div>

                {/* Output side */}
                <div className="bg-blue-50 rounded-xl p-6 text-left">
                  <span className="text-xs font-medium text-blue-400 uppercase">
                    {active.outputLabel}
                  </span>
                  {activeTab === "Text to Speech" ? (
                    <div className="flex items-center gap-2 mt-3 mb-4">
                      <span className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white text-xl">
                        🔊
                      </span>
                      <div className="flex gap-1 items-end h-6">
                        <span className="w-1 h-2 bg-purple-400 rounded-full"></span>
                        <span className="w-1 h-4 bg-purple-400 rounded-full"></span>
                        <span className="w-1 h-6 bg-purple-400 rounded-full"></span>
                        <span className="w-1 h-3 bg-purple-400 rounded-full"></span>
                        <span className="w-1 h-5 bg-purple-400 rounded-full"></span>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-3 mb-4 p-4 bg-white border border-gray-200 rounded-lg text-gray-700 text-sm">
                      {active.outputContent}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Book a Live Demo button */}
          <button
            onClick={() => setShowPopup(true)}
            className="mt-10 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Book a Live Demo
          </button>
        </div>
      </section>

      {/* Popup */}
      {showPopup && <ContactPopup onClose={() => setShowPopup(false)} />}
    </>
  );
}

export default DemoSection;
