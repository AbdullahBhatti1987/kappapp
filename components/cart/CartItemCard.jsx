import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const screenWidth = Dimensions.get("window").width;

export default function CartItemCard({ product, onRemove }) {
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <View style={styles.card}>
      <Image
        source={
          typeof product.image === "string"
            ? { uri: product.image }
            : product.image
        }
        style={styles.image}
      />

      <View style={styles.info}>
        <View style={styles.headerRow}>
          <Text style={styles.title} numberOfLines={1}>
            {product.title}
          </Text>
          <Pressable onPress={onRemove}>
            <MaterialIcons name="delete" size={22} color="#ff3b30" />
          </Pressable>
        </View>

        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.price}>
          ${(product.price * quantity).toFixed(2)}
        </Text>

        <View style={styles.quantityRow}>
          <Pressable onPress={decreaseQty} style={styles.qtyButton}>
            <Text style={styles.qtyText}>-</Text>
          </Pressable>

          <Text style={styles.qtyValue}>{quantity}</Text>

          <Pressable onPress={increaseQty} style={styles.qtyButton}>
            <Text style={styles.qtyText}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: screenWidth - 40,
    marginVertical: 8,
    marginHorizontal: 20,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20,
    elevation: 3,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
    flex: 1,
    marginRight: 10,
  },
  category: {
    fontSize: 13,
    color: "#777",
    marginTop: 2,
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#007AFF",
    marginTop: 4,
  },
  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  qtyButton: {
    backgroundColor: "#eee",
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginHorizontal: 8,
  },
  qtyText: {
    fontSize: 16,
    fontWeight: "600",
  },
  qtyValue: {
    fontSize: 16,
    fontWeight: "500",
  },
});
