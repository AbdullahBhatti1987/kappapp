// import React, { useState } from "react";
// import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

// export default function ChipsFilter({ categories, onSelect }) {
//   const [selected, setSelected] = useState("All");

//   const handlePress = (category) => {
//     setSelected(category);
//     onSelect(category);
//   };

//   const chips = ["All", ...categories];

//   return (
//     <View style={styles.container}>
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10 }}>
//         {chips.map((chip) => (
//           <Pressable
//             key={chip}
//             onPress={() => handlePress(chip)}
//             style={[styles.chip, selected === chip && styles.selectedChip]}
//           >
//             <Text style={[styles.chipText, selected === chip && styles.selectedChipText]}>
//               {chip}
//             </Text>
//             {selected === chip && <View style={styles.underline} />}
//           </Pressable>
//         ))}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     // marginTop: 10,
//   },
//   chip: {
//     // backgroundColor: "#f0f0f0",
//     paddingVertical: 6,
//     paddingHorizontal: 14,
//     borderRadius: 20,
//     // marginRight: 10,
//     justifyContent: "center",
//     alignItems: "center",
//     position: "relative",
//     // minWidth: 70,
//     paddingTop: 15,
//   },
//   chipText: {
//     color: "#555",
//     fontWeight: "600",
//     fontSize: 13,
//   },
//   selectedChip: {
//     // backgroundColor: "#1273de",
//   },
//   selectedChipText: {
//     color: "black",
//     fontWeight: "700",
//     fontSize: 13,
//   },
//   underline: {
//     position: "absolute",
//     bottom: 2,
//     left: 16,
//     right: 16,
//     height: 2,
//     backgroundColor: "black", // underline in white for blue chip bg
//     borderRadius: 1,
//   },
// });




import React, { useState } from "react";
import { ScrollView, Pressable, StyleSheet, Text, View } from "react-native";

export default function ChipsFilter({ categories, onSelect }) {
  const [selected, setSelected] = useState("All");

  const handlePress = (category) => {
    setSelected(category);
    onSelect(category);
  };

  const chips = ["All", ...categories];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
      {chips.map((chip) => (
        <Pressable
          key={chip}
          onPress={() => handlePress(chip)}
          style={[styles.chip, selected === chip && styles.selectedChip]}
        >
          <Text style={[styles.chipText, selected === chip && styles.selectedChipText]}>
            {chip}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
  },
  chip: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#eee",
    marginRight: 10,
  },
  selectedChip: {
    backgroundColor: "#1273de",
  },
  chipText: {
    fontSize: 14,
    color: "#333",
  },
  selectedChipText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
