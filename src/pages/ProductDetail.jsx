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
      <section className="container py-10">
        <p>Product not found.</p>
      </section>
    );

  return (
    <section className="container py-10 grid md:grid-cols-2 gap-8">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-96 object-cover rounded-3xl"
      />
      <div ref={ref}>
        <h2 className="text-3xl font-extrabold">{product.name}</h2>
        <p className="mt-2 text-gray-700">{product.description}</p>

        {/* Animated Price */}
        <p className="mt-4 text-2xl font-extrabold text-green-700">
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

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => addToCart(product)}
            className="btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
