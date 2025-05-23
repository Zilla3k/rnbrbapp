import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

type AppointmentsProps = {
  title: string;
  availableTimes: string[];
  handleTimeSelection: (time: string) => void;
  selectedTime: string | null;
};

export function AppointmentsCustom({title, availableTimes, handleTimeSelection, selectedTime} : AppointmentsProps){
  return (
    <View style={styles.timeScrollView}>
      <Text style={styles.timeScrollViewTitle}>{title}</Text>
      <View style={styles.timeGrid}>
        {availableTimes.map((time: string) => (
          <TouchableOpacity
            key={time}
            style={[
              styles.timeButton,
              selectedTime === time && styles.selectedTimeButton,
            ]}
            onPress={() => handleTimeSelection(time)}
          >
            <Text style={selectedTime === time && styles.selectedTimeText}>{time}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

