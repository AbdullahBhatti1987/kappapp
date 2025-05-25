// import React, { createContext, ReactNode, useContext, useState } from 'react'

// type Product = {
//   _id: string
//   name: string
//   price: number
//   imageUrl?: string
// }

// type CartItem = Product & {
//   quantity: number
// }

// type CartContextType = {
//   cart: CartItem[]
//   addToCart: (product: Product) => void
//   removeFromCart: (productId: string) => void
//   clearCart: () => void
// }

// const CartContext = createContext<CartContextType | undefined>(undefined)

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cart, setCart] = useState<CartItem[]>([])

//   const addToCart = (product: Product) => {
//     setCart((prev) => {
//       const existing = prev.find((item) => item._id === product._id)
//       if (existing) {
//         return prev.map((item) =>
//           item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
//         )
//       } else {
//         return [...prev, { ...product, quantity: 1 }]
//       }
//     })
//   }

//   const removeFromCart = (productId: string) => {
//     setCart((prev) => prev.filter((item) => item._id !== productId))
//   }

//   const clearCart = () => setCart([])

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   )
// }

// export const useCart = () => {
//   const context = useContext(CartContext)
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider')
//   }
//   return context
// }

// =====================================================================================================


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



// Example of CartContext.js// context/CartContext.js



// import React, { createContext, useContext, useEffect, useState } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import api from "@/utils/api";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   // Load cart from AsyncStorage or API
//   const loadCart = async () => {
//     try {
//       const localCart = await AsyncStorage.getItem("cart");
//       if (localCart !== null) {
//         setCartItems(JSON.parse(localCart));
//       } else {
//         const res = await api.get("/cart");
//         const serverCart = Array.isArray(res.data) ? res.data : res.data.cart || [];
//         setCartItems(serverCart);
//         await AsyncStorage.setItem("cart", JSON.stringify(serverCart));
//       }
//     } catch (err) {
//       console.error("Error loading cart:", err);
//     }
//   };

//   // Save cart to AsyncStorage
//   const saveCart = async (items) => {
//     try {
//       setCartItems(items);
//       await AsyncStorage.setItem("cart", JSON.stringify(items));
//       await api.post("/cart/sync", { cart: items });
//     } catch (err) {
//       console.error("Error saving cart:", err);
//     }
//   };

//   const addToCart = async (product) => {
//     const existing = cartItems.find((item) => item._id === product._id);
//     const updatedCart = existing
//       ? cartItems.map((item) =>
//           item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
//         )
//       : [...cartItems, { ...product, quantity: 1 }];
//     await saveCart(updatedCart);
//   };

//   const removeFromCart = async (id) => {
//     const updatedCart = cartItems.filter((item) => item._id !== id);
//     await saveCart(updatedCart);
//     try {
//       await api.delete(`/cart/${id}`);
//     } catch (err) {
//       console.error("API delete error:", err);
//     }
//   };

//   const updateQuantity = async (id, newQuantity) => {
//     const updatedCart = cartItems.map((item) =>
//       item._id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
//     );
//     await saveCart(updatedCart);
//   };

//   const getCartTotal = () => {
//     return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   };

//   useEffect(() => {
//     loadCart();
//   }, []);

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         getCartTotal,
//         loadCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);


// context/CartContext.js
import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import API from "@/utils/api";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const loadCart = async () => {
    try {
      const res = await API.get("/cart");
      const items = res.data.map(item => ({
        _id: item._id,
        productId: item.product._id,
        name: item.product.name,
        image: item.image || item.product.image,
        price: item.price || item.product.price,
        quantity: item.quantity
      }));
      setCartItems(items);
      await AsyncStorage.setItem("cart", JSON.stringify(items));
    } catch (err) {
      console.error("Error loading cart:", err);
    }
  };

  const addToCart = async (product) => {
    try {
      const existing = cartItems.find((item) => item.productId === product._id);
      if (existing) {
        await updateQuantity(existing._id, existing.quantity + 1);
      } else {
        const res = await API.post("/cart", {
          product: product._id,
          quantity: 1,
          price: product.price,
          image: product.image
        });
        await loadCart();
      }
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  };

  const removeFromCart = async (id) => {
    try {
      await API.delete(`/cart/${id}`);
      await loadCart();
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  const updateQuantity = async (id, quantity) => {
    try {
      await API.put(`/cart/${id}`, { quantity });
      await loadCart();
    } catch (err) {
      console.error("Error updating quantity:", err);
    }
  };

  const getCartTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        loadCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// export const useCart = () => useContext(CartContext);
