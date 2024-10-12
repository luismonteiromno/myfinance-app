import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CadastroScreen from './screens/cadastro/cadastroScreen.js';
import LoginScreen from './screens/login/loginScreen.js';
import HomeScreen from './screens/home/homeScreen.js';
import FinanceiroScreen from './screens/financeiro/financeiroScreen.js';
import ReservaScreen from './screens/reservaDeEmergencia/reservaDeEmergenciaScreen.js';
import LogoutScreen from './screens/logout/logoutScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {
  const [initialRoute, setInitialRoute] = useState(null); // Começa com null para esperar o carregamento

  useEffect(() => {
    const determineInitialRoute = async () => {
      try {
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        const route = await AsyncStorage.getItem('currentRoute');
        // Define a rota inicial com base nos valores recuperados
        setInitialRoute(route || (isLoggedIn === 'true' ? 'Home' : 'Login'));
      } catch (error) {
        console.error('Error fetching initial route:', error);
        setInitialRoute('Login');
      }
    };

    determineInitialRoute();
  }, []);

  const handleNavigationChange = async (routeName) => {
    try {
      await AsyncStorage.setItem('currentRoute', routeName);
    } catch (error) {
      console.error('Error saving current route:', error);
    }
  };

  // Renderiza apenas quando `initialRoute` não for nulo
  if (!initialRoute) return null;

  return (
    <NavigationContainer
      onStateChange={(state) => {
        const currentRoute = state?.routes[state.index]?.name;
        if (currentRoute) {
          handleNavigationChange(currentRoute);
        }
      }}
    >
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Cadastro" 
          component={CadastroScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Financeiro" 
          component={FinanceiroScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Reserva de Emergência" 
          component={ReservaScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Logout" 
          component={LogoutScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
