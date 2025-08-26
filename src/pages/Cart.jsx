import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { motion } from 'framer-motion';

export default function Cart() {
  const { items, removeFromCart, updateQty, cartTotal } = useCart();

  if (items.length === 0)
    return (
      <section className="container py-20 text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-5 sm:mb-6 text-sm sm:text-base">
          Looks like you haven’t added anything yet.
        </p>
        <Link
          to="/braj-ki-raj"
          className="btn-primary px-5 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg"
        >
          Go to Store
        </Link>
      </section>
    );

  return (
    <section className="container py-10 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-4xl">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Your Cart</h2>

      {/* Cart Items */}
      <div className="space-y-4">
        {items.map((it) => (
          <motion.div
            key={it.id}
            className="flex flex-col sm:flex-row sm:items-center gap-4 card p-4 rounded-2xl shadow-md bg-white/60 backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Product Image */}
            <img
              src={it.image}
              alt={it.name}
              className="w-full sm:w-24 h-36 sm:h-20 object-cover rounded-xl border border-gray-200"
            />

            {/* Product Info */}
            <div className="flex-1">
              <p className="font-semibold text-base sm:text-lg">{it.name}</p>
              <p className="text-gray-600 mt-1 text-sm sm:text-base">₹{it.price}</p>
            </div>

            {/* Qty & Remove (stacked on mobile) */}
            <div className="flex items-center sm:flex-row flex-col gap-3 sm:gap-4">
              <input
                type="number"
                min="1"
                value={it.qty}
                onChange={(e) => updateQty(it.id, Number(e.target.value))}
                className="w-20 border rounded-lg px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm sm:text-base"
              />
              <button
                onClick={() => removeFromCart(it.id)}
                className="px-4 py-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition-colors font-semibold text-sm sm:text-base"
              >
                Remove
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Cart Total + Checkout */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-white/50 backdrop-blur-md p-5 sm:p-6 rounded-2xl shadow-lg">
        <p className="text-lg sm:text-xl md:text-2xl font-extrabold text-center md:text-left">
          Total: <span className="text-orange-600">₹{cartTotal}</span>
        </p>
        <Link
          to="/checkout"
          className="btn-primary w-full md:w-auto text-center px-5 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg hover:scale-105 transition-transform"
        >
          Checkout
        </Link>
      </div>
    </section>
  );
}
