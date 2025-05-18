// import React from 'react'
// import { View, Text, FlatList, Button } from 'react-native'

// export default function CartScreen() {
//   // TODO: Connect this with cart context or state management
//   const cartItems = [] // Replace with real cart data

//   return (
//     <View style={{ flex: 1, padding: 10 }}>
//       <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Your Cart</Text>
//       {cartItems.length === 0 ? (
//         <Text>Your cart is empty.</Text>
//       ) : (
//         <FlatList
//           data={cartItems}
//           keyExtractor={(item) => item._id}
//           renderItem={({ item }) => (
//             <View style={{ padding: 10, borderBottomWidth: 1 }}>
//               <Text>{item.name}</Text>
//               <Text>Quantity: {item.quantity}</Text>
//               <Text>Price: ${item.price}</Text>
//             </View>
//           )}
//         />
//       )}
//       <Button title="Proceed to Checkout" onPress={() => alert('Checkout coming soon')} />
//     </View>
//   )
// }



import React from 'react'
import { View, Text, FlatList, Button } from 'react-native'
import { useCart } from '../context/CartContext'

export default function CartScreen() {
  const { cart, removeFromCart, clearCart } = useCart()

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Your Cart</Text>
      {cart.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <View style={{ padding: 10, borderBottomWidth: 1 }}>
                <Text>{item.name}</Text>
                <Text>Quantity: {item.quantity}</Text>
                <Text>Price: ${item.price}</Text>
                <Button title="Remove" onPress={() => removeFromCart(item._id)} />
              </View>
            )}
          />
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>
            Total: ${totalPrice.toFixed(2)}
          </Text>
          <Button title="Clear Cart" onPress={clearCart} />
          <Button title="Proceed to Checkout" onPress={() => alert('Checkout coming soon')} />
        </>
      )}
    </View>
  )
}
