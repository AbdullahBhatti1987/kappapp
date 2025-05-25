import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { categories, products, slides } from "@/content/data";
import SearchBar from "@/components/body/SearchBar";
import ChipsFilter from "@/components/body/ChipsFilter";
import ImageSlider from "@/components/body/ImageSlider";
import ProductCard from "@/components/body/ProductCard";

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase().trim());
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSearchQuery("");
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      product.name?.toLowerCase().includes(searchQuery) ||
      product.description?.toLowerCase().includes(searchQuery);

    return matchesCategory && matchesSearch;
  });

  return (
    <LinearGradient colors={["#c4def6", "#1273de"]} style={styles.background}>
      <FlatList
        ListHeaderComponent={
          <>
            <ImageSlider slides={slides} />
            <SearchBar onSearch={handleSearch} />
            <ChipsFilter categories={categories} onSelect={handleCategorySelect} />
          </>
        }
        data={filteredProducts}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.allProducts}
        renderItem={({ item }) => (
          <View style={styles.productCardWrapper}>
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
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  allProducts: {
    gap: 10,
    paddingBottom: 50,
  },
  productCardWrapper: {
    flex: 1,
    alignItems: "center",
  },
});
