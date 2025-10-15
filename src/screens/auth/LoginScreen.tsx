import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Colors from '../../utils/colors';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { LoginCredentials } from '../../types/auth';

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [formData, setFormData] = useState<LoginCredentials>({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<LoginCredentials>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<LoginCredentials> = {};

    if (!formData.email) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }

    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Senha deve ter pelo menos 6 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    
    try {
      // Simular login - substitua pela sua lógica de autenticação
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Se chegou aqui, login foi bem-sucedido
      navigation.replace('Main');
    } catch (error) {
      Alert.alert('Erro', 'Erro ao fazer login. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const updateFormData = (field: keyof LoginCredentials, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Limpar erro do campo quando usuário começar a digitar
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar style="light" backgroundColor={Colors.primary} />
      
      <View style={styles.header}>
        <Text style={styles.title}>Dooki</Text>
        <Text style={styles.subtitle}>
          A GENTE ENTREGA O MELHOR{'\n'}DA SUA CIDADE PARA VOCÊ!
        </Text>
      </View>

      <ScrollView 
        style={styles.form}
        contentContainerStyle={styles.formContent}
        showsVerticalScrollIndicator={false}
      >
        <Input
          label="E-MAIL"
          placeholder="seu@email.com"
          value={formData.email}
          onChangeText={(text) => updateFormData('email', text)}
          error={errors.email}
          keyboardType="email-address"
          autoCapitalize="none"
          leftIcon="mail-outline"
        />

        <Input
          label="SENHA"
          placeholder="Sua senha"
          value={formData.password}
          onChangeText={(text) => updateFormData('password', text)}
          error={errors.password}
          secureTextEntry
          leftIcon="lock-closed-outline"
        />

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <Button
          title="ENTRAR"
          onPress={handleLogin}
          loading={loading}
          style={styles.loginButton}
        />

        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>OU</Text>
          <View style={styles.dividerLine} />
        </View>

        <Button
          title="CRIE SUA CONTA"
          onPress={() => navigation.navigate('Register')}
          variant="outline"
          style={styles.registerButton}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    backgroundColor: Colors.primary,
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.textWhite,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textWhite,
    textAlign: 'center',
    lineHeight: 22,
  },
  form: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  formContent: {
    padding: 20,
    paddingBottom: 40,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  forgotPasswordText: {
    color: Colors.primary,
    fontWeight: '500',
    fontSize: 14,
  },
  loginButton: {
    marginBottom: 20,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.border,
  },
  dividerText: {
    marginHorizontal: 15,
    color: Colors.textLight,
    fontSize: 14,
  },
  registerButton: {
    marginBottom: 20,
  },
});

export default LoginScreen;