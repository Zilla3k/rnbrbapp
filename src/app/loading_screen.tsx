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
        style={styles.animation_wave}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  animation: {
    width: 350,
    height: 350,
    marginBottom: -80,
  },
  animation_wave: {
    width: 200,
    height: 200,
  },
});
