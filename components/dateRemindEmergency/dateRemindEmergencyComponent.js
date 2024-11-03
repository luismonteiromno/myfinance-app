import React, { useEffect, useState } from 'react';
import { Dimensions, Text, View, TouchableOpacity, Modal, TextInput } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Feather } from "@expo/vector-icons"
import styles from './styles';

export default function DateRemindEmergency () {
  
  const { width, height } = Dimensions.get('screen')

  const [modalVisible, setModalVisible] = useState(false)
  const [dayPlan, setDayPlan] = useState()
  var dia
  var mes
  var ano

  async function ChangeBalancePlan() {
    if (modalVisible === false) {
      setModalVisible(true);
    }
    if (modalVisible === true) {
      setModalVisible(false);
    }
  }

  if (dayPlan) {
    dia = parseInt(dayPlan.day)
    mes = parseInt(dayPlan.month)
    ano = parseInt(dayPlan.year)
  }else{
    dia = "00"
    mes = "00"
    ano = "0000"
  }

  return (
    <View style={styles.container} width={width - 132}>
      <Text style={styles.text}>Data meta:</Text>
      <TouchableOpacity style={styles.box} onPress={ChangeBalancePlan}>
        <Text style={styles.content}>{`${dia}/${mes}/${ano}`}</Text>
      </TouchableOpacity>

      <Modal transparent visible={modalVisible} animationType="fade" >

        <View style={styles.containerModal} height={height}>
          <View style={styles.boxModal}>
            
              <Calendar 
              style={styles.calendar} 
              renderArrow={( direction ) => <Feather size={24} color="#000000" name={`chevron-${direction}`}/>}
              headerStyle={{ 
                borderBottomWidth: 0.5, 
                borderBottomColor: '#000000', 
                paddingBottom: 10, 
                marginBottom: 10,
              }}
              theme={{
                textMonthFontSize: 24,
                monthTextColor: '#000000',
                todayTextColor: '#000000',
                selectedDayBackgroundColor: '#000000',
                selectedDayTextColor: '#FFFFFF',
                arrowColor: '#000000',
                calendarBackground: 'transparent',
                textDayStyle: { color: "#000000" },
                textDisabledColor: '#E8E8E8',
                arrowStyle: {
                  margin: 0,
                  padding: 0,
                }
              }}
              minDate={new Date().toDateString()}
              hideExtraDays={ true }
              onDayPress={setDayPlan}
              markedDates={dayPlan && {
                [dayPlan.dateString]: { selected: true },
              }}
            />

            <TouchableOpacity onPress={ChangeBalancePlan} style={styles.button}>
            
              <Text style={{ color: '#000000' }}>
                Botão
              </Text>

            </TouchableOpacity>
            
          </View>
        </View>

      </Modal>

    </View>

    

  )
}
