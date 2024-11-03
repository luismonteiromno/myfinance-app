import React from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import BalanceEmergency from './../../components/balanceEmergency/balanceEmergencyComponent';
import TransferEmergency from '../../components/transferEmergency/transferEmergencyComponent';
import PlanEmergency from '../../components/planEmergency/planEmergencyComponent';
import DateRemindEmergency from '../../components/dateRemindEmergency/dateRemindEmergencyComponent';
import { Entypo, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons/';

export default function ReservaScreen({ navigation }) {
  const imagem = require('../../assets/emergency.jpeg')
  const { width, height } = Dimensions.get('screen')
  
  
  return (
    <SafeAreaView style={styles.safeArea}>

        <Image
          style={styles.image}
          source={imagem}
        />
      <View style={styles.container}>

        <View style={styles.containerContent}>
          <Text style={styles.title}>Reserva de Emergência</Text>
          <View style={styles.textBox}>
            <Text style={styles.description}>Reserve um dinheiro para imprevistos futuros para não se apertar</Text>
          </View>
        </View>

        <BalanceEmergency/>
        <PlanEmergency/>
        <DateRemindEmergency/>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
           
            onPress={() => navigation.navigate('historico')}
          >
            <View style={styles.buttonContent}>
              <Entypo name="wallet" size={24} style={styles.icon}/>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity 
           
           onPress={() => navigation.navigate('Home')}
         >
           <View style={styles.buttonContent}>
             <MaterialCommunityIcons name='menu' size={24} style={styles.icon}/>
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

      <View style={styles.transfer}>
        <TransferEmergency type='Guardar' />
        <TransferEmergency type='Resgatar' />
      </View>


    </SafeAreaView>
  );
}
