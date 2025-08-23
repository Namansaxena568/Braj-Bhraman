import React, { useState } from "react";
import Home from "../pages/Home"; // apne Home component ka path sahi karna

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
      {/* Background - Home page */}
      <div className="fixed inset-0 -z-10">
        <Home />
      </div>

      {/* Overlay */}
      <div className="flex items-center justify-center min-h-screen bg-black/40 backdrop-blur-sm">
        <div className="bg-white/30 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md border border-white/40 relative">
          {/* Close button */}
          <a
            href="/"
            className="absolute top-3 right-3 text-gray-700 hover:text-black text-xl"
          >
            ✕
          </a>

          <h2 className="text-2xl font-bold text-center mb-6 text-orange-800">
            Signup
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg bg-white/60 backdrop-blur-sm focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg bg-white/60 backdrop-blur-sm focus:outline-none"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg bg-white/60 backdrop-blur-sm focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
            >
              Signup
            </button>
          </form>
          <p className="mt-4 text-sm text-center text-white">
            Already have an account?{" "}
            <a href="/login" className="text-orange-800 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
