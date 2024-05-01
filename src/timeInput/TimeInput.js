import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const hours = Array.from(new Array(24), (val, index) => index);
const minutes = Array.from(new Array(60), (val, index) => index);

export default function TimeInput() {
  const [selectedTime, setSelectedTime] = useState({
    hour: 2,
    minute: 0,
  });

  const handleTimeChange = (type, value) => {
    setSelectedTime((prevTime) => ({ ...prevTime, [type]: value }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Heure:</Text>
      <RNPickerSelect
        style={pickerStyles}
        value={selectedTime.hour.toString()}
        onValueChange={(value) => handleTimeChange('hour', parseInt(value, 10))}
        items={hours.map((hour) => ({ label: hour.toString(), value: hour.toString() }))}
      />
      <Text style={styles.label}>Minute:</Text>
      <RNPickerSelect
        style={pickerStyles}
        value={selectedTime.minute.toString()}
        onValueChange={(value) => handleTimeChange('minute', parseInt(value, 10))}
        items={minutes.map((minute) => ({ label: minute.toString(), value: minute.toString() }))}
      />
      <Text style={styles.label}>Heure sélectionnée : {selectedTime.hour}:{selectedTime.minute < 10 ? `0${selectedTime.minute}` : selectedTime.minute}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

const pickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is not covered up by the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is not covered up by the icon
  },
});
