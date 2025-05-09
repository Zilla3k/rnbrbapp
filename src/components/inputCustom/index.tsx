import { TextInput } from "react-native";
import { colors } from "../../styles/theme";
import { styles } from "./styles";

type InputCustomProps = {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  onBlur?: () => void;
};

export function InputCustom ({ value, onChangeText, placeholder, secureTextEntry, keyboardType, onBlur }: InputCustomProps) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      placeholderTextColor={colors.gray.base}
      style={styles.input}
      onBlur={onBlur}
    />
  );
};