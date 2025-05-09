import LottieView from 'lottie-react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/images/loading.json')}
        autoPlay
        loop
        style={styles.animation}
      />
      <LottieView
        source={require('../assets/images/loading_wave.json')} 
        autoPlay
        loop
        style={styles.animation}
      />
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
  animation: {
    width: 200,
    height: 200,
  },
});
