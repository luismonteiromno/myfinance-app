// Carteira.js
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

const Carteira = () => {
  const [saldoTotal, setSaldoTotal] = useState(0);
  
  useEffect(() => {
    const fetchLucroTotal = async () => {
      try {
        const storedLucroTotal = await AsyncStorage.getItem('lucroTotal');
        if (storedLucroTotal !== null) {
          setSaldoTotal(parseFloat(storedLucroTotal));
        }
      } catch (error) {
        console.log('Erro ao buscar o saldo total:', error);
      }
    };

    fetchLucroTotal();
  }, []);

  return (
    <View style={styles.carteiraContainer}>
      <Text style={styles.saldoText}>Seu saldo em Carteira:</Text>
      <Text style={styles.saldoValor}>{`R$ ${saldoTotal.toFixed(2)}`}</Text>
    </View>
  );
};

export default Carteira;
