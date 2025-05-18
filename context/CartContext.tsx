import React, { createContext, ReactNode, useContext, useState } from 'react'

type Product = {
  _id: string
  name: string
  price: number
  imageUrl?: string
}

type CartItem = Product & {
  quantity: number
}

type CartContextType = {
  cart: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item._id === product._id)
      if (existing) {
        return prev.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        )
      } else {
        return [...prev, { ...product, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item._id !== productId))
  }

  const clearCart = () => setCart([])

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}




// import { useAuth } from './AuthContext'

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const { token } = useAuth()

//   const fetchCart = async () => {
//     const res = await axios.get('http://localhost:5000/api/cart', {
//       headers: { Authorization: token }
//     })
//     setCartItems(res.data)
//   }

//   const addToCart = async (product: Product) => {
//     const res = await axios.post(
//       'http://localhost:5000/api/cart',
//       {
//         productId: product.id,
//         title: product.title,
//         price: product.price,
//         image: product.image,
//         quantity: 1
//       },
//       { headers: { Authorization: token } }
//     )
//     fetchCart()
//   }

//   const removeFromCart = async (id: string) => {
//     await axios.delete(`http://localhost:5000/api/cart/${id}`, {
//       headers: { Authorization: token }
//     })
//     fetchCart()
//   }
// }
