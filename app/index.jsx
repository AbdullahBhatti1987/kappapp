// app/index.tsx

import { useAuth } from "@/context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const { setUser } = useAuth();

  useEffect(() => {
    // const checkUser = async () => {
    //   try {
    //     const storedUser = await AsyncStorage.getItem("user");
    //     if (storedUser) {
    //       setUser(JSON.parse(storedUser));
    //       console.log("storedUser=>", storedUser)
    //       router.replace("/welcome"); // Show welcome
    //     } else {
    //       router.replace("/(tabs)"); // Go to tabs if user exists
    //     }
    //   } catch (error) {
    //     console.error("Error checking user:", error);
    //     router.replace("/welcome");
    //   }
    // };
const checkUser = async () => {
  try {
    const storedUser = await AsyncStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      router.replace("/(tabs)"); // Go to tabs if user exists
    } else {
      router.replace("/welcome"); // Show welcome
    }
  } catch (error) {
    console.error("Error checking user:", error);
    router.replace("/welcome");
  }
};
    checkUser();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
