import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './styles';

export default function ReservaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reserva de Emergência</Text>
      <Text style={styles.description}>Here you can manage your emergency reserves.</Text>
      
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
