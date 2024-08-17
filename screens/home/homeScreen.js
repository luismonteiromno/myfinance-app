import React, { useState } from 'react';
import { Text, View, Button, Modal, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

export default function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogout = () => {
    setModalVisible(true);
  };

  const confirmLogout = async () => {
    setModalVisible(false);
    try {
      await AsyncStorage.removeItem('isLoggedIn'); // Remove o estado de login
      navigation.navigate('Login'); // Redireciona para a tela de login
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

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
        onPress={handleLogout}
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Tem certeza que deseja sair?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={confirmLogout}
              >
                <Text style={styles.modalButtonText}>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Não</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
