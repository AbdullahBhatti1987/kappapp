import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import axios from "axios"; // or your data fetching method
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const ProductDetailsScreen = () => {
  const route = useRoute();
  const { productId } = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get(
          `https://your-api.com/products/${productId}`
        );
        setProduct(response.data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Product not found</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Pressable onPress={goBack} styles={styles.backButton}>
       <MaterialIcons name="arrow-back-ios" size={24} color="black" />
      </Pressable>
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>

        {/* Additional product details */}
        {product.category && (
          <Text style={styles.detailText}>Category: {product.category}</Text>
        )}
        {product.rating && (
          <Text style={styles.detailText}>Rating: {product.rating}/5</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
  productImage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginBottom: 16,
  },
  detailsContainer: {
    paddingHorizontal: 8,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2ecc71",
    marginBottom: 16,
  },
  productDescription: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    color: "#333",
  },
  detailText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
   backButton: {
    position: 'absolute',
    top: 10, // Less space needed with SafeAreaView
    left: 20,
    zIndex: 100,
    // Rest of the styles remain the same
  },
});

export default ProductDetailsScreen;
