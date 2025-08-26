import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import paths from "../data/paths.json";
import Card from "../components/Card";
import { motion } from "framer-motion";

// Fix Leaflet marker images
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function Paths() {
  const [selectedPath, setSelectedPath] = useState(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] w-full overflow-hidden">
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
            className="text-center text-white px-4 sm:px-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 drop-shadow-lg">
              🚩 Paths & Parikrama
            </h1>
            <p className="text-base sm:text-lg md:text-xl drop-shadow max-w-2xl mx-auto">
              Discover sacred routes and experience the divine journey of Braj Parikrama.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Paths Cards Section */}
      <section className="container py-10 sm:py-12 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 text-gray-800">
          Paths & Parikrama Routes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {paths.map((p) => (
            <Card
              key={p.id}
              className="flex flex-col rounded-2xl overflow-hidden shadow-lg bg-white/80 backdrop-blur-md hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Mini Map */}
              <div className="h-40 sm:h-48 w-full overflow-hidden rounded-t-2xl shadow-inner">
                <MapContainer
                  center={p.coords[0]}
                  zoom={13}
                  style={{ height: "100%", width: "100%" }}
                  scrollWheelZoom={false}
                  dragging={false}
                  doubleClickZoom={false}
                  zoomControl={false}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                  />
                  <Polyline positions={p.coords} color="blue" />
                  <Marker position={p.coords[0]}>
                    <Popup className="text-sm">{p.name} Start</Popup>
                  </Marker>
                  <Marker position={p.coords[p.coords.length - 1]}>
                    <Popup className="text-sm">{p.name} End</Popup>
                  </Marker>
                </MapContainer>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">
                  {p.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Distance: {p.distance_km} km
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  {p.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedPath(p)}
                  className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Details
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Fullscreen Map Modal */}
        {selectedPath && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-3 sm:p-4">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-5xl relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedPath(null)}
                className="absolute top-3 right-3 z-10 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600"
              >
                ✕
              </button>
              {/* Large Map */}
              <MapContainer
                center={selectedPath.coords[0]}
                zoom={14}
                style={{ height: "75vh", width: "100%" }}
                scrollWheelZoom={true}
                dragging={true}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; OpenStreetMap contributors"
                />
                <Polyline positions={selectedPath.coords} color="red" weight={4} />
                <Marker position={selectedPath.coords[0]}>
                  <Popup>Start</Popup>
                </Marker>
                <Marker position={selectedPath.coords[selectedPath.coords.length - 1]}>
                  <Popup>End</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
