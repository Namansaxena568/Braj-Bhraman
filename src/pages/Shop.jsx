import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import products from "../data/products.json";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  // Section in-view detect karne ke liye
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
     <div className="relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#fff7e6,_#ffecd1,_#ffe6e6)] -z-10"></div>
      {/* Subtle Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-20 -z-10"></div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10"></div>

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1800&auto=format&fit=crop"
          alt="Shop"
          className="w-full h-[65vh] md:h-[75vh] object-cover"
        />

        {/* Center Card */}
        <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl bg-white/90 backdrop-blur-md rounded-3xl p-10 shadow-2xl text-center"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-yellow-700 drop-shadow-lg">
              🛍️ Braj ki Raj • Store
            </h1>
            <p className="mt-4 text-gray-700 leading-relaxed text-lg">
              Explore our divine collection of{" "}
              <span className="font-semibold text-yellow-600">
                authentic Braj products
              </span>{" "}
              — handicrafts, spiritual items & more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section ref={ref} className="container py-16">
        <div className="flex items-end justify-between mb-10">
          <h2 className="section-title">✨ Featured Products</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <ProductCard product={p} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
