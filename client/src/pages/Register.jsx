import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Register.css";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="register-page">
      <div className="register-container">

        <div className="register-left">

          <h1>Create Account 🚀</h1>

          <p>
            Start your interview preparation journey with PrepMate.
          </p>

          <form>

            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="input-group">
              <label>Password</label>

              <div className="password-container">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create password"
                />

                <span
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </span>
              </div>
            </div>

            <div className="input-group">
              <label>Confirm Password</label>

              <div className="password-container">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                />

                <span
                  className="toggle-password"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                >
                  {showConfirmPassword ? "🙈" : "👁️"}
                </span>
              </div>
            </div>

            <button type="submit" className="register-btn">
              Create Account
            </button>

          </form>

          <p className="bottom-text">
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </p>

        </div>

        <div className="register-right">
          <img
            src="/hero.svg"
            alt="Interview Illustration"
          />
        </div>

      </div>
    </div>
  );
}

export default Register;