import React, { useEffect, useState } from 'react';
import { Dimensions, Text, View, TouchableOpacity, Modal, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

export default function PlanEmergency () {
  
  const { width, height } = Dimensions.get('screen')

  const [balancePlan, setBalancePlan] = useState(0)
  const [modalVisible, setModalVisible] = useState(false)
  const [input, setInput] = useState()

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const storedBalancePlan = await AsyncStorage.getItem('balancePlan')
  
        if (storedBalancePlan !== null) {
          setBalancePlan(parseFloat(storedBalancePlan))
        }else{
          setBalancePlan(parseFloat(10))
        }
      } catch (error) {
        console.log('Erro ao buscar os dados:', error)
      }
    }

    fetchDados()
  })
  


  async function ChangeBalancePlan() {
    if (modalVisible === false) {
      setModalVisible(true);
    }
    if (modalVisible === true) {
      try {
        await AsyncStorage.setItem('balancePlan', input.toString());
      } catch (error) {
        console.log("Erro ao salvar", error)
      }
      setModalVisible(false);
    }
  }


  return (
    <View style={styles.container} width={width - 132}>
      <Text style={styles.text}>Saldo planejado:</Text>
      <TouchableOpacity style={styles.box} onPress={ChangeBalancePlan}>
        <Text style={styles.content}>R$ {balancePlan.toFixed(2)}</Text>
      </TouchableOpacity>

      <Modal transparent visible={modalVisible} animationType="fade" >

        <View style={styles.containerModal} height={height}>
          <View style={styles.boxModal}>
            <Text style={styles.labelModal}>
              Insira o valor da sua meta:
            </Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={(value) => setInput(value)}
              style={styles.inputModal}
            />
            <TouchableOpacity style={styles.buttonModal} onPress={ChangeBalancePlan}>
              <Text style={styles.textModal}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>

      </Modal>

    </View>
  )
}
