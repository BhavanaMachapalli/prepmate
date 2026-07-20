import "../styles/Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">

      <div className="section-tag">
        TESTIMONIALS
      </div>

      <h2>What Students Say</h2>

      <p className="subtitle">
        Hear from students who improved their interview confidence with PrepMate.
      </p>

      <div className="testimonial-grid">

        <div className="testimonial-card">
          <p>
            "PrepMate helped me practice confidently before placements. The mock interviews felt realistic."
          </p>

          <h4>Priya S.</h4>
          <span>Software Engineer Intern</span>
        </div>

        <div className="testimonial-card">
          <p>
            "The company-wise questions saved me a lot of preparation time."
          </p>

          <h4>Rahul K.</h4>
          <span>Final Year CSE</span>
        </div>

        <div className="testimonial-card">
          <p>
            "The instant feedback showed exactly where I needed to improve."
          </p>

          <h4>Ananya M.</h4>
          <span>AI & DS Student</span>
        </div>

      </div>

    </section>
  );
}

export default Testimonials;