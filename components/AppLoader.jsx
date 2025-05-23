import { ActivityIndicator, Image, Text, View, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function AppLoader({ message = "Loading..." }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Image
        source={require("@/assets/images/kure.png")}
        style={{
          width: width / 2,
          height: height / 4,
          resizeMode: "contain",
          marginBottom: 30,
        }}
      />
      <ActivityIndicator size="large" color="#000" />
      <Text style={{ marginTop: 10, fontSize: 16 }}>{message}</Text>
    </View>
  );
}

