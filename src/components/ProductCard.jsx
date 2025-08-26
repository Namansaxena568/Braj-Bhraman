import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="group card overflow-hidden bg-white/50 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 rounded-t-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <h3 className="font-semibold text-lg sm:text-xl">{product.name}</h3>
        <p className="text-sm sm:text-base text-gray-600 mt-1 line-clamp-2">{product.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-extrabold text-lg sm:text-xl text-gray-800">₹{product.price}</span>
          <div className="flex gap-2">
            <Link
              to={`/product/${product.id}`}
              className="px-3 py-1 sm:px-4 sm:py-2 rounded-xl bg-gray-200 hover:bg-gray-300 text-sm sm:text-base transition"
            >
              View
            </Link>
            <button
              onClick={() => addToCart(product)}
              className="px-3 py-1 sm:px-4 sm:py-2 rounded-xl bg-braj-purple text-white hover:opacity-90 text-sm sm:text-base transition"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
