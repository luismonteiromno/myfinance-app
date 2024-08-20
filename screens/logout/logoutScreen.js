import React from 'react';
import { View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

export default function LogoutScreen({ navigation }) {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('isLoggedIn'); // Remove o estado de login
    navigation.navigate('Login'); // Redireciona para a tela de login
  };

  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
