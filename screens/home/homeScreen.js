import React, { useState } from 'react';
import { Entypo, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons/';
import { Text, View, ScrollView, Modal, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Carteira from '../../components/carteira/carteiraComponent';
import Navbar from '../../components/navBar/navBarComponent';
import Reminders from '../../components/reminder/reminderComponent';
import LogoutModal from '../../components/logoutModal/logoutModalComponent';
import styles from './styles';

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
      <ScrollView contentContainerStyle={styles.content}>
        
        <View style={styles.expenseContainer}>
          <Text style={styles.welcomeText}>Bem-vindo ao app MyFinance!</Text>
          <Text style={styles.description}>Controle seus gastos e ganhos!</Text>
          <Carteira/>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.emergencyButton]}
            onPress={() => navigation.navigate('Reserva de Emergência')}
          >
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>Acessar Reserva de Emergência</Text>
              <MaterialIcons name='emergency' size={24} color={'black'} style={styles.icon}/>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.financialButton]}
            onPress={() => navigation.navigate('Financeiro')}
          >
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>Financeiro</Text>
              <MaterialCommunityIcons name='finance' size={24} color={'black'} style={styles.icon}/>
            </View>
          </TouchableOpacity>
        </View>

        <Reminders />
        
        <LogoutModal 
          visible={modalVisible}
          onConfirm={confirmLogout}
          onCancel={() => setModalVisible(false)}
        /> 

      </ScrollView>
    </View>
  );
}
