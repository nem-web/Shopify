import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SignIn = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{ background: "linear-gradient(to bottom, #6b46c1, #805ad5)" }}
    >
      <div
        className="bg-white p-5 rounded shadow w-100"
        style={{ maxWidth: "400px" }}
      >
        {/* Logo */}
        <div className="text-center mb-4">
          <img
            src="/logo.jpeg"
            alt="Shopify Logo"
            style={{ height: "40px" }}
          />
        </div>

        {/* Title */}
        <h2 className="text-center mb-4">Sign In</h2>

        {/* Email Field */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email *
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="you@example.com"
          />
        </div>

        {/* Password Field */}
        <div className="mb-2">
          <label htmlFor="password" className="form-label">
            Password *
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="••••••••"
          />
        </div>

        {/* Forgot Password */}
        <div className="text-end mb-3">
          <a href="#" className="text-decoration-none text-primary">
            Forgot Password?
          </a>
        </div>

        {/* Sign In / Cancel Buttons */}
        <div className="d-flex gap-2 mb-3">
          <button className="btn btn-primary w-100">Sign In</button>
          <button className="btn btn-outline-secondary w-100">Cancel</button>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-muted">
          Not Registered?{" "}
          <a href="#" className="text-decoration-none text-primary">
            Sign Up
          </a>
        </p>

        {/* Divider */}
        <hr className="my-4" />

        {/* Google Sign In */}
        <button className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google Icon"
            style={{ height: "20px", marginRight: "8px" }}
          />
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
