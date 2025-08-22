import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { motion } from 'framer-motion';

export default function Cart() {
  const { items, removeFromCart, updateQty, cartTotal } = useCart();

  if (items.length === 0)
    return (
      <section className="container py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-6">Looks like you haven’t added anything yet.</p>
        <Link to="/braj-ki-raj" className="btn-primary px-6 py-3 text-lg">
          Go to Store
        </Link>
      </section>
    );

  return (
    <section className="container py-10 max-w-4xl">
      <h2 className="text-3xl font-bold mb-8 text-center">Your Cart</h2>
      <div className="space-y-4">
        {items.map((it) => (
          <motion.div
            key={it.id}
            className="flex items-center gap-4 card p-4 rounded-2xl shadow-md bg-white/50 backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={it.image}
              alt={it.name}
              className="w-24 h-20 object-cover rounded-xl border border-gray-200"
            />
            <div className="flex-1">
              <p className="font-semibold text-lg">{it.name}</p>
              <p className="text-gray-600 mt-1">₹{it.price}</p>
            </div>
            <input
              type="number"
              min="1"
              value={it.qty}
              onChange={(e) => updateQty(it.id, Number(e.target.value))}
              className="w-20 border rounded-xl px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button
              onClick={() => removeFromCart(it.id)}
              className="px-4 py-2 rounded-xl bg-red-100 text-red-700 hover:bg-red-200 transition-colors font-semibold"
            >
              Remove
            </button>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 bg-white/40 backdrop-blur-md p-6 rounded-2xl shadow-lg">
        <p className="text-xl md:text-2xl font-extrabold">
          Total: <span className="text-orange-600">₹{cartTotal}</span>
        </p>
        <Link
          to="/checkout"
          className="btn-primary px-6 py-3 text-lg hover:scale-105 transition-transform"
        >
          Checkout
        </Link>
      </div>
    </section>
  );
}
