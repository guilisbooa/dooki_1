import { useLocalSearchParams, router } from "expo-router";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function RestaurantDetails() {
  const { id } = useLocalSearchParams();

  const restaurant = {
    id: id as string,
    name: `Restaurante ${id}`,
    category: "Comida Brasileira",
    rating: "4.5",
    deliveryTime: "30-40 min",
    description: "O melhor da culinária brasileira com ingredientes frescos e sabor inigualável.",
  };

  const menuItems = [
    { id: 1, name: "Feijoada Completa", price: "R$ 35,90", description: "Feijoada completa com todas as accompanhamentos" },
    { id: 2, name: "Picanha na Chapa", price: "R$ 42,90", description: "Picanha suína na chapa com farofa" },
    { id: 3, name: "Moqueca de Peixe", price: "R$ 38,90", description: "Moqueca de peixe com arroz e pirão" },
    { id: 4, name: "Frango à Passarinho", price: "R$ 28,90", description: "Frango frito crocante com batata frita" },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Restaurante</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        {/* Imagem do Restaurante */}
        <View style={styles.restaurantImage}>
          <Text style={styles.restaurantImageText}>🍽️</Text>
        </View>

        {/* Informações */}
        <View style={styles.infoContainer}>
          <Text style={styles.restaurantName}>{restaurant.name}</Text>
          <Text style={styles.restaurantCategory}>{restaurant.category}</Text>
          
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.rating}>{restaurant.rating}</Text>
            <Text style={styles.deliveryTime}>⏱️ {restaurant.deliveryTime}</Text>
          </View>

          <Text style={styles.description}>{restaurant.description}</Text>
        </View>

        {/* Menu */}
        <View style={styles.menuSection}>
          <Text style={styles.menuTitle}>Cardápio</Text>
          
          {menuItems.map((item) => (
            <TouchableOpacity key={item.id} style={styles.menuItem}>
              <View style={styles.menuItemInfo}>
                <Text style={styles.menuItemName}>{item.name}</Text>
                <Text style={styles.menuItemDescription}>{item.description}</Text>
                <Text style={styles.menuItemPrice}>{item.price}</Text>
              </View>
              <View style={styles.menuItemImage}>
                <Text>📷</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>FAZER PEDIDO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FF6B00",
    paddingTop: 60,
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  headerIcons: {
    flexDirection: "row",
    gap: 15,
  },
  restaurantImage: {
    height: 200,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },
  restaurantImageText: {
    fontSize: 48,
  },
  infoContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  restaurantCategory: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 15,
  },
  rating: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
    marginRight: 15,
  },
  deliveryTime: {
    fontSize: 14,
    color: "#666",
  },
  description: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  menuSection: {
    padding: 20,
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  menuItem: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  menuItemInfo: {
    flex: 1,
  },
  menuItemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  menuItemDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF6B00",
  },
  menuItemImage: {
    width: 60,
    height: 60,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    backgroundColor: "white",
  },
  orderButton: {
    backgroundColor: "#FF6B00",
    padding: 18,
    borderRadius: 8,
    alignItems: "center",
  },
  orderButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});