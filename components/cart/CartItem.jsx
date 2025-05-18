import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import {
    Dimensions,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

const SCREEN_WIDTH = Dimensions.get("screen").width;

export default function CartItem({ item, onDelete }) {

  const renderRightActions = () => (
    <Pressable style={styles.deleteButton} onPress={() => onDelete(item.id)}>
      <MaterialIcons name="delete" size={24} color="white" />
    </Pressable>
  );

  const DecreaseQuantity = () => {};
  const IncreaseQuantity = () => {};

  return (
    <View renderRightActions={renderRightActions}>
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />

        <View style={styles.info}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.price}>${item.price}</Text>

          <View style={styles.quantityRow}>
            <Pressable style={styles.qtyButton} onPress={DecreaseQuantity}>
              <Text style={styles.qtyText}>-</Text>
            </Pressable>
            <Text style={styles.qtyText}>{item.quantity}</Text>
            <Pressable style={styles.qtyButton} onPress={IncreaseQuantity}>
              <Text style={styles.qtyText}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 16,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  title: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
  },
  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  qtyButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },
  qtyText: {
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: "#1273de",
    justifyContent: "center",
    alignItems: "center",
    width: 64,
    borderRadius: 16,
    marginVertical: 8,
  },
});
