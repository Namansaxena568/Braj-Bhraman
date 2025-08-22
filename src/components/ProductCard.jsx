
import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'

export default function ProductCard({product}){
  const { addToCart } = useCart()
  return (
    <div className="group card overflow-hidden">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-2xl" />
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      <div className="mt-3">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-extrabold text-lg">₹{product.price}</span>
          <div className="flex gap-2">
            <Link to={`/product/${product.id}`} className="px-3 py-1 rounded-xl bg-gray-200 hover:bg-gray-300 text-sm">View</Link>
            <button onClick={()=>addToCart(product)} className="px-3 py-1 rounded-xl bg-braj-purple text-white hover:opacity-90 text-sm">Add</button>
          </div>
        </div>
      </div>
    </div>
  )
}
