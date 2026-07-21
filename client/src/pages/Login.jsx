import { useState } from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="login-page">

      <div className="login-container">

        <div className="login-left">

          <h1>Welcome Back 👋</h1>

          <p>
            Continue your interview preparation with PrepMate.
          </p>

          <form>

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
    placeholder="Enter your password"
  />

  <span
    className="toggle-password"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? "🙈" : "👁️"}
  </span>
</div>
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>

          </form>

          <p className="bottom-text">
            Don't have an account?
            <Link to="/register">Register</Link>
          </p>

        </div>

        <div className="login-right">

          <img
            src="/hero.svg"
            alt="Interview Illustration"
          />

        </div>

      </div>

    </div>
  );
}

export default Login;