import React, { useState } from 'react';
import { Text, View, ScrollView, Modal, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Carteira from '../../components/carteira/carteiraComponent';
import Navbar from '../../components/navBar/navBarComponent';
import BalanceCard from '../../components/balanceCard/balanceCardComponent';
import Reminders from '../../components/reminder/reminderComponent';
import LogoutModal from '../../components/logoutModal/logoutModalComponent';
import styles from './styles';
import { Button } from 'react-native-web';

export default function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogout = () => {
    setModalVisible(true);
  };

  const confirmLogout = async () => {
    setModalVisible(false);
    try {
      await AsyncStorage.removeItem('isLoggedIn');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Navbar onLogout={handleLogout} />

      {/* Conteúdo da página */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.welcomeText}>Bem-vindo ao app MyFinance!</Text>
        <Text style={styles.description}>Controle seus gastos e ganhos!</Text>
        <Carteira />
        <View style={styles.description}/>
        <View style={styles.description}>
          <Button 
            title="Ir para a carteira" 
            onPress={() => navigation.navigate('Carteira')} 
            color="#28a745"
          />
        </View>
        <View style={styles.description}>
          <Button 
            title="Acessar Reserva de Emergência" 
            onPress={() => navigation.navigate('Reserva de Emergência')} 
            color="#dc3545"
          />
        </View>
        <View style={styles.description}>
          <Button 
            title="Financeiro" 
            onPress={() => navigation.navigate('Financeiro')} 
            color="#007bff"
          />
        </View>
        <Reminders />
        <LogoutModal 
          visible={modalVisible}
          onConfirm={confirmLogout}
          onCancel={() => setModalVisible(false)}
        /> 

        {/* <View style={styles.buttonContainer}>
          <Button
            title="Acessar Reserva de Emergência"
            onPress={() => navigation.navigate('Reserva de Emergência')}
            color="#dc3545"
          />
        </View> */}

        {/* <View style={styles.buttonContainer}>
          <Button
            title="Acessar Carteira"
            onPress={() => navigation.navigate('Carteira')}
            color="#28a745"
          />
        </View> */}
      </ScrollView>
    </View>
  );
}
