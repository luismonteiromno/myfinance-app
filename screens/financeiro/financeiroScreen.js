import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import { Entypo, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons/';

export default function FinanceiroScreen({ navigation }) {
  const [salario, setSalario] = useState('');
  const [educacao, setEducacao] = useState('');
  const [rendaFixa, setRendaFixa] = useState('');
  const [outrasRendas, setOutrasRendas] = useState('');
  const [despesas, setDespesas] = useState('');
  const [lucroTotal, setLucroTotal] = useState(null);
  const [despesasTotal, setDespesasTotal] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const loadValues = async () => {
      try {
        const values = await Promise.all([
          AsyncStorage.getItem('salario'),
          AsyncStorage.getItem('educacao'),
          AsyncStorage.getItem('rendaFixa'),
          AsyncStorage.getItem('outrasRendas'),
          AsyncStorage.getItem('despesas'),
        ]);

        if (values[0] !== null) setSalario(values[0]);
        if (values[1] !== null) setEducacao(values[1]);
        if (values[2] !== null) setRendaFixa(values[2]);
        if (values[3] !== null) setOutrasRendas(values[3]);
        if (values[4] !== null) setDespesas(values[4]);
      } catch (error) {
        console.log("Erro ao carregar dados armazenados", error);
      }
    };

    loadValues();
  }, []);

  const calcularReceita = async () => {
    if (!salario || !educacao || !rendaFixa || !outrasRendas || !despesas) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    setErrorMessage(''); // Limpa a mensagem de erro se tudo estiver preenchido

    const salarioNum = parseFloat(salario) || 0;
    const educacaoNum = parseFloat(educacao) || 0;
    const rendaFixaNum = parseFloat(rendaFixa) || 0;
    const outrasRendasNum = parseFloat(outrasRendas) || 0;
    const despesasNum = parseFloat(despesas) || 0;

    const despesasTotal = educacaoNum + despesasNum;
    const lucrosTotal = (salarioNum + rendaFixaNum + outrasRendasNum) - despesasTotal;

    setLucroTotal(lucrosTotal);
    setDespesasTotal(despesasTotal);

    try {
      await AsyncStorage.setItem('lucroTotal', lucrosTotal.toString());
      await AsyncStorage.setItem('despesasTotal', despesasTotal.toString());
    } catch (error) {
      console.log("Erro ao salvar", error);
    }
  };

  const handleChange = async (setter, key, value) => {
    setter(value);
    await AsyncStorage.setItem(key, value);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Financeiro</Text>

      <Text style={styles.label}>Salário:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Seu salário"
        value={salario}
        onChangeText={(value) => handleChange(setSalario, 'salario', value)}
      />

      <Text style={styles.label}>Gastos com Educação:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Insira os gastos com educação"
        value={educacao}
        onChangeText={(value) => handleChange(setEducacao, 'educacao', value)}
      />

      <Text style={styles.label}>Ganhos de Renda Fixa:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Insira a renda fixa"
        value={rendaFixa}
        onChangeText={(value) => handleChange(setRendaFixa, 'rendaFixa', value)}
      />

      <Text style={styles.label}>Outras Rendas:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Insira outras rendas"
        value={outrasRendas}
        onChangeText={(value) => handleChange(setOutrasRendas, 'outrasRendas', value)}
      />

      <Text style={styles.label}>Despesas:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Insira as despesas"
        value={despesas}
        onChangeText={(value) => handleChange(setDespesas, 'despesas', value)}
      />

      {errorMessage !== '' && (
        <Text style={styles.errorText}>{errorMessage}</Text>
      )}

      <View style={styles.buttonCalculateContainer}>
        <TouchableOpacity
          onPress={calcularReceita}
          style={styles.buttonCalculate}
        >
          <Text style={styles.buttonText}>Calcular Receita</Text>
        </TouchableOpacity>
      </View>

      {lucroTotal !== null && (
        <Text style={styles.result}>Receita Total: R$ {lucroTotal.toFixed(2)}</Text>
      )}

<View style={styles.buttonContainer}>
        <TouchableOpacity 
           
            onPress={() => navigation.navigate('Carteira')}
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
           
            onPress={() => navigation.navigate('Home')}
          >
            <View style={styles.buttonContent}>
              <MaterialCommunityIcons name='menu' size={24} style={styles.icon}/>
            </View>
          </TouchableOpacity>
        </View>
    </ScrollView>
  );
}
