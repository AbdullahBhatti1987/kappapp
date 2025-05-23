import { useAuth } from "@/context/AuthContext";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {  Pressable, StyleSheet, View } from "react-native";
import { Avatar, Menu, Provider } from "react-native-paper";

export default function AvatarWithMenu() {
  const [visible, setVisible] = useState(false);
  const { user, logout } = useAuth();

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);



  return (
    <Provider>
      <View style={styles.menuContainer}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Pressable onPress={openMenu}>
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
          }
          contentStyle={styles.menu}
        >
          <Menu.Item
            onPress={() => {
              closeMenu();
              console.log("Settings");
            }}
            title="Settings"
          />
          <Menu.Item
            onPress={() => {
              closeMenu();
              console.log("Update Profile");
            }}
            title="Update Profile"
          />
          <Menu.Item
            onPress={() => {
              closeMenu();
              logout();
            }}
            title="Logout"
          />
        </Menu>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  menu: {
    width: 180,
    marginTop: 15,
    marginRight: 110,
  },
});
