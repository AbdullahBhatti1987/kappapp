import Button from "@/components/Button";
import { useAuth } from "@/context/AuthContext";
import { Link, useRouter } from "expo-router";
import { useEffect } from "react";
import { Dimensions, Image, Text, View } from "react-native";

export default function WelcomeScreen() {
  const router = useRouter();
  
  const {user, loading, setLoading} = useAuth();

  const { width, height } = Dimensions.get("window");

   useEffect(() => {
    const checkLogin = async () => {
      const { token } = await getAuthData();

      if (token) {
        router.replace("(tabs)"); // ✅ User is logged in
      } else {
        router.replace("/auth/login"); // 🚪 Send to login
      }

      setLoading(false);
    };

    checkLogin();
  }, []);



  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Image
        source={require("@/assets/images/kure.png")}
        style={{
          width: width / 3,
          height: height / 6,
          resizeMode: "contain",
          marginBottom: 20,
        }}
      />

      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Welcome to Kure
      </Text>

      <Text style={{ textAlign: "center", marginBottom: 20 }}>
        Discover amazing products and shop with ease
      </Text>

      <Button
        title="Continue as Guest"
        onPress={() => router.push("/(tabs)")}
        disabled={false}
        loading={loading}
      />

      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Text>Already have an account? </Text>
        <Link href="/auth/login" style={{ color: "blue" }}>
          Login
        </Link>
      </View>

      <View style={{ flexDirection: "row", marginTop: 5 }}>
        <Text>New user? </Text>
        <Link href="/auth/register" style={{ color: "blue" }}>
          Register
        </Link>
      </View>
    </View>
  );
}
