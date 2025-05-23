import React from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useCart } from "@/context/CartContext";

const CartItem = ({ item, onDelete, updateQuantity }) => (
  <View style={itemStyles.container}>
    <Image source={{ uri: item.image }} style={itemStyles.image} />
    <View style={itemStyles.details}>
      <Text style={itemStyles.name}>{item.name}</Text>
      <Text style={itemStyles.price}>${item.price.toFixed(2)}</Text>
      <View style={itemStyles.quantityContainer}>
        <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity - 1)}>
          <Text style={itemStyles.quantityButton}>-</Text>
        </TouchableOpacity>
        <Text style={itemStyles.quantity}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity + 1)}>
          <Text style={itemStyles.quantityButton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
    <TouchableOpacity onPress={() => onDelete(item.id)}>
      <Text style={itemStyles.deleteText}>✕</Text>
    </TouchableOpacity>
  </View>
);

export default function CartScreen() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getCartTotal,
  } = useCart();

  return (
    <LinearGradient colors={["#c4def6", "#1273de"]} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.heading}>My Cart</Text>

        {cartItems.length === 0 ? (
          <Text style={styles.emptyText}>Your cart is empty</Text>
        ) : (
          <>
            <FlatList
              data={cartItems}
              keyExtractor={(item,index) => index.toString()}
              renderItem={({ item }) => (
                <CartItem
                  item={item}
                  onDelete={removeFromCart}
                  updateQuantity={updateQuantity}
                />
              )}
            />
            <View style={styles.totalBar}>
              <Text style={styles.totalText}>Total: ${getCartTotal().toFixed(2)}</Text>
              <TouchableOpacity style={styles.checkoutButton}>
                <Text style={styles.checkoutText}>Proceed to Checkout</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    marginTop: 50,
  },
  totalBar: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: "#1273de",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  checkoutText: {
    color: "white",
    fontWeight: "bold",
  },
});

const itemStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  name: {
    fontWeight: "bold",
  },
  price: {
    color: "#666",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  quantityButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  deleteText: {
    fontSize: 18,
    color: "red",
  },
});

CartScreen.js


// import CartItemCard from "@/components/cart/CartItemCard";
// import { useCart } from "@/context/CartContext";
// import React from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
// } from "react-native";

// const CartScreen = () => {
//   const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

//   return (
//     <View style={styles.container}>
//       {cartItems === 0 ? (
//         <Text style={styles.emptyText}>Your cart is empty</Text>
//       ) : (
//         <>
//           <FlatList
//             data={cartItems}
//             keyExtractor={(item, index) => index.toString()}
//             renderItem={({ item }) => (
//               <CartItemCard
//                 item={item}
//                 onDelete={removeFromCart}
//                 updateQuantity={updateQuantity}
//               />
//             )}
//           />
//           <View style={styles.totalBar}>
//             <Text style={styles.totalText}>
//               Total: ${getCartTotal().toFixed(2)}
//             </Text>
//             <TouchableOpacity style={styles.checkoutButton}>
//               <Text style={styles.checkoutText}>Proceed to Checkout</Text>
//             </TouchableOpacity>
//           </View>
//         </>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   emptyText: {
//     fontSize: 18,
//     textAlign: "center",
//     marginTop: 20,
//   },
//   cartItem: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: "#eee",
//   },
//   itemImage: {
//     width: 50,
//     height: 50,
//     resizeMode: "contain",
//   },
//   itemDetails: {
//     flex: 1,
//     marginLeft: 10,
//   },
//   itemTitle: {
//     fontSize: 16,
//   },
//   itemPrice: {
//     fontSize: 14,
//     color: "#888",
//   },
//   quantityContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 5,
//   },
//   quantityButton: {
//     fontSize: 18,
//     paddingHorizontal: 10,
//     backgroundColor: "#ddd",
//     borderRadius: 20,
//   },
//   quantity: {
//     marginHorizontal: 10,
//     fontSize: 16,
//   },
//   removeButton: {
//     backgroundColor: "#ff4444",
//     padding: 5,
//     borderRadius: 4,
//   },
//   removeButtonText: {
//     color: "white",
//   },
//   totalContainer: {
//     marginTop: 20,
//     borderTopWidth: 1,
//     borderTopColor: "#eee",
//     paddingTop: 10,
//     alignItems: "flex-end",
//   },
//   totalText: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });

// export default CartScreen;
