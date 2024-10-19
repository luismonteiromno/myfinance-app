import React, { useEffect, useState } from 'react';
import { View, Text, Button,TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import { Entypo, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons/';

export default function CarteiraScreen({ navigation }) {
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
    <View style={styles.container}>
      <Text style={styles.title}>Carteira</Text>
      <Text style={styles.description}>Veja o seu saldo total.</Text>
      <Text style={styles.label}>Saldo Total:</Text>
      <Text style={styles.saldo}>R$ {saldoTotal.toFixed(2)}</Text>
      
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
           
            onPress={() => navigation.navigate('Financeiro')}
          >
            <View style={styles.buttonContent}>
              <MaterialCommunityIcons name='finance' size={24} style={styles.icon}/>
            </View>
          </TouchableOpacity>
        </View>
    </View>
  );
}
