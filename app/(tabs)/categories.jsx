import React, { useState } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Keyboard,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { categories, products } from "@/content/data";
const { width } = Dimensions.get("window");

// Sample data

// Components
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const handleSearch = () => {
    onSearch(query.trim().toLowerCase());
    Keyboard.dismiss();
  };
  return (
    <View style={styles.searchContainer}>
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
};

const ChipsFilter = ({ categories, selected, onSelect }) => {
  return (
    <View style={styles.chipList}>
      {["All", ...categories].map((cat) => (
        <Pressable
          key={cat}
          onPress={() => onSelect(cat)}
          style={[
            styles.chip,
            selected === cat && styles.selectedChip,
          ]}
        >
          <Text
            style={[
              styles.chipText,
              selected === cat && styles.selectedChipText,
            ]}
          >
            {cat}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

const ProductCard = ({ product }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{product.name}</Text>
    <Text style={styles.cardCategory}>{product.category}</Text>
  </View>
);

// Main Screen
export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSearchQuery(""); // Clear search when selecting category
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <LinearGradient colors={["#c4def6", "#1273de"]} style={styles.background}>
      <FlatList
        ListHeaderComponent={
          <>
            <SearchBar onSearch={handleSearch} />
            <ChipsFilter
              categories={categories}
              selected={selectedCategory}
              onSelect={handleCategorySelect}
            />
          </>
        }
        data={filteredProducts}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <ProductCard product={item} />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 40,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  iconWrapper: {
    paddingLeft: 10,
  },
  chipList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 10,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "#e0e0e0",
    borderRadius: 20,
  },
  selectedChip: {
    backgroundColor: "#1273de",
  },
  chipText: {
    color: "#333",
    fontWeight: "500",
  },
  selectedChipText: {
    color: "#fff",
    fontWeight: "700",
  },
  listContainer: {
    paddingBottom: 20,
  },
  cardWrapper: {
    width: width / 2 - 20,
    padding: 5,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  cardCategory: {
    marginTop: 5,
    fontSize: 12,
    color: "#888",
  },
});
