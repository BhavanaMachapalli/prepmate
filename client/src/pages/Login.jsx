import "../styles/Login.css";

function Login() {
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
              <input
                type="password"
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>

          </form>

          <p className="bottom-text">
            Don't have an account?
            <span> Register</span>
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