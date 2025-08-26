// src/pages/Transport.jsx
import { motion } from "framer-motion";

export default function Transport() {
  const transports = [
    { id: 1, name: "Cabs", img: "..//image/taxi.jpg" },
    { id: 2, name: "Auto", img: "../image/kuku.webp" },
    { id: 3, name: "Bus", img: "../image/122327819.avif" },
    { id: 4, name: "Bike", img: "../image/WhatsApp-Image.webp" },
    { id: 5, name: "E-Riksha", img: "../image/electric-wire-500x500.webp" },
  ];

  return (
    <div className="relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#fff7e6,_#ffecd1,_#ffe6e6)] -z-10"></div>
      {/* Subtle Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-20 -z-10"></div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1800&auto=format&fit=crop"
          alt="Transport"
          className="w-full h-[50vh] sm:h-[60vh] md:h-[75vh] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-2xl bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl text-center"
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-yellow-700 drop-shadow-lg">
              🚖 Braj Bhraman • Transport
            </h1>
            <p className="mt-3 sm:mt-4 text-gray-700 leading-relaxed text-base sm:text-lg">
              Choose your preferred mode of transport and explore{" "}
              <span className="font-semibold text-yellow-600">
                the holy Braj region
              </span>{" "}
              with ease and comfort.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Transport Cards */}
      <section className="w-full max-w-screen-xl mx-auto py-12 sm:py-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10"
        >
          {transports.map((t) => (
            <motion.div
              key={t.id}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.6 }}
              className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all"
            >
              {/* Image with overlay */}
              <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 text-center">
                <h3 className="font-bold text-lg sm:text-xl text-gray-800 group-hover:text-yellow-600 transition">
                  {t.name}
                </h3>
                <button className="mt-4 sm:mt-5 bg-gradient-to-r from-yellow-600 to-orange-500 text-white px-5 sm:px-6 py-2 rounded-full shadow-md hover:shadow-lg transition w-full sm:w-auto">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
