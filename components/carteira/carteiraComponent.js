import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

const Carteira = React.memo(({ setTotalDespesas, setSaldoTotal }) => {
  const [saldoTotalLocal, setSaldoTotalLocal] = useState(0);
  const [totalDespesasLocal, setTotalDespesasLocal] = useState(0);

  // Função que vai buscar os dados da AsyncStorage
  const fetchDados = async () => {
    try {
      const storedLucroTotal = await AsyncStorage.getItem('lucroTotal');
      const storedTotalDespesas = await AsyncStorage.getItem('despesasTotalCarteira');

      const lucro = storedLucroTotal !== null ? parseFloat(storedLucroTotal) : 0;
      const despesas = storedTotalDespesas !== null ? parseFloat(storedTotalDespesas) : 0;

      // Atualiza o estado local do componente Carteira
      setSaldoTotalLocal(lucro);
      setTotalDespesasLocal(despesas);

      // Atualiza os valores no componente pai através das funções passadas como props
      setSaldoTotal(lucro);
      setTotalDespesas(despesas);
    } catch (error) {
      console.log('Erro ao buscar os dados:', error);
    }
  };

  useEffect(() => {
    fetchDados();
  }, []); // O array vazio faz com que essa função seja chamada uma vez quando o componente for montado

  return (
    <View>
      <Text style={styles.expenseLabel}>Saldo em Carteira:</Text>
      <Text style={styles.expenseValue}>{`R$ ${saldoTotalLocal.toFixed(2)}`}</Text>
      <Text style={styles.expenseLabel}>Total das Despesas:</Text>
      <Text style={styles.expenseValue}>{`R$ ${totalDespesasLocal.toFixed(2)}`}</Text>
    </View>
  );
});

export default Carteira;
