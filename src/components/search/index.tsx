import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { colors } from "@/styles/theme";
import { styles } from "./styles";

type SearchButtonProps = {
  placeholder?: string;
  buttonColor?: string;
  iconName?: keyof typeof FontAwesome.glyphMap;
  showButtonText?: boolean;
  buttonText?: string;
  size?: number;
  onPress?: () => void;

  value: string;
  onChangeText: (text: string) => void;
};

export function SearchButton ({ 
  placeholder = "Buscar barbearia", 
  buttonColor = colors.gold.base, 
  iconName, 
  size = 30, 
  buttonText, 
  onPress,


  value,
  onChangeText,
}: SearchButtonProps) {

  const hasText = !!buttonText;
  const hasIcon = !!iconName;

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder={placeholder} 
        keyboardType="default"
        style={styles.input}


        value={value}
        onChangeText={onChangeText} 
      />

      <TouchableOpacity
      style={[
        styles.button,
        { 
        backgroundColor: buttonColor,
        paddingHorizontal: hasText && hasIcon ? 20 : 15,
        }
      ]}
      onPress={onPress}
      >
      {hasText && <Text style={styles.buttonText}>{buttonText}</Text>}
      {hasIcon && <FontAwesome name={iconName} size={size} color={colors.white.base} />}
      </TouchableOpacity>
    </View>
  );
};