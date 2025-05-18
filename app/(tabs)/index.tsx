// import { Image } from 'expo-image';
// import { Platform, StyleSheet } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({
//               ios: 'cmd + d',
//               android: 'cmd + m',
//               web: 'F12',
//             })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           {`Tap the Explore tab to learn more about what's included in this starter app.`}
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           {`When you're ready, run `}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });

// ==============      Second Screen        =================

// import React, { useEffect, useState } from 'react'
// import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
// import axios from 'axios'
// import { useRouter } from 'expo-router'

// export default function HomeScreen() {
//   const [products, setProducts] = useState([])
//   const router = useRouter()

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/products')
//         setProducts(res.data)
//       } catch (err) {
//         console.error(err)
//       }
//     }
//     fetchProducts()
//   }, [])

//   return (
//     <View style={{ flex: 1, padding: 10 }}>
//       <FlatList
//         data={products}
//         keyExtractor={(item) => item._id}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             onPress={() => router.push(`/productDetails?productId=${item._id}`)}
//             style={{ marginBottom: 15, borderWidth: 1, borderRadius: 8, padding: 10 }}
//           >
//             <Image
//               source={{ uri: item.imageUrl }}
//               style={{ width: '100%', height: 150, borderRadius: 8 }}
//               resizeMode="cover"
//             />
//             <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 5 }}>{item.name}</Text>
//             <Text>${item.price}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   )
// }

// =================         Third Screen          ===========================

// import React from 'react'
// import { View, Text, Button } from 'react-native'
// // import { useAuth } from '../context/AuthContext'
// import { useRouter } from 'expo-router'
// import { useAuth } from '@/context/AuthContext'

// export default function Home() {
//   const { user, logout } = useAuth()
//   const router = useRouter()

//   return (
//     <View style={{ padding: 20 }}>
//       {user ? (
//         <>
//           <Text>Welcome, {user.name}!</Text>
//           <Button title="Logout" onPress={logout} />
//         </>
//       ) : (
//         <Button title="Login" onPress={() => router.push('/login')} />
//       )}
//     </View>
//   )
// }

import ChipsFilter from "@/components/body/ChipsFilter";
import Heading from "@/components/body/Heading";
import SearchBar from "@/components/body/SearchBar";
import ProductCard from "@/components/product/ProductCard";
import { categories, products } from "@/content/data";
import { Alert, FlatList, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useState } from "react";
import ImageSlider from "@/components/body/ImageSlider";

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSearch = (query) => {
    Alert.alert("Searching for", query);
  };

  const handleCategorySelect = (category) => {
    // alert(`Selected Category,  ${category} `);
    setSelectedCategory(category);
  };

  return (
    <LinearGradient colors={["#c4def6", "#1273de"]} style={styles.background}>
      <View>
        <View >
          <ImageSlider />
        </View>

        {/* <View>
          <SearchBar onSearch={handleSearch} />
        </View> */}

        {/* <View style={styles.categoryBox}>
          <ChipsFilter
            categories={categories}
            onSelect={handleCategorySelect}
          />
          <Heading text={selectedCategory} />
        </View> */}

        {/* <View>
          <FlatList
            data={
              selectedCategory === "All"
                ? products
                : products?.filter((data) => data.category === selectedCategory)
            }
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.allProducts}
            renderItem={({ item }) => (
              <View style={styles.productCardWrapper}>
                <ProductCard product={item} />
              </View>
            )}
          />
        </View> */}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  allProducts: {
    // paddingHorizontal: 10,
    gap: 5,
  },
  container: {
    flex: 1,
  },
  productCardWrapper: {
    flex: 1,
    // marginHorizontal: 5,
    alignItems: "center",
  },
  background: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  categoryBox: {
    // gap: 2,
  },
});
