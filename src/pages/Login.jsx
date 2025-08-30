import React, { useState } from "react";
import Home from "../pages/Home"; // apne Home component ka path sahi karna

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ email: form.email }));
    alert("Login Successful!");
    window.location.href = "/booking";
  };

  return (
    <div className="relative">
      {/* Background - Home page */}
      <div className="fixed inset-0 -z-10">
        <Home />
      </div>

      {/* Overlay */}
      <div className="flex items-center justify-center min-h-screen bg-black/50 backdrop-blur-sm px-4">
        <div className="bg-white/30 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-md border border-white/40 relative">
          {/* Close button */}
          <a
            href="/"
            className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 text-xl"
          >
            ✕
          </a>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-orange-900 drop-shadow">
            Login
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-white/50 bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 placeholder-gray-500"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-white/50 bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 placeholder-gray-500"
              required
            />
            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>

          {/* Footer */}
          <p className="mt-5 text-sm text-center text-white drop-shadow">
            Don’t have an account?{" "}
            <a
              href="/Signup"
              className="text-orange-900 font-medium hover:underline"
            >
              Signup
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
