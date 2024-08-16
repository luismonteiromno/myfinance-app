// screens/home/HomeScreen.js
import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './styles'; // Importa os estilos


export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to MyFinance!</Text>
      <Text style={styles.description}>Manage your finances easily with our app.</Text>
      
      <Button
        title="Go to Financeiro"
        onPress={() => navigation.navigate('Financeiro')}
      />
      <Text style={styles.spacer}></Text>
      <Button
        title="Go to Reserva de Emergência"
        onPress={() => navigation.navigate('Reserva de Emergência')}
      />
      <Text style={styles.spacer}></Text>
      <Button 
        title='Logout' 
        onPress={() => navigation.navigate('Logout')}
      />
    </View>
  );
}
