
import { createContext, useContext, useMemo, useState } from 'react'

const CartCtx = createContext()

export function CartProvider({children}){
  const [items, setItems] = useState([])

  const addToCart = (p) => {
    setItems(prev => {
      const idx = prev.findIndex(i => i.id === p.id)
      if (idx !== -1){
        const copy = [...prev]
        copy[idx] = {...copy[idx], qty: copy[idx].qty + 1}
        return copy
      }
      return [...prev, { id: p.id, name: p.name, price: p.price, image: p.image, qty: 1 }]
    })
  }
  const removeFromCart = (id) => setItems(prev => prev.filter(i => i.id !== id))
  const updateQty = (id, qty) => setItems(prev => prev.map(i => i.id===id?{...i, qty: Math.max(1, qty)}:i))

  const totals = useMemo(()=>{
    const count = items.reduce((a,b)=>a+b.qty,0)
    const sum = items.reduce((a,b)=>a+b.qty*b.price,0)
    return { count, sum }
  }, [items])

  const value = {
    items,
    addToCart,
    removeFromCart,
    updateQty,
    cartCount: totals.count,
    cartTotal: totals.sum
  }
  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>
}

export const useCart = () => useContext(CartCtx)
