import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import products from "../data/products.json";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#fff7e6,_#ffecd1,_#ffe6e6)] -z-10"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-20 -z-10"></div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1800&auto=format&fit=crop"
          alt="Shop"
          className="w-full h-[55vh] sm:h-[65vh] md:h-[75vh] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-lg sm:max-w-2xl bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-yellow-700 drop-shadow-lg">
              🛍️ Braj ki Raj • Store
            </h1>
            <p className="mt-3 sm:mt-4 text-gray-700 leading-relaxed text-base sm:text-lg">
              Explore our divine collection of{" "}
              <span className="font-semibold text-yellow-600">authentic Braj products</span> — handicrafts, spiritual items & more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section ref={ref} className="container py-12 sm:py-16 px-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-10 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 relative inline-block">
            ✨ Featured Products
            <span className="absolute -bottom-2 left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0 w-20 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full shadow-md"></span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"  // inView ke saath nahi, direct visible
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <ProductCard product={p} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
