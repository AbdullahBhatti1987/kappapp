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
} from "react-native";
import api from "@/utils/api";

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const fetchCart = async () => {
    try {
      const res = await api.get("/cart");
      const items = Array.isArray(res.data) ? res.data : res.data.cart || [];
      setCartItems(items);
    } catch (err) {
      console.error("Error fetching cart:", err);
      setCartItems([]);
    } finally {
      setLoading(false);
    }
  };

  const removeItem = async (id) => {
    try {
      await api.delete(`/cart/${id}`);
      setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

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
            onPress={() => navigation.navigate("Home")}
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
                  <Text>Qty: {item.quantity}</Text>
                  <Text style={styles.itemPrice}>
                    ${item.price.toFixed(2)}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => removeItem(item._id)}
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
  container: {
    flex: 1,
    padding: 16,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 16,
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  itemPrice: {
    color: "#555",
  },
  removeButton: {
    backgroundColor: "#e63946",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  removeText: {
    color: "#fff",
  },
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
