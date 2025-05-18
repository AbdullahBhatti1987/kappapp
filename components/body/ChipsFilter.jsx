import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ChipsFilter({ categories, onSelect }) {
  const [selected, setSelected] = useState("All");

  const handlePress = (category) => {
    setSelected(category);
    onSelect(category);
  };

  const chips = ["All", ...categories];

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {chips.map((chip) => (
          <Pressable
            key={chip}
            onPress={() => handlePress(chip)}
            style={[styles.chip, selected === chip && styles.selectedChip]}
          >
            <Text
              style={[
                styles.chipText,
                selected === chip && styles.selectedChipText,
              ]}
            >
              {chip}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    // paddingHorizontal: 15,
    // backgroundColor: 'salmon',
  },
 chip: {
  paddingHorizontal: 15,
  // paddingVertical: 10,
  // backgroundColor: "rgba(255, 255, 255, 0.50)",
  borderRadius: 25,
  // marginRight: 12,
  // borderColor: "#1273de",
  // borderWidth: 1,
  // shadowColor: "#007AFF",
  // shadowOffset: { width: 0, height: 2 },
  // shadowOpacity: 0.50,
  // shadowRadius: 4,
  // elevation: 5, // for Android
  flexDirection: "row",
  alignItems: "center",
  gap: 4,
},
chipText: {
  color: "#007AFF",
  fontWeight: "600",
  fontSize: 14,
},

selectedChip: {
  backgroundColor: "#1273de",
  fontWeight: "800",
  fontSize: 14,
  padding: 5,

  },
  chipText: {
    color: "#333",
    fontSize: 14,
  },
  selectedChipText: {
    color: "#fff",
    fontWeight: "600",
  },
});
