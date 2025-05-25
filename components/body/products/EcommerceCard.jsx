import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const EcommerceCard = ({
  imageUrl,
  title,
  category,
  price,
  totalSold,
  isLiked = false,
  onLikePress,
  onAddToCart
}) => {
  return (
    <View style={styles.cardContainer}>
      {/* Product Image */}
      <View style={styles.imageContainer}>
        <Image
  source={
    typeof product.image === "string"
      ? { uri: product.image }
      : product.image
  }
  style={styles.productImage}
/>
        <TouchableOpacity style={styles.likeButton} onPress={onLikePress}>
          <MaterialIcons 
            name={isLiked ? "favorite" : "favorite-border"} 
            size={24} 
            color={isLiked ? "red" : "#333"} 
          />
        </TouchableOpacity>
      </View>

      {/* Product Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.categoryText}>{category}</Text>
        <Text style={styles.titleText} numberOfLines={2}>{title}</Text>
        
        {/* Price and Sold Info */}
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>${price.toFixed(2)}</Text>
          <Text style={styles.soldText}>{totalSold} sold</Text>
        </View>
        
        {/* Add to Cart Button */}
        <TouchableOpacity style={styles.cartButton} onPress={onAddToCart}>
          <FontAwesome name="shopping-cart" size={16} color="white" />
          <Text style={styles.cartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 8,
    width: 180,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    position: 'relative',
    height: 150,
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  likeButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 20,
    padding: 5,
  },
  infoContainer: {
    padding: 12,
  },
  categoryText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    height: 40,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  soldText: {
    fontSize: 12,
    color: '#666',
  },
  cartButton: {
    backgroundColor: '#FF6B6B',
    borderRadius: 5,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartButtonText: {
    color: 'white',
    marginLeft: 8,
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default EcommerceCard;