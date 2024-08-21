// Carteira.js
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

const Carteira = () => {
  const [saldo, setSaldo] = useState(0);

  useEffect(() => {
    const fetchSaldo = async () => {
      try {
        const saldoAtual = await AsyncStorage.getItem('lucroTotal');
        setSaldo(saldoAtual ? parseFloat(saldoAtual) : 0);
      } catch (error) {
        console.error('Erro ao buscar saldo:', error);
      }
    };

    fetchSaldo();
  }, []);

  return (
    <View style={styles.carteiraContainer}>
      <Text style={styles.saldoText}>Seu saldo em Carteira:</Text>
      <Text style={styles.saldoValor}>{`R$ ${saldo.toFixed(2)}`}</Text>
    </View>
  );
};

export default Carteira;
