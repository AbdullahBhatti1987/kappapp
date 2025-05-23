import { useCart } from "@/context/CartContext";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
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

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };
  const AddToCart = () => {
    // alert(`Add Item ,  ${product.title}`);
    addToCart(product)
  };

  return (
    
    <View style={styles.card}>
      <View style={styles.titleRow}>
        <Text style={styles.price}>${product.price}</Text>
        <Pressable onPress={toggleLike}>
          <MaterialIcons
            name={liked ? "favorite" : "favorite-border"}
            size={24}
            color={liked ? "#1273de" : "gray"}
          />
        </Pressable>
      </View>
      <Pressable 
      onPress={() => router.push(`/products/${product.id}`)}
    >
      
      <Image
        source={product.image} // No require needed here since already required
        style={styles.image}
        resizeMode="cover"
        />

        </Pressable>
      <View style={styles.infoWrapper}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {product.title}
        </Text>
      </View>
      <View style={styles.infoWrapper}>
        <Text style={styles.category}>{product.category}</Text>
        <Pressable onPress={AddToCart}>
          <MaterialIcons
            name="add-circle-outline"
            size={24}
            color={"#1273de"}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: screenWidth / 2 - 20,
    backgroundColor: "#fff",
    paddingVertical: 4,
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 5,
  },
  image: {
    width: "100%",
    height: 100,
  },
  infoWrapper: {
    paddingHorizontal: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleRow: {
    paddingHorizontal: 12,
    // paddingVertical: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007AFF",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
    flex: 1,
    marginRight: 8,
  },
  category: {
    fontSize: 14,
    color: "#777",
    // marginTop: 4,
  },
  
});
