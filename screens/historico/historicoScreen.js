import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons/';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Navbar from '../../components/navBar/navBarComponent';
import styles from '../historico/styles';

const transactions = [
  { id: 1, date: '01/08/2024', description: 'Compra no supermercado', amount: -45.20 },
  { id: 2, date: '20/08/2024', description: 'Transferência recebida', amount: 100.00 },
  { id: 3, date: '25/08/2024', description: 'Aluguel', amount: -500.00 },
  { id: 4, date: '25/08/2024', description: 'Café', amount: -5.50 },
  { id: 5, date: '27/08/2024', description: 'Academia', amount: -60.00 },
  { id: 6, date: '05/09/2024', description: 'Uber', amount: -20.00 },
  { id: 7, date: '10/09/2024', description: 'Recebimento salário', amount: 1500.00 },
];
export default function HistoricoScreen({navigation}){
    
    return ( 
     <View style={styles.main}>
        <Navbar/>
       <View style={styles.container}>
       
       
        <ScrollView style={styles.conteudo}>
       
          <Text style={styles.header}>Histórico de Transações</Text>
       
        {transactions.map((item) => (
          <View key={item.id} style={styles.transactionContainer}>
            <Text style={styles.date}>{item.date}</Text>
            <View style={styles.transaction}>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={[styles.amount, { color: item.amount < 0 ? 'red' : 'green' }]}>
                {item.amount < 0 ? '-' : '+'}${Math.abs(item.amount).toFixed(2)}
              </Text>
            </View>
          </View>
        ))}
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
     </View>
    );
}