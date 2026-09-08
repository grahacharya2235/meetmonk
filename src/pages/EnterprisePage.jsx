import { useState } from "react";
import EntNavbar from "../components/enterprise/EntNavbar";
import EntHero from "../components/enterprise/EntHero";
import EntUseCases from "../components/enterprise/EntUseCases";
import EntTransition from "../components/enterprise/EntTransition";
import EntWhyMeetMonk from "../components/enterprise/EntWhyMeetMonk";
import EntHowItWorks from "../components/enterprise/EntHowItWorks";
import EntSecurity from "../components/enterprise/EntSecurity";
import EntCTA from "../components/enterprise/EntCTA";

function EnterprisePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-white text-black">
      <EntNavbar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <div className="pt-24">
        <EntHero />
        <EntUseCases
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <EntTransition />
        <EntWhyMeetMonk />
        <EntHowItWorks />
        <EntSecurity />
        <EntCTA />
      </div>
    </div>
  );
}

export default EnterprisePage;
