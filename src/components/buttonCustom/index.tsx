import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type ButtonCustomProps = {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
};

export function ButtonCustom ({ title, onPress, disabled = false }: ButtonCustomProps){
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, disabled && styles.buttonDisabled]}
      disabled={disabled}
    >
      <Text style={[styles.text, disabled && styles.textDisabled]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
