import GovNavbar from "../components/government/GovNavbar";
import GovHero from "../components/government/GovHero";
import GovTrustBar from "../components/government/GovTrustBar";
import GovPlatform from "../components/government/GovPlatform";
import GovApplications from "../components/government/GovApplications";
import GovSecurity from "../components/government/GovSecurity";
import GovCTA from "../components/government/GovCTA";

function GovernmentPage() {
  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <GovNavbar />
      <div className="pt-24">
        <GovHero />
        <GovTrustBar />
        <GovPlatform />
        <GovApplications />
        <GovSecurity />
        <GovCTA />
      </div>
    </div>
  );
}

export default GovernmentPage;
