import React, { useState } from 'react';
import { Text, View, TextInput, ImageBackground, TouchableOpacity, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles'; 

// const backgroundImage = require('../../assets/background.png');
const logo = require('../../assets/image.png');

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }
    if (email && password) {
      try {
        // Aqui você pode salvar os dados de registro no AsyncStorage ou enviá-los para uma API.
        await AsyncStorage.setItem('isLoggedIn', 'true');
        Alert.alert('Sucesso', 'Conta criada com sucesso!');
        navigation.navigate('Home');
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível criar sua conta. Tente novamente mais tarde.');
      }
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.overlay}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.appName}>MeuApp</Text>
        </View>
        
        <View style={styles.formContainer}>
          <Text style={styles.title}>Criar Conta</Text>
          
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
          
          <TextInput
            style={styles.input}
            placeholder="Confirmar Senha"
            placeholderTextColor="#888"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            autoCapitalize="none"
          />
          
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.linkText}>Já tem uma conta? Faça login</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}
