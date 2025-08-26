import { useState } from "react";
import { motion } from "framer-motion";
import hotels from "../data/hotels.json";
import temples from "../data/temples.json";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    people: 1,
    notes: "",
    type: "",
    package: "",
    darshanTime: "",
    hotel: "",
    transport: "",
    temple: "",
  });

  const [success, setSuccess] = useState(false);

  const handle = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
    setForm({
      name: "",
      phone: "",
      date: "",
      people: 1,
      notes: "",
      type: "",
      package: "",
      darshanTime: "",
      hotel: "",
      transport: "",
      temple: "",
    });
  };

  // Packages Data
  const packages = [
    {
      id: "basic",
      name: "Basic Package",
      price: 2999,
      details: [
        "1 Night Stay in Budget Hotel",
        "Breakfast & Dinner",
        "Temple Visit (2 Temples)",
        "Local Transport Included",
      ],
    },
    {
      id: "premium",
      name: "Premium Package",
      price: 5999,
      details: [
        "2 Nights Stay in 3-Star Hotel",
        "All Meals Included",
        "Temple Visit (5 Temples)",
        "Guided Braj Darshan Tour",
        "AC Transport",
      ],
    },
    {
      id: "luxury",
      name: "Luxury Package",
      price: 9999,
      details: [
        "3 Nights Stay in 5-Star Hotel",
        "All Meals + Snacks",
        "Temple Visit (All Major Temples)",
        "Dedicated Guide",
        "Luxury AC Transport",
        "Evening Cultural Program",
      ],
    },
  ];

  // Other Booking Data
  const darshanDetails = {
    timings: ["Morning (6 AM - 11 AM)", "Evening (5 PM - 9 PM)"],
    price: 500,
  };

  const transportDetails = {
    options: ["Cab", "Auto", "Bus", "Bike", "E-Rickshaw"],
    price: 200,
  };

  // Price Calculation
  let totalPrice = 0;
  if (form.type === "package" && form.package) {
    const selected = packages.find((p) => p.id === form.package);
    totalPrice = selected ? selected.price * form.people : 0;
  } else if (form.type === "darshan" && form.darshanTime) {
    totalPrice = form.people * darshanDetails.price;
  } else if (form.type === "hotel" && form.hotel) {
    const selectedHotel = hotels.find((h) => h.id === form.hotel);
    totalPrice = selectedHotel ? selectedHotel.price * form.people : 0;
  } else if (form.type === "transport" && form.transport) {
    totalPrice = form.people * transportDetails.price;
  }

  return (
    <div className="relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#fff7e6,_#ffecd1,_#ffe6e6)] -z-10"></div>
      {/* Subtle Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-20 -z-10"></div>

      {/* Hero Section */}
      <section className="relative h-[40vh] sm:h-[50vh] md:h-[70vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1800&auto=format&fit=crop"
          alt="Braj"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white px-6"
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              🕉️ Book Your Braj Yatra
            </h1>
            <p className="text-sm sm:text-base md:text-xl drop-shadow">
              Choose your Darshan, Hotel, Package, or Transport and submit your booking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="container px-4 py-8 sm:py-12 flex justify-center">
        <div className="w-full max-w-2xl relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">
            Darshan / Stay Booking
          </h2>

          <form
            onSubmit={submit}
            className="glass bg-white/40 backdrop-blur-md rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl transition-all hover:shadow-2xl"
          >
            {/* Name + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Full Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handle}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 sm:py-3"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Phone
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handle}
                  pattern="[0-9]{10}"
                  title="Enter a valid 10 digit number"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 sm:py-3"
                  required
                />
              </div>
            </div>

            {/* Date + People */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Date
                </label>
                <input
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handle}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 sm:py-3"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  People
                </label>
                <input
                  name="people"
                  type="number"
                  min="1"
                  value={form.people}
                  onChange={handle}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 sm:py-3"
                />
              </div>
            </div>

            {/* Booking Type */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Booking Type
              </label>
              <select
                name="type"
                value={form.type}
                onChange={handle}
                className="w-full border border-gray-300 rounded-xl px-4 py-2 sm:py-3"
                required
              >
                <option value="">Select Booking Type</option>
                <option value="darshan">Darshan</option>
                <option value="hotel">Hotel Stay</option>
                <option value="package">Package</option>
                <option value="transport">Transport</option>
              </select>
            </div>

            {/* Darshan */}
            {form.type === "darshan" && (
              <div className="p-4 border rounded-xl bg-gray-50 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">Select Darshan Time</h3>
                  <select
                    name="darshanTime"
                    value={form.darshanTime}
                    onChange={handle}
                    className="w-full border mt-2 rounded-xl px-4 py-2 sm:py-3"
                    required
                  >
                    <option value="">-- Choose Timing --</option>
                    {darshanDetails.timings.map((t, i) => (
                      <option key={i} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  <p className="mt-2 text-gray-600">
                    Price: ₹{darshanDetails.price} per person
                  </p>
                </div>

                {/* Temple Dropdown */}
                <div>
                  <h4 className="font-semibold text-gray-700">Select Temple</h4>
                  <select
                    name="temple"
                    value={form.temple || ""}
                    onChange={handle}
                    className="w-full border mt-2 rounded-xl px-4 py-2 sm:py-3"
                    required
                  >
                    <option value="">-- Choose Temple --</option>
                    {temples.map((temple) => (
                      <option key={temple.id} value={temple.id}>
                        {temple.name} ({temple.location})
                      </option>
                    ))}
                  </select>

                  {/* Temple Details */}
                  {form.temple && (
                    <div className="mt-4 p-4 border rounded-xl bg-white shadow">
                      {(() => {
                        const selectedTemple = temples.find(
                          (t) => t.id === form.temple
                        );
                        return selectedTemple ? (
                          <div>
                            <h3 className="font-semibold text-lg">
                              {selectedTemple.name}
                            </h3>
                            <p className="text-gray-600">
                              📍 {selectedTemple.location}
                            </p>
                            <p className="mt-2 text-sm text-gray-700">
                              {selectedTemple.description}
                            </p>
                            {selectedTemple.image && (
                              <img
                                src={selectedTemple.image}
                                alt={selectedTemple.name}
                                className="mt-3 rounded-lg w-full h-40 object-cover"
                              />
                            )}
                          </div>
                        ) : null;
                      })()}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Hotel */}
            {form.type === "hotel" && (
              <div className="p-4 border rounded-xl bg-gray-50">
                <h3 className="font-semibold text-lg">Select Hotel</h3>
                <select
                  name="hotel"
                  value={form.hotel}
                  onChange={handle}
                  className="w-full border mt-2 rounded-xl px-4 py-2 sm:py-3"
                  required
                >
                  <option value="">-- Choose Hotel --</option>
                  {hotels.map((h) => (
                    <option key={h.id} value={h.id}>
                      {h.name} - ₹{h.price}
                    </option>
                  ))}
                </select>

                {form.hotel && (
                  <div className="mt-4 p-4 border rounded-xl bg-white shadow">
                    {(() => {
                      const selected = hotels.find((h) => h.id === form.hotel);
                      return selected ? (
                        <div>
                          <h3 className="font-semibold text-lg">
                            {selected.name}
                          </h3>
                          <p className="text-gray-600">
                            Location: {selected.location}
                          </p>
                          <p className="text-gray-800 font-medium">
                            ₹{selected.price} / night
                          </p>
                          <p className="mt-2 text-sm text-gray-600">
                            Amenities: {selected.amenities.join(", ")}
                          </p>
                          <img
                            src={selected.image}
                            alt={selected.name}
                            className="mt-3 rounded-lg w-full h-40 object-cover"
                          />
                        </div>
                      ) : null;
                    })()}
                  </div>
                )}
              </div>
            )}

            {/* Transport */}
            {form.type === "transport" && (
              <div className="p-4 border rounded-xl bg-gray-50">
                <h3 className="font-semibold text-lg">Select Transport</h3>
                <select
                  name="transport"
                  value={form.transport}
                  onChange={handle}
                  className="w-full border mt-2 rounded-xl px-4 py-2 sm:py-3"
                  required
                >
                  <option value="">-- Choose Transport --</option>
                  {transportDetails.options.map((t, i) => (
                    <option key={i} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                <p className="mt-2 text-gray-600">
                  Price: ₹{transportDetails.price} per person
                </p>
              </div>
            )}

            {/* Package */}
            {form.type === "package" && (
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Select Package
                </label>
                <select
                  name="package"
                  value={form.package}
                  onChange={handle}
                  className="w-full border rounded-xl px-4 py-2 sm:py-3"
                  required
                >
                  <option value="">-- Choose Package --</option>
                  {packages.map((pkg) => (
                    <option key={pkg.id} value={pkg.id}>
                      {pkg.name} - ₹{pkg.price}
                    </option>
                  ))}
                </select>

                {form.package && (
                  <div className="mt-4 p-4 border rounded-xl bg-gray-50">
                    <h3 className="font-semibold text-lg">
                      {packages.find((p) => p.id === form.package)?.name} (₹
                      {packages.find((p) => p.id === form.package)?.price}/person)
                    </h3>
                    <ul className="mt-2 list-disc list-inside text-gray-700">
                      {packages
                        .find((p) => p.id === form.package)
                        ?.details.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Notes
              </label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handle}
                rows="4"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 sm:py-3 resize-none"
              />
            </div>

            {/* Price */}
            {form.people > 0 && (
              <div className="text-lg font-semibold text-gray-800">
                Estimated Price:{" "}
                <span className="text-blue-600">₹{totalPrice}</span>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              Send Request
            </button>
          </form>

          {/* Success Modal */}
          {success && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-3xl">
              <div className="bg-white p-6 rounded-2xl shadow-xl text-center">
                <h3 className="text-xl font-bold text-green-600 mb-2">
                  ✅ Booking Submitted
                </h3>
                <p className="text-gray-700">
                  Thank you! We will contact you shortly.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
