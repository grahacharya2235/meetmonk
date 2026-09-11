import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import AboutSection from "./components/AboutSection";
import FeedbackSection from "./components/FeedbackSection";
import Footer from "./components/Footer";
import GovernmentPage from "./pages/GovernmentPage";
import EnterprisePage from "./pages/EnterprisePage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="pt-16">
            <Navbar />
            <HeroSection />
            <FeaturesSection />
            <AboutSection />
            <FeedbackSection />
            <Footer />
          </div>
        }
      />
      <Route path="/government" element={<GovernmentPage />} />
      <Route path="/enterprise" element={<EnterprisePage />} />
    </Routes>
  );
}

export default App;
