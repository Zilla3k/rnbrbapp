import { ButtonCustom } from "@/components/buttonCustom";
import { colors, fontFamily } from "@/styles/theme";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { Alert, Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

export default function ProfileScreen() {
  const [name] = useState("Henrique Silva");
  const [phone, setPhone] = useState("(11) 91234-5678");
  const [newPhone] = useState("(11) 91284-5678");
  const [email] = useState("henrique@gmail.com");
  const [image] = useState(null);

  function updateProfile() {
    if (!newPhone.trim()) {
      Alert.alert("Erro", "O número de telefone não pode estar vazio.");
      return;
    }
    setPhone(newPhone);
    Alert.alert("Sucesso", "Número de telefone atualizado!");
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image ? { uri: image } : require("@/assets/profile.jpg")} style={styles.profileImage} />
        <TouchableOpacity style={styles.editIcon}>
          <AntDesign name="edit" size={20} color={colors.gold.dark} />
        </TouchableOpacity>
      </View>

      <TextInput style={styles.input} value={name} editable={false} />
      <TextInput style={styles.input} value={email} editable={false} />
      <TextInput 
        style={styles.input} 
        value={phone} 
        editable={false}
      />
      <ButtonCustom title="Meus Agendamentos" onPress={updateProfile} />
      <ButtonCustom title="Atualizar Dados" onPress={updateProfile} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center",
    padding: 20, 
  },
  imageContainer: { 
    position: "relative", 
    alignItems: "center", 
    marginBottom: 20 
  },
  profileImage: { 
    width: 180, 
    height: 180, 
    borderRadius: 100,
    borderColor: colors.gray.light
  },
  editIcon: { 
    position: "absolute", 
    bottom: 0, 
    right: 30,
    padding: 5, 
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.gold.dark,
    backgroundColor: colors.white.base 
  },
  input: { 
    width: '100%',
    height: 60,
    padding: 10, 
    borderWidth: 1, 
    borderColor: colors.gray.light,
    fontSize: 16,
    fontFamily: fontFamily.regular,
    borderRadius: 5, 
    marginBottom: 10 
  }
});
