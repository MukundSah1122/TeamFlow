import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  LockKeyhole,
  Mail,
  MessageSquare,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const result = login({
      email,
      password,
    });

 if (result.success) {
  navigate("/workspace-selection");
}
     else {
      alert(result.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-brand">
        <div className="auth-logo">
          <MessageSquare size={22} />
        </div>

        <span>TeamFlow</span>
      </div>

      <div className="auth-card">
        <div className="auth-heading">
          <h1>Welcome back</h1>

          <p>
            Sign in to continue to your TeamFlow workspace.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">
              Email address
            </label>

            <div className="input-wrapper">
              <Mail size={17} />

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">
              Password
            </label>

            <div className="input-wrapper">
              <LockKeyhole size={17} />

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                required
              />
            </div>
          </div>

          <div className="auth-options">
            <label className="remember-option">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <button
              type="button"
              className="forgot-button"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="auth-submit"
          >
            Sign in
            <ArrowRight size={17} />
          </button>
        </form>

        <div className="auth-divider">
          <span>OR</span>
        </div>

        <p className="auth-switch">
          Don't have a TeamFlow account?

          <Link to="/register">
            Create an account
          </Link>
        </p>
      </div>

      <p className="auth-footer">
        TeamFlow Prototype · Secure team collaboration
      </p>
    </div>
  );
}

export default Login;