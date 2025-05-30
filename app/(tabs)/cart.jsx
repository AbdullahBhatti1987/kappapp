// import React from "react";
// import {
//   FlatList,
//   View,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   Image,
// } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import { useCart } from "@/context/CartContext";
// import { colors } from "../style/colors";

// const CartItem = ({ item, onDelete, updateQuantity }) => (
//   <View style={itemStyles.container}>
//     <Image source={{ uri: item.image }} style={itemStyles.image} />
//     <View style={itemStyles.details}>
//       <Text style={itemStyles.name}>{item.name}</Text>
//       <Text style={itemStyles.price}>${item.price.toFixed(2)}</Text>
//       <View style={itemStyles.quantityContainer}>
//         <TouchableOpacity
//           onPress={() => updateQuantity(item.id, item.quantity - 1)}
//         >
//           <Text style={itemStyles.quantityButton}>-</Text>
//         </TouchableOpacity>
//         <Text style={itemStyles.quantity}>{item.quantity}</Text>
//         <TouchableOpacity
//           onPress={() => updateQuantity(item.id, item.quantity + 1)}
//         >
//           <Text style={itemStyles.quantityButton}>+</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//     <TouchableOpacity onPress={() => onDelete(item.id)}>
//       <Text style={itemStyles.deleteText}>✕</Text>
//     </TouchableOpacity>
//   </View>
// );

// export default function CartScreen() {
//   const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

//   return (
//     <LinearGradient
//       colors={[colors.primary, colors.secondary]}
//       style={styles.background}
//     >
//       <View style={styles.container}>
//         <Text style={styles.heading}>My Cart</Text>

//         {(cartItems?.length ?? 0) === 0 ? (
//           <Text style={styles.emptyText}>Your cart is empty</Text>
//         ) : (
//           <>
//             <ScrollView nestedScrollEnabled={true}>
//               <FlatList
//                 // scrollEnabled={false}
//                 data={cartItems}
//                 keyExtractor={(item, index) => index.toString()}
//                 renderItem={({ item }) => (
//                   <CartItem
//                     item={item}
//                     onDelete={removeFromCart}
//                     updateQuantity={updateQuantity}
//                   />
//                 )}
//               />
//             </ScrollView>
//             <View style={styles.totalBar}>
//               <Text style={styles.totalText}>
//                 Total: ${getCartTotal().toFixed(2)}
//               </Text>
//               <TouchableOpacity style={styles.checkoutButton}>
//                 <Text style={styles.checkoutText}>Proceed to Checkout</Text>
//               </TouchableOpacity>
//             </View>
//           </>
//         )}
//       </View>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "white",
//     marginBottom: 20,
//   },
//   emptyText: {
//     fontSize: 18,
//     color: "white",
//     textAlign: "center",
//     marginTop: 50,
//   },
//   totalBar: {
//     padding: 16,
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     marginTop: 10,
//   },
//   totalText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   checkoutButton: {
//     backgroundColor: "#1273de",
//     padding: 15,
//     borderRadius: 8,
//     alignItems: "center",
//   },
//   checkoutText: {
//     color: "white",
//     fontWeight: "bold",
//   },
// });

// const itemStyles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     backgroundColor: "white",
//     borderRadius: 8,
//     padding: 10,
//     marginBottom: 10,
//     alignItems: "center",
//   },
//   image: {
//     width: 60,
//     height: 60,
//     borderRadius: 8,
//     marginRight: 10,
//   },
//   details: {
//     flex: 1,
//   },
//   name: {
//     fontWeight: "bold",
//   },
//   price: {
//     color: "#666",
//   },
//   quantityContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 5,
//   },
//   quantityButton: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 4,
//     paddingHorizontal: 8,
//     paddingVertical: 2,
//   },
//   quantity: {
//     marginHorizontal: 10,
//     fontSize: 16,
//   },
//   deleteText: {
//     fontSize: 18,
//     color: "red",
//   },
// });

// CartScreen.js;

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


// import { useNavigation } from "@react-navigation/native";
// import { useEffect, useState } from "react";
// import {
//   ActivityIndicator,
//   Button,
//   FlatList,
//   Image,
//   Text,
//   TouchableOpacity,
//   View,
//   StyleSheet,
// } from "react-native";
// import api from "@/utils/api";
// import { useCart } from "@/context/CartContext";

// const CartScreen = () => {
//   const [loading, setLoading] = useState(true);
//   const navigation = useNavigation();
// const { cartItems, addToCart, removeFromCart, updateQuantity, getCartTotal } = useCart();
//   const fetchCart = async () => {
//     try {
//       const res = await api.get("/cart");
//       const items = Array.isArray(res.data) ? res.data : res.data.cart || [];
//       setCartItems(items);
//     } catch (err) {
//       console.error("Error fetching cart:", err);
//       setCartItems([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const removeItem = async (id) => {
//     try {
//       await api.delete(`/cart/${id}`);
//       setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
//     } catch (err) {
//       console.error("Error removing item:", err);
//     }
//   };

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   const total = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   if (loading) {
//     return (
//       <View style={styles.centered}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Your Cart</Text>

//       {cartItems.length === 0 ? (
//         <View style={styles.centered}>
//           <Text style={styles.emptyText}>Your cart is empty</Text>
//           <Button
//             title="Continue Shopping"
//             onPress={() => navigation.navigate("Home")}
//           />
//         </View>
//       ) : (
//         <>
//           <FlatList
//             data={cartItems}
//             keyExtractor={(item) => item._id}
//             renderItem={({ item }) => (
//               <View style={styles.itemContainer}>
//                 <Image
//                   source={{ uri: item.image }}
//                   style={styles.image}
//                   resizeMode="cover"
//                 />
//                 <View style={styles.itemInfo}>
//                   <Text style={styles.itemName}>{item.name}</Text>
//                   <Text>Qty: {item.quantity}</Text>
//                   <Text style={styles.itemPrice}>
//                     ${item.price.toFixed(2)}
//                   </Text>
//                 </View>
//                 <TouchableOpacity
//                   onPress={() => removeItem(item._id)}
//                   style={styles.removeButton}
//                 >
//                   <Text style={styles.removeText}>Remove</Text>
//                 </TouchableOpacity>
//               </View>
//             )}
//           />
//           <View style={styles.totalContainer}>
//             <Text style={styles.totalText}>
//               Total: ${total.toFixed(2)}
//             </Text>
//             <Button
//               title="Proceed to Checkout"
//               onPress={() => navigation.navigate("Checkout")}
//             />
//           </View>
//         </>
//       )}
//     </View>
//   );
// };

// export default CartScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   centered: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 16,
//   },
//   emptyText: {
//     fontSize: 16,
//     marginBottom: 16,
//   },
//   itemContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 16,
//     paddingBottom: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ccc",
//   },
//   image: {
//     width: 80,
//     height: 80,
//     borderRadius: 8,
//     marginRight: 12,
//   },
//   itemInfo: {
//     flex: 1,
//   },
//   itemName: {
//     fontWeight: "bold",
//     fontSize: 16,
//   },
//   itemPrice: {
//     color: "#555",
//   },
//   removeButton: {
//     backgroundColor: "#e63946",
//     paddingVertical: 6,
//     paddingHorizontal: 12,
//     borderRadius: 4,
//   },
//   removeText: {
//     color: "#fff",
//   },
//   totalContainer: {
//     marginTop: 16,
//     paddingTop: 16,
//     borderTopWidth: 1,
//     borderTopColor: "#ccc",
//   },
//   totalText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     textAlign: "right",
//     marginBottom: 12,
//   },
// });


// screens/CartScreen.js
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
} from "react-native";
import { useCart } from "@/context/CartContext";
import { router } from "expo-router";

const CartScreen = () => {
  const navigation = useNavigation();
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    loadCart
  } = useCart();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      await loadCart();
      setLoading(false);
    };
    load();
  }, []);

  const total = getCartTotal();

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>

      {cartItems.length === 0 ? (
        <View style={styles.centered}>
          <Text style={styles.emptyText}>Your cart is empty</Text>
          <Button
            title="Continue Shopping"
            onPress={() => router.replace("(tabs)")}
          />
        </View>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.image}
                  resizeMode="cover"
                />
                <View style={styles.itemInfo}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemPrice}>
                    ${item.price.toFixed(2)}
                  </Text>
                  <View style={styles.quantityContainer}>
                    <TouchableOpacity
                      onPress={() => updateQuantity(item._id, item.quantity - 1)}
                    >
                      <Text style={styles.quantityButton}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <TouchableOpacity
                      onPress={() => updateQuantity(item._id, item.quantity + 1)}
                    >
                      <Text style={styles.quantityButton}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => removeFromCart(item._id)}
                  style={styles.removeButton}
                >
                  <Text style={styles.removeText}>Remove</Text>
                </TouchableOpacity>
              </View>
            )}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>
              Total: ${total.toFixed(2)}
            </Text>
            <Button
              title="Proceed to Checkout"
              onPress={() => navigation.navigate("Checkout")}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  emptyText: { fontSize: 16, marginBottom: 16 },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 16,
  },
  image: { width: 80, height: 80, borderRadius: 8, marginRight: 12 },
  itemInfo: { flex: 1 },
  itemName: { fontWeight: "bold", fontSize: 16 },
  itemPrice: { color: "#555" },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  quantityButton: {
    fontSize: 20,
    width: 32,
    height: 32,
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "#ddd",
    borderRadius: 4,
  },
  quantityText: { marginHorizontal: 8, fontSize: 16 },
  removeButton: {
    backgroundColor: "#e63946",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  removeText: { color: "#fff" },
  totalContainer: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "right",
    marginBottom: 12,
  },
});
