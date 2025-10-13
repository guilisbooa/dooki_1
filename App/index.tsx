import { Link } from "expo-router";
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from "react-native";

export default function Welcome() {
  return (
    <ImageBackground 
      source={{ uri: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Dooki</Text>
        <Text style={styles.subtitle}>
          A GENTE ENTREGA O MELHOR DA SUA CIDADE PARA VOCÊ!
        </Text>
        
        <View style={styles.buttonContainer}>
          <Link href="/login" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>ENTRAR</Text>
            </TouchableOpacity>
          </Link>
          
          <Link href="/cadastro" asChild>
            <TouchableOpacity style={[styles.button, styles.outlineButton]}>
              <Text style={[styles.buttonText, styles.outlineButtonText]}>
                CRIAR CONTA
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginBottom: 50,
    fontWeight: "500",
  },
  buttonContainer: {
    width: "100%",
    gap: 15,
  },
  button: {
    backgroundColor: "#FF6B00",
    padding: 18,
    borderRadius: 10,
    alignItems: "center",
  },
  outlineButton: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "white",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  outlineButtonText: {
    color: "white",
  },
});