import FeatureCard from "./FeatureCard";
import "../styles/Features.css";

import { FaRobot } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";

function Features() {
  return (
    <section id="features" className="features">
    <div className="section-tag">
  WHY CHOOSE PREPMATE?
</div>

<h2>Everything You Need To Succeed</h2>

<p className="subtitle">
  Build confidence, practice smarter, and land your dream job with PrepMate.
</p>

      <div className="features-grid">
        <FeatureCard
          icon={<FaRobot />}
          title="AI Mock Interviews"
          description="Practice realistic mock interviews with instant feedback."
        />

        <FeatureCard
          icon={<FaFileAlt />}
          title="Company-wise Questions"
          description="Prepare using questions asked by top companies."
        />

        <FeatureCard
          icon={<FaChartLine />}
          title="Performance Analytics"
          description="Track your strengths and identify improvement areas."
        />
      </div>
    </section>
  );
}

export default Features;