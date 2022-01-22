import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
function SafeAreaInsets() {
  const {top} = useSafeAreaInsets();

  return <View style={[styles.statusBarPlaceholder, {height: top}]} />;
}

const styles = StyleSheet.create({
  statusBarPlaceholder: {
    backgroundColor: '#26a69a',
  },
});

export default SafeAreaInsets;
