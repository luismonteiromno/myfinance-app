import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, Dimensions, Modal, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

export default function TransferEmergency ({ type }) {

  const { width, height } = Dimensions.get('screen')
  const [modalVisible, setModalVisible] = useState(false)
  const [selection, setSelection] = useState()

  const [identifyer, setIdentifyer] = useState(type)

  const [input, setInput] = useState()
  
  async function Click(){
    if (identifyer === 'Guardar' && modalVisible === false){
      setSelection(identifyer)
      setModalVisible(true);
    }

    if (identifyer === 'Guardar' && modalVisible === true){
      setSelection()

      guarda()

      setModalVisible(false)
    }

    if (identifyer === 'Resgatar' && modalVisible === false) {
      setSelection(identifyer)
      setModalVisible(true);
    }

    if (identifyer === 'Resgatar' && modalVisible === true) {
      setSelection()

      resgata()

      setModalVisible(false);
    }
  }

  async function guarda() {

    const storedLucroTotal = await AsyncStorage.getItem('lucroTotal')
    
    const storedBalanceEmergency = await AsyncStorage.getItem('balanceEmergency')
    
    if (storedLucroTotal !== null) {
      await AsyncStorage.setItem('balanceEmergency', (parseFloat(input) + parseFloat(storedBalanceEmergency)).toString())

      await AsyncStorage.setItem('lucroTotal', (parseFloat(storedLucroTotal) - parseFloat(input)).toString())
      

    }
    
  }
  
  async function resgata() {

    const storedLucroTotal = await AsyncStorage.getItem('lucroTotal')
    
    const storedBalanceEmergency = await AsyncStorage.getItem('balanceEmergency')
    
    if (storedLucroTotal !== null) {
      await AsyncStorage.setItem('balanceEmergency', (parseFloat(storedBalanceEmergency) - parseFloat(input)).toString()).then(()=>{
        console.log(storedLucroTotal)
      })

      await AsyncStorage.setItem('lucroTotal', (parseFloat(storedLucroTotal) + parseFloat(input)).toString()).then(()=>{
        console.log(storedLucroTotal)
      })

    }
    
  }
  


  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.container} onPress={Click}>
      <Text style={styles.text}>{type}</Text>
    </TouchableOpacity>

    <Modal transparent visible={modalVisible} animationType="fade" >

        <View style={styles.containerModal} height={height}>
          <View style={styles.boxModal}>
            <Text style={styles.labelModal}>
              Quanto deseja {selection}
            </Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={(value) => setInput(value)}
              style={styles.inputModal}
            />
            <TouchableOpacity style={styles.buttonModal} onPress={Click}>
              <Text style={styles.textModal}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>

      </Modal>
      </View>
  )
}
