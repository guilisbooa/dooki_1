import { useState } from "react";
import { Link, router } from "expo-router";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const restaurants = Array.from({ length: 20 }, (_, i) => ({
  id: (i + 1).toString(),
  name: `Restaurante ${i + 1}`,
  category: "Comida Brasileira",
  rating: (4 + Math.random() * 1).toFixed(1),
  deliveryTime: "30-40 min",
}));

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const categories = [
    { id: "todos", name: "Todos" },
    { id: "brasileira", name: "Brasileira" },
    { id: "pizza", name: "Pizza" },
    { id: "hamburguer", name: "Hambúrguer" },
    { id: "japonesa", name: "Japonesa" },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.title}>Dooki</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity onPress={() => router.push("/perfil")}>
              <Ionicons name="person-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.subtitle}>
          O melhor da sua cidade entregue para você!
        </Text>
      </View>

      {/* Categorias */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
        contentContainerStyle={styles.categoriesContent}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              selectedCategory === category.id && styles.categoryButtonActive,
            ]}
            onPress={() => setSelectedCategory(category.id)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category.id && styles.categoryTextActive,
              ]}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Lista de Restaurantes */}
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.restaurantsList}
        renderItem={({ item }) => (
          <Link href={`/restaurantes/${item.id}`} asChild>
            <TouchableOpacity style={styles.restaurantCard}>
              <View style={styles.restaurantImage}>
                <Text style={styles.restaurantImageText}>🍽️</Text>
              </View>
              <View style={styles.restaurantInfo}>
                <Text style={styles.restaurantName}>{item.name}</Text>
                <Text style={styles.restaurantCategory}>{item.category}</Text>
                <View style={styles.restaurantDetails}>
                  <Text style={styles.rating}>⭐ {item.rating}</Text>
                  <Text style={styles.deliveryTime}>⏱️ {item.deliveryTime}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    backgroundColor: "#FF6B00",
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  headerIcons: {
    flexDirection: "row",
    gap: 15,
  },
  subtitle: {
    fontSize: 14,
    color: "white",
    opacity: 0.9,
  },
  categoriesContainer: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  categoriesContent: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    gap: 10,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#f5f5f5",
  },
  categoryButtonActive: {
    backgroundColor: "#FF6B00",
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#666",
  },
  categoryTextActive: {
    color: "white",
  },
  restaurantsList: {
    padding: 15,
  },
  restaurantCard: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  restaurantImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  restaurantImageText: {
    fontSize: 24,
  },
  restaurantInfo: {
    flex: 1,
    justifyContent: "space-between",
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  restaurantCategory: {
    fontSize: 14,
    color: "#666",
    marginVertical: 5,
  },
  restaurantDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rating: {
    fontSize: 14,
    color: "#FF6B00",
    fontWeight: "500",
  },
  deliveryTime: {
    fontSize: 14,
    color: "#666",
  },
});