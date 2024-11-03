import React, { useEffect, useState } from 'react';
import { Dimensions, Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function BalanceEmergency () {
  
  const { width, height } = Dimensions.get('screen')

  const [balance, setBalance] = useState()

  useEffect(() => {
    async function fetchDados() {

      setBalance(parseFloat(await AsyncStorage.getItem('balanceEmergency')).toFixed(2))

    }
    fetchDados()
  }, [balance])
  

  return (
    <View style={styles.container} width={width - 132}>
      <Text style={styles.text}>Saldo Atual:</Text>
      <View style={styles.box}>
        <Text style={styles.content}>R$ {balance}</Text>
      </View>
    </View>
  )
}
