import { useState } from "react";
import { router } from "expo-router";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    cpf: "",
    telefone: "",
    senha: "",
    confirmarSenha: "",
  });

  const handleCadastro = () => {
    // Simulação de cadastro
    if (formData.senha === formData.confirmarSenha) {
      router.replace("/home");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dooki</Text>
        <Text style={styles.subtitle}>Crie sua conta</Text>
      </View>

      <View style={styles.form}>
        {[
          { label: "NOME COMPLETO", key: "nome" },
          { label: "E-MAIL", key: "email", keyboardType: "email-address" },
          { label: "CPF", key: "cpf", keyboardType: "numeric" },
          { label: "TELEFONE", key: "telefone", keyboardType: "phone-pad" },
          { label: "SENHA", key: "senha", secureText: true },
          { label: "CONFIRMAR SENHA", key: "confirmarSenha", secureText: true },
        ].map((field) => (
          <View key={field.key} style={styles.inputContainer}>
            <Text style={styles.label}>{field.label}</Text>
            <TextInput
              style={styles.input}
              placeholder={`Digite seu ${field.label.toLowerCase()}`}
              value={formData[field.key]}
              onChangeText={(text) =>
                setFormData({ ...formData, [field.key]: text })
              }
              keyboardType={field.keyboardType}
              secureTextEntry={field.secureText}
              autoCapitalize={field.key === "nome" ? "words" : "none"}
            />
          </View>
        ))}

        <TouchableOpacity style={styles.cadastroButton} onPress={handleCadastro}>
          <Text style={styles.cadastroButtonText}>FAZER CADASTRO</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 20,
    backgroundColor: "#FF6B00",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "white",
  },
  form: {
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
  },
  cadastroButton: {
    backgroundColor: "#FF6B00",
    padding: 18,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  cadastroButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});