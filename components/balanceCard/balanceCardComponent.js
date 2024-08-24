import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { MaterialIcons } from '@expo/vector-icons';

const BalanceCard = ({ saldo }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <MaterialIcons name="account-balance-wallet" size={40} color="#4caf50" />
        <View style={styles.textContainer}>
          <Text style={styles.label}>Saldo Atual</Text>
          <Text style={styles.balance}>R$ {saldo.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
};

export default BalanceCard;
