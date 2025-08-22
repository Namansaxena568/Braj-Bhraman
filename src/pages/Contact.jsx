import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="container py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white/70 backdrop-blur-md rounded-3xl p-10 shadow-lg border border-gray-200"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-orange-800 relative inline-block">
          <span className="relative z-10">📩 Contact Us</span>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
        </h2>
        <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
          Have a question or want to book a darshan/stay? Drop us a message below.  
          We’ll get back to you as soon as possible.
        </p>

        <form
          onSubmit={submit}
          className="space-y-6 max-w-3xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handle}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handle}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />
          </div>
          <textarea
            name="message"
            value={form.message}
            onChange={handle}
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition resize-none"
          />
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-xl font-semibold text-white hover:scale-105 transition-transform duration-300 shadow-md"
          >
            Send Message
          </button>
        </form>

        {success && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 text-center bg-green-600 text-white py-3 px-6 rounded-xl shadow-lg"
          >
            ✅ Message Sent Successfully!
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
