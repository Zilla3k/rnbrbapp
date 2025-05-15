import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { ButtonCustom } from '@/components/buttonCustom';
import { InputCustom } from '@/components/inputCustom';
import { colors } from '@/styles/colors';
import { fontFamily } from '@/styles/font-family';
import { useState } from 'react';

export default function SignupScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    console.log(nome, email, password, confirmPassword);

    setNome('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Cadastrar-se
      </Text>

      <InputCustom
      placeholder="Nome"
      value={nome}
      onChangeText={setNome}
      />
      <InputCustom
      placeholder="Email"
      keyboardType="email-address"
      value={email.toLowerCase()}
      onChangeText={setEmail}
      />
      <InputCustom
      placeholder="Senha"
      secureTextEntry
      keyboardType="email-address"
      value={password}
      onChangeText={setPassword}
      />
      <InputCustom
      placeholder="Confirmar senha"
      secureTextEntry
      keyboardType="email-address"
      value={confirmPassword}
      onChangeText={setConfirmPassword}
      />
      <ButtonCustom
        title='Cadastrar-se'
        onPress={handleSubmit}
      />
      <Text style={styles.text}>
        Ja possui uma conta? <Text style={styles.textMedium}><Link href="/" style={styles.link}>Fazer login</Link></Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontFamily: fontFamily.regular,
    fontSize: 32,
  },
  text:{
    marginTop: 10,
    color: colors.gray.base,
  },
  textMedium: {
    fontFamily: fontFamily.medium,
    textDecorationLine: 'underline',
  },
  link: {
    opacity: 0.5,
  }
});
