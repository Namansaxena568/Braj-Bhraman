import Card from '../components/Card'
import data from '../data/temples.json'
import { motion } from 'framer-motion'

export default function Temples() {
  return (
    <>
    {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1800&auto=format&fit=crop"
          alt="Parikrama"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white px-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              🛕 Sacred Temples of Braj
            </h1>
            <p className="text-lg md:text-xl drop-shadow">
              Explore the divine temples of Braj and connect with spirituality like never before.
            </p>
          </motion.div>
        </div>
      </section>

    <section className="py-16 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#fff7e6,_#ffecd1,_#ffe6e6)] -z-10"></div>
      {/* Optional subtle pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-20 -z-10"></div>

      {/* Section Title */}
      <h2 className="text-4xl font-extrabold text-center mb-12 relative inline-block">
        <span className="relative z-10">⛩️ Temples</span>
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full shadow-md"></span>
      </h2>

      {/* Grid */}
      <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((t, index) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
          >
            <Card className="bg-white/70 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group border border-gray-100 relative">
              {/* Image with hover overlay */}
              <div className="relative overflow-hidden rounded-t-3xl">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-semibold text-lg md:text-xl">
                  Explore Temple
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
                  {t.name}
                </h3>
                <p className="text-sm text-gray-500 font-medium">{t.location}</p>
                <p className="text-gray-700 text-sm mt-2 line-clamp-3">{t.about}</p>

                {/* Optional Button */}
                <button className="mt-4 w-full py-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-semibold rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
                  Visit Now
                </button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
    </>
  )
}
