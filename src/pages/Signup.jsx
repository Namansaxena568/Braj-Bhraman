import React, { useState } from "react";
import Home from "../pages/Home"; // apne Home component ka path check kar le

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ email: form.email }));
    alert("Signup Successful!");
    window.location.href = "/booking";
  };

  return (
    <div className="relative">
      {/* Background - Home Page */}
      <div className="fixed inset-0 -z-10">
        <Home />
      </div>

      {/* Overlay */}
      <div className="flex items-center justify-center min-h-screen bg-black/50 backdrop-blur-sm px-4">
        <div className="bg-white/30 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md border border-white/40 relative">
          {/* Close button */}
          <a
            href="/"
            className="absolute top-3 right-3 text-gray-700 hover:text-black text-xl"
          >
            ✕
          </a>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-orange-800 drop-shadow-md">
            Create Account
          </h2>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/70 border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none placeholder-gray-600 text-gray-800"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/70 border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none placeholder-gray-600 text-gray-800"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/70 border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none placeholder-gray-600 text-gray-800"
              required
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              Sign Up
            </button>
          </form>

          {/* Login redirect */}
          <p className="mt-5 text-sm text-center text-gray-100">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-yellow-300 hover:text-yellow-400 font-medium hover:underline"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
