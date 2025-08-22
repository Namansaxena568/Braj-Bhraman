import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { FaHotel, FaStore, FaTree, FaOm } from 'react-icons/fa';
import BrajGallery from './BrajGallery';
import Contact from './Contact';
import { useEffect, useState, useRef } from 'react';

// Animated Stat Component
function AnimatedStat({ value, label, color }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let target = parseInt(value.replace(/\D/g, "")); // numeric value
      const duration = 4000; // 4 seconds
      const fps = 60;
      const totalSteps = Math.ceil((duration / 1000) * fps);
      const increment = Math.ceil(target / totalSteps);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCount(current);
      }, duration / totalSteps);

      return () => clearInterval(timer);
    } else {
      setCount(0); 
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      className="card hover:scale-105 transition-transform text-center p-6 bg-white/50 rounded-2xl shadow-md"
    >
      <p className={`text-3xl font-extrabold ${color}`}>
        {value.includes("%") ? `${count}%` : count}
      </p>
      <p className="text-gray-600 mt-2">{label}</p>
    </motion.div>
  );
}

// About Stats Container
function AboutStats() {
  const stats = [
    { value: "50+", label: "Temples", color: "text-orange-700" },
    { value: "20+", label: "Hotels", color: "text-blue-700" },
    { value: "6", label: "Parikrama Paths", color: "text-green-700" },
    { value: "100%", label: "Local Products", color: "text-purple-700" }
  ];

  return (
    <div className="grid grid-cols-2 gap-6">
      {stats.map((stat, i) => (
        <AnimatedStat
          key={i}
          value={stat.value}
          label={stat.label}
          color={stat.color}
        />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#fff7e6,_#ffecd1,_#ffe6e6)] -z-10"></div>
      {/* Subtle Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-20 -z-10"></div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1800&auto=format&fit=crop"
          alt="Braj"
          className="w-full h-[65vh] md:h-[75vh] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-orange-800 drop-shadow">
              Welcome to Braj Bhraman
            </h1>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Discover sacred temples, stay in serene hotels, explore scenic paths, and shop authentic Braj products.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link to="/temples" className="btn-secondary">
                Explore Temples
              </Link>
              <Link to="/braj-ki-raj" className="btn-primary">
                Visit Store
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="container -mt-10 md:-mt-14 relative z-30">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { to: "/temples", icon: <FaOm className="text-orange-600 text-4xl mb-3" />, title: "Temples", desc: "Know important mandirs of Braj." },
            { to: "/hotels", icon: <FaHotel className="text-blue-600 text-4xl mb-3" />, title: "Hotels", desc: "Stay options with basic details." },
            { to: "/paths", icon: <FaTree className="text-green-600 text-4xl mb-3" />, title: "Paths & Parikrama", desc: "Popular routes and distances." },
            { to: "/braj-ki-raj", icon: <FaStore className="text-purple-600 text-4xl mb-3" />, title: "Local Store", desc: "Authentic products from Braj." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={item.to}
                className="block p-6 text-center rounded-xl backdrop-blur-md bg-white/60 shadow-lg border border-gray-200 hover:scale-105 hover:shadow-2xl transition-all group"
                style={{ listStyle: "none" }}
              >
                {item.icon}
                <h3 className="text-lg font-bold group-hover:text-orange-600 transition-colors">{item.title}</h3>
                <p className="text-gray-600 mt-1 text-sm">{item.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Braj Gallery Section */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-10 relative inline-block">
          <span className="relative z-10">📸 Braj Gallery</span>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></span>
        </h2>
        <BrajGallery />
      </section>

      {/* About Section */}
      <section className="container py-16 bg-white/60 backdrop-blur-md rounded-3xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div className="bg-gradient-to-br from-orange-100 to-yellow-50 rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-orange-800 relative inline-block">
              <span className="relative z-10">About Braj Brahman</span>
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Braj Brahman is your one-stop portal for planning a complete Braj Yatra.  
              Whether you are visiting for spiritual awakening, cultural exploration, or peaceful relaxation, 
              we bring every essential detail to your fingertips. From the rich heritage of ancient temples 
              to comfortable and affordable hotel stays, from sacred parikrama routes to authentic local 
              handicrafts — we cover it all.  
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Our goal is to make your journey not only devotional but also well-organized.  
              We provide carefully curated information, verified locations, and tips to make your stay 
              safe and memorable. Braj is not just a destination, it's an emotion — and we’re here to help 
              you feel every moment of it.
            </p>
          </div>
          <AboutStats />
        </motion.div>
      </section>

      {/* Featured Section */}
      <section className="mt-16 container pb-16">
        <h2 className="text-3xl font-bold text-center mb-10 relative inline-block">
          <span className="relative z-10">🌟 Featured Highlights</span>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { img: "../image/uttarakhand-1.jpg", title: "Morning Aarti at Yamuna", desc: "Experience the divine morning chants by the sacred Yamuna river." },
            { img: "../image/d61bdf.jpg", title: "Govardhan Parikrama", desc: "Walk the sacred path around the holy Govardhan hill." },
            { img: "../image/8394f44f.webp", title: "Local Handicrafts", desc: "Shop for handmade souvenirs from local artisans." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group border border-gray-100"
            >
              <div className="overflow-hidden rounded-t-2xl relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-52 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-semibold">
                  Learn More
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 mt-2">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Visit Braj Section */}
      <section className="container pb-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 relative inline-block">
            <span className="relative z-10">✨ Why Visit Braj?</span>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: "⛩️", title: "Sacred Temples", desc: "Over 50 temples steeped in history and devotion." },
              { icon: "🏨", title: "Comfortable Stays", desc: "Hotels and guesthouses for every budget." },
              { icon: "🌳", title: "Spiritual Walks", desc: "Peaceful parikrama paths surrounded by nature." },
              { icon: "🛍️", title: "Local Handicrafts", desc: "Authentic souvenirs from skilled artisans." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mt-1 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-30 mb-0 pb-0">
  <Contact />
</section>
    </div>
  );
}
