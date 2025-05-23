import { useDrawer } from "@/context/DrawerContext";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import {
  Animated,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function TopDrawer() {
  const { slideAnim, closeDrawer } = useDrawer();


  return (
    <Animated.View style={[styles.drawer, { left: slideAnim }]}
    
     onDismiss={closeDrawer}
     >
      <View style={styles.closeButtonBox}>
        <Text style={styles.heading}>Heading</Text>
        <Pressable style={styles.close} onPress={closeDrawer}>
          <MaterialIcons name="menu-open" size={30} color="black" />
        </Pressable>
      </View>
      <View style={styles.linkBox}>
        <MaterialIcons name="home" size={24} color="black" />
        <Text style={styles.link}>Menu 01</Text>
      </View>
      <View style={styles.linkBox}>
        <MaterialIcons name="home" size={24} color="black" />
        <Text style={styles.link}>Menu 01</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  drawer: {
    position: "absolute",
    left: 0,
    marginTop: 25,
    width: SCREEN_WIDTH * 0.75,
    height: ("92%"),
    backgroundColor: "#c4def6",
    padding: 20,
    elevation: 10,
    zIndex: 999,
  },
  closeButtonBox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 40,
    // borderBottomWidth: 1,
    borderBottomColor: "#abb8c3",
    paddingBottom: 5,
  },
  heading: {
    fontSize: 30,
  },
  close: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  linkBox:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 6,
    
  },
  link: {
    fontSize: 16,
    marginVertical: 10,
  },
});
