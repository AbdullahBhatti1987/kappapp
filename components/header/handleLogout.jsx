import { useRouter } from "expo-router";
import { Alert } from "react-native";

const handleLogout = async () => {

const router = useRouter();
    try {
    await AsyncStorage.removeItem('token');

    Alert.alert("Logout successful");
    router.replace('/login')

  } catch (error) {
    console.error("Logout failed:", error);
  }
};
