import React, { useState, useCallback } from 'react';
import { Entypo, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View, ScrollView, Modal, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Carteira from '../../components/carteira/carteiraComponent';
import Navbar from '../../components/navBar/navBarComponent';
import Reminders from '../../components/reminder/reminderComponent';
import LogoutModal from '../../components/logoutModal/logoutModalComponent';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';

export default function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [saldoTotal, setSaldoTotal] = useState(0); // Estado para saldo
  const [totalDespesas, setTotalDespesas] = useState(0); // Estado para despesas

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

  // Atualiza os dados ao focar na tela
  useFocusEffect(
    useCallback(() => {
      // Função que será chamada toda vez que a tela for focada
      const fetchData = async () => {
        try {
          // Carregar dados necessários para atualizar saldo e despesas
          const storedSaldoTotal = await AsyncStorage.getItem('saldoTotal');
          const storedTotalDespesas = await AsyncStorage.getItem('totalDespesas');
          
          setSaldoTotal(storedSaldoTotal ? parseFloat(storedSaldoTotal) : 0);
          setTotalDespesas(storedTotalDespesas ? parseFloat(storedTotalDespesas) : 0);
        } catch (error) {
          console.error('Erro ao carregar dados:', error);
        }
      };

      fetchData();
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      <Navbar onLogout={handleLogout} />
      <ScrollView contentContainerStyle={styles.content}>
        
        <View style={styles.expenseContainer}>
          <Text style={styles.welcomeText}>Bem-vindo ao app MyFinance!</Text>
          <Text style={styles.description}>Controle seus gastos e ganhos!</Text>
          <Carteira 
            setTotalDespesas={setTotalDespesas} 
            setSaldoTotal={setSaldoTotal} // Passa a função para atualizar o saldo
          />
        </View>

        <Reminders />
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('historico')}
          >
            <View style={styles.buttonContent}>
              <Entypo name="wallet" size={24} style={styles.icon}/>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity 
            onPress={() => navigation.navigate('Reserva de Emergência')}
          >
            <View style={styles.buttonContent}>
              <MaterialIcons name='emergency' size={24} style={styles.icon}/>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity 
            onPress={() => navigation.navigate('Financeiro')}
          >
            <View style={styles.buttonContent}>
              <MaterialCommunityIcons name='finance' size={24} style={styles.icon}/>
            </View>
          </TouchableOpacity>
        </View>
        
        <LogoutModal 
          visible={modalVisible}
          onConfirm={confirmLogout}
          onCancel={() => setModalVisible(false)}
        /> 

      </ScrollView>
    </SafeAreaView>
  );
}
