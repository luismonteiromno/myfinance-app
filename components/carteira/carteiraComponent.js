import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

const Carteira = React.memo(({ setTotalDespesas, setSaldoTotal }) => { // Adicione setSaldoTotal
  const [saldoTotal, setSaldoTotalLocal] = useState(0);
  const [totalDespesas, setTotalDespesasLocal] = useState(0);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const storedLucroTotal = await AsyncStorage.getItem('lucroTotal');
        const storedTotalDespesas = await AsyncStorage.getItem('despesasTotalCarteira');

        const lucro = storedLucroTotal !== null ? parseFloat(storedLucroTotal) : 0;
        const despesas = storedTotalDespesas !== null ? parseFloat(storedTotalDespesas) : 0;

        setSaldoTotalLocal(lucro);
        setTotalDespesasLocal(despesas);
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
});

export default Carteira;
