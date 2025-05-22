import { router } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { ButtonCustom } from '@/components/buttonCustom';
import { InputCustom } from "@/components/inputCustom";

import { colors, fontFamily } from "@/styles/theme";


export default function HomeScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const handleLogin = async () => {
    setIsLoading(true);
    // try {
    //   const data = {email, password};
    //   if (!data.email || !data.password) {
    //     Alert.alert('Erro', 'Preencha todos os campos!');
    //     setIsLoading(false);

    //     return;
    //   }
    //   const response = await api.post(`/users/login`, {
    //     email,
    //     password
    //   });
    //   if (response.status === 200) {
    //     const userName = response.data.name;
    //     await AsyncStorage.setItem("userName", userName);

    //     const userEmail = response.data.email;
    //     await AsyncStorage.setItem("userEmail", userEmail);

    //     const userPhone = response.data.phone;
    //     await AsyncStorage.setItem("userPhone", userPhone);
    //   }
      router.replace('/home');
      setIsLoading(false);
    // }
    // catch (error) {
    //   Alert.alert('Erro', 'Email ou senha inválidos');
    //   setIsLoading(false);
    //   console.log(error);
    // }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
      Login
      </Text>

      <InputCustom
      placeholder="Email"
      keyboardType="email-address"
      value={email.toLowerCase()}
      onChangeText={setEmail}
      />
      <InputCustom
      placeholder="Senha"
      secureTextEntry
      value={password}
      onChangeText={setPassword}
      />

      <View style={{ height: 10 }} />
      <View style={styles.textRecovery}>
        <Text style={styles.textMedium}>
          <Text 
            onPress={()=>{
              router.push('/recovery_screen')
            }}
            style={styles.link}
            >
              Esqueceu a senha?
          </Text>
        </Text>
      </View>

      <ButtonCustom 
      title="Entrar"
      onPress={handleLogin}
      disabled={isLoading}
      />
      <View style={{ height: 10 }} />
      {isLoading && <ActivityIndicator size="small" color={colors.gray.dark} />}

      <Text style={styles.text}>
        Ainda não possui uma conta? <Text style={styles.textMedium}>
          <Text 
            onPress={()=>{
              router.push('/signup_screen')
            }}
            style={styles.link}
            >
              Cadastre-se
          </Text>
        </Text>
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title:{
    fontFamily: fontFamily.regular,
    fontSize: 32,
  },
  text:{
    marginTop: 10,
    color: colors.gray.base,
  },
  textRecovery: {
    marginLeft: "10%",
    alignSelf: 'flex-start'
  },
  textMedium: {
    fontFamily: fontFamily.medium,
    textDecorationLine: 'underline',
  },
  link: {
    opacity: 0.5,
  }
})