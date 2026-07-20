import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2>PrepMate</h2>

          <p>
            Helping students prepare for interviews with confidence through
            AI-powered mock interviews and company-specific questions.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>

          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact Us</a>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>support@prepmate.com</p>
          <p>India</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 PrepMate. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;