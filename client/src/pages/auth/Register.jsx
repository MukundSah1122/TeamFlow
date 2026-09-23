import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  LockKeyhole,
  Mail,
  MessageSquare,
  User,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";

function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

  const result = register({
  name,
  email,
  password,
});

if (result.success) {
  navigate("/login");
} else {
  setError(result.message);
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
          <h1>Create your account</h1>

          <p>
            Join your team and start collaborating with
            TeamFlow.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="auth-form"
        >
          <div className="form-group">
            <label htmlFor="name">
              Full name
            </label>

            <div className="input-wrapper">
              <User size={17} />

              <input
                id="name"
                type="text"
                placeholder="Mukund Sah"
                value={name}
                onChange={(event) =>
                  setName(event.target.value)
                }
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="register-email">
              Email address
            </label>

            <div className="input-wrapper">
              <Mail size={17} />

              <input
                id="register-email"
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
            <label htmlFor="register-password">
              Password
            </label>

            <div className="input-wrapper">
              <LockKeyhole size={17} />

              <input
                id="register-password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">
              Confirm password
            </label>

            <div className="input-wrapper">
              <LockKeyhole size={17} />

              <input
                id="confirm-password"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(event) =>
                  setConfirmPassword(event.target.value)
                }
                required
              />
            </div>
          </div>

          {error && (
            <div className="auth-error">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="auth-submit"
          >
            Create account
            <ArrowRight size={17} />
          </button>
        </form>

        <p className="auth-switch">
          Already have a TeamFlow account?

          <Link to="/login">
            Sign in
          </Link>
        </p>
      </div>

      <p className="auth-footer">
        TeamFlow Prototype · Secure team collaboration
      </p>
    </div>
  );
}

export default Register;