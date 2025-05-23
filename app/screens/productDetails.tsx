// import React, { useEffect, useState } from 'react'
// import { View, Text, Image, Button, ScrollView } from 'react-native'
// import axios from 'axios'
// import { useSearchParams, useRouter } from 'expo-router'

// export default function ProductDetails() {
//   const { productId } = useSearchParams()
//   const [product, setProduct] = useState(null)
//   const router = useRouter()

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/products/${productId}`)
//         setProduct(res.data)
//       } catch (err) {
//         console.error(err)
//       }
//     }
//     fetchProduct()
//   }, [productId])

//   if (!product) {
//     return <Text>Loading...</Text>
//   }

//   return (
//     <ScrollView style={{ padding: 10 }}>
//       <Image
//         source={{ uri: product.imageUrl }}
//         style={{ width: '100%', height: 300, borderRadius: 8 }}
//         resizeMode="cover"
//       />
//       <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 10 }}>{product.name}</Text>
//       <Text style={{ fontSize: 18, color: 'green', marginVertical: 5 }}>${product.price}</Text>
//       <Text style={{ fontSize: 16 }}>{product.description}</Text>
//       <Button title="Add to Cart" onPress={() => {
//         // TODO: Add item to cart logic here
//         alert('Add to Cart clicked')
//       }} />
//       <Button title="Go to Cart" onPress={() => router.push('/cart')} />
//     </ScrollView>
//   )
// }



import { useCart } from '@/context/CartContext'
import axios from 'axios'
import { useRouter, useSearchParams } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Button, Image, ScrollView, Text } from 'react-native'

export default function ProductDetails() {
  const { productId } = useSearchParams()
  const [product, setProduct] = useState(null)
  const router = useRouter()
  const { addToCart } = useCart()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${productId}`)
        setProduct(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchProduct()
  }, [productId])

  if (!product) {
    return <Text>Loading...</Text>
  }

  return (
    <ScrollView style={{ padding: 10 }}>
      <Image
        source={{ uri: product.imageUrl }}
        style={{ width: '100%', height: 300, borderRadius: 8 }}
        resizeMode="cover"
      />
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 10 }}>{product.name}</Text>
      <Text style={{ fontSize: 18, color: 'green', marginVertical: 5 }}>${product.price}</Text>
      <Text style={{ fontSize: 16 }}>{product.description}</Text>
      <Button title="Add to Cart" onPress={() => addToCart(product)} />
      <Button title="Go to Cart" onPress={() => router.push('/cart')} />
    </ScrollView>
  )
}
