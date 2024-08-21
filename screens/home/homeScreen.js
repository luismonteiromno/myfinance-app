import React, { useState } from 'react';
import { Text, View, Button, Modal, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import Carteira from '../../components/carteira/carteiraComponent';
import styles from './styles';

const screenWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [lucrosMensais, setLucrosMensais] = useState([]);
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

  // useEffect(() => {
  //   const loadLucros = async () => {
  //     try {
  //       const storedLucros = [];
  //       for (let i = 0; i < 12; i++) {
  //         const lucro = await AsyncStorage.getItem(`lucroTotal-${i}`);
  //         storedLucros.push(lucro ? parseFloat(lucro) : 0);
  //       }
  //       setLucrosMensais(storedLucros);
  //     } catch (error) {
  //       console.error('Erro ao carregar lucros mensais:', error);
  //     }
  //   };

  //   loadLucros();
  // }, []);

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
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcomeText}>Bem-vindo ao app MyFinance!</Text>
      <Text style={styles.description}>Controle seus gastos e ganhos!</Text>
      <Carteira/>

      <LineChart
        data={{
          labels: months,
          datasets: [
            {
              data: lucrosMensais,
            },
          ],
        }}
        width={screenWidth * 0.9} // from react-native
        height={220}
        yAxisLabel="R$"
        yAxisSuffix="k"
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />

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
      <Button title="Logout" onPress={handleLogout} />

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
              <TouchableOpacity style={styles.modalButton} onPress={confirmLogout}>
                <Text style={styles.modalButtonText}>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.modalButtonText}>Não</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}
