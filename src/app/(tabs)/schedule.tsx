import { StyleSheet, Text, View } from 'react-native';

export default function ScheduleScreen() {
  return (
    <View style={styles.container}>
      <Text>Schedule Tab Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8'
  },
});
