// import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import React, { useState } from "react";
// import { Keyboard, Pressable, StyleSheet, TextInput, View } from "react-native";

// export default function SearchBar({ onSearch }) {
//   const [query, setQuery] = useState("");

//   const handleSearch = () => {
//     if (typeof onSearch === "function") {
//       onSearch(query.trim());
//       Keyboard.dismiss();
//     }
//   };



//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Search products..."
//         value={query}
//         onChangeText={setQuery}
//         returnKeyType="search"
//         onSubmitEditing={handleSearch}
//         clearButtonMode="while-editing" // iOS only
//       />

//       <Pressable onPress={handleSearch} style={styles.iconWrapper}>
//         <MaterialIcons name="search" size={24} color="#333" />
//       </Pressable>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     backgroundColor: "#f9f9f9",
//     paddingHorizontal: 10,
//     // height: 45,
//     // marginVertical: 15,
//     // marginHorizontal: 5,
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//   },
//   iconWrapper: {
//     paddingLeft: 10,
//   },
// });




import React, { useState } from "react";
import { Keyboard, Pressable, StyleSheet, TextInput, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
    Keyboard.dismiss();
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
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  iconWrapper: {
    paddingLeft: 10,
  },
});
