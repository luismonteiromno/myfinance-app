import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, Picker } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

export default function FinanceiroScreen({ navigation }) {
  const [salario, setSalario] = useState('');
  const [educacao, setEducacao] = useState('');
  const [rendaFixa, setRendaFixa] = useState('');
  const [outrasRendas, setOutrasRendas] = useState('');
  const [despesas, setDespesas] = useState('');
  const [lucroTotal, setLucroTotal] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth()); // Mês atual como valor inicial
  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  // Função para carregar os valores armazenados no AsyncStorage
  useEffect(() => {
    const loadValues = async () => {
      try {
        const storedSalario = await AsyncStorage.getItem('salario');
        const storedEducacao = await AsyncStorage.getItem('educacao');
        const storedRendaFixa = await AsyncStorage.getItem('rendaFixa');
        const storedOutrasRendas = await AsyncStorage.getItem('outrasRendas');
        const storedDespesas = await AsyncStorage.getItem('despesas');

        if (storedSalario !== null) setSalario(storedSalario);
        if (storedEducacao !== null) setEducacao(storedEducacao);
        if (storedRendaFixa !== null) setRendaFixa(storedRendaFixa);
        if (storedOutrasRendas !== null) setOutrasRendas(storedOutrasRendas);
        if (storedDespesas !== null) setDespesas(storedDespesas);
      } catch (error) {
        console.log("Erro ao carregar dados armazenados", error);
      }
    };

    loadValues();
  }, []);

  // Função para salvar os valores no AsyncStorage
  useEffect(() => {
    const saveValues = async () => {
      try {
        await AsyncStorage.setItem('salario', salario);
        await AsyncStorage.setItem('educacao', educacao);
        await AsyncStorage.setItem('rendaFixa', rendaFixa);
        await AsyncStorage.setItem('outrasRendas', outrasRendas);
        await AsyncStorage.setItem('despesas', despesas);
      } catch (error) {
        console.log("Erro ao salvar dados", error);
      }
    };

    saveValues();
  }, [salario, educacao, rendaFixa, outrasRendas, despesas]);

  const calcularReceita = () => {
    const salarioNum = parseFloat(salario) || 0;
    const educacaoNum = parseFloat(educacao) || 0;
    const rendaFixaNum = parseFloat(rendaFixa) || 0;
    const outrasRendasNum = parseFloat(outrasRendas) || 0;
    const despesasNum = parseFloat(despesas) || 0;
    const lucrosTotal = ((salarioNum + rendaFixaNum + outrasRendasNum) - educacaoNum) - despesasNum;
    setLucroTotal(lucrosTotal);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Financeiro</Text>
      <Text style={styles.description}>Gerencie suas finanças para o mês de:</Text>
      
      <Picker
        selectedValue={selectedMonth}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedMonth(itemValue)}
      >
        {months.map((month, index) => (
          <Picker.Item key={index} label={month} value={index} />
        ))}
      </Picker>

      <Text style={styles.label}>Salário:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Seu salário"
        value={salario}
        onChangeText={setSalario}
      />

      <Text style={styles.label}>Educação:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Insira os gastos com educação (Transporte, material etc.)"
        value={educacao}
        onChangeText={setEducacao}
      />

      <Text style={styles.label}>Renda Fixa:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Insira a renda fixa (se houver)"
        value={rendaFixa}
        onChangeText={setRendaFixa}
      />

      <Text style={styles.label}>Outras Rendas:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Insira outras rendas"
        value={outrasRendas}
        onChangeText={setOutrasRendas}
      />

      <Text style={styles.label}>Despesas:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Insira as despesas"
        value={despesas}
        onChangeText={setDespesas}
      />

      <Button
        title="Calcular Receita Total"
        onPress={calcularReceita}
      />

      {lucroTotal !== null && (
        <Text style={styles.result}>Receita Total para {months[selectedMonth]}: R$ {lucroTotal.toFixed(2)}</Text>
      )}

      <Button
        title="Voltar para Home"
        onPress={() => navigation.navigate('Home')}
        style={styles.backButton}
      />
    </View>
  );
}
