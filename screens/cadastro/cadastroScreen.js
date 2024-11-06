// RegisterScreen.js

import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { auth, db } from '../../services/firebase'; // Certifique-se de importar corretamente
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomModal from '../../components/modalMessage/modalMessage';
import styles from './styles';

const logo = require('../../assets/image.png');

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nome, setNome] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const showModal = (title, message) => {
    setModalTitle(title);
    setModalMessage(message);
    setModalVisible(true);
  };

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      showModal('Erro', 'As senhas não coincidem.');
      return;
    }

    if (password.length < 6) {
      showModal('Erro', 'A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    if (email && password && nome) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        await addDoc(collection(db, 'users'), {
          email: email,
          nome: nome,
          senha: password,
        });

        await AsyncStorage.setItem('isLoggedIn', 'true');
        showModal('Sucesso', 'Conta criada com sucesso!');
        navigation.navigate('Home');
        setNome('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } catch (error) {
        console.error("Erro", error);
        showModal('Erro', 'Não foi possível criar sua conta. Verifique os dados e tente novamente.');
      }
    } else {
      showModal('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.overlay}>
      <CustomModal
        visible={modalVisible}
        title={modalTitle}
        message={modalMessage}
        onClose={() => setModalVisible(false)}
      />
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.appName}>MyFinance</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.title}>Criar Conta</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#888"
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha"
          placeholderTextColor="#888"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          autoCapitalize="none"
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkText}>Já tem uma conta? Faça login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
