import { useState } from 'react'
import Card from '../components/Card'
import hotels from '../data/hotels.json'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function Hotels() {
  const [selectedHotel, setSelectedHotel] = useState(null)
  const [bookingType, setBookingType] = useState(null) // "hotel" or "package"

  const handleBooking = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const booking = {
      name: formData.get("name"),
      email: formData.get("email"),
      date: formData.get("date"),
      guests: formData.get("guests"),
      hotel: selectedHotel.name,
      type: bookingType
    }
    alert(`🎉 Booking Confirmed!\n\nType: ${booking.type}\nHotel: ${booking.hotel}\nName: ${booking.name}\nDate: ${booking.date}\nGuests: ${booking.guests}`)
    setSelectedHotel(null)
    setBookingType(null)
  }

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
              🏨 Comfortable Hotels in Braj
            </h1>
            <p className="text-lg md:text-xl drop-shadow">
              Book your stay with top-rated hotels and enjoy a peaceful Yatra experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hotels Section */}
      <section className="py-16 relative">
        {/* Background Gradient (same as Temples) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#fff7e6,_#ffecd1,_#ffe6e6)] -z-10"></div>
        {/* Subtle Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-20 -z-10"></div>

        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-center mb-12 relative inline-block">
          <span className="relative z-10">🏨 Hotels</span>
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-pink-400 via-orange-500 to-red-500 rounded-full shadow-md"></span>
        </h2>

        {/* Grid */}
        <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {hotels.map((h, index) => (
            <motion.div
              key={h.id}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
            >
              <Card className="bg-white/60 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group border border-gray-100 relative">
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img
                    src={h.image}
                    alt={h.name}
                    className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-500 transition-colors duration-300">
                    {h.name}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium">{h.location}</p>
                  <p className="text-gray-700 text-sm mt-2 line-clamp-3">
                    From <span className="font-semibold text-pink-500">₹{h.price}</span> • {h.amenities.join(', ')}
                  </p>

                  <button
                    onClick={() => setSelectedHotel(h)}
                    className="mt-4 w-full py-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-semibold rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
                  >
                    Book Now
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* AnimatePresence for Modals */}
        <AnimatePresence>
          {(selectedHotel && !bookingType) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md relative border border-purple-200"
              >
                <button onClick={() => setSelectedHotel(null)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700">
                  <X size={24} />
                </button>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Book <span className="text-purple-600">{selectedHotel.name}</span>
                </h3>
                <div className="space-y-4">
                  <button
                    onClick={() => setBookingType("hotel")}
                    className="w-full py-3 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold rounded-2xl shadow-md hover:shadow-xl transition"
                  >
                    🏨 Only Hotel
                  </button>
                  <button
                    onClick={() => setBookingType("package")}
                    className="w-full py-3 bg-gradient-to-r from-purple-400 to-purple-600 text-white font-semibold rounded-2xl shadow-md hover:shadow-xl transition"
                  >
                    🎁 Package
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Hotel Booking Form */}
          {(selectedHotel && bookingType === "hotel") && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-lg relative border border-yellow-200"
              >
                <button onClick={() => setBookingType(null)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700">
                  <X size={24} />
                </button>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  🏨 Hotel Booking – <span className="text-yellow-600">{selectedHotel.name}</span>
                </h3>
                <form onSubmit={handleBooking} className="space-y-4">
                  <input type="text" name="name" placeholder="Your Name" className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-yellow-400" required />
                  <input type="email" name="email" placeholder="Email" className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-yellow-400" required />
                  <input type="date" name="date" className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-yellow-400" required />
                  <input type="number" name="guests" min="1" placeholder="Guests" className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-yellow-400" required />
                  <button type="submit" className="w-full py-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-semibold rounded-2xl shadow-md hover:shadow-xl transition">
                    ✅ Confirm Booking
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}

          {/* Package Booking */}
          {(selectedHotel && bookingType === "package") && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-lg relative border border-purple-200"
              >
                <button onClick={() => setBookingType(null)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700">
                  <X size={24} />
                </button>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  🎁 Package – <span className="text-purple-600">{selectedHotel.name}</span>
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>🏨 Hotel Stay</li>
                  <li>🍴 Breakfast + Dinner</li>
                  <li>🚖 Pickup & Drop (Cab/Auto)</li>
                  <li>🛕 Local Temple Darshan Guide</li>
                </ul>
                <button
                  onClick={() => alert(`🎉 Package Booked at ${selectedHotel.name}!`)}
                  className="w-full py-3 bg-gradient-to-r from-purple-400 to-purple-600 text-white font-semibold rounded-2xl shadow-md hover:shadow-xl transition"
                >
                  ✅ Confirm Package
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  )
}
