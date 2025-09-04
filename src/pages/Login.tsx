import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/7039323.jpg"; 

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    if (email === "admin@test.com" && password === "123456") {
      localStorage.setItem("authToken", "demoToken");
      navigate("/");
    } else {
      setError("Invalid email or password.");
    }
  };
         


  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${logo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="card shadow-lg p-5"
        style={{
          width: "400px",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(8px)", 
          textAlign: "center",
        }}
      >
        <h1 className="mb-4" style={{ fontWeight: "700", color: "#007bff" }}>
          Welcome to HRMS
        </h1>
        <p className="mb-4 text-muted">Sign in to continue</p>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 py-2"
            style={{ fontWeight: "600" }}
          >
            Login
          </button>
        </form>

        <div className="mt-4">
          <small className="text-muted">© 2025 HRMS. All rights reserved.</small>
        </div>
      </div>
    </div>
  );
};

export default Login;
