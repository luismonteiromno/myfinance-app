import React, { useState, useEffect } from 'react';
import { Alert, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import styles from './styles';

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
          AsyncStorage.getItem('lucroTotal'),
          AsyncStorage.getItem('despesasTotal'),
        ]);
  
        if (values[0] !== null) setSalario(values[0]);
        if (values[1] !== null) setEducacao(values[1]);
        if (values[2] !== null) setRendaFixa(values[2]);
        if (values[3] !== null) setOutrasRendas(values[3]);
        if (values[4] !== null) setDespesas(values[4]);
        if (values[5] !== null) setLucroTotal(parseFloat(values[5]));
        if (values[6] !== null) setDespesasTotal(parseFloat(values[6]));
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

  const generatePDF = async (salario, educacao, rendaFixa, outrasRendas, despesas, lucro, despesa) => {
    const htmlContent = `
      <h1>Resumo Financeiro</h1>
      <p><strong>Salário:</strong> R$ ${salario}</p>
      <p><strong>Gastos com Educação:</strong> R$ ${educacao}</p>
      <p><strong>Renda Fixa:</strong> R$ ${rendaFixa}</p>
      <p><strong>Outras Rendas:</strong> R$ ${outrasRendas}</p>
      <p><strong>Despesas:</strong> R$ ${despesas}</p>
      <p><strong>Lucro Total:</strong> R$ ${lucro}</p>
      <p><strong>Despesas Totais:</strong> R$ ${despesa}</p>
    `;

    console.log(
      'Salario' + salario,
      'Educacao' + educacao,
      'RendaFixa' + rendaFixa,
      'OutrasRendas' + outrasRendas,
      'Despesas' + despesas,
      'LucroTotal' + lucro,
      'DespesasTotal' + despesa
    )
    console.log(RNHTMLtoPDF);

    try {
      const options = {
        html: htmlContent,
        fileName: 'resumo_financeiro',
        directory: 'Documents',
      };

      const file = await RNHTMLtoPDF.convert(options);
      Alert.alert('Sucesso', `PDF gerado em: ${file.filePath}`);
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
    }
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

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={calcularReceita}
          style={styles.buttonCalculate}
        >
          <Text style={styles.buttonText}>Calcular Receita</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Lucro Total</Text>
      <TextInput 
        style={styles.input} 
        value={lucroTotal !== null ? lucroTotal.toFixed(2) : 0} 
        editable={false}
      />

      <Text style={styles.label}>Despesas Totais</Text>
      <TextInput 
        style={styles.input} 
        value={despesasTotal !== null ? despesasTotal.toFixed(2) : 0} 
        editable={false}
      />

      {lucroTotal !== null && (
        <Text style={styles.result}>Receita Total: R$ {lucroTotal.toFixed(2)}</Text>
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => generatePDF(salario, educacao, rendaFixa, outrasRendas, despesas, lucroTotal, despesasTotal)}
          style={styles.buttonCalculate}
        >
          <Text style={styles.buttonText}>Exportar para PDF</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.buttonHome}
        >
          <Text style={styles.buttonText}>Voltar para Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
