// LoginScreen.js
import React, { useState } from 'react';
import { Text, View, TextInput, Button, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

const backgroundImage = require('../../assets/background.jpg');

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email === 'admin' && password === '123') {
      await AsyncStorage.setItem('isLoggedIn', 'true'); // Armazena o estado de login
      navigation.navigate('Home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Login</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <Button title="Login" onPress={handleLogin} />
      </View>
    </ImageBackground>
  );
}
