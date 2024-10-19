import React from 'react';
import { Text, View, Button,TouchableOpacity } from 'react-native';
import styles from './styles';
import { Entypo, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons/';

export default function ReservaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reserva de Emergência</Text>
      <Text style={styles.description}>Here you can manage your emergency reserves.</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
           
            onPress={() => navigation.navigate('Home')}
          >
            <View style={styles.buttonContent}>
              <Entypo name="menu" size={24} style={styles.icon}/>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity 
           
           onPress={() => navigation.navigate('Financeiro')}
         >
           <View style={styles.buttonContent}>
             <MaterialCommunityIcons name='finance' size={24} style={styles.icon}/>
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
    </View>
  );
}
