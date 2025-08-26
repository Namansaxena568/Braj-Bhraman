import { useParams } from "react-router-dom";
import products from "../data/products.json";
import { useCart } from "../contexts/CartContext";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === String(id));
  const { addToCart } = useCart();

  // Animation trigger on scroll
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  if (!product)
    return (
      <section className="container py-10 px-4">
        <p>Product not found.</p>
      </section>
    );

  return (
    <section className="container py-8 sm:py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
      {/* Product Image */}
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl sm:rounded-2xl md:rounded-3xl shadow-md"
        />
      </div>

      {/* Product Details */}
      <div ref={ref} className="flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
          {product.name}
        </h2>
        <p className="mt-2 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
          {product.description}
        </p>

        {/* Animated Price */}
        <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-extrabold text-green-700">
          ₹
          {inView ? (
            <CountUp
              end={product.price}
              duration={2}
              separator=","
              decimals={0}
            />
          ) : (
            0
          )}
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => addToCart(product)}
            className="btn-primary w-full sm:w-auto"
          >
            Add to Cart
          </button>
          <button
            className="btn-secondary w-full sm:w-auto"
          >
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}
