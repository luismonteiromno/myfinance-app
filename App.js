// App.js
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './screens/login/loginScreen.js';
import HomeScreen from './screens/home/homeScreen.js';
import FinanceiroScreen from './screens/financeiro/financeiroScreen.js';
import ReservaScreen from './screens/reservaDeEmergencia/reservaDeEmergenciaScreen.js';
import LogoutScreen from './screens/logout/logoutScreen.js'; // Importa a tela de logout

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null); // Use null para indicar que o estado está sendo carregado

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const loggedInStatus = await AsyncStorage.getItem('isLoggedIn');
        setIsLoggedIn(loggedInStatus === 'true');
      } catch (error) {
        console.error('Failed to fetch login status:', error);
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, []);

  if (isLoggedIn === null) {
    return null; // Renderize uma tela de carregamento se necessário
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? 'Home' : 'Login'}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Financeiro" component={FinanceiroScreen} />
        <Stack.Screen name="Reserva de Emergência" component={ReservaScreen} />
        <Stack.Screen name="Logout" component={LogoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
