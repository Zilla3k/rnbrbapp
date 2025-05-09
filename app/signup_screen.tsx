import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function SignupScreen() {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <Text>Signup Screen</Text>
      <Button onPress={() => router.push('/')} title="Go to Signup" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
});
