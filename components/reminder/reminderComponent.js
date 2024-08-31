import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';

const Reminders = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [reminderText, setReminderText] = useState('');
  const [reminders, setReminders] = useState({});

  useEffect(() => {
    const loadReminders = async () => {
      try {
        const storedReminders = await AsyncStorage.getItem('reminders');
        if (storedReminders) {
          setReminders(JSON.parse(storedReminders));
        }
      } catch (error) {
        console.error('Erro ao carregar lembretes:', error);
      }
    };

    loadReminders();
  }, []);

  const saveReminders = async (newReminders) => {
    try {
      await AsyncStorage.setItem('reminders', JSON.stringify(newReminders));
    } catch (error) {
      console.error('Erro ao salvar lembretes:', error);
    }
  };

  const addReminder = () => {
    if (!selectedDate || !reminderText.trim()) {
      Alert.alert('Erro', 'Selecione uma data e insira um lembrete.');
      return;
    }

    const newReminders = {
      ...reminders,
      [selectedDate]: [...(reminders[selectedDate] || []), reminderText.trim()],
    };

    setReminders(newReminders);
    saveReminders(newReminders);
    setReminderText('');
  };

  const removeReminder = (date, index) => {
    const newReminders = { ...reminders };
    newReminders[date].splice(index, 1);
    if (newReminders[date].length === 0) {
      delete newReminders[date];
    }
    setReminders(newReminders);
    saveReminders(newReminders);
  };

  const renderReminder = ({ item, index }) => (
    <View style={styles.reminderItem}>
      <Text style={styles.reminderText}>{item}</Text>
      <TouchableOpacity onPress={() => removeReminder(selectedDate, index)}>
        <MaterialIcons name="delete" size={24} color="#3E2D5D" backgroundColor="#3E2D5D" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.remindersContainer}>
      <Text style={styles.sectionTitle}>Lembretes</Text>
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: '#3E2D5D' },
          ...Object.keys(reminders).reduce((acc, date) => {
            acc[date] = { marked: true, dotColor: '#3E2D5D' };
            return acc;
          }, {}),
        }}
        theme={{
          selectedDayBackgroundColor: '#3E2D5D',
          todayTextColor: '#3E2D5D',
          arrowColor: '#3E2D5D',
        }}
        style={styles.calendar}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu lembrete"
          value={reminderText}
          onChangeText={setReminderText}
        />
        <TouchableOpacity style={styles.addButton} onPress={addReminder}>
          <MaterialIcons name="add" size={24} color="##3E2D5D" />
        </TouchableOpacity>
      </View>
      {selectedDate && reminders[selectedDate] && (
        <FlatList
          data={reminders[selectedDate]}
          renderItem={renderReminder}
          keyExtractor={(item, index) => index.toString()}
          style={styles.remindersList}
        />
      )}
    </View>
  );
};

export default Reminders;
