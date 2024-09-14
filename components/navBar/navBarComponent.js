import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';


const Navbar = ({ onLogout }) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>MyFinance</Text>
      <TouchableOpacity onPress={onLogout}>
        <MaterialIcons name="logout" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
