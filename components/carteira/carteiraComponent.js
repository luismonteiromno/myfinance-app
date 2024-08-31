import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

const Carteira = ({ setTotalDespesas, setLimiteDespesas }) => {
  const [saldoTotal, setSaldoTotal] = useState(0);
  const [totalDespesas, setTotalDespesasLocal] = useState(0);
  
  useEffect(() => {
    const fetchDados = async () => {
      try {
        const storedLucroTotal = await AsyncStorage.getItem('lucroTotal');
        const storedTotalDespesas = await AsyncStorage.getItem('despesasTotal');

        if (storedLucroTotal !== null) {
          setSaldoTotal(parseFloat(storedLucroTotal));
        }
        if (storedTotalDespesas !== null) {
          const total = parseFloat(storedTotalDespesas);
          setTotalDespesasLocal(total);
          setTotalDespesas(total); // Passa para o componente pai
        }
      } catch (error) {
        console.log('Erro ao buscar os dados:', error);
      }
    };

    fetchDados();
  }, []);

  return (
    <View>
      <Text style={styles.expenseLabel}>Saldo em Carteira:</Text>
      <Text style={styles.expenseValue}>{`R$ ${saldoTotal.toFixed(2)}`}</Text>
      <Text style={styles.expenseLabel}>Total das Despesas:</Text>
      <Text style={styles.expenseValue}>{`R$ ${totalDespesas.toFixed(2)}`}</Text>
  </View>
  );
};

export default Carteira;
