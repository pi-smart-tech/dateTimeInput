import { StyleSheet, View } from 'react-native';
import DateInput from './src/dateInput/DateInput';
import TimeInput from './src/timeInput/TimeInput';

export default function App() {
  return (
    <View style={styles.container}>
      

      <DateInput></DateInput>


      <TimeInput></TimeInput>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
