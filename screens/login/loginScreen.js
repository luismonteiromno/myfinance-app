import React, { useState } from 'react';
import { Text, View, TextInput, ImageBackground, TouchableOpacity, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles'; 

// const backgroundImage = require('../../assets/background.png'); // Verifique se a imagem está correta
const logo = require('../../assets/image.png'); // Verifique se a imagem está correta

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email === 'admin' && password === '123') {
      await AsyncStorage.setItem('isLoggedIn', 'true');
      navigation.navigate('Home');
    } else {
      Alert.alert('Erro', 'Credenciais inválidas. Tente novamente.');
    }
  };

  return (
      <View style={styles.overlay}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.appName}>MeuApp</Text>
        </View>
        
        <View style={styles.formContainer}>
          <Text style={styles.title}>Faça Login</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
          />
          
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.linkText}>Não tem uma conta? Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}
