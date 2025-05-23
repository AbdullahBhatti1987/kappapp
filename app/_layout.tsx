// import { AuthProvider } from "@/context/AuthContext";
// import { CartProvider } from "@/context/CartContext";
// import { useColorScheme } from "@/hooks/useColorScheme";
// import {
//   DarkTheme,
//   DefaultTheme,
//   ThemeProvider,
// } from "@react-navigation/native";
// import { useFonts } from "expo-font";
// import { Stack } from "expo-router";
// import "react-native-reanimated";

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
//   });

//   if (!loaded) {
//     // Async font loading only occurs in development.
//     return null;
//   }

//   return (
//     <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
//       <AuthProvider>
//         <CartProvider>
//           <Stack>
//             <Stack.Screen name="index" options={{ title: "Home" }} />
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

// import { Stack } from 'expo-router';
// // import { ApiProvider } from '@/context/ApiContext';
// import { AuthProvider } from '@/context/AuthContext';
// import { CartProvider } from '@/context/CartContext';

// export default function RootLayout() {
//   return (
//     // <ApiProvider>
//       <AuthProvider>
//         <CartProvider>
//           <Stack>
//             {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
//             <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//             {/* <Stack.Screen name="login" options={{ title: 'Login' }} /> */}
//             {/* <Stack.Screen name="register" options={{ title: 'Register' }} /> */}
//             {/* <Stack.Screen name="product/[id]" options={{ title: 'Product' }} /> */}
//             {/* <Stack.Screen name="cart" options={{ title: 'Your Cart' }} /> */}
//           </Stack>
//         </CartProvider>
//       </AuthProvider>
//     // </ApiProvider>
//   );
// }
// app/_layout.tsx

// app/_layout.tsx

import AppLoader from "@/components/AppLoader";
import TopDrawer from "@/components/header/TopDrawer";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import { DrawerProvider } from "@/context/DrawerContext";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ActivityIndicator, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
  });

if (!loaded) return <AppLoader message="Initializing application..." />;


  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AuthProvider>
        <PaperProvider>
        <DrawerProvider>
          <CartProvider>
            <TopDrawer />
            <Stack screenOptions={{ headerShown: false }} />
          </CartProvider>
        </DrawerProvider>
        </PaperProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
