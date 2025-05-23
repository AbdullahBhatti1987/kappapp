import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { ActivityIndicator, Button, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import api from '@/utils/api'

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(true)
  const navigation = useNavigation()

  const fetchCart = async () => {
    try {
      const res = await api.get('/cart')
      setCartItems(res.data)
    } catch (err) {
      console.error('Error fetching cart:', err)
    } finally {
      setLoading(false)
    }
  }

  const removeItem = async (id) => {
    try {
      await api.delete(`/cart/${id}`)
      setCartItems(cartItems.filter(item => item._id !== id))
    } catch (err) {
      console.error('Error removing item:', err)
    }
  }

  useEffect(() => {
    fetchCart()
  }, [])

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <View className="flex-1 p-4">
      <Text className="text-2xl font-bold mb-4">Your Cart</Text>

      {cartItems.length === 0 ? (
        <View className="flex-1 justify-center items-center">
          <Text className="text-lg mb-4">Your cart is empty</Text>
          <Button 
            title="Continue Shopping" 
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={item => item._id}
            renderItem={({ item }) => (
              <View className="flex-row items-center mb-4 pb-4 border-b border-gray-200">
                <Image 
                  source={{ uri: item.image }} 
                  className="w-20 h-20 rounded mr-4"
                />
                <View className="flex-1">
                  <Text className="font-semibold">{item.name}</Text>
                  <Text>Qty: {item.quantity}</Text>
                  <Text className="text-gray-600">${item.price.toFixed(2)}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => removeItem(item._id)}
                  className="bg-red-500 px-3 py-1 rounded"
                >
                  <Text className="text-white">Remove</Text>
                </TouchableOpacity>
              </View>
            )}
          />

          <View className="mt-4 pt-4 border-t border-gray-200">
            <Text className="text-xl font-bold text-right mb-4">
              Total: ${total.toFixed(2)}
            </Text>
            <Button
              title="Proceed to Checkout"
              onPress={() => navigation.navigate('Checkout')}
            />
          </View>
        </>
      )}
    </View>
  )
}

export default CartScreen