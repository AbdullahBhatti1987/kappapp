import { useRouter } from 'expo-router';
import { Alert, Text, TouchableOpacity } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const router = useRouter();

  const handleAddToCart = async () => {
    try {
      await addToCart({
        productId: product._id,
        quantity: 1,
        name: product.name,
        price: product.price,
        image: product.image
      });
      Alert.alert('Success', 'Product added to cart');
    } catch (error) {
      if (!user) {
        Alert.alert(
          'Login Required',
          'You need to login to add items to cart',
          [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Login', onPress: () => router.push('/auth/login') }
          ]
        );
      } else {
        Alert.alert('Error', 'Failed to add product to cart');
      }
    }
  };

  return (
    <TouchableOpacity 
      onPress={handleAddToCart}
      style={{ 
        backgroundColor: '#000', 
        padding: 15, 
        borderRadius: 5,
        alignItems: 'center'
      }}
    >
      <Text style={{ color: '#fff', fontWeight: 'bold' }}>Add to Cart</Text>
    </TouchableOpacity>
  );
}