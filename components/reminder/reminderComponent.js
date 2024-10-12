import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';

const Reminders = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [reminderText, setReminderText] = useState('');
  const [reminders, setReminders] = useState({});

  const [markedDates, setMarkedDates] = useState({
    [currentDate]: {
      selected: true,
      selectedColor: '#3E2D5D',
    },
  });

  useEffect(() => {
    const loadReminders = async () => {
      try {
        const storedReminders = await AsyncStorage.getItem('reminders');
        if (storedReminders) {
          const parsedReminders = JSON.parse(storedReminders);
          setReminders(parsedReminders);

          const reminderMarks = Object.keys(parsedReminders).reduce((acc, date) => {
            acc[date] = { marked: true, dotColor: '#3E2D5D' };
            return acc;
          }, {});

          setMarkedDates((prev) => ({
            ...prev,
            ...reminderMarks,
          }));
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

    if (selectedDate < currentDate) {
      Alert.alert('Erro', 'Não é possível criar lembretes para dias passados.');
      return;
    }

    const newReminders = {
      ...reminders,
      [selectedDate]: [...(reminders[selectedDate] || []), reminderText.trim()],
    };

    setReminders(newReminders);
    saveReminders(newReminders);
    setReminderText('');

    setMarkedDates((prev) => ({
      ...prev,
      [selectedDate]: {
        selected: true,
        selectedColor: '#3E2D5D',
        marked: true,
        dotColor: '#3E2D5D',
      },
    }));
  };

  const removeReminder = (date, index) => {
    const newReminders = { ...reminders };
    newReminders[date].splice(index, 1);
    if (newReminders[date].length === 0) {
      delete newReminders[date];
      const newMarkedDates = { ...markedDates };
      delete newMarkedDates[date];
      setMarkedDates(newMarkedDates);
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

  const handleDayPress = (day) => {
    const newDate = day.dateString;
    setSelectedDate(newDate);

    setMarkedDates((prev) => {
      const updatedMarks = Object.keys(prev).reduce((acc, date) => {
        if (reminders[date]) {
          acc[date] = {
            marked: true,
            dotColor: '#3E2D5D',
          };
        }
        return acc;
      }, {});

      updatedMarks[newDate] = {
        selected: true,
        selectedColor: '#3E2D5D',
        marked: reminders[newDate]?.length > 0 ? true : false,
        dotColor: reminders[newDate]?.length > 0 ? '#3E2D5D' : undefined,
      };

      return updatedMarks;
    });
  };

  return (
    <View style={styles.remindersContainer}>
      <Text style={styles.sectionTitle}>Lembretes</Text>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={markedDates}
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
          <MaterialIcons name="add" size={24} color="#3E2D5D" />
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