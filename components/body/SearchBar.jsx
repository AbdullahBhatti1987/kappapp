import React, { useState } from "react";
import { View, TextInput, Pressable, StyleSheet, Keyboard } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch === "function" && query.trim()) {
      onSearch(query.trim());
      Keyboard.dismiss();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search products..."
        value={query}
        onChangeText={setQuery}
        returnKeyType="search"
        onSubmitEditing={handleSearch}
      />
      <Pressable onPress={handleSearch} style={styles.iconWrapper}>
        <MaterialIcons name="search" size={24} color="#333" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 10,
    // height: 45,
    // marginVertical: 15,
    // marginHorizontal: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  iconWrapper: {
    paddingLeft: 10,
  },
});
