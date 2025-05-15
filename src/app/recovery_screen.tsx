import { ButtonCustom } from '@/components/buttonCustom';
import { InputCustom } from '@/components/inputCustom';
import { colors } from '@/styles/colors';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, View } from 'react-native';

const RecoveryScreen = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRecovery = async () => {
    setIsLoading(true)
      
    if (!email) {
      Alert.alert('Erro', 'Por favor, insira seu endereço de email.');
      setIsLoading(false)
      return;
    }
    setTimeout(() => {
      Alert.alert('Sucesso', 'As instruções de recuperação foram enviadas para o seu email.');
      setIsLoading(false)
      router.replace('/');
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperação de Senha</Text>
      <Text style={styles.subtitle}>Digite seu email para recuperar sua senha</Text>

      <InputCustom
        placeholder="Email"
        keyboardType= "email-address"
        onChangeText={setEmail}
      />
      <ButtonCustom 
        title="Enviar"
        onPress={handleRecovery}
        disabled={isLoading}
      />
      <View style={{height: 10}}/>
      {isLoading && <ActivityIndicator size="small" color={colors.gray.dark} /> }
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default RecoveryScreen;