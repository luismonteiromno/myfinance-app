import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, Picker, ScrollView, TouchableOpacity} from 'react-native';
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
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  useEffect(() => {
    const loadValues = async () => {
      try {
        const values = await Promise.all([
          AsyncStorage.getItem('salario'),
          AsyncStorage.getItem('educacao'),
          AsyncStorage.getItem('rendaFixa'),
          AsyncStorage.getItem('outrasRendas'),
          AsyncStorage.getItem('despesas')
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

  useEffect(() => {
    const saveValues = async () => {
      try {
        await Promise.all([
          AsyncStorage.setItem('salario', salario),
          AsyncStorage.setItem('educacao', educacao),
          AsyncStorage.setItem('rendaFixa', rendaFixa),
          AsyncStorage.setItem('outrasRendas', outrasRendas),
          AsyncStorage.setItem('despesas', despesas)
        ]);
      } catch (error) {
        console.log("Erro ao salvar dados", error);
      }
    };

    saveValues();
  }, [salario, educacao, rendaFixa, outrasRendas, despesas]);

  const calcularReceita = async () => {
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

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
        placeholder="Insira os gastos com educação"
        value={educacao}
        onChangeText={setEducacao}
      />

      <Text style={styles.label}>Renda Fixa:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Insira a renda fixa"
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
        color="#007bff"
      />

      {lucroTotal !== null && (
        <Text style={styles.result}>Receita Total para {months[selectedMonth]}: R$ {lucroTotal.toFixed(2)}</Text>
      )}

<View style={styles.buttonContainer}>
        <TouchableOpacity 
           
            onPress={() => navigation.navigate('Home')}
          >
            <View style={styles.buttonContent}>
              <Entypo name="menu" size={24} style={styles.icon}/>
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
           
            onPress={() => navigation.navigate('Carteira')}
          >
            <View style={styles.buttonContent}>
              <MaterialCommunityIcons name='wallet' size={24} style={styles.icon}/>
            </View>
          </TouchableOpacity>
        </View>
    </ScrollView>
  );
}
