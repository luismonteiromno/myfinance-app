import { Entypo, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons/';
import { Text, View, ScrollView, Modal, TouchableOpacity } from 'react-native';
import Navbar from '../../components/navBar/navBarComponent';
import styles from '../historico/styles';

export default function HistoricoScreen({navigation}){
    
    return ( 
     <View style={styles.container}>
        <Navbar/>
        <ScrollView>

        <View style={styles.buttonContainer}>
      
        <TouchableOpacity 
           
           onPress={() => navigation.navigate('Home')}
         >
           <View style={styles.buttonContent}>
             <MaterialCommunityIcons name='menu' size={24} style={styles.icon}/>
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
        </ScrollView>
     </View>
    );
}