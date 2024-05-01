import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';



const currentYear = new Date().getFullYear();
const years = Array.from(new Array(11), (val, index) => currentYear + index);
const months = [
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Août',
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre',
];
const days = Array.from(new Array(31), (val, index) => index + 1);

export default function DateInput() {

    
  const [selectedDate, setSelectedDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDate(),
  });

  const handleDateChange = (type, value) => {
    let newDate = { ...selectedDate, [type]: value };
    if (type === 'year') {
      newDate = { ...newDate, month: 0, day: 1 };
    } else if (type === 'month') {
      newDate = { ...newDate, day: 1 };
    }
    setSelectedDate(newDate);
  };

  const getNumberOfDays = (month, year) => {
    const monthIndex = months.indexOf(month);
    if (monthIndex === 1) {
      return isLeapYear(year) ? 29 : 28;
    } else if ([3, 5, 8, 10].includes(monthIndex)) {
      return 30;
    } else {
      return 31;
    }
  };

  const isLeapYear = (year) => {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  };


  return (
    <View style={styles.container}>
      <Text>Année:</Text>
      <RNPickerSelect
        onValueChange={(value) => handleDateChange('year', value)}
        value={selectedDate.year.toString()}
        items={years.map((year) => ({ label: year.toString(), value: year }))}
      />
      <Text>Mois:</Text>
      <RNPickerSelect
        onValueChange={(value) => handleDateChange('month', months.indexOf(value))}
        value={months[selectedDate.month]}
        items={months.map((month) => ({ label: month, value: month }))}
      />
      <Text>Jour:</Text>
      <RNPickerSelect
        onValueChange={(value) => handleDateChange('day', value)}
        value={selectedDate.day.toString()}
        items={Array.from(
          { length: getNumberOfDays(selectedDate.month, selectedDate.year) },
          (_, index) => ({ label: (index + 1).toString(), value: index + 1 })
        )}
      />
      <Text>Date sélectionnée : {selectedDate.day}/{selectedDate.month + 1}/{selectedDate.year}</Text>
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
