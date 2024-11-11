import React, { useEffect, useState } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, ScrollView, Modal, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { db } from '../../services/firebase'; 
import { collection, addDoc } from 'firebase/firestore';
import { Entypo, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons/';
import AlertModal from '../../components/modalAlert/modalAlert';
import styles from './styles';

export default function ReservaScreen({ navigation }) {
  const { width, height } = Dimensions.get('screen');
  const imagem = require('../../assets/emergency.jpeg');

  const [balanceData, setBalanceData] = useState({
    balance: 0,
    balancePlan: 0,
    totalSaved: 0,
  });
  const [input, setInput] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [customModalVisible, setCustomModalVisible] = useState(false);
  const [transferType, setTransferType] = useState('');
  const [customModalVisibleAlert, setCustomModalVisibleAlert] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const showModal = (title, message) => {
    setModalTitle(title);
    setModalMessage(message);
    setCustomModalVisible(true);
  };

  const showModalSucess = (title, message) => {
    setModalTitle(title);
    setModalMessage(message);
    setCustomModalVisibleAlert(true);
  }

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const storedBalance = await AsyncStorage.getItem('lucroTotal');
        const storedBalancePlan = await AsyncStorage.getItem('balancePlan');
        const storedTotalSaved = await AsyncStorage.getItem('totalSaved');
        
        setBalanceData({
          balance: storedBalance ? parseFloat(storedBalance) : 0,
          balancePlan: storedBalancePlan ? parseFloat(storedBalancePlan) : 0,
          totalSaved: storedTotalSaved ? parseFloat(storedTotalSaved) : 0,
        });
      } catch (error) {
        console.log('Erro ao buscar os dados:', error);
      }
    };
    fetchDados();
  }, []);

  const handleTransfer = async (type) => {
    setTransferType(type);
    setModalVisible(true);
  };

  const confirmTransfer = async () => {
    try {
      const amount = parseFloat(input);
      if (isNaN(amount) || amount <= 0) {
        showModal('Erro', 'Por favor, insira um valor válido maior que zero!');
        return;
      }

      let { balance, balancePlan, totalSaved } = balanceData;
      if (transferType === 'Guardar') {
        if (amount > balance) {
          showModal('Erro', 'Saldo insuficiente para guardar essa quantia.');
          return;
        }
        balance -= amount;
        totalSaved += amount;
      } else if (transferType === 'Resgatar') {
        if (amount > totalSaved) {
          showModal('Erro', 'Saldo insuficiente para resgatar essa quantia.');
          return;
        } 
        balance += amount;
        totalSaved -= amount;
      }

      await AsyncStorage.multiSet([
        ['lucroTotal', balance.toString()],
        ['balancePlan', balancePlan.toString()],
        ['totalSaved', totalSaved.toString()],
      ]);

      await addDoc(collection(db, 'reserva_de_emergencia'), {
        tipo: transferType,
        saldoAtual: balance,
        saldoPlanejado: balancePlan,
        totalGuardado: totalSaved,
        data: new Date(),
      });      

      setBalanceData({ balance, balancePlan, totalSaved });
      setModalVisible(false);
      setInput('');
      if (transferType === 'Resgatar') {
        console.log('Sucesso!', 'Resgate realizado com sucesso!');
      } else {
        console.log('Sucesso!', 'Guardado com sucesso!');
      }
      setCustomModalVisible(false);
    } catch (error) {
      console.log(`Erro ao ${transferType.toLowerCase()}:`, error);
    }
  };

  const updateBalancePlan = async (newBalancePlan) => {
    setBalanceData((prevData) => ({
      ...prevData,
      balancePlan: newBalancePlan,
    }));
    await AsyncStorage.setItem('balancePlan', newBalancePlan.toString());
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <Image style={styles.image} source={imagem} />
        <View style={styles.container}>
          <AlertModal visible={customModalVisible} title={modalTitle} message={modalMessage} />

          <View style={styles.containerContent}>
            <Text style={styles.title}>Reserva de Emergência</Text>
            <View style={styles.textBox}>
              <Text style={styles.description}>Reserve um dinheiro para imprevistos futuros para não se apertar</Text>
            </View>
          </View>

          <View style={styles.container} width={width - 132}>
            <Text style={styles.text}>Saldo Atual R$:</Text>
            <View style={styles.box}>
              <Text style={styles.content}>{balanceData.balance.toFixed(2)}</Text>
            </View>
            <Text style={styles.text}>Saldo planejado R$:</Text>
            <TextInput
              style={[styles.content, styles.input]}
              keyboardType="numeric"
              value={balanceData.balancePlan.toString()}
              onChangeText={(value) => {
                const numericValue = value.replace(/[^0-9.,]/g, ''); // Permite apenas números e vírgula/ponto
                setBalanceData((prevData) => ({
                  ...prevData,
                  balancePlan: numericValue ? parseFloat(numericValue.replace(',', '.')) : 0,
                }));
              }}
            />
            <Text style={styles.text}>Total Guardado R$:</Text>
            <View style={styles.box}>
              <Text style={styles.content}>{balanceData.totalSaved.toFixed(2)}</Text>
            </View>
          </View>

          <View style={styles.transfer}>
            <TouchableOpacity onPress={() => handleTransfer('Guardar')}>
              <Text style={styles.text}>Guardar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTransfer('Resgatar')}>
              <Text style={styles.text}>Resgatar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Home')}
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

          <Modal transparent visible={modalVisible} animationType="fade">
            <View style={styles.containerModal} height={height}>
              <View style={styles.boxModal}>
                <Text style={styles.labelModal}>
                  Quanto deseja {transferType}?
                </Text>
                <TextInput
                  keyboardType="numeric"
                  value={input}
                  onChangeText={(value) => setInput(value)}
                  style={styles.inputModal}
                />
                <TouchableOpacity style={styles.buttonModal} onPress={confirmTransfer}>
                  <Text style={styles.textModal}>Confirmar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.closeModal} onPress={() => {setModalVisible(false), setCustomModalVisible(false), setInput('')}}>
                  <Text style={styles.textModal}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
