import "./../styles/Hero.css";
import heroImage from "../assets/images/hero.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
<h1>Ace Your Next Interview with <span>Confidence</span></h1>
        <p>
          Practice HR, Technical and AI-powered mock interviews designed to
          help students crack placements and land their dream jobs.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Get Started</button>

        <a href="#features" className="secondary-btn">
  Explore Features
</a>
        </div>
      </div>

      <div className="hero-right">
        <img src={heroImage} alt="Interview Illustration" />
      </div>
    </section>
  );
}

export default Hero;