import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { motion } from 'framer-motion';

export default function Checkout() {
  const { cartTotal } = useCart();
  const [form, setForm] = useState({ name: '', address: '', city: '', pincode: '', phone: '' });
  const [paymentMethod, setPaymentMethod] = useState('cod'); // 'cod' or 'upi'

  const handle = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const pay = (e) => {
    e.preventDefault();
    if(paymentMethod === 'cod') {
      alert(`Order placed with Cash on Delivery! Amount: ₹${cartTotal}`);
    } else {
      alert(`Redirecting to UPI/Online Payment Gateway for ₹${cartTotal}`);
      // Yaha aap future me real payment gateway integrate kar sakte ho
    }
  };

  return (
    <section className="container py-16 max-w-3xl">
      <h2 className="text-3xl font-bold mb-8 text-center">Checkout</h2>

      <motion.form
        onSubmit={pay}
        className="glass rounded-3xl p-8 space-y-6 bg-white/40 backdrop-blur-md shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* User Details */}
        <input
          className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handle}
          required
        />
        <input
          className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handle}
          required
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handle}
            required
          />
          <input
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            name="pincode"
            placeholder="Pincode"
            value={form.pincode}
            onChange={handle}
            required
          />
        </div>
        <input
          className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handle}
          required
        />

        {/* Payment Method */}
        <div className="space-y-2">
          <p className="font-semibold">Select Payment Method:</p>
          <div className="flex gap-4">
            <label className={`flex-1 p-3 border rounded-xl text-center cursor-pointer transition-colors ${paymentMethod==='cod' ? 'bg-orange-500 text-white' : 'bg-white text-gray-800 hover:bg-orange-100'}`}>
              <input type="radio" name="payment" value="cod" checked={paymentMethod==='cod'} onChange={()=>setPaymentMethod('cod')} className="hidden"/>
              Cash on Delivery
            </label>
            <label className={`flex-1 p-3 border rounded-xl text-center cursor-pointer transition-colors ${paymentMethod==='upi' ? 'bg-orange-500 text-white' : 'bg-white text-gray-800 hover:bg-orange-100'}`}>
              <input type="radio" name="payment" value="upi" checked={paymentMethod==='upi'} onChange={()=>setPaymentMethod('upi')} className="hidden"/>
              UPI / Online Payment
            </label>
          </div>
        </div>

        {/* Place Order Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold py-3 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform text-lg"
        >
          {paymentMethod==='cod' ? 'Place Order' : 'Proceed to Pay'}
        </button>

        <p className="text-center text-gray-600 mt-2">
          Total Amount: <span className="font-extrabold text-orange-600">₹{cartTotal}</span>
        </p>
      </motion.form>
    </section>
  );
}
