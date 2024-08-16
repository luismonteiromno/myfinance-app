// FinanceiroScreen.js
import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './styles';

export default function FinanceiroScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Financeiro</Text>
      <Text style={styles.description}>Here you can manage your financial transactions.</Text>
      
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
