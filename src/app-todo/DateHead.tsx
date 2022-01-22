import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

function DateHead({date}) {
  return (
    <>
      <StatusBar backgroundColor="#26a69a" barStyle="light-content" />
      <View style={styles.block}>
        <Text style={styles.dateText}>{date.toString()}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  block: {
    padding: 16,
    backgroundColor: '#26a69a',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
});

export default DateHead;
