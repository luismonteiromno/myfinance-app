import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './screens/login/loginScreen.js';
import HomeScreen from './screens/home/homeScreen.js';
import FinanceiroScreen from './screens/financeiro/financeiroScreen.js';
import ReservaScreen from './screens/reservaDeEmergencia/reservaDeEmergenciaScreen.js';
import LogoutScreen from './screens/logout/logoutScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {
  const [initialRoute, setInitialRoute] = useState('Home'); // Defina Login como padrão

  useEffect(() => {
    const determineInitialRoute = async () => {
      try {
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        const route = await AsyncStorage.getItem('currentRoute');
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

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen name="Login">
          {props => <LoginScreen {...props} onNavigationChange={handleNavigationChange} />}
        </Stack.Screen>
        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} onNavigationChange={handleNavigationChange} />}
        </Stack.Screen>
        <Stack.Screen name="Financeiro">
          {props => <FinanceiroScreen {...props} onNavigationChange={handleNavigationChange} />}
        </Stack.Screen>
        <Stack.Screen name="Reserva de Emergência">
          {props => <ReservaScreen {...props} onNavigationChange={handleNavigationChange} />}
        </Stack.Screen>
        <Stack.Screen name="Logout">
          {props => <LogoutScreen {...props} onNavigationChange={handleNavigationChange} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
