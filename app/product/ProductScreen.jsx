// import React, { useState } from 'react';
// import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
// import { MaterialIcons, Ionicons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';

// const { width } = Dimensions.get('window');

// const ProductScreen = ({ route }) => {
//   const { product } = route.params;
//   const navigation = useNavigation();
  
//   const [quantity, setQuantity] = useState(1);
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [favorite, setFavorite] = useState(false);

//   const increaseQuantity = () => setQuantity(prev => prev + 1);
//   const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

//   const addToCart = () => {
//     // Add your cart logic here
//     alert(`${quantity} ${product.title} added to cart!`);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={24} color="#000" />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => setFavorite(!favorite)}>
//           <MaterialIcons 
//             name={favorite ? 'favorite' : 'favorite-border'} 
//             size={24} 
//             color={favorite ? 'red' : '#000'} 
//           />
//         </TouchableOpacity>
//       </View>

//       <ScrollView showsVerticalScrollIndicator={false}>
//         {/* Image Carousel */}
//         <View style={styles.imageContainer}>
//           <Image 
//             source={{ uri: product.images[selectedImage] }} 
//             style={styles.mainImage} 
//             resizeMode="contain"
//           />
//           <View style={styles.thumbnailContainer}>
//             {product.images.map((img, index) => (
//               <TouchableOpacity 
//                 key={index} 
//                 onPress={() => setSelectedImage(index)}
//                 style={[
//                   styles.thumbnail,
//                   selectedImage === index && styles.selectedThumbnail
//                 ]}
//               >
//                 <Image 
//                   source={{ uri: img }} 
//                   style={styles.thumbnailImage} 
//                   resizeMode="cover"
//                 />
//               </TouchableOpacity>
//             ))}
//           </View>
//         </View>

//         {/* Product Details */}
//         <View style={styles.detailsContainer}>
//           <Text style={styles.title}>{product.title}</Text>
//           <Text style={styles.price}>${product.price}</Text>
          
//           <View style={styles.ratingContainer}>
//             <View style={styles.stars}>
//               {[...Array(5)].map((_, i) => (
//                 <Ionicons 
//                   key={i} 
//                   name="star" 
//                   size={16} 
//                   color={i < product.rating ? '#FFD700' : '#C0C0C0'} 
//                 />
//               ))}
//             </View>
//             <Text style={styles.reviewText}>({product.reviews} reviews)</Text>
//           </View>

//           <Text style={styles.description}>{product.description}</Text>
//         </View>
//       </ScrollView>

//       {/* Footer with Add to Cart */}
//       <View style={styles.footer}>
//         <View style={styles.quantitySelector}>
//           <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
//             <Text style={styles.quantityText}>-</Text>
//           </TouchableOpacity>
//           <Text style={styles.quantity}>{quantity}</Text>
//           <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
//             <Text style={styles.quantityText}>+</Text>
//           </TouchableOpacity>
//         </View>

//         <TouchableOpacity style={styles.addToCartButton} onPress={addToCart}>
//           <Text style={styles.addToCartText}>Add to Cart</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   imageContainer: {
//     marginBottom: 20,
//   },
//   mainImage: {
//     width: width,
//     height: width * 0.8,
//   },  
//   thumbnailContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 10,
//   },
//   thumbnail: {
//     width: 50,
//     height: 50,
//     borderRadius: 5,
//     marginHorizontal: 5,
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   selectedThumbnail: {
//     borderColor: '#007AFF',
//   },
//   thumbnailImage: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 4,
//   },
//   detailsContainer: {
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   price: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#007AFF',
//     marginBottom: 15,
//   },
//   ratingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   stars: {
//     flexDirection: 'row',
//     marginRight: 10,
//   },
//   reviewText: {
//     color: '#777',
//     fontSize: 14,
//   },
//   description: {
//     fontSize: 16,
//     lineHeight: 24,
//     color: '#555',
//     marginBottom: 30,
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 15,
//     borderTopWidth: 1,
//     borderTopColor: '#f0f0f0',
//     backgroundColor: '#fff',
//   },
//   quantitySelector: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//     borderRadius: 25,
//     paddingHorizontal: 5,
//   },
//   quantityButton: {
//     width: 40,
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   quantityText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#007AFF',
//   },
//   quantity: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginHorizontal: 10,
//     minWidth: 20,
//     textAlign: 'center',
//   },
//   addToCartButton: {
//     flex: 1,
//     backgroundColor: '#007AFF',
//     borderRadius: 25,
//     paddingVertical: 15,
//     marginLeft: 15,
//     alignItems: 'center',
//   },
//   addToCartText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

// export default ProductScreen;


import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '@/context/CartContext';

const { width } = Dimensions.get('window');

const ProductScreen = ({ route }) => {
  const { product } = route.params;
  const navigation = useNavigation();
  const { addToCart } = useCart(); // ✅ Get addToCart from context

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [favorite, setFavorite] = useState(false);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart(product, quantity); // ✅ Add product and quantity to cart
    alert(`${quantity} ${product.title} added to cart!`);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFavorite(!favorite)}>
          <MaterialIcons
            name={favorite ? 'favorite' : 'favorite-border'}
            size={24}
            color={favorite ? 'red' : '#000'}
          />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Image Carousel */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: product.images[selectedImage] }}
            style={styles.mainImage}
            resizeMode="contain"
          />
          <View style={styles.thumbnailContainer}>
            {product.images.map((img, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedImage(index)}
                style={[
                  styles.thumbnail,
                  selectedImage === index && styles.selectedThumbnail,
                ]}
              >
                <Image
                  source={{ uri: img }}
                  style={styles.thumbnailImage}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Product Details */}
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>${product.price}</Text>

          <View style={styles.ratingContainer}>
            <View style={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <Ionicons
                  key={i}
                  name="star"
                  size={16}
                  color={i < product.rating ? '#FFD700' : '#C0C0C0'}
                />
              ))}
            </View>
            <Text style={styles.reviewText}>({product.reviews} reviews)</Text>
          </View>

          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      {/* Footer with Add to Cart */}
      <View style={styles.footer}>
        <View style={styles.quantitySelector}>
          <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
            <Text style={styles.quantityText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  imageContainer: { marginBottom: 20 },
  mainImage: { width: width, height: width * 0.8 },
  thumbnailContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedThumbnail: { borderColor: '#007AFF' },
  thumbnailImage: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
  detailsContainer: { paddingHorizontal: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  price: { fontSize: 22, fontWeight: 'bold', color: '#007AFF', marginBottom: 15 },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  stars: { flexDirection: 'row', marginRight: 10 },
  reviewText: { color: '#777', fontSize: 14 },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    marginBottom: 30,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    backgroundColor: '#fff',
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 25,
    paddingHorizontal: 5,
  },
  quantityButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: { fontSize: 20, fontWeight: 'bold', color: '#007AFF' },
  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
    minWidth: 20,
    textAlign: 'center',
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: '#007AFF',
    borderRadius: 25,
    paddingVertical: 15,
    marginLeft: 15,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProductScreen;
