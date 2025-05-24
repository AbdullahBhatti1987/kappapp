// import { Tabs } from "expo-router";
// import React from "react";
// import { Platform } from "react-native";

// import { HapticTab } from "@/components/HapticTab";
// import { IconSymbol } from "@/components/ui/IconSymbol";
// import TabBarBackground from "@/components/ui/TabBarBackground";
// import { Colors } from "@/constants/Colors";
// import { useColorScheme } from "@/hooks/useColorScheme";
// import Header from "@/components/header/Header";

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
//         // tabBarActiveTintColor: 'blue',
//         headerShown: true,
//         tabBarButton: HapticTab,
//         tabBarBackground: TabBarBackground,
//         header: () => <Header />, // ✅ Custom Header har screen per
//         tabBarStyle: Platform.select({
//           ios: {
//             position: "absolute",
//           },
//           default: {},
//         }),
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: "Home",
//           tabBarIcon: ({ color }) => (
//             <IconSymbol size={28} name="house.fill" color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="explore"
//         options={{
//           title: "Explore",
//           tabBarIcon: ({ color }) => (
//             <IconSymbol size={28} name="paperplane.fill" color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="explore1"
//         options={{
//           title: "Explore1",
//           tabBarIcon: ({ color }) => (
//             <IconSymbol size={28} name="paperplane.fill" color={color} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }

// import { Stack, Tabs } from 'expo-router'

// export default function Layout() {
//   return (
//     <Stack>
//       <Stack.Screen name="index" options={{ title: 'Home' }} />
//       <Stack.Screen name="productDetails" options={{ title: 'Product Details' }} />
//       <Stack.Screen name="cart" options={{ title: 'Cart' }} />
//     </Stack>
//     //  <Tabs>
//     //   <Tabs.Screen name="index" options={{ title: 'Home' }} />
//     //   {/* <Tabs.Screen name="profile" options={{ title: 'Profile' }} /> */}
//     // </Tabs>
//   )
// }

// import { AuthProvider, useAuth } from "@/context/AuthContext";
// import { CartProvider } from "@/context/CartContext";
// import { useColorScheme } from "@/hooks/useColorScheme";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import {
//   DarkTheme,
//   DefaultTheme,
//   ThemeProvider,
// } from "@react-navigation/native";
// import { useFonts } from "expo-font";
// import { Stack, useRouter } from "expo-router";
// import { useEffect } from "react";
// import { ActivityIndicator, View } from "react-native";
// import "react-native-reanimated";

// function WelcomeScreen() {
//   const router = useRouter();
//   const { user, setUser } = useAuth();

//   useEffect(() => {
//     const checkUser = async () => {
//       try {
//         // Check if user exists in AsyncStorage
//         const storedUser = await AsyncStorage.getItem('user');
//         if (storedUser) {
//           setUser(JSON.parse(storedUser));
//         }

//         // Wait 3 seconds then navigate
//         setTimeout(() => {
//           if (storedUser) {
//             router.replace('/(tabs)'); // Navigate to home if user exists
//           } else {
//             router.replace('/welcome'); // Navigate to welcome screen if new user
//           }
//         }, 3000);
//       } catch (error) {
//         console.error('Error checking user:', error);
//         router.replace('/welcome');
//       }
//     };

//     checkUser();
//   }, []);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <ActivityIndicator size="large" />
//       {/* Add your logo here */}
//     </View>
//   );
// }

// export default function TabLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
//   });

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
//       <AuthProvider>
//         <CartProvider>
//           <Stack>
//             <Stack.Screen
//               name="index"
//               options={{ headerShown: false }}
//               component={WelcomeScreen}
//             />
//             <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//             <Stack.Screen name="welcome" options={{ title: "Welcome", headerShown: false }} />
//             <Stack.Screen name="login" options={{ title: "Login" }} />
//             <Stack.Screen name="register" options={{ title: "Register" }} />
//             <Stack.Screen
//               name="productDetails"
//               options={{ title: "Product Details" }}
//             />
//             <Stack.Screen name="cart" options={{ title: "Cart" }} />
//           </Stack>
//         </CartProvider>
//       </AuthProvider>
//     </ThemeProvider>
//   );
// }

// app/index.tsx

// app/(tabs)/_layout.tsx

import { HapticTab } from "@/components/HapticTab";
import Header from "@/components/header/Header";
import TabBarBackground from "@/components/ui/TabBarBackground";
import basicColors from "@/content/globalcss";
import { useColorScheme } from "@/hooks/useColorScheme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import { Platform } from "react-native";

export default function TabsLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: basicColors.themeColor,
        tabBarInactiveTintColor: basicColors.grayTabs,
        headerShown: true,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        header: () => <Header />,
        tabBarStyle: Platform.select({
          ios: { position: "absolute" },
          default: {},
        }),
      }}
     
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: "Categroies",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="category" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="shopping-cart" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="account-circle" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
