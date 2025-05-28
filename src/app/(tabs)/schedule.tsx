import { AppointmentsCustom } from '@/components/appointmentsCustom';
import { ButtonCustom } from '@/components/buttonCustom';
import { DateInputCustom } from '@/components/dateInputCustom';
import { DatePickerCustom } from '@/components/datePickerCustom';
import { colors } from '@/styles/colors';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Appointments() {
  const [date, setDate] = useState(new Date());
  const minimumDate = new Date();
  const [show, setShow] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const availableTimes = {
    Manhã: [
      '08:00', '08:30',
      '09:00', '09:30',
      '10:00', '10:30',
      '11:00', '11:30',
      '12:00',
    ],
    Tarde: [
      '14:00', '14:30',
      '15:00', '15:30', 
      '16:00', '16:30', 
      '17:00', '17:30', 
    ],
    Noite: [
      '18:00', '18:30', 
      '19:00', '19:30',
      '20:00', '20:30', 
      '21:00'
    ],
  };

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };
  
  const handleTimeSelection = (time: string) : void => {
    setSelectedTime(time);
  };

  const submitAppointment = (): void => {
    Alert.alert("Agendamento", `Agendado para ${date.toLocaleDateString()} às ${selectedTime}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendar um atendimento</Text>
      <Text style={styles.subtitle}>Selecione data e um horário para criar o agendamento</Text>

      <View style={styles.inputContainer} >
        <Text style={styles.label}>Escolha a data:</Text>

        <DateInputCustom
          value={date.toLocaleDateString()}
          onPress={() => setShow(prevShow => !prevShow)}
        />
        {show && (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <DatePickerCustom
              date={date}
              show={show}
              onChange={onChange}
              minimumDate={minimumDate}
            />
          </View>
        )}
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.scrollViewTitle}>Horários</Text>

        {Object.entries(availableTimes).map(([key, times]) => (
          <AppointmentsCustom
            key={key}
            title={key.charAt(0).toUpperCase() + key.slice(1)}
            availableTimes={times}
            handleTimeSelection={handleTimeSelection}
            selectedTime={selectedTime}
          />
        ))}
        <ButtonCustom 
          title='Agendar'
          onPress={submitAppointment}
        />
        <View style={{height: 20}}/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#F8F8F8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
    color: colors.black.base
  },
  subtitle: {
    fontSize: 14,
    color: colors.gray.base,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: colors.black.base,
    marginBottom: 8,
  },
  scrollViewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black.base,
    marginBottom: 8,
  },
});
