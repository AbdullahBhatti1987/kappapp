import basicColors from "@/content/globalcss";
import { useAuth } from "@/context/AuthContext";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { Avatar, Menu, Divider } from "react-native-paper";
import Button from "../Button";

const { width } = Dimensions.get("window");

export default function AvatarWithMenu() {
  const [visible, setVisible] = useState(false);
  const { user, setUser, setToken } = useAuth();
  const router = useRouter();

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const logout = async () => {
    try {
      setUser(null);
      setToken(null);
      await AsyncStorage.removeItem("token");
      Alert.alert("Logout successful");
      router.replace("/auth/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleAvatarPress = () => {
    console.log("Avatar pressed");
    if (!user) {
      router.push("/auth/login");
    } else {
      openMenu();
    }
  };

  return (
    <View style={styles.wrapper}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <View>
            <Pressable onPress={handleAvatarPress}>
              {user ? (
                <Avatar.Image
                  size={40}
                  source={{
                    uri:
                      typeof user.avatar === "string"
                        ? user.avatar
                        : "https://i.pravatar.cc/150?img=3",
                  }}
                />
              ) : (
                <MaterialIcons name="person" size={32} color="#333" />
              )}
            </Pressable>
          </View>
        }
        contentStyle={styles.menu}
      >
        {user && (
          <>
            <View style={styles.userInfo}>
              <Text style={styles.name}>{user.name}</Text>
              <Text style={styles.email}>{user.email}</Text>
            </View>
            <Divider style={{ marginVertical: 5 }} />
            <Button
              title="Logout"
              onPress={() => {
                closeMenu();
                logout();
              }}
              style={{
                alignSelf: "flex-center", // shrink button to content width
                marginHorizontal: 10, // some margin to separate from menu edges
              }}
            />
          </>
        )}
      </Menu>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    // marginLeft: 10,
    zIndex: 1000, // Ensures menu appears above other views
  },
  menu: {
    // width: 220,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 4,
    top: 35,
    right: 0,
    paddingVertical: 5,
  },
  userInfo: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 0,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
  },
  email: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
});
