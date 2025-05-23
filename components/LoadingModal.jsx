import React from "react";
import { ActivityIndicator, Modal, StyleSheet, Text, View } from "react-native";

export default function LoadingModal({ visible = false, message = "Loading..." }) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.loadingBox}>
          <ActivityIndicator size="large" color="#000" />
          <Text style={styles.message}>{message}</Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject, // covers entire screen
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    minWidth: 150,
  },
  message: {
    marginTop: 10,
    fontSize: 16,
    color: "#000",
  },
});
