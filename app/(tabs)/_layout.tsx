import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Header from "@/components/header/Header";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // tabBarActiveTintColor: 'blue',
        headerShown: true,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        header: () => <Header />, // ✅ Custom Header har screen per
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore1"
        options={{
          title: "Explore1",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

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
