import { FontAwesome } from '@expo/vector-icons';
import { TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';

type DateInputProps = {
  value: string;
  onPress: () => void;
  style?: any;
  iconStyle?: any;
  inputStyle?: any;
};

export function DateInputCustom({ value, onPress, style, iconStyle, inputStyle }: DateInputProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.dateInputContainer}>
      <FontAwesome name="calendar" color="#888" size={24} style={styles.icon} />
      <TextInput
        style={styles.input}
        value={value}
        editable={false}
        pointerEvents="none"
      />
    </TouchableOpacity>
  );
}