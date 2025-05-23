import { colors } from "@/styles/colors";
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import React from "react";
import { Platform } from "react-native";

type DatePickerProps = {
  date: Date;
  show: boolean;
  onChange: (event: DateTimePickerEvent, date?: Date) => void;
  minimumDate: Date;
}

export function DatePickerCustom({date, show,  onChange, minimumDate} : DatePickerProps){
  return(
    <DateTimePicker
      value={date}
      mode="date"
      display={Platform.OS === 'ios' ? 'inline' : 'spinner'}
      onChange={onChange}
      minimumDate={minimumDate}
      accentColor={colors.gold.base}
      themeVariant="light"
    />
  )
}