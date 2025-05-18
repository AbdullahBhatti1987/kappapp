import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Avatar, Menu } from "react-native-paper";

export default function AvatarWithMenu() {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View style={styles.menuContainer}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Pressable onPress={openMenu}>
            <Avatar.Image
              size={40}
              source={{ uri: "https://i.pravatar.cc/150?img=3" }}
            />
          </Pressable>
        }
        contentStyle={styles.menu}
      >
        <Menu.Item onPress={() => console.log("Settings")} title="Settings" />
        <Menu.Item
          onPress={() => console.log("Update Profile")}
          title="Update Profile"
        />
        <Menu.Item onPress={() => console.log("Logout")} title="Logout" />
      </Menu>
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  menu: {
    width: 180,
    top: 55,
    right: -10,
  },
});
